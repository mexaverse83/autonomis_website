import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-black text-white min-h-screen selection:bg-indigo-500/30">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
