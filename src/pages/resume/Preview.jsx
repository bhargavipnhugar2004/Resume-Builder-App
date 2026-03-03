import { useNavigate } from 'react-router-dom';
import { useResume } from '../../context/ResumeContext';
import { FileText, ArrowLeft, Printer } from 'lucide-react';

const Preview = () => {
    const navigate = useNavigate();
    const { resumeData } = useResume();

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
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
                            className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" /> Builder
                        </button>
                        <button 
                            className="px-4 py-2 text-sm font-bold text-gray-900 bg-gray-100 rounded-xl"
                        >
                            Preview
                        </button>
                        <button 
                            onClick={() => navigate('/proof')}
                            className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Proof
                        </button>
                    </div>
                </div>
            </nav>

            {/* Preview Area */}
            <main className="py-12 px-6">
                <div className="max-w-[800px] mx-auto">
                    {/* Controls */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-black text-gray-900">Resume Preview</h1>
                            <p className="text-sm text-gray-500 mt-1">Clean, professional layout ready for printing</p>
                        </div>
                        <button
                            onClick={() => window.print()}
                            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all flex items-center gap-2"
                        >
                            <Printer className="w-4 h-4" /> Print
                        </button>
                    </div>

                    {/* Resume Document */}
                    <div className="bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
                        <div className="p-12 print:p-8" id="resume-preview">
                            {/* Header */}
                            <header className="text-center mb-8 pb-6 border-b-2 border-gray-900">
                                <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                                    {resumeData.personalInfo.name || 'Your Name'}
                                </h1>
                                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap">
                                    {resumeData.personalInfo.email && (
                                        <span>{resumeData.personalInfo.email}</span>
                                    )}
                                    {resumeData.personalInfo.phone && (
                                        <span>{resumeData.personalInfo.phone}</span>
                                    )}
                                    {resumeData.personalInfo.location && (
                                        <span>{resumeData.personalInfo.location}</span>
                                    )}
                                </div>
                                {(resumeData.links.github || resumeData.links.linkedin) && (
                                    <div className="flex items-center justify-center gap-6 mt-2 text-sm text-gray-500">
                                        {resumeData.links.github && (
                                            <span>{resumeData.links.github}</span>
                                        )}
                                        {resumeData.links.linkedin && (
                                            <span>{resumeData.links.linkedin}</span>
                                        )}
                                    </div>
                                )}
                            </header>

                            {/* Summary */}
                            {resumeData.summary && (
                                <section className="mb-8">
                                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-3 border-b border-gray-200 pb-2">
                                        Professional Summary
                                    </h2>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {resumeData.summary}
                                    </p>
                                </section>
                            )}

                            {/* Experience */}
                            {resumeData.experience.length > 0 && (
                                <section className="mb-8">
                                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                        Professional Experience
                                    </h2>
                                    <div className="space-y-6">
                                        {resumeData.experience.map((exp) => (
                                            <div key={exp.id}>
                                                <div className="flex justify-between items-start mb-1">
                                                    <div>
                                                        <h3 className="font-bold text-gray-900">{exp.title}</h3>
                                                        <p className="text-sm text-gray-600 italic">{exp.company}</p>
                                                    </div>
                                                    <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                                                </div>
                                                {exp.description && (
                                                    <p className="text-sm text-gray-700 leading-relaxed mt-2">
                                                        {exp.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Education */}
                            {resumeData.education.length > 0 && (
                                <section className="mb-8">
                                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                        Education
                                    </h2>
                                    <div className="space-y-4">
                                        {resumeData.education.map((edu) => (
                                            <div key={edu.id} className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                                                    <p className="text-sm text-gray-600 italic">{edu.school}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-sm text-gray-500 font-medium">{edu.year}</span>
                                                    {edu.gpa && (
                                                        <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Projects */}
                            {resumeData.projects.length > 0 && (
                                <section className="mb-8">
                                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                        Projects
                                    </h2>
                                    <div className="space-y-4">
                                        {resumeData.projects.map((proj) => (
                                            <div key={proj.id}>
                                                <h3 className="font-bold text-gray-900">{proj.name}</h3>
                                                {proj.description && (
                                                    <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
                                                )}
                                                {proj.tech && (
                                                    <p className="text-sm text-gray-500 italic mt-1">
                                                        Technologies: {proj.tech}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Skills */}
                            {resumeData.skills && (
                                <section>
                                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-3 border-b border-gray-200 pb-2">
                                        Technical Skills
                                    </h2>
                                    <p className="text-sm text-gray-700">
                                        {resumeData.skills}
                                    </p>
                                </section>
                            )}

                            {/* Empty State */}
                            {!resumeData.personalInfo.name && !resumeData.summary && resumeData.experience.length === 0 && (
                                <div className="text-center py-20">
                                    <FileText className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-400 mb-2">No Resume Data</h3>
                                    <p className="text-gray-400 mb-6">
                                        Go to the Builder page to create your resume.
                                    </p>
                                    <button
                                        onClick={() => navigate('/builder')}
                                        className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all"
                                    >
                                        Go to Builder
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Print Styles Info */}
                    <p className="text-center text-sm text-gray-400 mt-8">
                        Use Ctrl/Cmd + P to print or save as PDF
                    </p>
                </div>
            </main>

            {/* Print Styles */}
            <style>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    #resume-preview, #resume-preview * {
                        visibility: visible;
                    }
                    #resume-preview {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                    nav, button, .no-print {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Preview;
