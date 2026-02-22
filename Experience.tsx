const experiences = [
    {
        company: "CtrlS Datacenters",
        role: "Assistant Field Marketing Manager, Hyperscalers and NeoCloud",
        period: "May 2025–Present",
        bullets: [
            "Executing global (USA, MENA, APAC, Europe) and domestic (India) field events designed for high-value networking.",
            "Maintaining a mapped database of 8,000+ personas for precision ABM and personalized outreach.",
            "Executing targeted GTM plays to bridge marketing intelligence with boots-on-the-ground sales efforts.",
            "Automating insights to streamline pipeline discipline and reporting."
        ]
    },
    {
        company: "Iron Mountain Data Centers",
        role: "Digital Marketing Manager",
        period: "Jul 2023–May 2025",
        bullets: [
            "Delivered a 65% increase in qualified leads and 45% increase in closed-won opportunities, yielding a 12.51x ROI.",
            "Increased organic search traffic by 108.52% YoY through technical and clustered SEO.",
            "Improved lifecycle outreach efficiency—driving a 52.87% boost in open and inquiry rates via targeted email and WhatsApp campaigns."
        ]
    },
    {
        company: "Digital Republik",
        role: "Brand Account Director / Strategy",
        period: "Jul 2019–Jul 2023",
        bullets: [
            "Led integrated marketing strategies aligning brand objectives with performance KPIs.",
            "Managed rapid SEO growth, PPC performance optimization, and extensive email marketing programs."
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white/80">Experience</h2>
            </div>

            <div className="space-y-16 mt-12">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 relative group">
                        <div className="md:col-span-3 text-white/40 text-sm font-medium tracking-widest uppercase mt-1">
                            {exp.period}
                        </div>
                        <div className="md:col-span-9">
                            <h3 className="text-2xl font-medium mb-1 text-white/90">{exp.role}</h3>
                            <div className="text-white/50 mb-6 font-light">{exp.company}</div>
                            <ul className="space-y-4">
                                {exp.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="text-white/70 font-light flex items-start">
                                        <span className="mr-4 text-white/20 mt-1.5 text-[0.6rem]">◆</span>
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
