import React from 'react';

export const EduLearnCTA: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gradient-edulearn">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">Ready to Transform Your Future?</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">Join 100,000+ learners who are already building their dream careers with EduLearn</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-edulearn-primary rounded-full hover:bg-slate-50 transition-colors duration-200 cursor-pointer font-bold text-lg shadow-xl">
                        Start Learning Free
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-edulearn-primary transition-all duration-200 cursor-pointer font-bold text-lg">
                        View Course Catalog
                    </button>
                </div>
            </div>
        </section>
    );
};
