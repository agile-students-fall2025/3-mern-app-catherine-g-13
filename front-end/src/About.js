import { Link } from 'react-router-dom'
import './About.css'

/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = ({ message }) => {
  // this component expects to be passed all the details of the message it should display
  // format the date of the message nicely
  
  return (
    <>
      <article className="About">
        <img
        src = {about.imageURL}
        />
        <h2>{about.name}</h2>
        <p>{about.message}</p>
        
      </article>
    </>
  )
}

// make this component available to be imported into any other file
export default About

    /*
    return (
      <>
        <h2>Catherine Gomes</h2>
        <p>Hello, I am Catherine, a Computer Science major who is expecting to graduate from NYU in 2027. I have experience coding in Python, C++, and C, as well as brief experiences with Javascript, CSS, and HTML. I hope to continue gaining experiences in coding, web development, and digital design. <br/> </p>
        <p>In my free time I like reading, writing short stories and poems, and listening to music.<br/></p>
        <p>In my senior year of high school, I interned for a card company, where I learned how to conduct search engine optimization research.<br/></p>
        <p>Over the summer, I interned for the MTA where I created apps using Microsoft Power Apps and Power Automate. One app I created was a sign-in/sign-out app for employees.<br/></p>
      </>
    )
  }
  
  // make this component available to be imported into any other file
  export default About
  */

