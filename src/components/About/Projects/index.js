import './index.scss'
import { projectContext } from '..'

function Project() {
  return (
    <div className='project-container'>
      <ul>
        <projectContext.Consumer>
          {(names) => {
            return names.map((name) => <li>{name}</li>)
          }}
        </projectContext.Consumer>
      </ul>
    </div>
  )
}

export default Project
