import { css, Global } from '@emotion/core';
import { motion } from 'framer-motion';
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
            margin: 0;
            padding: 0;
          }

          div {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 100%;
            width: 100%;
          }

          a {
            font-size: 48px;
            color: white;
          }
        `}
      />
      <motion.div
        initial={{ backgroundColor: '#aa0a27', y: '-100%' }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          delay: 0,
          stiffness: 200,
          damping: 50,
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
};

export default App;
