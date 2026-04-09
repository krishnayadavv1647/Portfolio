import { animate } from "motion"
import { motion } from "motion/react"
const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",

    }
  }
})
const Skill = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
    <motion.h1 whileInView={{ opacity: 1, y:0}} initial={{opacity: 0, y:-100 }} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
    <motion.div whileInView={{ opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap justify-center items-center gap-4">
     <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <i className="ri-reactjs-line text-7xl text-cyan-400 "></i>
    </motion.div>
     <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <i className="ri-nextjs-line text-7xl text-cyan-400 "></i>
    </motion.div>
    <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <i className="ri-css3-line text-7xl text-cyan-400 "></i>
    </motion.div>
     <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <i className="ri-javascript-line text-7xl text-cyan-400 "></i>
    </motion.div>
     <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <i className="ri-tailwind-css-line text-7xl text-cyan-400 "></i>
    </motion.div>
     <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <i className="ri-html5-line text-7xl text-cyan-400 "></i>
    </motion.div>
    </motion.div>
    </div>
  )
}

export default Skill
