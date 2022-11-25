import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','F', 'u', 'm', 'i', 'n', ' ', 'H', 's', 'i', 'a', 'o']


  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <>
     <div className="container home-page">
      
      <Logo/>
      
    </div>
    </>
   
  )
}

export default Home
