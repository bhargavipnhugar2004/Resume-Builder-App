import RBPremiumLayout from '../../components/RBPremiumLayout';
import { GitBranch, Database, Cloud, Shield, Layers } from 'lucide-react';

const LOVABLE_PROMPT = `Continue building the AI Resume Builder.

System Architecture:

Frontend:
- React.js with TypeScript
- TailwindCSS for styling
- React Router for navigation
- Zustand for state management

Backend:
- Node.js with Express
- PostgreSQL database
- Redis for caching
- JWT authentication

AI Services:
- OpenAI GPT-4 for content generation
- Custom NLP for keyword extraction
- ATS scoring algorithm

Infrastructure:
- Vercel for frontend hosting
- AWS Lambda for serverless functions
- Supabase for database
- Cloudflare for CDN

Data Flow:
1. User inputs basic information
2. AI generates optimized content
3. Real-time ATS scoring
4. PDF generation and download

Security:
- HTTPS everywhere
- Data encryption at rest
- GDPR compliant
- SOC 2 Type II`;

const RB03Architecture = () => {
    return (
        <RBPremiumLayout
            currentStep={3}
            title="System Architecture"
            lovablePrompt={LOVABLE_PROMPT}
        >
            <div className="space-y-8">
                {/* Architecture Overview */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-violet-500" />
                        Architecture Overview
                    </h2>
                    <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-white rounded-xl shadow-sm">
                                <p className="font-black text-violet-600 mb-1">Frontend</p>
                                <p className="text-xs text-gray-500">React + TypeScript</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-sm">
                                <p className="font-black text-violet-600 mb-1">Backend</p>
                                <p className="text-xs text-gray-500">Node.js + Express</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-sm">
                                <p className="font-black text-violet-600 mb-1">AI Layer</p>
                                <p className="text-xs text-gray-500">OpenAI GPT-4</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="font-black text-gray-900 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-blue-500" />
                            Frontend Stack
                        </h3>
                        <div className="space-y-2">
                            {['React.js + TypeScript', 'TailwindCSS', 'React Router', 'Zustand State'].map((tech, idx) => (
                                <div key={idx} className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-sm font-bold text-blue-700">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-black text-gray-900 flex items-center gap-2">
                            <Database className="w-4 h-4 text-green-500" />
                            Backend Stack
                        </h3>
                        <div className="space-y-2">
                            {['Node.js + Express', 'PostgreSQL', 'Redis Cache', 'JWT Auth'].map((tech, idx) => (
                                <div key={idx} className="p-3 bg-green-50 rounded-xl border border-green-100 text-sm font-bold text-green-700">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Infrastructure */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-cyan-500" />
                        Infrastructure
                    </h2>
                    <div className="grid grid-cols-4 gap-3">
                        {[
                            { name: 'Vercel', desc: 'Frontend Hosting', color: 'bg-black text-white' },
                            { name: 'AWS Lambda', desc: 'Serverless', color: 'bg-orange-500 text-white' },
                            { name: 'Supabase', desc: 'Database', color: 'bg-emerald-500 text-white' },
                            { name: 'Cloudflare', desc: 'CDN', color: 'bg-amber-500 text-white' }
                        ].map((infra, idx) => (
                            <div key={idx} className="p-4 bg-white rounded-2xl border border-gray-100 text-center">
                                <div className={`w-12 h-12 ${infra.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                    <Cloud className="w-6 h-6" />
                                </div>
                                <p className="font-bold text-gray-900 text-sm">{infra.name}</p>
                                <p className="text-xs text-gray-400">{infra.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Flow */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900">Data Flow</h2>
                    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        {['User Input', 'AI Processing', 'ATS Scoring', 'PDF Export'].map((step, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-violet-500 text-white rounded-xl flex items-center justify-center font-black mx-auto mb-2">
                                        {idx + 1}
                                    </div>
                                    <p className="text-xs font-bold text-gray-700">{step}</p>
                                </div>
                                {idx < 3 && <div className="w-8 h-0.5 bg-violet-200 mx-2" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security */}
                <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-4">
                        <Shield className="w-5 h-5 text-red-500" />
                        Security Measures
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {['HTTPS Everywhere', 'Data Encryption', 'GDPR Compliant', 'SOC 2 Type II'].map((sec, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                                {sec}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Create your system architecture diagram. Document the tech stack, data flow, 
                        and infrastructure choices. Upload your architecture documentation as the artifact.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB03Architecture;
