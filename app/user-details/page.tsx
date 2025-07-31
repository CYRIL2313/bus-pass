'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function UserDetails() {
  const [formData, setFormData] = useState({
    name: '',
    admissionNumber: 'SJ'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'admissionNumber' && !value.startsWith('SJ')) {
      return; // Prevent deletion of 'SJ' prefix
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isValid = formData.name.trim() !== '' && formData.admissionNumber.length > 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <User className="w-12 h-12 text-blue-600" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Student Details
          </motion.h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admissionNumber">Admission Number</Label>
              <Input
                id="admissionNumber"
                name="admissionNumber"
                value={formData.admissionNumber}
                onChange={handleChange}
                placeholder="SJ"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-end pt-4"
            >
              <Button
                disabled={!isValid}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => {/* TODO: Implement navigation */}}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}