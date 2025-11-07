import React from 'react';
import { motion } from 'framer-motion';

interface FuzzyTextProps {
  text: string;
  className?: string;
}

const FuzzyText: React.FC<FuzzyTextProps> = ({ text, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {text}
    </motion.div>
  );
};

export default FuzzyText;
