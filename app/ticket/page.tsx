'use client';

import { motion } from 'framer-motion';
import { Ticket, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TicketPage() {
  const ticketData = {
    name: "John Doe",
    admissionNumber: "SJ123456",
    destination: "Pala Town",
    fare: "₹50",
    paymentStatus: "Paid",
    issueDate: new Date().toLocaleDateString(),
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
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
            <Ticket className="w-12 h-12 text-blue-600" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Your Bus Pass
          </motion.h1>

          <Card className="border-2 border-blue-500">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-blue-600">
                Student Bus Pass
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-semibold">{ticketData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Admission Number</p>
                  <p className="font-semibold">{ticketData.admissionNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Destination</p>
                  <p className="font-semibold">{ticketData.destination}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fare</p>
                  <p className="font-semibold">{ticketData.fare}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Issue Date</p>
                  <p className="font-semibold">{ticketData.issueDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valid Until</p>
                  <p className="font-semibold">{ticketData.validUntil}</p>
                </div>
              </div>
              <div className="mt-4 p-2 bg-green-100 rounded-lg text-center">
                <p className="text-green-600 font-semibold">
                  Payment Status: {ticketData.paymentStatus}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {/* TODO: Implement navigation */}}
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}