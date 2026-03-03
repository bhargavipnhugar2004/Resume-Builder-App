import RBPremiumLayout from '../../components/RBPremiumLayout';
import { useState, useEffect } from 'react';
import { TestTube, CheckSquare, AlertCircle, RotateCcw, Info } from 'lucide-react';

const TEST_ITEMS = [
    { id: 'landing-loads', title: 'Landing page loads without errors', hint: 'Open the homepage and check browser console for errors.' },
    { id: 'template-select', title: 'Template selection works', hint: 'Click different templates and verify preview updates.' },
    { id: 'form-validation', title: 'Form validation displays errors', hint: 'Try submitting empty required fields.' },
    { id: 'ai-generation', title: 'AI content generation works', hint: 'Click generate button and verify content appears.' },
    { id: 'ats-score', title: 'ATS score calculates correctly', hint: 'Add content and check if score updates.' },
    { id: 'pdf-export', title: 'PDF export downloads file', hint: 'Click export button and verify PDF downloads.' },
    { id: 'mobile-responsive', title: 'Mobile layout is usable', hint: 'Resize browser to mobile width and test navigation.' },
    { id: 'data-persistence', title: 'Data persists after refresh', hint: 'Add content, refresh page, verify content remains.' },
    { id: 'no-console-errors', title: 'No console errors during use', hint: 'Keep DevTools open while testing all features.' },
    { id: 'all-links-work', title: 'All navigation links work', hint: 'Click every link and button in the app.' }
];

const LOVABLE_PROMPT = `Test your AI Resume Builder application.

Testing Checklist:
1. Landing page loads without errors
2. Template selection updates preview
3. Form validation shows error messages
4. AI content generation returns results
5. ATS score updates with content changes
6. PDF export downloads correctly
7. Mobile responsive layout works
8. Data persists after page refresh
9. No console errors during usage
10. All navigation links functional

Bug Fixes to Apply:
- If loading issues: check API endpoints
- If styling breaks: verify Tailwind classes
- If AI fails: check API key configuration
- If export fails: verify PDF library

After testing, document any bugs found and fixes applied.`;

const RB07Test = () => {
    const [checked, setChecked] = useState(() => {
        const saved = localStorage.getItem('rb_test_checklist');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('rb_test_checklist', JSON.stringify(checked));
    }, [checked]);

    const toggle = (id) => {
        setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const reset = () => {
        if (window.confirm("Reset all test results?")) {
            setChecked({});
        }
    };

    const passedCount = Object.values(checked).filter(Boolean).length;
    const isAllPassed = passedCount === TEST_ITEMS.length;

    return (
        <RBPremiumLayout
            currentStep={7}
            title="Testing Phase"
            lovablePrompt={LOVABLE_PROMPT}
            buildPanelContent={
                <div className="space-y-3">
                    <h4 className="text-xs font-black text-violet-900 uppercase">Test Progress</h4>
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-3 bg-white rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-violet-500 rounded-full transition-all duration-500"
                                style={{ width: `${(passedCount / TEST_ITEMS.length) * 100}%` }}
                            />
                        </div>
                        <span className="text-sm font-black text-violet-700">{passedCount}/{TEST_ITEMS.length}</span>
                    </div>
                </div>
            }
        >
            <div className="space-y-8">
                {/* Test Overview */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                            <TestTube className="w-5 h-5 text-violet-500" />
                            QA Testing Checklist
                        </h2>
                        <button
                            onClick={reset}
                            className="p-2 bg-gray-100 text-gray-400 hover:text-gray-600 rounded-xl transition-colors"
                            title="Reset Checklist"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-gray-600">
                        Test all features of your application. Each test must pass before shipping.
                    </p>
                </div>

                {/* Progress Banner */}
                <div className={`p-6 rounded-2xl border ${
                    isAllPassed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-amber-50 border-amber-200'
                }`}>
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isAllPassed ? 'bg-green-500' : 'bg-amber-500'
                        }`}>
                            {isAllPassed ? (
                                <CheckSquare className="w-6 h-6 text-white" />
                            ) : (
                                <AlertCircle className="w-6 h-6 text-white" />
                            )}
                        </div>
                        <div>
                            <p className={`font-black ${isAllPassed ? 'text-green-700' : 'text-amber-700'}`}>
                                {isAllPassed ? 'All Tests Passed!' : `${passedCount} of ${TEST_ITEMS.length} Tests Passed`}
                            </p>
                            <p className="text-sm text-gray-500">
                                {isAllPassed 
                                    ? 'Your application is ready for shipping.'
                                    : 'Complete all tests to proceed to shipping.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Test Items */}
                <div className="space-y-3">
                    {TEST_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => toggle(item.id)}
                            className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-start gap-4 ${
                                checked[item.id]
                                    ? 'bg-green-50/30 border-green-100'
                                    : 'bg-white border-gray-100 hover:border-violet-200'
                            }`}
                        >
                            <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                                checked[item.id] 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-gray-100 border border-gray-200 text-transparent group-hover:bg-violet-50'
                            }`}>
                                <CheckSquare className="w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                                <p className={`font-bold transition-colors ${
                                    checked[item.id] ? 'text-green-700' : 'text-gray-900'
                                }`}>
                                    {item.title}
                                </p>
                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                    <Info className="w-3 h-3" /> {item.hint}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Task */}
                <div className="p-6 bg-gray-900 rounded-2xl text-white">
                    <h3 className="font-black uppercase tracking-wider mb-3">Your Task</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Complete all 10 tests on your application. Check each item as you verify it works.
                        Upload a screenshot showing all tests passed as the artifact.
                    </p>
                </div>
            </div>
        </RBPremiumLayout>
    );
};

export default RB07Test;
