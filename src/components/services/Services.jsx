import { useRef } from 'react';
import './services.scss'
import { motion, useInView } from 'framer-motion'
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }

    }
};

const projects = [
    {
        title: 'Web Developer',
        description: "Passionate Web Developer skilled in creating responsive and interactive websites using the latest technologies. Committed to delivering high-quality user experiences with clean, efficient code.",
        link: 'https://movetime2u4.vercel.app/',
        code: 'https://github.com/Krish-026/MovieTime'
    },
    {
        title: 'Coding Platforms',
        description: "Regular practitioner on LeetCode and GeeksforGeeks, enhancing problem-solving skills and algorithmic thinking. These platforms have been pivotal in refining my coding abilities.",
        link: 'https://movetime2u4.vercel.app/',
        code: 'https://github.com/Krish-026/MovieTime'
    },
    {
        title: 'Internship',
        description: "Contributed as a Frontend Developer during my internship at OpenText, focusing on React and integrating with backend APIs. Gained valuable experience in teamwork and agile project execution.",
        link: 'https://movetime2u4.vercel.app/',
        code: 'https://github.com/Krish-026/MovieTime'
    },
    {
        title: 'Languages',
        description: "Proficient in JavaScript, HTML, CSS/SCSS for frontend development, and familiar with C/C++ and Java for DSA coding and object-oriented programming.",
        link: 'https://movetime2u4.vercel.app/',
        code: 'https://github.com/Krish-026/MovieTime'
    },


]

function Services() {
    const ref = useRef();
    const isInView = useInView(ref, { margin: '-100px' })
    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView='animate'
            ref={ref}
            // animate={isInView && 'animate'}
            animate={'animate'}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on growing in Web Development and Designing field
                    and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: 'orange' }}>Web</motion.b> developer</h1>
                </div>
                <div className="title">
                    <h1>on a continuous <motion.b whileHover={{ color: 'orange' }}> learning journey</motion.b>.</h1>
                    <button>WHAT I DO</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                {/* <motion.div className="outerBox"> */}
                {
                    projects.map((project, index) => (
                        <motion.div className="box" key={index} whileHover={{ background: 'black', color: 'white' }}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="buttons">
                                <button onClick={() => window.open(project.link, '_blank')}>Go</button>
                                <button onClick={() => window.open(project.code, '_blank')}>Code</button>
                            </div>
                        </motion.div>
                    ))
                }
                {/* </motion.div> */}
            </motion.div>
        </motion.div>
    )
}

export default Services
