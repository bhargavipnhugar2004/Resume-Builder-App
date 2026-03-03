import RBPremiumLayout from '../../components/RBPremiumLayout';
import { Hammer, Code, Play, CheckCircle2, Clock, Zap } from 'lucide-react';

const LOVABLE_PROMPT = `Continue building the AI Resume Builder.

Build Phase - Implementation Checklist:

Core Features to Build:
1. Landing Page
   - Hero section with CTA
   - Feature highlights
   - Testimonials section
   - Pricing cards

2. Resume Editor Page
   - Template selector sidebar
   - Live preview panel
   - Section editor forms
   - Drag-drop reordering

3. AI Integration
   - Content generation button
   - Loading states
   - Error handling
   - Response formatting

4. ATS Score Display
   - Circular progress indicator
   - Score breakdown
   - Improvement suggestions
   - Keyword highlights

5. Export Functionality
   - PDF download button
   - Format options
   - Custom filename
   - Success confirmation

Styling Requirements:
- Modern, clean aesthetic
- Purple/violet primary color
- Smooth animations
- Mobile responsive
- Dark mode support`;

const RB06Build = () => {
    const buildTasks = [
        { name: 'Landing Page', status: 'Build hero, features, testimonials', priority: 'High' },
        { name: 'Resume Editor', status: 'Template selector + live preview', priority: 'High' },
        { name: 'Section Forms', status: 'Experience, education, skills inputs', priority: 'High' },
        { name: 'AI Integration', status: 'Content generation + loading states', priority: 'Medium' },
        { name: 'ATS Scoring', status: 'Score display + suggestions', priority: 'Medium' },
        { name: 'PDF Export', status: 'Download functionality', priority: 'Medium' },
        { name: 'Responsive Design', status: 'Mobile + tablet layouts', priority: 'Low' },
        { name: 'Animations', status: 'Smooth transitions', priority: 'Low' }
    ];

    return (
        <RBPremiumLayout
            currentStep={6}
            title="Build Phase"
            lovablePrompt={LOVABLE_PROMPT}
        >
            <div className="space-y-8">
                {/* Build Overview */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <Hammer className="w-5 h-5 text-violet-500" />
                        Implementation Phase
                    </h2>
                    <p className="text-gray-600">
                        Time to build! Use the Lovable prompt to generate your application. 
                        Focus on core functionality first, then polish.
                    </p>
                </div>

                {/* Build Progress */}
                <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-black text-gray-900">Build Checklist</h3>
                        <span className="px-3 py-1 bg-violet-500 text-white rounded-lg text-xs font-bold">
                            In Progress
                        </span>
                    </div>
                    <div className="space-y-3">
                        {buildTasks.map((task, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <Code className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">{task.name}</p>
                                        <p className="text-xs text-gray-400">{task.status}</p>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                                    task.priority === 'High' 
                                        ? 'bg-red-50 text-red-600' 
                                        : task.priority === 'Medium'
                                            ? 'bg-amber-50 text-amber-600'
                                            : 'bg-gray-50 text-gray-500'
                                }`}>
                                    {task.priority}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Build Steps */}
                <div className="space-y-4">
                    <h3 className="font-black text-gray-900 flex items-center gap-2">
                        <Play className="w-4 h-4 text-green-500" />
                        Build Steps
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                            <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center font-black mb-3">1</div>
                            <h4 className="font-bold text-gray-900 mb-1">Copy Prompt</h4>
                            <p className="text-xs text-gray-500">Copy the Lovable prompt from the Build Panel</p>
                        </div>
                        <div className="p-5 bg-violet-50 rounded-2xl border border-violet-100">
                            <div className="w-10 h-10 bg-violet-500 text-white rounded-xl flex items-center justify-center font-black mb-3">2</div>
                            <h4 className="font-bold text-gray-900 mb-1">Generate in Lovable</h4>
                            <p className="text-xs text-gray-500">Paste into Lovable and generate your app</p>
                        </div>
                        <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                            <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center font-black mb-3">3</div>
                            <h4 className="font-bold text-gray-900 mb-1">Iterate & Refine</h4>
                            <p className="text-xs text-gray-500">Add features, fix issues, polish UI</p>
                        </div>
                        <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100">
                            <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center font-black mb-3">4</div>
                            <h4 className="font-bold text-gray-900 mb-1">Screenshot Result</h4>
                            <p className="text-xs text-gray-500">Capture your working build as proof</p>
                        </div>
                    </div>
                </div>

                {/* Tips */}
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                    <h3 className="font-black text-gray-900 flex items-center gap-2 mb-4">
                        <Zap className="w-5 h-5 text-amber-500" />
                        Pro Tips
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            Start with the landing page to establish the design system
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            Build the resume editor with mock data first
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            Add AI integration after core UI is working
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            Test on mobile before moving to the next step
                        </li>
                    </ul>
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Build your AI Resume Builder application using Lovable. Implement all core 
                        features from the checklist. Upload a screenshot of your working application 
                        as the artifact.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB06Build;
