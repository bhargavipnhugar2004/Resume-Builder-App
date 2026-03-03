import RBPremiumLayout from '../../components/RBPremiumLayout';
import { AlertCircle, Target, Users, Lightbulb } from 'lucide-react';

const LOVABLE_PROMPT = `Create an AI Resume Builder application.

Problem Statement:
Job seekers struggle to create professional, ATS-optimized resumes that effectively highlight their skills and experience. Manual resume creation is time-consuming and often results in poorly formatted documents that fail to pass automated screening systems.

Core Problems to Solve:
1. Resume formatting inconsistencies
2. Keyword optimization for ATS systems
3. Content quality and relevance
4. Time spent on manual formatting
5. Lack of industry-specific templates

Target Users:
- Fresh graduates entering the job market
- Professionals seeking career transitions
- Job seekers wanting to improve response rates

Success Metrics:
- Reduce resume creation time by 70%
- Improve ATS pass rate to 85%+
- User satisfaction score of 4.5+/5`;

const RB01Problem = () => {
    return (
        <RBPremiumLayout
            currentStep={1}
            title="Problem Statement"
            lovablePrompt={LOVABLE_PROMPT}
        >
            <div className="space-y-8">
                {/* Problem Overview */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        The Problem
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Job seekers face significant challenges when creating resumes. Most struggle with 
                        formatting, keyword optimization, and tailoring content for Applicant Tracking Systems (ATS). 
                        This results in low interview callback rates and prolonged job searches.
                    </p>
                </div>

                {/* Key Pain Points */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                        <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white font-black">1</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Poor Formatting</h3>
                        <p className="text-sm text-gray-600">Inconsistent layouts that look unprofessional</p>
                    </div>
                    <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white font-black">2</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">ATS Rejection</h3>
                        <p className="text-sm text-gray-600">75% of resumes never reach human reviewers</p>
                    </div>
                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white font-black">3</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Time Consuming</h3>
                        <p className="text-sm text-gray-600">Average 4+ hours to create one resume</p>
                    </div>
                    <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                        <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-white font-black">4</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Generic Content</h3>
                        <p className="text-sm text-gray-600">Fails to highlight unique qualifications</p>
                    </div>
                </div>

                {/* Target Users */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <Users className="w-5 h-5 text-violet-500" />
                        Target Users
                    </h2>
                    <div className="flex gap-3">
                        <span className="px-4 py-2 bg-violet-50 text-violet-700 rounded-xl text-sm font-bold">Fresh Graduates</span>
                        <span className="px-4 py-2 bg-violet-50 text-violet-700 rounded-xl text-sm font-bold">Career Changers</span>
                        <span className="px-4 py-2 bg-violet-50 text-violet-700 rounded-xl text-sm font-bold">Job Seekers</span>
                    </div>
                </div>

                {/* Solution Preview */}
                <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-violet-500" />
                        Proposed Solution
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        An AI-powered Resume Builder that automatically generates professional, 
                        ATS-optimized resumes from user input. Features intelligent content suggestions, 
                        multiple professional templates, and real-time optimization scoring.
                    </p>
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Document the problem statement clearly. Copy the Lovable prompt from the Build Panel, 
                        create your initial project in Lovable, and upload a screenshot of your problem 
                        documentation as the step artifact.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB01Problem;
