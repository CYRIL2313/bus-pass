'use client';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Bus Pass Management System</h1>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Bus Pass Management System</p>
      </footer>
    </div>
  );
}