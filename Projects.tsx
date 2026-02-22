const projects = [
    {
        title: "Global Field Events for Hyperscalers",
        tags: ["Field Marketing", "Events", "GTM"],
        metric: "5 international events across regions",
        description: "Account alignment, narrative, CXO moments, follow-through."
    },
    {
        title: "India Field Programs and Customer Moments",
        tags: ["Events", "ABM", "Sales Alignment"],
        metric: "10+ domestic events • 200+ conversations",
        description: "Event funnels, meeting conversion, stakeholder mapping."
    },
    {
        title: "Account Targeting and Persona Database",
        tags: ["ABM", "Research", "Ops"],
        metric: "8,000+ personas maintained",
        description: "Targeting system, persona mapping, outreach support."
    },
    {
        title: "Demand Engine for Data Centers",
        tags: ["Performance", "SEO", "Lifecycle"],
        metric: "65% QL growth • 45% closed-won growth • 12.51x ROI",
        description: "PPC + SEO + nurture systems with reporting."
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Selected Work</h2>
                <p className="text-white/50 text-lg max-w-xl font-light">
                    Outcomes and programs engineered for high-value tech infrastructure.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-8 flex flex-col h-full group">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="text-xs uppercase tracking-widest text-white/40 bg-white/5 px-2.5 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-medium mb-3 group-hover:text-white transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-white/60 font-light mb-10 flex-grow leading-relaxed">
                            {project.description}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/10">
                            <span className="text-sm font-medium text-white/90 tracking-wide">
                                {project.metric}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
