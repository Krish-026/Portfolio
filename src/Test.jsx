import { motion } from "framer-motion";
import { useState } from "react";
function Test() {

    const [open, setOpen] = useState(false)

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    // const variantsNew = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1, x: 500, transition: { duration: 2 }, }
    // }
    const variantsNew = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, x: 500, transition: { type:'spring', stiffness: 100, dapming: 100} } // type:'spring  or tween'
    }

    return (
        <>
            {/* <div className="course">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: 200, y: 200 }}
                    transition={{ duration: 2 }}
                >
                </motion.div>
            </div> */}


            
            {/* <div className="course">
                <motion.div
                    className="box"
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 2 }}
                >
                </motion.div>
            </div> */}


            
            {/* <div className="course">
                <motion.div
                    className="box"
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    whileTap={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 2 }}
                >
                </motion.div>
            </div> */}


            
            {/* <div className="course">
                <motion.div
                    className="box"
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    // whileTap={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 2 }}
                    drag
                >
                </motion.div>
            </div> */}


            
            {/* <div className="course">
                <motion.div
                    className="box"
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 2 }}
                    drag
                >
                </motion.div>
            </div> */}


            
            {/* <div className="course">
                <motion.div
                    className="box"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2 }}
                    drag
                >
                </motion.div>
            </div> */}


            
            {/* <div className="course">
                <motion.div
                    className="box"
                    variants={variants}
                    // initial="hidden"
                    // animate="visible"
                    transition={{ duration: 2 }}
                    animate={open ? "visible" : "hidden"}
                    drag
                >
                </motion.div>
                    <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
            </div> */}


            
            <div className="course">
                <motion.div
                    className="box"
                    variants={variantsNew}
                    // initial="hidden"
                    // animate="visible"
                    animate={open ? "visible" : "hidden"}
                    drag
                >
                </motion.div>
                    <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
            </div>



        </>
    )
}

export default Test
