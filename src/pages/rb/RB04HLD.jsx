import RBPremiumLayout from '../../components/RBPremiumLayout';
import { Layers, Box, ArrowRight, FileText, Users, Cpu } from 'lucide-react';

const LOVABLE_PROMPT = `Continue building the AI Resume Builder.

High-Level Design (HLD):

Core Modules:
1. User Management Module
   - Registration/Login
   - Profile management
   - Subscription handling

2. Resume Builder Module
   - Template selection
   - Section management
   - Real-time preview

3. AI Content Engine
   - Content generation
   - Keyword optimization
   - Grammar correction

4. ATS Optimization Module
   - Score calculation
   - Keyword matching
   - Format validation

5. Export Module
   - PDF generation
   - Multiple formats
   - Cloud storage

API Endpoints:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/resume/templates
- POST /api/resume/create
- PUT /api/resume/:id
- POST /api/ai/generate
- GET /api/ats/score
- POST /api/export/pdf

Database Schema Overview:
- Users table
- Resumes table
- Templates table
- Subscriptions table`;

const RB04HLD = () => {
    return (
        <RBPremiumLayout
            currentStep={4}
            title="High-Level Design"
            lovablePrompt={LOVABLE_PROMPT}
        >
            <div className="space-y-8">
                {/* HLD Overview */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-violet-500" />
                        System Modules
                    </h2>
                    <p className="text-gray-600">
                        High-level design breaks down the system into major modules and defines 
                        their interactions.
                    </p>
                </div>

                {/* Core Modules */}
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { 
                            name: 'User Management', 
                            icon: Users,
                            color: 'blue',
                            features: ['Registration/Login', 'Profile Management', 'Subscription Handling']
                        },
                        { 
                            name: 'Resume Builder', 
                            icon: FileText,
                            color: 'violet',
                            features: ['Template Selection', 'Section Management', 'Real-time Preview']
                        },
                        { 
                            name: 'AI Content Engine', 
                            icon: Cpu,
                            color: 'green',
                            features: ['Content Generation', 'Keyword Optimization', 'Grammar Correction']
                        },
                        { 
                            name: 'ATS Optimization', 
                            icon: Box,
                            color: 'orange',
                            features: ['Score Calculation', 'Keyword Matching', 'Format Validation']
                        },
                        { 
                            name: 'Export Module', 
                            icon: ArrowRight,
                            color: 'pink',
                            features: ['PDF Generation', 'Multiple Formats', 'Cloud Storage']
                        }
                    ].map((module, idx) => {
                        const Icon = module.icon;
                        const colors = {
                            blue: 'bg-blue-50 border-blue-100 text-blue-600',
                            violet: 'bg-violet-50 border-violet-100 text-violet-600',
                            green: 'bg-green-50 border-green-100 text-green-600',
                            orange: 'bg-orange-50 border-orange-100 text-orange-600',
                            pink: 'bg-pink-50 border-pink-100 text-pink-600'
                        };
                        const bgColor = colors[module.color];
                        
                        return (
                            <div key={idx} className={`p-6 rounded-2xl border ${bgColor}`}>
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-black text-gray-900 mb-2">{module.name}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {module.features.map((feat, fidx) => (
                                                <span key={fidx} className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-gray-600">
                                                    {feat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* API Endpoints */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900">API Endpoints</h2>
                    <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">POST</span>
                                <span className="text-gray-300">/api/auth/register</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">POST</span>
                                <span className="text-gray-300">/api/auth/login</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-bold">GET</span>
                                <span className="text-gray-300">/api/resume/templates</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">POST</span>
                                <span className="text-gray-300">/api/resume/create</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-amber-500 text-white rounded text-xs font-bold">PUT</span>
                                <span className="text-gray-300">/api/resume/:id</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">POST</span>
                                <span className="text-gray-300">/api/ai/generate</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-bold">GET</span>
                                <span className="text-gray-300">/api/ats/score</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold">POST</span>
                                <span className="text-gray-300">/api/export/pdf</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Database Tables */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900">Database Schema</h2>
                    <div className="grid grid-cols-4 gap-3">
                        {['Users', 'Resumes', 'Templates', 'Subscriptions'].map((table, idx) => (
                            <div key={idx} className="p-4 bg-violet-50 rounded-xl border border-violet-100 text-center">
                                <div className="w-10 h-10 bg-violet-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
                                    <Box className="w-5 h-5" />
                                </div>
                                <p className="font-bold text-violet-700 text-sm">{table}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Create your High-Level Design document. Define all major modules, API endpoints, 
                        and database schema. Upload your HLD documentation as the artifact.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB04HLD;
