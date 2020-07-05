import { css, Global } from '@emotion/core';
import { AppProps } from 'next/app';
import React from 'react';

type Props = AppProps;

const App = ({ Component, pageProps }: Props): React.ReactElement => {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            width: 100%;
            height: 100%;
          }

          body {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #aa0a27;
          }

          a {
            font-size: 48px;
            color: white;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
