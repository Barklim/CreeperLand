import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
// import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  // dbName: "a1111",
  // password: "web13",
  // type: "postgresql",
  //     // name: "a1111",
  // user: "a1111",

  // dbName: "a1111",
  // // password: "web13",
  // // type: "postgresql",
  //     name: "a1111",
  // user: "a1111",

  dbName: "lireddit",
  type: "postgresql",
  // driver: PostgreSqlDriver,
  password: "web13",

  // dbName: "creeperland",
  // password: "web13",
  // type: "postgresql",
  //     // name: "postgres",
  // user: "postgres",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
