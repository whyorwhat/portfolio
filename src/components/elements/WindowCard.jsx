import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for framer-motion
const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: delay * 0.1,
            type: 'spring',
            stiffness: 120,
            damping: 14,
        },
    }),
};

export default function WindowCard({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            className={`h-full ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: '0px 0px 12% 0px' }}
            variants={variants}
            custom={delay}
        >
            <div className="flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg shadow-black/20">
                {/* Window controls */}
                <div className="flex items-center p-2.5">
                    <div className="px-1">
                        <span className="block w-[10px] h-[10px] rounded-full bg-[#ff605c]" />
                    </div>
                    <div className="px-1">
                        <span className="block w-[10px] h-[10px] rounded-full bg-[#ffbd44]" />
                    </div>
                    <div className="px-1">
                        <span className="block w-[10px] h-[10px] rounded-full bg-[#00ca4e]" />
                    </div>
                </div>

                {/* Content area */}
                <div className="px-4 pb-4 pt-1 flex flex-col flex-grow">
                    {children}
                </div>
            </div>
        </motion.div>
    );
}
