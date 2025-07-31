'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PassPage() {
  const router = useRouter();

  useEffect(() => {
    // Logic to fetch or manage bus passes can be added here
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Bus Pass Management</h1>
        <p className="mb-4">Manage your bus passes here.</p>
        <button 
          onClick={handleBack} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}