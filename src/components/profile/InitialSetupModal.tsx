import React from 'react';
import { motion } from 'framer-motion';
import type { UserProfileFormData } from '../../types';
import UserProfileForm from './UserProfileForm';

interface InitialSetupModalProps {
  onSubmit: (data: UserProfileFormData, selectedPattern: number) => void;
}

export default function InitialSetupModal({ onSubmit }: InitialSetupModalProps) {
  const handleSubmit = (data: UserProfileFormData, selectedPattern: number) => {
    onSubmit(data, selectedPattern);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              はじめての設定
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              あなたに最適な食事メニューを提案するために<br />
              以下の情報を入力してください
            </p>
          </div>

          <UserProfileForm onSubmit={handleSubmit} initialData={null} />
        </div>
      </motion.div>
    </div>
  );
}