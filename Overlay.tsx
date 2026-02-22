"use client";

import { motion, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
    // Section 1: Hero (Centered)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -50]);

    // Section 2: High-intent rooms (Left aligned)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

    // Section 3: Measure what matters (Right aligned)
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.95], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {/* Top Nav */}
            <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center text-white/80 text-sm font-medium tracking-wide z-50">
                <span className="opacity-90 font-semibold tracking-wider">PRAGUN NARANG</span>
                <div className="flex gap-8 pointer-events-auto">
                    <a href="mailto:pragun1995@gmail.com" className="hover:text-white transition-colors duration-300">Contact</a>
                </div>
            </nav>

            <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12">
                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-32"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
                        Ready to make something BIG?
                    </h1>
                    <h2 className="text-xl md:text-3xl font-light text-white/90 mb-6 drop-shadow">
                        Field Marketing Specialist
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-8 drop-shadow">
                        ABM + Event-led GTM for Data Centers and AI Infrastructure.
                    </p>
                    <div className="flex gap-4 pointer-events-auto mt-6">
                        <a href="mailto:pragun1995@gmail.com" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-md border border-white/10 transition-transform hover:scale-105 duration-300">
                            Email me
                        </a>
                        <a href="https://www.linkedin.com/in/pragun-narang-5530b0128/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black/40 text-white font-semibold rounded-full hover:bg-black/60 backdrop-blur-md border border-white/10 transition-transform hover:scale-105 duration-300">
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center max-w-2xl mx-auto px-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg">
                        I build high-intent rooms.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/70 font-light mb-8 leading-relaxed drop-shadow">
                        Executive events, roundtables, and account-led programs built around sales priorities.
                    </p>
                    <div className="inline-flex items-center text-sm font-medium tracking-wide text-green-300 bg-green-400/10 px-4 py-2.5 rounded-full border border-green-400/20 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-400 mr-3 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
                        200+ customer conversations enabled
                    </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center max-w-2xl mx-auto px-4"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg">
                            I measure what matters.
                        </h2>
                        <p className="text-xl md:text-2xl text-white/70 font-light mb-8 leading-relaxed drop-shadow">
                            Demand discipline across field + digital: targeting, follow-through, reporting.
                        </p>
                        <div className="inline-flex items-center text-sm font-medium tracking-wide text-blue-300 bg-blue-400/10 px-4 py-2.5 rounded-full border border-blue-400/20 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
                            65% QL growth • 12.51x ROI
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
