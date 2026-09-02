import React, { useMemo, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FaXmark } from 'react-icons/fa6';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectsSection() {
    const [isWebDevelopmentOpen, setIsWebDevelopmentOpen] = useState(false);

    const webDevelopmentProjects = useMemo(
        () => [
            {
                id: 5,
                title: '',
                description:
                    'A professional website created for a local speech therapy clinic.',
                viewLink: 'https://studioepigos.it',
                technologies: ['next', 'tailwind', 'javascript']
            },
            {
                id: 6,
                title: '',
                description:
                    'A professional website designed for the local branch of an insurance company to provide information of their products.',
                viewLink: 'https://vittoriaassicurazioniluino.com',
                technologies: ['next', 'tailwind', 'javascript']
            },
            {
                id: 7,
                title: '',
                description: 'See the full code of my portfolio on GitHub.',
                githubLink: 'https://github.com/whyorwhat/whyorwhat.github.io',
                technologies: ['react', 'tailwind']
            },
        ],
        []
    );

    const projects = useMemo(
        () => [
            {
                id: 1,
                title: 'ReplyIA',
                description:
                    'A support chatbot for WhatsApp that allows multi-user teams to efficiently manage and respond to large volumes of customer requests from a single shared interface.',
                viewLink: '/replyia',
                technologies: ['java', 'python', 'spring', 'react', 'tailwind', 'amazonwebservices', 'docker'],
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
                technologies: ['python', 'vuejs', 'bootstrap', 'amazonwebservices', 'docker']
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
                id: 'web-development',
                title: 'Web development',
                description:
                    'A collection of professional websites designed and developed for businesses, organizations, and personal projects.',
                technologies: ['next', 'react', 'tailwind', 'javascript'],
                previewImageIds: webDevelopmentProjects.slice(0, 3).map(({id}) => id),
                onOpen: () => setIsWebDevelopmentOpen(true),
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
                technologies: ['python', 'amazonwebservices', 'mongodb']
            },
        ],
        [webDevelopmentProjects]
    );

    return (
        <>
            <div className="flex flex-col items-center gap-8 py-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} {...project} delay={index} />
                ))}
            </div>

            <Dialog
                open={isWebDevelopmentOpen}
                onClose={() => setIsWebDevelopmentOpen(false)}
                className="relative z-50"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm transition duration-200 data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-y-auto p-4 sm:p-8">
                    <div className="flex min-h-full items-center justify-center">
                        <DialogPanel
                            transition
                            className="relative max-h-[calc(100vh-2rem)] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-slate-100 shadow-2xl transition duration-200 data-[closed]:translate-y-4 data-[closed]:opacity-0 sm:max-h-[calc(100vh-4rem)] sm:p-8"
                        >
                            <div className="sticky top-0 z-40 flex items-start justify-between gap-4 border-b border-[var(--color-border)] bg-[rgba(36,39,45,0.95)] pb-4 backdrop-blur">
                                <div>
                                    <DialogTitle className="text-2xl font-extrabold text-slate-100">
                                        Web development
                                    </DialogTitle>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Websites and web experiences I designed and developed.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsWebDevelopmentOpen(false)}
                                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-raised)] text-slate-200 transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[var(--color-surface)]"
                                    aria-label="Close web development projects"
                                >
                                    <FaXmark aria-hidden="true" />
                                </button>
                            </div>

                            <div className="flex flex-col items-center gap-8 pt-6">
                                {webDevelopmentProjects.map((project, index) => (
                                    <ProjectCard key={project.id} {...project} delay={index} />
                                ))}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
