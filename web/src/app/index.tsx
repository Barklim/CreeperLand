/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import AppProvider from './AppProvider';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { Main } from './containers/Main';
// import { Сase } from './containers/Сase';
import Case from './containers/Case';
import { DonatPage } from './containers/DonatPage/';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <AppProvider>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/case/:id'}
            component={Case}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/changetheme'}
            component={HomePage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/donat/:token'}
            component={DonatPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/donat'}
            component={DonatPage}
          />
          <Route component={NotFoundPage} />
          <Redirect to="/" />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </AppProvider>
  );
}
