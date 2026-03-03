import RBPremiumLayout from '../../components/RBPremiumLayout';
import { useState, useEffect } from 'react';
import { Rocket, CheckCircle2, ExternalLink, Github, Globe, Lock, Unlock, AlertTriangle } from 'lucide-react';

const LOVABLE_PROMPT = `Deploy your AI Resume Builder application.

Deployment Checklist:
1. Push code to GitHub repository
2. Connect to Vercel/Netlify
3. Configure environment variables
4. Deploy to production
5. Test live deployment
6. Share deployment URL

GitHub Setup:
- Create new repository
- Push all code changes
- Verify build passes

Vercel Deployment:
- Import from GitHub
- Auto-detect framework
- Configure build settings
- Deploy to production

Post-Deployment:
- Test all features on live site
- Verify mobile responsiveness
- Check loading performance
- Share URL for review`;

const RB08Ship = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Check if all tests passed
        try {
            const saved = localStorage.getItem('rb_test_checklist');
            if (saved) {
                const checked = JSON.parse(saved);
                const passedCount = Object.values(checked).filter(Boolean).length;
                setIsReady(passedCount === 10);
            }
        } catch {
            setIsReady(false);
        }
    }, []);

    const deploymentSteps = [
        { name: 'Push to GitHub', desc: 'Create repo and push code', icon: Github },
        { name: 'Connect Vercel', desc: 'Import project from GitHub', icon: Globe },
        { name: 'Configure', desc: 'Set environment variables', icon: ExternalLink },
        { name: 'Deploy', desc: 'Launch to production', icon: Rocket }
    ];

    return (
        <RBPremiumLayout
            currentStep={8}
            title="Ship to Production"
            lovablePrompt={LOVABLE_PROMPT}
        >
            <div className="space-y-8">
                {/* Ship Status */}
                <div className={`p-8 rounded-3xl border-2 text-center ${
                    isReady 
                        ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
                        : 'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200'
                }`}>
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 ${
                        isReady ? 'bg-green-500' : 'bg-gray-400'
                    }`}>
                        {isReady ? (
                            <Unlock className="w-10 h-10 text-white" />
                        ) : (
                            <Lock className="w-10 h-10 text-white" />
                        )}
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">
                        {isReady ? 'Ready to Ship!' : 'Shipping Locked'}
                    </h2>
                    <p className="text-gray-500">
                        {isReady 
                            ? 'All tests passed. You can deploy your application.'
                            : 'Complete all QA tests before shipping.'}
                    </p>
                </div>

                {/* Warning if not ready */}
                {!isReady && (
                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                        <div>
                            <p className="font-bold text-amber-700 mb-1">Tests Incomplete</p>
                            <p className="text-sm text-amber-600">
                                Return to Step 7 and complete all QA tests before deploying.
                            </p>
                        </div>
                    </div>
                )}

                {/* Deployment Steps */}
                <div className="space-y-4">
                    <h3 className="font-black text-gray-900 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-violet-500" />
                        Deployment Steps
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {deploymentSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div key={idx} className={`p-5 rounded-2xl border ${
                                    isReady 
                                        ? 'bg-white border-gray-100 hover:border-violet-200' 
                                        : 'bg-gray-50 border-gray-100 opacity-50'
                                }`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                            isReady ? 'bg-violet-500 text-white' : 'bg-gray-300 text-white'
                                        }`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg font-black text-gray-400">{idx + 1}</span>
                                    </div>
                                    <h4 className="font-bold text-gray-900">{step.name}</h4>
                                    <p className="text-xs text-gray-500">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="font-black text-gray-900">Deployment Platforms</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <a 
                            href="https://vercel.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`p-4 rounded-2xl border text-center transition-all ${
                                isReady 
                                    ? 'bg-black text-white hover:bg-gray-800' 
                                    : 'bg-gray-100 text-gray-400 pointer-events-none'
                            }`}
                        >
                            <p className="font-black">Vercel</p>
                            <p className="text-xs opacity-70">Recommended</p>
                        </a>
                        <a 
                            href="https://netlify.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`p-4 rounded-2xl border text-center transition-all ${
                                isReady 
                                    ? 'bg-teal-500 text-white hover:bg-teal-600' 
                                    : 'bg-gray-100 text-gray-400 pointer-events-none'
                            }`}
                        >
                            <p className="font-black">Netlify</p>
                            <p className="text-xs opacity-70">Alternative</p>
                        </a>
                        <a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`p-4 rounded-2xl border text-center transition-all ${
                                isReady 
                                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                                    : 'bg-gray-100 text-gray-400 pointer-events-none'
                            }`}
                        >
                            <p className="font-black">GitHub</p>
                            <p className="text-xs opacity-70">Repository</p>
                        </a>
                    </div>
                </div>

                {/* Checklist */}
                <div className="p-6 bg-violet-50 rounded-2xl border border-violet-100">
                    <h3 className="font-black text-gray-900 mb-4">Pre-Ship Checklist</h3>
                    <div className="space-y-2">
                        {[
                            'All QA tests pass',
                            'Code pushed to GitHub',
                            'Environment variables set',
                            'Production build succeeds',
                            'Live URL accessible'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm">
                                <CheckCircle2 className={`w-4 h-4 ${isReady ? 'text-green-500' : 'text-gray-300'}`} />
                                <span className={isReady ? 'text-gray-700' : 'text-gray-400'}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Deploy your application to production. Push to GitHub, deploy via Vercel, 
                        and verify the live deployment works. Upload a screenshot of your live 
                        deployment as the artifact.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB08Ship;
