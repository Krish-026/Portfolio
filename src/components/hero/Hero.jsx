import './hero.scss'
import { motion } from 'framer-motion'
function Hero() {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
            },
        },
    }




    // const navigateToId = (id) => {
    //     // Prevent default anchor link behavior
    //     const element = document.getElementById(id);
    //     if (element) {
    //       // Scroll the element into view
    //       element.scrollIntoView({
    //         behavior: 'smooth', // Smooth scrolling
    //         block: 'start' // Align to the top of the viewport
    //       });
    //     }
    //   };

    
    const navigateToId = (id) => {
        console.log('id', id);
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }



    return (
        <div className='hero'>
            <motion.div className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Writer Content Creator Influencer
            </motion.div>
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Krishna Pratap Singh</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the latest Works</motion.button>
                        <motion.button variants={textVariants} onClick={()=>navigateToId('Contact')}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
