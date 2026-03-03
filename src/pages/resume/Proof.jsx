import { useNavigate } from 'react-router-dom';
import { FileText, Upload, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';

const Proof = () => {
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
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => navigate('/')}
                            className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => navigate('/builder')}
                            className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Builder
                        </button>
                        <button 
                            onClick={() => navigate('/preview')}
                            className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Preview
                        </button>
                        <button 
                            className="px-4 py-2 text-sm font-bold text-gray-900 bg-gray-100 rounded-xl"
                        >
                            Proof
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-gray-400" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-3">Proof of Completion</h1>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Upload artifacts and documentation to verify your resume builder completion.
                    </p>
                </div>

                {/* Artifact Upload Sections */}
                <div className="space-y-6">
                    {/* Resume Screenshot */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Resume Screenshot</h3>
                                    <p className="text-xs text-gray-400">Upload a screenshot of your completed resume</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-bold">
                                <Clock className="w-3 h-3 inline mr-1" /> Pending
                            </span>
                        </div>
                        <label className="block p-8 border-2 border-dashed border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer text-center">
                            <Upload className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                            <p className="text-sm font-bold text-gray-500 mb-1">Click to upload</p>
                            <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                            <input type="file" className="hidden" accept="image/*" />
                        </label>
                    </div>

                    {/* Builder Screenshot */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Builder Interface</h3>
                                    <p className="text-xs text-gray-400">Upload a screenshot of the builder with data</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-bold">
                                <Clock className="w-3 h-3 inline mr-1" /> Pending
                            </span>
                        </div>
                        <label className="block p-8 border-2 border-dashed border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer text-center">
                            <Upload className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                            <p className="text-sm font-bold text-gray-500 mb-1">Click to upload</p>
                            <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                            <input type="file" className="hidden" accept="image/*" />
                        </label>
                    </div>

                    {/* Live Preview Screenshot */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Live Preview</h3>
                                    <p className="text-xs text-gray-400">Upload a screenshot showing live preview working</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-bold">
                                <Clock className="w-3 h-3 inline mr-1" /> Pending
                            </span>
                        </div>
                        <label className="block p-8 border-2 border-dashed border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer text-center">
                            <Upload className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                            <p className="text-sm font-bold text-gray-500 mb-1">Click to upload</p>
                            <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                            <input type="file" className="hidden" accept="image/*" />
                        </label>
                    </div>
                </div>

                {/* Status Summary */}
                <div className="mt-12 p-6 bg-gray-100 rounded-2xl text-center">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Completion Status</p>
                    <p className="text-2xl font-black text-gray-400">0 / 3 Artifacts</p>
                    <p className="text-xs text-gray-400 mt-2">Upload all artifacts to complete verification</p>
                </div>

                {/* Back to Builder */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/builder')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Builder
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-8 mt-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        KodNest Premium Design System
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Proof;
