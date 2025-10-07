import { useState, useEffect } from 'react'
import './About.css'
import axios from 'axios';

/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About= () => {
  // this component expects to be passed all the details of the message it should display
  // format the date of the message nicely
  const [about, setAbout] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/about')

        if (response.data.about[0]) 
            {setAbout(response.data.about[0])
        } else {
          setError('No About Info Found')
        }
        
      } catch (err) {
        console.error('No About Info Found', err)
        setError('Failed to Load About Info.')
      } finally {
        setLoading(false)
      }
        
    }

    fetchAbout()
  }, [])

  if (loading)
    return <p>Loading</p>
  if (error) 
    return <p>{error}</p>
  if (!about) 
    return <p>No about info.</p>

  return (
    <article className="About">
      <h2>{about.name}</h2>
      {about.imageUrl && (
        <img
        className="about-image"
        src={`http://localhost:5002${about.imageUrl}`}
        />
      )}
      <p> {about.message1} </p>
      <br></br>
      <p> {about.message2} </p>
    </article>
  )
}

// make this component available to be imported into any other file
export default About

   
