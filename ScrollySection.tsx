"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function ScrollySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <ScrollyCanvas scrollYProgress={scrollYProgress} />
                {/* Subtle dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 via-transparent to-[#2A0F05]/70 pointer-events-none" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </section>
    );
}
