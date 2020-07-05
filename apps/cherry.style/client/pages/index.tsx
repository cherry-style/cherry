import { motion } from 'framer-motion';
import { NextPage } from 'next';
import React from 'react';

export const Index: NextPage = () => {
  return (
    <motion.a
      href="https://www.notion.so/blossoms/05d20fef8d1041ab942fea4f87367ceb"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Cherry
    </motion.a>
  );
};

export default Index;
