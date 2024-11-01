import React from 'react';
import { Tabs, TabsList, Tab } from '@mui/base';
import { HomeRounded, FactCheckRounded, SearchRounded } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface NavbarProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function Navbar({ value, onChange }: NavbarProps) {
  return (
    <Tabs value={value} onChange={onChange} className="relative z-[2]">
      <TabsList className="py-5 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-32">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Tab value={1} className="text-2xl md:text-3xl">Tamashiima</Tab>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Tab value={1} className="hover-nav flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base">
              <HomeRounded /> HOME
            </Tab>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Tab value={2} className="hover-nav flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base">
              <FactCheckRounded /> TERMS OF SERVICE
            </Tab>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Tab value={3} className="hover-nav flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base">
              <SearchRounded /> WORK/PRICE
            </Tab>
          </motion.div>
        </div>
      </TabsList>
    </Tabs>
  );
}
