import RBPremiumLayout from '../../components/RBPremiumLayout';
import { TrendingUp, Users, DollarSign, Target, BarChart3 } from 'lucide-react';

const LOVABLE_PROMPT = `Continue building the AI Resume Builder.

Market Research Analysis:

Market Size:
- Total Addressable Market (TAM): $4.2B globally
- Serviceable Addressable Market (SAM): $1.1B in target regions
- Serviceable Obtainable Market (SOM): $50M initial target

Competitors:
1. Resume.io - Template-focused, limited AI
2. Zety - Good templates, basic optimization
3. Novoresume - Modern design, no AI assistance
4. LinkedIn Resume Builder - Basic, limited features

Our Differentiators:
1. AI-powered content generation
2. Real-time ATS optimization scoring
3. Industry-specific keyword suggestions
4. One-click formatting adjustments
5. Interview preparation integration

Target Demographics:
- Age: 18-45
- Education: High school to post-graduate
- Tech comfort: Moderate to high
- Primary use: Job applications`;

const RB02Market = () => {
    return (
        <RBPremiumLayout
            currentStep={2}
            title="Market Research"
            lovablePrompt={LOVABLE_PROMPT}
        >
            <div className="space-y-8">
                {/* Market Size */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        Market Size Analysis
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100 text-center">
                            <p className="text-3xl font-black text-green-600 mb-1">$4.2B</p>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">TAM</p>
                            <p className="text-xs text-gray-400 mt-1">Total Addressable Market</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                            <p className="text-3xl font-black text-emerald-600 mb-1">$1.1B</p>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">SAM</p>
                            <p className="text-xs text-gray-400 mt-1">Serviceable Market</p>
                        </div>
                        <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 text-center">
                            <p className="text-3xl font-black text-teal-600 mb-1">$50M</p>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">SOM</p>
                            <p className="text-xs text-gray-400 mt-1">Initial Target</p>
                        </div>
                    </div>
                </div>

                {/* Competitor Analysis */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        Competitor Landscape
                    </h2>
                    <div className="space-y-3">
                        {[
                            { name: 'Resume.io', strength: 'Templates', weakness: 'No AI', score: 65 },
                            { name: 'Zety', strength: 'Design', weakness: 'Basic optimization', score: 70 },
                            { name: 'Novoresume', strength: 'Modern UI', weakness: 'No AI assist', score: 60 },
                            { name: 'LinkedIn', strength: 'Integration', weakness: 'Limited features', score: 55 }
                        ].map((comp, idx) => (
                            <div key={idx} className="p-4 bg-white rounded-2xl border border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-500">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{comp.name}</p>
                                        <p className="text-xs text-gray-400">
                                            <span className="text-green-500">+{comp.strength}</span> | <span className="text-red-500">-{comp.weakness}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${comp.score}%` }} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-500">{comp.score}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Differentiators */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <Target className="w-5 h-5 text-violet-500" />
                        Our Differentiators
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            'AI-powered content generation',
                            'Real-time ATS scoring',
                            'Industry keywords',
                            'One-click formatting',
                            'Interview prep integration'
                        ].map((diff, idx) => (
                            <div key={idx} className="p-4 bg-violet-50 rounded-xl border border-violet-100 flex items-center gap-3">
                                <div className="w-6 h-6 bg-violet-500 rounded-lg flex items-center justify-center text-white text-xs font-black">
                                    {idx + 1}
                                </div>
                                <span className="text-sm font-bold text-violet-700">{diff}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Target Demographics */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-blue-500" />
                        Target Demographics
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Age Range</p>
                            <p className="font-bold text-gray-900">18 - 45 years</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Education</p>
                            <p className="font-bold text-gray-900">High School - Post-grad</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Tech Comfort</p>
                            <p className="font-bold text-gray-900">Moderate to High</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Primary Use</p>
                            <p className="font-bold text-gray-900">Job Applications</p>
                        </div>
                    </div>
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Complete market research documentation. Identify at least 3 competitors and 
                        document your unique value proposition. Upload your market research artifact 
                        to proceed.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB02Market;
