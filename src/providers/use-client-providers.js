'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ClientProviders = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ClientProviders;