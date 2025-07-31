'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Bus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const colleges = [
  "St. Joseph's College of Engineering and Technology, Palai",
  "College of Engineering, Trivandrum",
  "Government Engineering College, Thrissur",
  "TKM College of Engineering, Kollam",
  "Mar Athanasius College of Engineering, Kothamangalam"
];

export default function Home() {
  const [selectedCollege, setSelectedCollege] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <Bus className="w-12 h-12 text-blue-600 animate-bounce" />
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-center text-gray-800 mb-2"
          >
            Bus Pass Management System
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-center text-gray-600 mb-12"
          >
            St. Joseph&apos;s College of Engineering and Technology, Palai
          </motion.h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Your College
              </label>
              <Select onValueChange={setSelectedCollege}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose your college" />
                </SelectTrigger>
                <SelectContent>
                  {colleges.map((college) => (
                    <SelectItem key={college} value={college}>
                      {college}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-end"
            >
              <Button
                disabled={!selectedCollege}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => {}}
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