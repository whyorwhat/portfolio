import React, { useMemo } from 'react';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectsSection() {
    const projects = useMemo(
        () => [
            {
                id: 1,
                title: 'ReplyIA',
                description:
                    'A support chatbot for WhatsApp that allows multi-user teams to efficiently manage and respond to large volumes of customer requests from a single shared interface.',
                viewLink: '/replyia',
                technologies: ['java', 'python', 'spring', 'react', 'tailwind', 'dynamodb', 'amazonwebservices', 'docker'],
            },
            {
                id: 2,
                title: 'AuroraKeep',
                description:
                    'A user-friendly accounting web app for teams and individuals, offering features such as expense tracking, invoicing, tax calculations, file management, and support for customizable formulas.',
                viewLink: 'https://aurorakeep.com',
                technologies: ['java', 'spring', 'vuejs', 'bootstrap', 'mariadb', 'amazonwebservices']
            },
            {
                id: 3,
                title: 'ParlArte',
                description:
                    'An AI-powered platform that enables speech therapists to create personalized therapy tools for children with communication challenges.',
                viewLink: 'https://parlarte.com',
                technologies: ['python', 'vuejs', 'bootstrap', 'dynamodb', 'amazonwebservices', 'docker']
            },
            {
                id: 4,
                title: 'TiSeguo',
                description:
                    'A revolutionary web app that streamlines and centralizes insurance claims processing for insurance companies.',
                viewLink: '/ti-seguo',
                technologies: ['java','spring', 'vuejs', 'mongodb', 'mysql', 'amazonwebservices', 'bootstrap']
            },
            {
                id: 5,
                title: 'Web development #1',
                description:
                    'A professional website designed for the local branch of an insurance company to provide information of their products.',
                viewLink: 'https://vittoriaassicurazioniluino.com',
                technologies: ['next', 'tailwind', 'javascript']
            },
            {
                id: 6,
                title: 'Web development #2',
                description:
                    'A professional website created for a local speech therapy clinic.',
                viewLink: 'https://studioepigos.it',
                technologies: ['next', 'tailwind', 'javascript']
            },
            {
                id: 7,
                title: 'Portfolio website',
                description: 'See the full code of my website on GitHub.',
                githubLink: 'https://github.com/whyorwhat/whyorwhat.github.io',
                technologies: ['react', 'tailwind']
            },
            {
                id: 8,
                title: 'Javalytics',
                description:
                    'A university project that enables users to better understand the structure and health of their Java systems using machine learning techniques.',
                githubLink: 'https://github.com/whyorwhat/javalytics',
                technologies: ['python', 'react', 'mongodb', 'elasticsearch', 'docker']
            },
            {
                id: 9,
                title: 'Customer Radar',
                description:
                    'An enterprise CRM solution powered by AI, designed to analyze customer behavior and preferences to generate personalized cross-selling and upselling recommendations.',
                viewLink: '/customer-radar',
                technologies: ['python', 'dynamodb', 'mongodb']
            },
        ],
        []
    );

    return (
        <div className="flex flex-col items-center gap-8 py-8">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} {...project} delay={index} />
            ))}
        </div>
    );
}