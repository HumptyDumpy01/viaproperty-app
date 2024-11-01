import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Navigation from '@/components/Layout/Navigation/Navigation';
import Footer from '@/components/Layout/Footer/Footer';

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
    <body className="antialiased">
    <div id={`image-gallery-full-screen`}></div>
    <Navigation />
    {children}
    {/*<Footer />*/}
    </body>
    </html>
  );
}