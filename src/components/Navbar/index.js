import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import './index.scss'


import AnimatedLetters from '../AnimatedLetters'

const Sidebar = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['F', 'u', 'm', 'i', 'n', ' ', 'H', 's', 'i', 'a', 'o']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="nav-bar">
        <AnimatedLetters
        letterClass={letterClass}
        strArray={nameArray}
        idx={15}
      />
        
      <h2>FRONTEND DESIGNER</h2>
        
      
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          HOME
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          ABOUT
        </NavLink>
        <a
          // exact="true"
          // activeclassname="active"
          // className="contact-link"
          as="a"
          href="https://www.fuminhsiao.com/"
          target="_blank"
        >
          DESIGN
        </a>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/"
        >
          RESUME
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/"
        >
          CONTACT
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
