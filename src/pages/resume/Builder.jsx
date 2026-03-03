import { useNavigate } from 'react-router-dom';
import { useResume } from '../../context/ResumeContext';
import {
    FileText,
    User,
    GraduationCap,
    Briefcase,
    FolderKanban,
    Wrench,
    Link as LinkIcon,
    Plus,
    Trash2,
    Sparkles,
    Eye
} from 'lucide-react';

const Builder = () => {
    const navigate = useNavigate();
    const {
        resumeData,
        updatePersonalInfo,
        updateSummary,
        addEducation,
        updateEducation,
        removeEducation,
        addExperience,
        updateExperience,
        removeExperience,
        addProject,
        updateProject,
        removeProject,
        updateSkills,
        updateLinks,
        loadSampleData,
        clearData
    } = useResume();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
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
                            className="px-4 py-2 text-sm font-bold text-gray-900 bg-gray-100 rounded-xl"
                        >
                            Builder
                        </button>
                        <button 
                            onClick={() => navigate('/preview')}
                            className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2"
                        >
                            <Eye className="w-4 h-4" /> Preview
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

            {/* Two-Column Layout */}
            <div className="flex h-[calc(100vh-64px)]">
                {/* Left: Form Panel */}
                <div className="w-1/2 overflow-y-auto p-8 border-r border-gray-100">
                    <div className="max-w-xl mx-auto space-y-8">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-black text-gray-900">Build Your Resume</h1>
                                <p className="text-sm text-gray-500 mt-1">Fill in your details below</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={loadSampleData}
                                    className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4" /> Load Sample
                                </button>
                                <button
                                    onClick={clearData}
                                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>

                        {/* Personal Info Section */}
                        <section className="bg-white rounded-2xl border border-gray-100 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <User className="w-5 h-5 text-gray-600" />
                                </div>
                                <h2 className="font-bold text-gray-900">Personal Information</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={resumeData.personalInfo.name}
                                        onChange={(e) => updatePersonalInfo('name', e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={resumeData.personalInfo.email}
                                        onChange={(e) => updatePersonalInfo('email', e.target.value)}
                                        placeholder="john@email.com"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        value={resumeData.personalInfo.phone}
                                        onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                                    <input
                                        type="text"
                                        value={resumeData.personalInfo.location}
                                        onChange={(e) => updatePersonalInfo('location', e.target.value)}
                                        placeholder="San Francisco, CA"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Summary Section */}
                        <section className="bg-white rounded-2xl border border-gray-100 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-gray-600" />
                                </div>
                                <h2 className="font-bold text-gray-900">Professional Summary</h2>
                            </div>
                            <textarea
                                value={resumeData.summary}
                                onChange={(e) => updateSummary(e.target.value)}
                                placeholder="Write a brief summary of your professional background and key achievements..."
                                rows={4}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
                            />
                        </section>

                        {/* Education Section */}
                        <section className="bg-white rounded-2xl border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <h2 className="font-bold text-gray-900">Education</h2>
                                </div>
                                <button
                                    onClick={addEducation}
                                    className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    <Plus className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                            {resumeData.education.length === 0 ? (
                                <p className="text-sm text-gray-400 text-center py-4">No education added. Click + to add.</p>
                            ) : (
                                <div className="space-y-4">
                                    {resumeData.education.map((edu) => (
                                        <div key={edu.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
                                            <div className="flex justify-between">
                                                <input
                                                    type="text"
                                                    value={edu.degree}
                                                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                                    placeholder="Degree"
                                                    className="flex-1 px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                                />
                                                <button
                                                    onClick={() => removeEducation(edu.id)}
                                                    className="ml-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <input
                                                type="text"
                                                value={edu.school}
                                                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                                                placeholder="School/University"
                                                className="w-full px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                            />
                                            <div className="grid grid-cols-2 gap-3">
                                                <input
                                                    type="text"
                                                    value={edu.year}
                                                    onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                                                    placeholder="Year"
                                                    className="px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                                />
                                                <input
                                                    type="text"
                                                    value={edu.gpa}
                                                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                                                    placeholder="GPA (optional)"
                                                    className="px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Experience Section */}
                        <section className="bg-white rounded-2xl border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <h2 className="font-bold text-gray-900">Experience</h2>
                                </div>
                                <button
                                    onClick={addExperience}
                                    className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    <Plus className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                            {resumeData.experience.length === 0 ? (
                                <p className="text-sm text-gray-400 text-center py-4">No experience added. Click + to add.</p>
                            ) : (
                                <div className="space-y-4">
                                    {resumeData.experience.map((exp) => (
                                        <div key={exp.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
                                            <div className="flex justify-between">
                                                <input
                                                    type="text"
                                                    value={exp.title}
                                                    onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                                                    placeholder="Job Title"
                                                    className="flex-1 px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                                />
                                                <button
                                                    onClick={() => removeExperience(exp.id)}
                                                    className="ml-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <input
                                                    type="text"
                                                    value={exp.company}
                                                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                                    placeholder="Company"
                                                    className="px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                                />
                                                <input
                                                    type="text"
                                                    value={exp.duration}
                                                    onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                                                    placeholder="Duration (e.g., 2020 - Present)"
                                                    className="px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                                />
                                            </div>
                                            <textarea
                                                value={exp.description}
                                                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                                                placeholder="Describe your responsibilities and achievements..."
                                                rows={3}
                                                className="w-full px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none resize-none"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Projects Section */}
                        <section className="bg-white rounded-2xl border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                        <FolderKanban className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <h2 className="font-bold text-gray-900">Projects</h2>
                                </div>
                                <button
                                    onClick={addProject}
                                    className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    <Plus className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                            {resumeData.projects.length === 0 ? (
                                <p className="text-sm text-gray-400 text-center py-4">No projects added. Click + to add.</p>
                            ) : (
                                <div className="space-y-4">
                                    {resumeData.projects.map((proj) => (
                                        <div key={proj.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
                                            <div className="flex justify-between">
                                                <input
                                                    type="text"
                                                    value={proj.name}
                                                    onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                                                    placeholder="Project Name"
                                                    className="flex-1 px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                                />
                                                <button
                                                    onClick={() => removeProject(proj.id)}
                                                    className="ml-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <textarea
                                                value={proj.description}
                                                onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                                                placeholder="Describe the project..."
                                                rows={2}
                                                className="w-full px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none resize-none"
                                            />
                                            <input
                                                type="text"
                                                value={proj.tech}
                                                onChange={(e) => updateProject(proj.id, 'tech', e.target.value)}
                                                placeholder="Technologies used"
                                                className="w-full px-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Skills Section */}
                        <section className="bg-white rounded-2xl border border-gray-100 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <Wrench className="w-5 h-5 text-gray-600" />
                                </div>
                                <h2 className="font-bold text-gray-900">Skills</h2>
                            </div>
                            <input
                                type="text"
                                value={resumeData.skills}
                                onChange={(e) => updateSkills(e.target.value)}
                                placeholder="JavaScript, React, Node.js, Python, SQL..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                            <p className="text-xs text-gray-400 mt-2">Separate skills with commas</p>
                        </section>

                        {/* Links Section */}
                        <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <LinkIcon className="w-5 h-5 text-gray-600" />
                                </div>
                                <h2 className="font-bold text-gray-900">Links</h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">GitHub</label>
                                    <input
                                        type="url"
                                        value={resumeData.links.github}
                                        onChange={(e) => updateLinks('github', e.target.value)}
                                        placeholder="https://github.com/username"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">LinkedIn</label>
                                    <input
                                        type="url"
                                        value={resumeData.links.linkedin}
                                        onChange={(e) => updateLinks('linkedin', e.target.value)}
                                        placeholder="https://linkedin.com/in/username"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Right: Live Preview Panel */}
                <div className="w-1/2 bg-gray-100 overflow-y-auto p-8">
                    <div className="max-w-[600px] mx-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Live Preview</h2>
                            <button
                                onClick={() => navigate('/preview')}
                                className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
                            >
                                <Eye className="w-4 h-4" /> Full Preview
                            </button>
                        </div>

                        {/* Resume Preview Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[800px]">
                            {/* Header */}
                            <div className="text-center border-b border-gray-100 pb-6 mb-6">
                                <h1 className="text-2xl font-black text-gray-900 mb-1">
                                    {resumeData.personalInfo.name || 'Your Name'}
                                </h1>
                                <div className="flex items-center justify-center gap-3 text-sm text-gray-500 flex-wrap">
                                    {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                                    {resumeData.personalInfo.email && resumeData.personalInfo.phone && <span>•</span>}
                                    {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                                    {(resumeData.personalInfo.email || resumeData.personalInfo.phone) && resumeData.personalInfo.location && <span>•</span>}
                                    {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                                </div>
                                {(resumeData.links.github || resumeData.links.linkedin) && (
                                    <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-400">
                                        {resumeData.links.github && <span>{resumeData.links.github}</span>}
                                        {resumeData.links.linkedin && <span>{resumeData.links.linkedin}</span>}
                                    </div>
                                )}
                            </div>

                            {/* Summary */}
                            {resumeData.summary && (
                                <div className="mb-6">
                                    <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-2">Summary</h2>
                                    <p className="text-sm text-gray-600 leading-relaxed">{resumeData.summary}</p>
                                </div>
                            )}

                            {/* Experience */}
                            {resumeData.experience.length > 0 && (
                                <div className="mb-6">
                                    <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Experience</h2>
                                    <div className="space-y-4">
                                        {resumeData.experience.map((exp) => (
                                            <div key={exp.id}>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-sm">{exp.title || 'Job Title'}</h3>
                                                        <p className="text-sm text-gray-500">{exp.company || 'Company'}</p>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{exp.duration}</span>
                                                </div>
                                                {exp.description && (
                                                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{exp.description}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Education */}
                            {resumeData.education.length > 0 && (
                                <div className="mb-6">
                                    <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Education</h2>
                                    <div className="space-y-3">
                                        {resumeData.education.map((edu) => (
                                            <div key={edu.id} className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm">{edu.degree || 'Degree'}</h3>
                                                    <p className="text-sm text-gray-500">{edu.school || 'School'}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs text-gray-400">{edu.year}</span>
                                                    {edu.gpa && <p className="text-xs text-gray-400">GPA: {edu.gpa}</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Projects */}
                            {resumeData.projects.length > 0 && (
                                <div className="mb-6">
                                    <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">Projects</h2>
                                    <div className="space-y-3">
                                        {resumeData.projects.map((proj) => (
                                            <div key={proj.id}>
                                                <h3 className="font-bold text-gray-900 text-sm">{proj.name || 'Project Name'}</h3>
                                                {proj.description && (
                                                    <p className="text-xs text-gray-600 mt-1">{proj.description}</p>
                                                )}
                                                {proj.tech && (
                                                    <p className="text-xs text-gray-400 mt-1 italic">{proj.tech}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Skills */}
                            {resumeData.skills && (
                                <div>
                                    <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-2">Skills</h2>
                                    <p className="text-sm text-gray-600">{resumeData.skills}</p>
                                </div>
                            )}

                            {/* Empty State */}
                            {!resumeData.personalInfo.name && !resumeData.summary && resumeData.experience.length === 0 && (
                                <div className="flex flex-col items-center justify-center h-[500px] text-center">
                                    <FileText className="w-16 h-16 text-gray-200 mb-4" />
                                    <h3 className="text-lg font-bold text-gray-400 mb-2">Your Resume Preview</h3>
                                    <p className="text-sm text-gray-400 max-w-xs">
                                        Start filling out the form on the left to see your resume come to life.
                                    </p>
                                    <button
                                        onClick={loadSampleData}
                                        className="mt-6 px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all"
                                    >
                                        Load Sample Data
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;
