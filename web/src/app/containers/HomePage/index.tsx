import { PageWrapper } from 'app/components/PageWrapper';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// import { LanguageSwitch } from '../LanguageSwitch';
// import { ThemeSwitch } from '../ThemeSwitch';
// import { NavBar } from '../NavBar';
// import { Masthead } from './Masthead';
// import { Features } from './Features';
// import { RegisterModal } from 'app/components/RegisterModal';
// import { LoginModal } from 'app/components/LoginModal';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      {/* <NavBar /> */}
      <div>
        {/* <Masthead />
        <Features /> */}
        {/* <LoginModal></LoginModal> */}
        <div>Homepage</div>
        <PageWrapper>
          {/* <ThemeSwitch />
          <LanguageSwitch /> */}
        </PageWrapper>
      </div>
    </>
  );
}
