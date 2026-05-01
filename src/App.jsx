import React from 'react';
import { motion } from 'framer-motion';
import profilePic from './assets/profile.jpg';
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    Code,
    Terminal,
    Database,
    Layout,
    BookOpen,
    Award,
    ExternalLink,
    ChevronRight
} from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Navbar = () => (
    <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        padding: '1.5rem 2rem',
        background: 'rgba(248, 250, 252, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--glass-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <h2 style={{ fontSize: '1.5rem' }}>VS.</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
        </div>
    </nav>
);

const Hero = () => (
    <section id="about" className="section-container" style={{ paddingTop: '10rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem' }}>
        <motion.div variants={staggerContainer} initial="initial" animate="animate" style={{ flex: '1 1 500px' }}>
            <motion.span variants={fadeInUp} style={{ color: 'var(--primary-color)', fontWeight: 600, letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
                WELCOME TO MY PORTFOLIO
            </motion.span>
            <motion.h1 variants={fadeInUp} style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Hi, I'm <span className="text-gradient">Vikraman S</span>
            </motion.h1>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem' }}>
                Enthusiastic Computer Science student with strong skills in React.js, JavaScript, and Data Structures & Algorithms. Seeking to contribute to scalable fintech products.
            </motion.p>
            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={() => window.location.href = '#projects'}>View Projects</button>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a href="https://github.com/vikrmn" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}><Github size={24} /></a>
                    <a href="https://linkedin.com/in/vikraman-s-a79bb6296/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}><Linkedin size={24} /></a>
                </div>
            </motion.div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}
        >
            <div style={{ 
                position: 'relative', 
                width: '350px', 
                height: '350px', 
                borderRadius: '50%', 
                padding: '8px', 
                background: 'var(--gradient)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src={profilePic} 
                    alt="Vikraman S" 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        borderRadius: '50%', 
                        border: '6px solid var(--surface-color)' 
                    }} 
                />
            </div>
        </motion.div>
    </section>
);

const SkillCard = ({ icon: Icon, title, skills }) => (
    <motion.div variants={fadeInUp} className="glass-card" style={{ height: '100%' }}>
        <div style={{ background: 'rgba(14, 165, 233, 0.1)', width: 'fit-content', padding: '0.75rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <Icon color="var(--primary-color)" size={28} />
        </div>
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill, i) => (
                <span key={i} style={{
                    background: 'rgba(0, 0, 0, 0.05)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    border: '1px solid var(--glass-border)'
                }}>
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillGroups = [
        { icon: Layout, title: "Frontend", skills: ["React.js", "JavaScript", "HTML & CSS"] },
        { icon: Terminal, title: "Backend", skills: ["Node.js", "Express JS", "REST API"] },
        { icon: Database, title: "Database", skills: ["PostgreSQL"] },
        { icon: Code, title: "Languages", skills: ["Python", "Java", "C"] },
        { icon: Award, title: "Soft Skills", skills: ["Problem Solving", "Adaptability", "Communication", "Team Work"] }
    ];

    return (
        <section id="skills" className="section-container">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Technical <span className="text-gradient">Skills</span></h2>
                <div className="grid-cols">
                    {skillGroups.map((group, i) => (
                        <SkillCard key={i} {...group} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

const ProjectCard = ({ title, tech, description }) => (
    <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <h3 style={{ fontSize: '1.4rem' }}>{title}</h3>
            <ExternalLink size={20} color="var(--text-secondary)" />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {tech.split(', ').map((t, i) => (
                <span key={i} style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: 600 }}>#{t}</span>
            ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{description}</p>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
            LEARN MORE <ChevronRight size={16} />
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Language Translator",
            tech: "JavaScript, CSS, API",
            description: "A Web app that instantly converts text between multiple languages using modern translation APIs and a clean, user-friendly interface."
        },
        {
            title: "Currency Converter",
            tech: "JavaScript, CSS, API",
            description: "A website that uses an API to fetch real-time exchange rates and perform instant currency conversions."
        },
        {
            title: "RMJ Hall Website",
            tech: "React, CSS",
            description: "A Hall Booking website for RMJ Hall that allows users to view details, and book the hall online seamlessly."
        },
        {
            title: "Book Management",
            tech: "React, Express Js",
            description: "A website handles CRUD operations using REST API methods to connect Backend and Store data as JSON format."
        }
    ];

    return (
        <section id="projects" className="section-container">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Featured <span className="text-gradient">Projects</span></h2>
                <div className="grid-cols">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

const Education = () => (
    <section className="section-container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Education & <span className="text-gradient">Certificates</span></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h3 style={{ marginBottom: '0.5rem' }}>BE (Computer Science)</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Rathinam Technical Campus | Currently Pursuing</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>8.5 CGPA</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div className="glass-card">
                        <Award color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
                        <h4>Design Thinking for Innovation</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Coursera</p>
                    </div>
                    <div className="glass-card">
                        <Award color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
                        <h4>Front End Web Development</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Frenzo Academy</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
);

const Footer = () => (
    <footer id="contact" style={{ background: 'var(--surface-color)', padding: '4rem 2rem' }}>
        <div className="section-container" style={{ padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's <span className="text-gradient">Connect</span></h2>
                <p style={{ color: 'var(--text-secondary)' }}>Always open to discuss new opportunities or projects.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="mailto:vikramansofficial123@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    <Mail size={20} color="var(--primary-color)" /> vikramansofficial123@gmail.com
                </a>
                <a href="tel:+917904891914" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    <Phone size={20} color="var(--primary-color)" /> +91 7904891914
                </a>
            </div>
        </div>
        <div style={{ borderTop: '1px solid var(--glass-border)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Vikraman S. Built with React & Passion.
        </div>
    </footer>
);

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Footer />
        </div>
    );
}

export default App;
