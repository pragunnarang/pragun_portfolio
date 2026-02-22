const skills = [
    "Field Marketing", "Event Marketing", "ABM", "GTM Strategy", "Demand Gen",
    "Sales Enablement", "Partner Marketing", "Sponsorships", "Roundtables",
    "Webinars", "Stakeholder Management", "Marketing Ops", "Reporting", "Attribution"
];

const tools = [
    "Salesforce", "HubSpot", "Google Analytics", "Google Tag Manager", "Google Search Console",
    "Google Ads", "LinkedIn Ads", "Mailchimp", "Zapier / Make / n8n (Automation)"
];

export default function Skills() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                <div>
                    <h2 className="text-xl font-semibold tracking-wide text-white/70 uppercase mb-8">Core Disciplines</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 font-light hover:bg-white/10 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold tracking-wide text-white/70 uppercase mb-8">Stack & Tools</h2>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool, idx) => (
                            <span key={idx} className="px-4 py-2 rounded-full border border-white/5 text-sm text-white/50 font-light">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
