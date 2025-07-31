'use client';

import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const busStops = [
  { id: 1, name: 'Pala Town', fare: 50 },
  { id: 2, name: 'Kottayam', fare: 70 },
  { id: 3, name: 'Changanassery', fare: 85 },
  { id: 4, name: 'Ernakulam', fare: 120 },
  { id: 5, name: 'Ettumanoor', fare: 65 },
];

export default function BusStops() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <MapPin className="w-12 h-12 text-blue-600" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Select Your Destination
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {busStops.map((stop, index) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer transform transition-all hover:scale-105"
                  onClick={() => {/* TODO: Implement navigation */}}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {stop.name}
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </CardTitle>
                    <CardDescription>Distance from college</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-blue-600">₹{stop.fare}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}