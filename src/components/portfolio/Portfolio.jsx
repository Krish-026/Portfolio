import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
const items = [
    {
        id: 1,
        title: "Movix",
        desc: "Movix is a dynamic web application designed to keep movie enthusiasts and TV show buffs up-to-date with the latest trends in entertainment. Leveraging the extensive IMDb API, Movix offers users real-time access to the top trending movies and TV shows, detailed insights on their favorite titles, and personalized content recommendations. With features like data sorting, users can easily navigate through a rich library of entertainment options to find exactly what they're looking for.",
        link: 'https://movetime2u4.vercel.app/',
        img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        code: 'https://github.com/Krish-026/MovieTime'

    },
    {
        id: 2,
        title: "Movix",
        desc: "Movix is a dynamic web application designed to keep movie enthusiasts and TV show buffs up-to-date with the latest trends in entertainment. Leveraging the extensive IMDb API, Movix offers users real-time access to the top trending movies and TV shows, detailed insights on their favorite titles, and personalized content recommendations. With features like data sorting, users can easily navigate through a rich library of entertainment options to find exactly what they're looking for.",
        link: 'https://movetime2u4.vercel.app/',
        img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        code: 'https://github.com/Krish-026/MovieTime'

    },

];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll(
        {
            target: ref,
        });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                        <div className="buttons">
                            <button onClick={() => window.open(item.link, '_blank')}>Go</button>
                            <button onClick={() => window.open(item.code, '_blank')}>Code</button>
                        </div>
                    </div>
                    <motion.div
                        className="textContainer"
                        style={{ y: y }}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>

                        <div className="buttons">
                            <button onClick={() => window.open(item.link, '_blank')}>Go</button>
                            <button onClick={() => window.open(item.code, '_blank')}>Code</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default function Portfolio() {

    const ref = useRef();
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['end end', 'start start']
        });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div
                    className="progressBar"
                    style={{ scaleX }}
                >
                </motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
