import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import AboutMe from './Components/AbouMe'
import MySkills from './Components/MySkills'
import Contact from './Components/Contact'
import Project from './Components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      
      <Header />
      <Profile />
      <AboutMe />
      <MySkills />
      <Project />
      <Contact />
    </div>
    </>
  )
}

export default App

      