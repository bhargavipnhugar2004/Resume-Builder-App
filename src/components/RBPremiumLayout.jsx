import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    FileText,
    TrendingUp,
    GitBranch,
    Layers,
    Code2,
    Hammer,
    TestTube,
    Rocket,
    ChevronRight,
    ChevronLeft,
    Copy,
    Check,
    ExternalLink,
    Upload,
    AlertCircle,
    CheckCircle2,
    XCircle,
    Camera,
    Zap
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

const RBPremiumLayout = ({ 
    currentStep, 
    title, 
    children, 
    buildPanelContent,
    lovablePrompt = ''
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [copied, setCopied] = useState(false);
    const [buildStatus, setBuildStatus] = useState(null); // 'success', 'error', null
    const [screenshotUploaded, setScreenshotUploaded] = useState(false);
    const [artifact, setArtifact] = useState(null);

    // Load artifact from localStorage
    useEffect(() => {
        const savedArtifact = localStorage.getItem(`rb_step_${currentStep}_artifact`);
        if (savedArtifact) {
            setArtifact(JSON.parse(savedArtifact));
        }
        const savedStatus = localStorage.getItem(`rb_step_${currentStep}_status`);
        if (savedStatus) {
            setBuildStatus(savedStatus);
        }
        const savedScreenshot = localStorage.getItem(`rb_step_${currentStep}_screenshot`);
        if (savedScreenshot) {
            setScreenshotUploaded(true);
        }
    }, [currentStep]);

    // Check if step is accessible
    const isStepAccessible = (stepNum) => {
        if (stepNum === 1) return true;
        const prevArtifact = localStorage.getItem(`rb_step_${stepNum - 1}_artifact`);
        return prevArtifact !== null;
    };

    // Check if current step is complete
    const isCurrentStepComplete = () => {
        return artifact !== null;
    };

    // Get overall progress
    const getCompletedSteps = () => {
        let count = 0;
        for (let i = 1; i <= 8; i++) {
            if (localStorage.getItem(`rb_step_${i}_artifact`)) count++;
        }
        return count;
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(lovablePrompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleBuildStatus = (status) => {
        setBuildStatus(status);
        localStorage.setItem(`rb_step_${currentStep}_status`, status);
    };

    const handleScreenshotUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                localStorage.setItem(`rb_step_${currentStep}_screenshot`, reader.result);
                setScreenshotUploaded(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleArtifactUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const artifactData = {
                    name: file.name,
                    type: file.type,
                    data: reader.result,
                    uploadedAt: new Date().toISOString()
                };
                localStorage.setItem(`rb_step_${currentStep}_artifact`, JSON.stringify(artifactData));
                setArtifact(artifactData);
            };
            reader.readAsDataURL(file);
        }
    };

    const goToNext = () => {
        if (currentStep < 8 && isCurrentStepComplete()) {
            navigate(STEPS[currentStep].path);
        } else if (currentStep === 8 && isCurrentStepComplete()) {
            navigate('/rb/proof');
        }
    };

    const goToPrev = () => {
        if (currentStep > 1) {
            navigate(STEPS[currentStep - 2].path);
        }
    };

    const completedSteps = getCompletedSteps();
    const StepIcon = STEPS[currentStep - 1]?.icon || FileText;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
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
                    <span className="text-xs font-black text-gray-900">Step {currentStep} of 8</span>
                </div>

                <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider ${
                    completedSteps === 8 
                        ? 'bg-green-100 text-green-700' 
                        : completedSteps > 0 
                            ? 'bg-amber-100 text-amber-700' 
                            : 'bg-gray-100 text-gray-500'
                }`}>
                    {completedSteps === 8 ? 'Complete' : completedSteps > 0 ? `${completedSteps}/8 Done` : 'Not Started'}
                </div>
            </header>

            {/* Context Header / Step Navigator */}
            <div className="bg-white border-b border-gray-100 px-6 py-4">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-1">
                        {STEPS.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = step.id === currentStep;
                            const isComplete = localStorage.getItem(`rb_step_${step.id}_artifact`);
                            const isAccessible = isStepAccessible(step.id);
                            
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => isAccessible && navigate(step.path)}
                                    disabled={!isAccessible}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
                                        isActive 
                                            ? 'bg-violet-100 text-violet-700' 
                                            : isComplete 
                                                ? 'bg-green-50 text-green-600 hover:bg-green-100' 
                                                : isAccessible 
                                                    ? 'text-gray-400 hover:bg-gray-50' 
                                                    : 'text-gray-300 cursor-not-allowed opacity-50'
                                    }`}
                                >
                                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                                        isActive 
                                            ? 'bg-violet-500 text-white' 
                                            : isComplete 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-gray-100'
                                    }`}>
                                        {isComplete && !isActive ? (
                                            <CheckCircle2 className="w-4 h-4" />
                                        ) : (
                                            <span className="text-[10px] font-black">{step.id}</span>
                                        )}
                                    </div>
                                    <span className="text-xs font-bold hidden lg:block">{step.title}</span>
                                </button>
                            );
                        })}
                    </div>
                    <button
                        onClick={() => navigate('/rb/proof')}
                        className="px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-gray-800 transition-all"
                    >
                        View Proof
                    </button>
                </div>
            </div>

            {/* Main Content Area - 70/30 Split */}
            <div className="flex-1 flex overflow-hidden">
                {/* Main Workspace - 70% */}
                <main className="w-[70%] overflow-y-auto p-8 border-r border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        {/* Step Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-100">
                                    <StepIcon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-violet-500 uppercase tracking-widest mb-1">Step {currentStep}</p>
                                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h1>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 mb-8">
                            {children}
                        </div>

                        {/* Artifact Upload */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider">Step Artifact</h3>
                                {artifact && (
                                    <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                                        <CheckCircle2 className="w-4 h-4" /> Uploaded
                                    </span>
                                )}
                            </div>
                            
                            {artifact ? (
                                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-5 h-5 text-green-600" />
                                        <span className="text-sm font-bold text-green-700">{artifact.name}</span>
                                    </div>
                                    <label className="cursor-pointer px-3 py-1 bg-white rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
                                        Replace
                                        <input type="file" className="hidden" onChange={handleArtifactUpload} accept="image/*,.pdf,.doc,.docx" />
                                    </label>
                                </div>
                            ) : (
                                <label className="cursor-pointer block p-8 border-2 border-dashed border-gray-200 rounded-2xl hover:border-violet-300 hover:bg-violet-50/30 transition-all text-center">
                                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                                    <p className="text-sm font-bold text-gray-600 mb-1">Upload Artifact to Continue</p>
                                    <p className="text-xs text-gray-400">Screenshot, document, or proof of completion</p>
                                    <input type="file" className="hidden" onChange={handleArtifactUpload} accept="image/*,.pdf,.doc,.docx" />
                                </label>
                            )}
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={goToPrev}
                                disabled={currentStep === 1}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                                    currentStep === 1 
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <ChevronLeft className="w-4 h-4" /> Previous
                            </button>
                            <button
                                onClick={goToNext}
                                disabled={!isCurrentStepComplete()}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                                    isCurrentStepComplete()
                                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-100 hover:bg-violet-700'
                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                            >
                                {currentStep === 8 ? 'Go to Proof' : 'Next Step'} <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </main>

                {/* Build Panel - 30% */}
                <aside className="w-[30%] bg-white overflow-y-auto p-6 flex flex-col">
                    <div className="flex-1 space-y-6">
                        {/* Copy to Lovable Section */}
                        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4">Copy This Into Lovable</h3>
                            <textarea
                                readOnly
                                value={lovablePrompt}
                                className="w-full h-40 p-4 bg-white border border-gray-200 rounded-2xl text-xs font-mono text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-violet-200"
                            />
                            <button
                                onClick={handleCopy}
                                className={`w-full mt-4 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                                    copied 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                            >
                                {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
                            </button>
                        </div>

                        {/* Build in Lovable */}
                        <a
                            href="https://lovable.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider text-center shadow-lg shadow-rose-100 hover:shadow-xl hover:shadow-rose-200 transition-all"
                        >
                            Build in Lovable <ExternalLink className="w-4 h-4 inline ml-2" />
                        </a>

                        {/* Build Status Buttons */}
                        <div className="space-y-3">
                            <p className="text-xs font-black text-gray-500 uppercase tracking-wider">Build Status</p>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleBuildStatus('success')}
                                    className={`py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                                        buildStatus === 'success'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                                    }`}
                                >
                                    <CheckCircle2 className="w-4 h-4" /> It Worked
                                </button>
                                <button
                                    onClick={() => handleBuildStatus('error')}
                                    className={`py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                                        buildStatus === 'error'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                                    }`}
                                >
                                    <XCircle className="w-4 h-4" /> Error
                                </button>
                            </div>
                        </div>

                        {/* Screenshot Upload */}
                        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Camera className="w-4 h-4" /> Add Screenshot
                            </h3>
                            {screenshotUploaded ? (
                                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                                    <p className="text-xs font-bold text-green-700">Screenshot Uploaded</p>
                                    <label className="cursor-pointer mt-2 inline-block px-3 py-1 bg-white rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
                                        Replace
                                        <input type="file" className="hidden" onChange={handleScreenshotUpload} accept="image/*" />
                                    </label>
                                </div>
                            ) : (
                                <label className="cursor-pointer block p-6 border-2 border-dashed border-gray-200 rounded-2xl hover:border-violet-300 hover:bg-violet-50/30 transition-all text-center">
                                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                                    <p className="text-xs font-bold text-gray-600">Click to upload</p>
                                    <input type="file" className="hidden" onChange={handleScreenshotUpload} accept="image/*" />
                                </label>
                            )}
                        </div>

                        {/* Build Panel Custom Content */}
                        {buildPanelContent && (
                            <div className="bg-violet-50 rounded-3xl p-6 border border-violet-100">
                                {buildPanelContent}
                            </div>
                        )}
                    </div>

                    {/* Proof Footer */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                <Zap className="w-3 h-3" /> RB Build System v1.0
                            </p>
                            <button
                                onClick={() => navigate('/rb/proof')}
                                className="text-xs font-bold text-violet-600 hover:text-violet-700 transition-all"
                            >
                                View Proof Page
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default RBPremiumLayout;
