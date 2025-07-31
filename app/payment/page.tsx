'use client';

import { motion } from 'framer-motion';
import { Wallet, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const paymentMethods = [
  { id: 'gpay', name: 'Google Pay', icon: '💳' },
  { id: 'phonepe', name: 'PhonePe', icon: '📱' },
  { id: 'paytm', name: 'Paytm', icon: '💰' },
  { id: 'upfront', name: 'Upfront Payment', icon: '💵' },
];

export default function Payment() {
  const handlePaymentSelect = (methodId: string) => {
    if (methodId === 'upfront') {
      // TODO: Show message for upfront payment
      return;
    }
    // TODO: Handle online payment
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <Wallet className="w-12 h-12 text-blue-600" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Choose Payment Method
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transform transition-all hover:scale-105 ${
                    method.id === 'upfront' ? 'opacity-50' : ''
                  }`}
                  onClick={() => handlePaymentSelect(method.id)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{method.icon}</span>
                      {method.name}
                    </CardTitle>
                    <CardDescription>
                      {method.id === 'upfront'
                        ? 'Coming soon'
                        : 'Pay instantly online'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}