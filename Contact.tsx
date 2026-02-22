export default function Contact() {
    return (
        <section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's shape the narrative.</h2>
                <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    Currently open to new opportunities framing field marketing excellence for data centers, cloud, and AI infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a href="mailto:pragun1995@gmail.com" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-transform hover:scale-105 duration-300 w-full sm:w-auto">
                        pragun1995@gmail.com
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#121212] text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-transform hover:scale-105 duration-300 w-full sm:w-auto">
                        LinkedIn Profile
                    </a>
                </div>
            </div>
            <div className="mt-32 text-center text-white/30 text-sm font-light tracking-wide">
                © {new Date().getFullYear()} Pragun Narang. All rights reserved.
            </div>
        </section>
    );
}
