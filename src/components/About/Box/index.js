import './index.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect} from 'react'
import About from '..'
import Project from '../Projects'


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0.5 },
}

const Box = ({ title, p1, p2, pic}) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])
  return (
    
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h3>{p1}</h3>
      <h4>{p2}</h4>

      <h2>{title} </h2> 
      
      <img src={pic} alt="pic"/>
      <Project />
      
      
     
    </motion.div>
    
  )
}
export default Box
