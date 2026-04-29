import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Lead Architect @ Vertex",
        content: "The 7-dimension approach redefined how our team handles complexity. It's not just a tool; it's a paradigm shift in productivity.",
        avatar: "https://i.pravatar.cc/150?u=alex",
        rating: 5
    },
    {
        name: "Sarah Chen",
        role: "Product Director @ Aivate",
        content: "Switching to SevenSidedCube was the best decision we made this year. The glassmorphism UI isn't just beautiful; it's incredibly intuitive.",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        rating: 5
    },
    {
        name: "Marcus Thorne",
        role: "Founder @ NeoStream",
        content: "Magic Workflows saved us 20+ hours a week. The AI integration is seamless and actually understands our context.",
        avatar: "https://i.pravatar.cc/150?u=marcus",
        rating: 5
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-mint/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-indigo-mint">Visionaries</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Join thousands of teams who have already shifted their reality with SevenSidedCube.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="glass-panel glass-card-hover p-8 rounded-3xl flex flex-col h-full group transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-mint text-mint" />
                                ))}
                            </div>

                            <div className="relative mb-8">
                                <Quote className="absolute -top-4 -left-4 text-white/10 group-hover:text-mint/20 transition-colors" size={48} />
                                <p className="text-slate-300 leading-relaxed relative z-10 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden glass-panel">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-mint transition-colors font-display">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
