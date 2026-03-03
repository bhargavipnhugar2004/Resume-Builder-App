import { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

const SAMPLE_DATA = {
    personalInfo: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA'
    },
    summary: 'Results-driven software engineer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and mentoring junior developers. Proven track record of delivering high-impact features that drive business growth.',
    education: [
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of California, Berkeley',
            year: '2019',
            gpa: '3.8'
        }
    ],
    experience: [
        {
            id: 1,
            title: 'Senior Software Engineer',
            company: 'Tech Innovations Inc.',
            duration: '2021 - Present',
            description: 'Led development of customer-facing dashboard serving 100K+ users. Reduced page load time by 40% through performance optimizations. Mentored team of 4 junior developers.'
        },
        {
            id: 2,
            title: 'Software Engineer',
            company: 'StartupXYZ',
            duration: '2019 - 2021',
            description: 'Built RESTful APIs handling 1M+ daily requests. Implemented CI/CD pipeline reducing deployment time by 60%. Collaborated with product team to ship 15+ features.'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Implemented payment processing, inventory management, and real-time notifications.',
            tech: 'React, Node.js, PostgreSQL, Stripe'
        },
        {
            id: 2,
            name: 'Task Management App',
            description: 'Collaborative task management application with real-time updates using WebSockets. Features drag-and-drop interface and team collaboration tools.',
            tech: 'React, Firebase, WebSockets'
        }
    ],
    skills: 'JavaScript, TypeScript, React, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, Git, CI/CD, Agile',
    links: {
        github: 'https://github.com/sarahjohnson',
        linkedin: 'https://linkedin.com/in/sarahjohnson'
    }
};

const EMPTY_DATA = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
        location: ''
    },
    summary: '',
    education: [],
    experience: [],
    projects: [],
    skills: '',
    links: {
        github: '',
        linkedin: ''
    }
};

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState(EMPTY_DATA);

    const updatePersonalInfo = (field, value) => {
        setResumeData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value }
        }));
    };

    const updateSummary = (value) => {
        setResumeData(prev => ({ ...prev, summary: value }));
    };

    const addEducation = () => {
        const newEntry = {
            id: Date.now(),
            degree: '',
            school: '',
            year: '',
            gpa: ''
        };
        setResumeData(prev => ({
            ...prev,
            education: [...prev.education, newEntry]
        }));
    };

    const updateEducation = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.map(edu =>
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        }));
    };

    const removeEducation = (id) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.filter(edu => edu.id !== id)
        }));
    };

    const addExperience = () => {
        const newEntry = {
            id: Date.now(),
            title: '',
            company: '',
            duration: '',
            description: ''
        };
        setResumeData(prev => ({
            ...prev,
            experience: [...prev.experience, newEntry]
        }));
    };

    const updateExperience = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.map(exp =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const removeExperience = (id) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.filter(exp => exp.id !== id)
        }));
    };

    const addProject = () => {
        const newEntry = {
            id: Date.now(),
            name: '',
            description: '',
            tech: ''
        };
        setResumeData(prev => ({
            ...prev,
            projects: [...prev.projects, newEntry]
        }));
    };

    const updateProject = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            projects: prev.projects.map(proj =>
                proj.id === id ? { ...proj, [field]: value } : proj
            )
        }));
    };

    const removeProject = (id) => {
        setResumeData(prev => ({
            ...prev,
            projects: prev.projects.filter(proj => proj.id !== id)
        }));
    };

    const updateSkills = (value) => {
        setResumeData(prev => ({ ...prev, skills: value }));
    };

    const updateLinks = (field, value) => {
        setResumeData(prev => ({
            ...prev,
            links: { ...prev.links, [field]: value }
        }));
    };

    const loadSampleData = () => {
        setResumeData(SAMPLE_DATA);
    };

    const clearData = () => {
        setResumeData(EMPTY_DATA);
    };

    return (
        <ResumeContext.Provider value={{
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
        }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
};
