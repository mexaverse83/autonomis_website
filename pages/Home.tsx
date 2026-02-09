import React from 'react';
import { Hero } from '../components/Hero';
import { JudgmentSection } from '../components/JudgmentSection';
import { FrameworkDeepDive } from '../components/FrameworkDeepDive';
import { Features } from '../components/Features';
import { TechStack } from '../components/TechStack';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <JudgmentSection />
            <FrameworkDeepDive />
            <Features />
            <TechStack />
            <Contact />
        </>
    );
};
