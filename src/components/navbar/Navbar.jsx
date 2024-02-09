import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

const websites = [
    {
        src: '/linkedIn.png',
        alt: 'linkedIn',
        link: 'https://www.linkedin.com/in/krishna-pratap-singh-002b05174/'
    },
    {
        src: '/github.png',
        alt: 'github',
        link: 'https://github.com/Krish-026',
    },
    {
        src: '/gfg.svg',
        alt: 'gfg',
        link: 'https://auth.geeksforgeeks.org/user/kpratapsingh026',
    },
    {
        src: '/leetcode.png',
        alt: 'leetcode',
        link: 'https://leetcode.com/kpratapsingh02/',
    }
]

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Krishna
                </motion.span>
                <div className="social">
                    {
                        websites.map((website, index) => {
                            return (
                                <a href={website.link} key={index} target="_blank" rel="noreferrer"><img src={website.src} alt={website.alt} style={{ height: '25px', width: '25px' }} /></a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
