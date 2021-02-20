import "reflect-metadata";
import "dotenv-safe/config";
import { __prod__, COOKIE_NAME } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { createConnection } from "typeorm";
import path from "path";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

import argon2 from "argon2";
import { Database, Resource } from "@admin-bro/typeorm";
const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("@admin-bro/express");

AdminBro.registerAdapter({ Database, Resource });

const main = async () => {
  const conn = await createConnection({
    type: "postgres",

    database: "creeperland2",
    username: "postgres",
    password: "web13",
    // For local
    // url: process.env.DATABASE_URL,

    logging: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Post, User],
  });
  await conn.runMigrations();

  const app = express();

  (async () => {
    const contentNavigation = {
      name: "Comments system",
      icon: "Accessibility",
    };
    const adminBro = new AdminBro({
      databases: [conn],
      resources: [
        { resource: User, options: { parent: { name: "Users" } } },
        // { resource: User, options: { parent: { name: "Cases to Open" } } },
        { resource: Post, options: { navigation: contentNavigation } },
      ],
      rootPath: "/admin",
    });

    // Build and use a router which will handle all AdminBro routes
    const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
      authenticate: async (email: string, password: string) => {
        const user = await User.findOne({ email });

        if (user) {
          const valid = await argon2.verify(user.password, password);

          if (valid) {
            if (process.env.ADMIN_MAIL === email) {
              return user;
            }
          }
        }
        return false;
      },
      cookiePassword: "some-secret-password-used-to-secure-cookie",
    });

    app.use(adminBro.options.rootPath, router);
  })();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis as any,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
        domain: __prod__ ? ".creeperland.xyz" : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
