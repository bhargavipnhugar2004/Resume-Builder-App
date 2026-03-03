import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FileText,
    TrendingUp,
    GitBranch,
    Layers,
    Code2,
    Hammer,
    TestTube,
    Rocket,
    CheckCircle2,
    XCircle,
    ExternalLink,
    Copy,
    Check,
    Award,
    Zap,
    Link as LinkIcon
} from 'lucide-react';

const STEPS = [
    { id: 1, path: '/rb/01-problem', title: 'Problem Statement', icon: FileText },
    { id: 2, path: '/rb/02-market', title: 'Market Research', icon: TrendingUp },
    { id: 3, path: '/rb/03-architecture', title: 'Architecture', icon: GitBranch },
    { id: 4, path: '/rb/04-hld', title: 'High-Level Design', icon: Layers },
    { id: 5, path: '/rb/05-lld', title: 'Low-Level Design', icon: Code2 },
    { id: 6, path: '/rb/06-build', title: 'Build', icon: Hammer },
    { id: 7, path: '/rb/07-test', title: 'Test', icon: TestTube },
    { id: 8, path: '/rb/08-ship', title: 'Ship', icon: Rocket }
];

const RBProof = () => {
    const navigate = useNavigate();
    const [stepStatus, setStepStatus] = useState({});
    const [lovableLink, setLovableLink] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [deployLink, setDeployLink] = useState('');
    const [copied, setCopied] = useState(false);

    // Load status and links from localStorage
    useEffect(() => {
        const status = {};
        for (let i = 1; i <= 8; i++) {
            const artifact = localStorage.getItem(`rb_step_${i}_artifact`);
            status[i] = artifact !== null;
        }
        setStepStatus(status);

        // Load saved links
        setLovableLink(localStorage.getItem('rb_lovable_link') || '');
        setGithubLink(localStorage.getItem('rb_github_link') || '');
        setDeployLink(localStorage.getItem('rb_deploy_link') || '');
    }, []);

    // Save links to localStorage
    const saveLink = (key, value, setter) => {
        setter(value);
        localStorage.setItem(key, value);
    };

    const completedCount = Object.values(stepStatus).filter(Boolean).length;
    const isAllComplete = completedCount === 8;

    const generateSubmission = () => {
        return `AI Resume Builder - Build Track Submission

Completed Steps: ${completedCount}/8

${STEPS.map(step => `${stepStatus[step.id] ? '✅' : '❌'} Step ${step.id}: ${step.title}`).join('\n')}

Project Links:
- Lovable Project: ${lovableLink || 'Not provided'}
- GitHub Repository: ${githubLink || 'Not provided'}
- Live Deployment: ${deployLink || 'Not provided'}

Submitted via KodNest Premium Build System`;
    };

    const handleCopySubmission = async () => {
        try {
            await navigator.clipboard.writeText(generateSubmission());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Top Bar */}
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-100">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-black text-lg text-gray-900 tracking-tight">AI Resume Builder</span>
                </div>
                
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Project 3</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs font-black text-gray-900">Proof of Completion</span>
                </div>

                <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider ${
                    isAllComplete 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-amber-100 text-amber-700'
                }`}>
                    {isAllComplete ? 'Complete' : `${completedCount}/8 Done`}
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto py-12 px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 ${
                        isAllComplete 
                            ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl shadow-green-100' 
                            : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-2xl shadow-amber-100'
                    }`}>
                        {isAllComplete ? (
                            <Award className="w-12 h-12 text-white" />
                        ) : (
                            <Zap className="w-12 h-12 text-white" />
                        )}
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">
                        {isAllComplete ? 'Build Complete!' : 'Build In Progress'}
                    </h1>
                    <p className="text-gray-500 max-w-md mx-auto">
                        {isAllComplete 
                            ? 'Congratulations! You have completed all 8 steps of the AI Resume Builder project.'
                            : `Complete ${8 - completedCount} more step${8 - completedCount > 1 ? 's' : ''} to finish your project.`}
                    </p>
                </div>

                {/* Step Status Grid */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 mb-8">
                    <h2 className="text-lg font-black text-gray-900 mb-6">Step Completion Status</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {STEPS.map((step) => {
                            const Icon = step.icon;
                            const isComplete = stepStatus[step.id];
                            
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => navigate(step.path)}
                                    className={`p-5 rounded-2xl border transition-all flex items-center gap-4 text-left ${
                                        isComplete 
                                            ? 'bg-green-50 border-green-100 hover:bg-green-100' 
                                            : 'bg-gray-50 border-gray-100 hover:bg-gray-100'
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                        isComplete 
                                            ? 'bg-green-500 text-white' 
                                            : 'bg-gray-200 text-gray-400'
                                    }`}>
                                        {isComplete ? (
                                            <CheckCircle2 className="w-6 h-6" />
                                        ) : (
                                            <Icon className="w-6 h-6" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            Step {step.id}
                                        </p>
                                        <p className={`font-bold ${isComplete ? 'text-green-700' : 'text-gray-600'}`}>
                                            {step.title}
                                        </p>
                                    </div>
                                    {isComplete ? (
                                        <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs font-bold">
                                            Done
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg text-xs font-bold">
                                            Pending
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Project Links */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 mb-8">
                    <h2 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                        <LinkIcon className="w-5 h-5 text-violet-500" />
                        Project Links
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Lovable Project URL
                            </label>
                            <input
                                type="url"
                                value={lovableLink}
                                onChange={(e) => saveLink('rb_lovable_link', e.target.value, setLovableLink)}
                                placeholder="https://lovable.dev/projects/..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-300"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                GitHub Repository URL
                            </label>
                            <input
                                type="url"
                                value={githubLink}
                                onChange={(e) => saveLink('rb_github_link', e.target.value, setGithubLink)}
                                placeholder="https://github.com/username/repo"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-300"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Live Deployment URL
                            </label>
                            <input
                                type="url"
                                value={deployLink}
                                onChange={(e) => saveLink('rb_deploy_link', e.target.value, setDeployLink)}
                                placeholder="https://your-app.vercel.app"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Final Submission */}
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 text-white">
                    <h2 className="text-lg font-black mb-4">Final Submission</h2>
                    <p className="text-violet-100 mb-6 text-sm">
                        Copy your submission details to share with your instructor or for your records.
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-6 font-mono text-xs text-violet-100 whitespace-pre-wrap">
                        {generateSubmission()}
                    </div>

                    <button
                        onClick={handleCopySubmission}
                        className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                            copied 
                                ? 'bg-green-500 text-white' 
                                : 'bg-white text-violet-600 hover:bg-violet-50'
                        }`}
                    >
                        {copied ? (
                            <><Check className="w-5 h-5" /> Copied to Clipboard</>
                        ) : (
                            <><Copy className="w-5 h-5" /> Copy Final Submission</>
                        )}
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                        <Zap className="w-3 h-3" /> KodNest Premium Build System v1.0
                    </p>
                </div>
            </main>
        </div>
    );
};

export default RBProof;
