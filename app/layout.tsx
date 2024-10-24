import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Viaproperty Fullstack Project',
  description: '' +
    `Welcome home to Viaproperty! This is a fullstack project built by Nikolas Tuz, This application is built with Next.js, Nestjs, and Mongodb. 
    This platform is created as a part of my portfolio. The main goal of this platform is to sell/rent/buy properties. `
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="antialiased px-3 bp-480:px-6">
    <Navigation />
    {children}
    </body>
    </html>
  );
}