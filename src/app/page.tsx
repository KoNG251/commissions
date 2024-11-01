'use client';
import * as React from 'react';
import Navbar from "./components/navbar";
import { Tabs, TabPanel } from '@mui/base';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<number>(1);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="box-container">
      <Navbar value={activeTab} onChange={handleTabChange} />
      <Tabs value={activeTab} onChange={handleTabChange}>
      {activeTab === 1 && (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <TabPanel value={1}>
              <div className='box-outside'>
                <div className='box-inside'>
                  adsfadsfadsf
                </div>
              </div>
            </TabPanel>
          </motion.div>
        )}
        {activeTab === 2 && (
          <motion.div
            key="tabA"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <TabPanel value={2}>
              <div className='box-outside'>
                <div className='box-inside'>
                  adsfadsfadsf
                </div>
              </div></TabPanel>
          </motion.div>
        )}
        {activeTab === 3 && (
          <motion.div
            key="tabB"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <TabPanel value={3}>
              <div className='box-outside'>
                <div className='box-inside'>
                  adsfadsfadsf
                </div>
              </div></TabPanel>
          </motion.div>
        )}
      </Tabs>
    </div>
  );
}
