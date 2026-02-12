import React from 'react';
import { Hero } from '../components/Hero';
import { JudgmentSection } from '../components/JudgmentSection';
import { FrameworkDeepDive } from '../components/FrameworkDeepDive';
import { Features } from '../components/Features';
import { AgentTeamsSection } from '../components/AgentTeamsSection';
import { ComparisonTable } from '../components/ComparisonTable';
import { ChannelStrip } from '../components/ChannelStrip';
import { TechStack } from '../components/TechStack';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <JudgmentSection />
            <FrameworkDeepDive />
            <Features />
            <AgentTeamsSection />
            <ComparisonTable />
            <ChannelStrip />
            <TechStack />
            <Contact />
        </>
    );
};
