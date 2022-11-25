import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  FadeIn,
  ZoomIn,
} from 'react-scroll-motion'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Box from './Box'
import Project from './Projects'
import pic1 from '../../assets/images/uMICH.png'
import pic2 from '../../assets/images/cft.png'
import pic3 from '../../assets/images/audio.jpg'
import pic4 from '../../assets/images/ntu.jpg'

export const projectContext = createContext([])

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container-about">
        <div className="text-zone">
          <div className="about-intro">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </h1>
            <p>
              I am a UX designer. What made me, me, was having experiences that
              no one else had.{' '}
            </p>
            <p>
              Working up to 5 years in mechanical industrial and running my own
              audio brand. I witnessed countless operators fail as a result of
              poor interface design. I try to help them with simple languages,
              but no theory supports me. This motivation compelled me to return
              to the University of Michigan's Design Science program. 
            </p>
            <p>
            Aside from my design intuition, I employ a clear, iterative method to approach the best user experience design strategy in order to make things that matter.
            </p>
          </div>

          <div className="box-container">
            <projectContext.Provider
              value={[
                '# Complicated Website Design',
                '# Interaction Design',
                '# UX Research',
                '# Cognitive UI Design',
                '# Analytical Design',
              ]}
            >
              <Box
                title={'M.S. Design Science'}
                p1={'2021 - 2022'}
                p2={'University of Michigan'}
                pic={pic1}
              />
            </projectContext.Provider>

            <projectContext.Provider
              value={[
                '# Frontend Training Planner',
                '# Frontend Interface Improve',
                '# Mechanical System Planner',
                '# Marketing Strategy',
              ]}
            >
              <Box
                title={'Field Applicaiton Manager'}
                p1={'2016~2020'}
                p2={'Seville Mechanicals'}
                pic={pic2}
              />
            </projectContext.Provider>
            <projectContext.Provider
              value={[
                '# Entreprenuer',
                '# Product Designer',
                '# Home Audio Sytem Planner',
              ]}
            >
              <Box
                title={'Design Entreprinuer'}
                p1={'2014~2022'}
                p2={'Horntex AudioLab'}
                pic={pic3}
              />
            </projectContext.Provider>
            <projectContext.Provider
              value={['# Mechenism Deisgn Award', '# Physical Design']}
            >
              <Box
                title={'B.S. Mechanical Engineer'}
                p1={'2009~2013'}
                p2={'National Taiwan University'}
                pic={pic4}
              />
            </projectContext.Provider>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
