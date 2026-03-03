import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-black text-xl text-gray-900 tracking-tight">AI Resume Builder</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button 
                            onClick={() => navigate('/builder')}
                            className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Builder
                        </button>
                        <button 
                            onClick={() => navigate('/preview')}
                            className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Preview
                        </button>
                        <button 
                            onClick={() => navigate('/proof')}
                            className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Proof
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-6xl mx-auto px-6 pt-24 pb-32">
                <div className="text-center max-w-3xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-gray-600" />
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">AI-Powered Resume Builder</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
                        Build a Resume<br />
                        <span className="text-gray-400">That Gets Read.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-xl mx-auto">
                        Create a professional, ATS-optimized resume in minutes. 
                        Stand out from the crowd and land your dream job.
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={() => navigate('/builder')}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-gray-900/20"
                    >
                        Start Building
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Trust indicators */}
                    <p className="mt-6 text-sm text-gray-400">
                        No sign-up required. Free to use.
                    </p>
                </div>

                {/* Features */}
                <div className="mt-32 grid grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-3xl border border-gray-100">
                        <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">Lightning Fast</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Build your resume in minutes, not hours. Our intuitive interface makes it effortless.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-gray-100">
                        <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">ATS-Friendly</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Optimized formatting ensures your resume passes Applicant Tracking Systems.
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-gray-100">
                        <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                            <Sparkles className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">Professional Design</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Clean, minimal typography that hiring managers love. No distractions.
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-8">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        KodNest Premium Design System
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
