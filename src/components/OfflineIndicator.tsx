import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { isOffline, setupConnectivityListeners } from '../utils/offlineStorage';

export default function OfflineIndicator() {
  const [offline, setOffline] = useState(isOffline());

  useEffect(() => {
    const cleanup = setupConnectivityListeners(
      () => setOffline(false),
      () => setOffline(true)
    );
    return cleanup;
  }, []);

  return (
    <AnimatePresence>
      {offline && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 inset-x-0 bg-yellow-500 text-white z-50"
        >
          <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <WifiOff className="h-5 w-5" />
              <span>オフラインモードです</span>
            </div>
            <div className="text-sm">基本機能はご利用いただけます</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}