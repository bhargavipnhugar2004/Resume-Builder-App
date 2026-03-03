import RBPremiumLayout from '../../components/RBPremiumLayout';
import { Code2, FileCode, Database, Braces, GitMerge } from 'lucide-react';

const LOVABLE_PROMPT = `Continue building the AI Resume Builder.

Low-Level Design (LLD):

Component Structure:
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── resume/
│   │   ├── ResumeEditor.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ExperienceItem.tsx
│   │   ├── EducationItem.tsx
│   │   └── SkillBadge.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── Editor.tsx
│   ├── Templates.tsx
│   └── Dashboard.tsx
├── hooks/
│   ├── useResume.ts
│   ├── useAI.ts
│   └── useAuth.ts
├── store/
│   └── resumeStore.ts
└── utils/
    ├── atsScoring.ts
    └── pdfExport.ts

Key Interfaces:
interface Resume {
  id: string;
  userId: string;
  template: string;
  sections: Section[];
  score: number;
  createdAt: Date;
}

interface Section {
  type: 'header' | 'experience' | 'education' | 'skills';
  content: any;
  order: number;
}`;

const RB05LLD = () => {
    return (
        <RBPremiumLayout
            currentStep={5}
            title="Low-Level Design"
            lovablePrompt={LOVABLE_PROMPT}
        >
            <div className="space-y-8">
                {/* LLD Overview */}
                <div className="space-y-4">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-violet-500" />
                        Component Architecture
                    </h2>
                    <p className="text-gray-600">
                        Low-level design defines the detailed structure of components, interfaces, 
                        and implementation patterns.
                    </p>
                </div>

                {/* Folder Structure */}
                <div className="space-y-4">
                    <h3 className="font-black text-gray-900 flex items-center gap-2">
                        <FileCode className="w-4 h-4 text-blue-500" />
                        Project Structure
                    </h3>
                    <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm text-gray-300 overflow-x-auto">
                        <pre>{`src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── resume/
│   │   ├── ResumeEditor.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ExperienceItem.tsx
│   │   ├── EducationItem.tsx
│   │   └── SkillBadge.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── Editor.tsx
│   ├── Templates.tsx
│   └── Dashboard.tsx
├── hooks/
│   ├── useResume.ts
│   ├── useAI.ts
│   └── useAuth.ts
├── store/
│   └── resumeStore.ts
└── utils/
    ├── atsScoring.ts
    └── pdfExport.ts`}</pre>
                    </div>
                </div>

                {/* Key Interfaces */}
                <div className="space-y-4">
                    <h3 className="font-black text-gray-900 flex items-center gap-2">
                        <Braces className="w-4 h-4 text-green-500" />
                        TypeScript Interfaces
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-900 rounded-2xl p-4 font-mono text-xs text-gray-300">
                            <p className="text-violet-400 mb-2">// Resume Interface</p>
                            <pre>{`interface Resume {
  id: string;
  userId: string;
  template: string;
  sections: Section[];
  score: number;
  createdAt: Date;
  updatedAt: Date;
}`}</pre>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-4 font-mono text-xs text-gray-300">
                            <p className="text-violet-400 mb-2">// Section Interface</p>
                            <pre>{`interface Section {
  type: SectionType;
  content: any;
  order: number;
  isVisible: boolean;
}

type SectionType = 
  | 'header' 
  | 'experience' 
  | 'education' 
  | 'skills';`}</pre>
                        </div>
                    </div>
                </div>

                {/* Component Breakdown */}
                <div className="space-y-4">
                    <h3 className="font-black text-gray-900 flex items-center gap-2">
                        <GitMerge className="w-4 h-4 text-orange-500" />
                        Component Hierarchy
                    </h3>
                    <div className="space-y-3">
                        {[
                            { name: 'UI Components', items: ['Button', 'Input', 'Card', 'Modal'], color: 'blue' },
                            { name: 'Resume Components', items: ['ResumeEditor', 'SectionHeader', 'ExperienceItem', 'SkillBadge'], color: 'violet' },
                            { name: 'Layout Components', items: ['Header', 'Sidebar', 'Footer'], color: 'green' },
                            { name: 'Custom Hooks', items: ['useResume', 'useAI', 'useAuth', 'useExport'], color: 'orange' }
                        ].map((group, idx) => {
                            const colors = {
                                blue: 'bg-blue-50 border-blue-100',
                                violet: 'bg-violet-50 border-violet-100',
                                green: 'bg-green-50 border-green-100',
                                orange: 'bg-orange-50 border-orange-100'
                            };
                            return (
                                <div key={idx} className={`p-4 rounded-2xl border ${colors[group.color]}`}>
                                    <p className="font-bold text-gray-900 text-sm mb-3">{group.name}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item, iidx) => (
                                            <span key={iidx} className="px-3 py-1 bg-white rounded-lg text-xs font-mono font-bold text-gray-600 border border-gray-100">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Database Schema */}
                <div className="space-y-4">
                    <h3 className="font-black text-gray-900 flex items-center gap-2">
                        <Database className="w-4 h-4 text-cyan-500" />
                        Database Schema Detail
                    </h3>
                    <div className="bg-gray-900 rounded-2xl p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                        <pre>{`-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Resumes Table  
CREATE TABLE resumes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  template_id VARCHAR(50),
  content JSONB,
  ats_score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);`}</pre>
                    </div>
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Create your Low-Level Design document with detailed component structure, 
                        TypeScript interfaces, and database schema. Upload your LLD documentation 
                        as the artifact.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB05LLD;
