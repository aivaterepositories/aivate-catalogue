import React from 'react';

const instructors = [
    {
        name: "John Anderson",
        role: "Senior Software Engineer at Google",
        rating: "4.9 (12K reviews)",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
        name: "Sarah Mitchell",
        role: "UX Director at Airbnb",
        rating: "5.0 (8K reviews)",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
        name: "David Chen",
        role: "Data Scientist at Tesla",
        rating: "4.8 (15K reviews)",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
        name: "Emma Rodriguez",
        role: "Marketing Director at HubSpot",
        rating: "4.9 (10K reviews)",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face"
    }
];

export const EduLearnInstructors: React.FC = () => {
    return (
        <section id="instructors" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-edulearn-primary mb-4 font-heading">Learn From The Best</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">Industry experts with years of real-world experience</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {instructors.map((instructor, i) => (
                        <div key={i} className="text-center space-y-4 hover:transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                            <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" loading="lazy" />
                            <h3 className="text-xl font-bold text-edulearn-primary font-heading">{instructor.name}</h3>
                            <p className="text-sm text-slate-600">{instructor.role}</p>
                            <div className="flex items-center justify-center space-x-2 text-edulearn-primary">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="font-bold">{instructor.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
