// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import imgPhone from './assets/phone.svg'
import imgLogo from './public/images/PrepUpLogo.svg'
import imgJobFinder from './images/JobFinder.svg'
import imgInterviewSim from './images/InterviewSimulator.svg'
import imgStarMaster from './images/STARMaster.svg'
// import viteLogo from '/vite.svg'
// import Image from './components/image'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const URI = window.location.origin;

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">m
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* Header */}
      <header className='width-full flex flex-nowrap justify-between'>
        <div className='w-1/3 justify-start'>
          <a href="https://vite.dev" target="_blank" className='w-1/3'>
            <img src={`${URI}${imgLogo}`} className="logo flex-auto" alt="PrepUp logo" />
          </a>
        </div>
        
        <div className='width-2/3 justify-end self-center'>
          <ul className='grid grid-flow-col gap-4 justify-stretch'>
            <li>Features</li>
            <li>The Team</li>
            <li>Download Proposal</li>
          </ul>
        </div>
        
        
      </header>

      {/* Main */}
      <main>

        {/* HERO SECTION */}
        <section className='hero-container py-14'>
          <div className='py-2.5'>
            <h2>Practice interviews anywhere, on the go!</h2>
            <p>Interviews may be daunting, but you&#39;ll never have to practice them alone. PrepUp is your inteview companion on-the-go!</p>
          </div>
          
          <div className='w-full flex justify-center'>
            {/* <img src={`${URI}${imgPhone}`}  className="w-1/3 flex-none" alt="React logo" /> */}
            
            <div className='self-end'>
              <h4>Learn about PrepUp</h4>
              <img src="https://placehold.co/600x400" alt="" />
            </div>
            
          </div>
          
        </section>
          
        {/* FEATURES SECTION */}
          
        <section className='px-24 py-14'>
          <div className='flex justify-between'>
            <div className='self-center w-1/2 text-left'>
              <h3>Interview Simulator</h3>
              <p>Easily practice anywhere with AI-generated quick.</p>
            </div>
            <img src={`${URI}${imgInterviewSim}`} className="w-1/3" alt="Man holding the phone" />
          </div>

          <div className='flex justify-between'>
            <img src={`${URI}${imgJobFinder}`} className="w-60" alt="Magnifying glass to find job" />
            <div className='self-center w-1/2 text-left'>
              <h3>Job Finder</h3>
              <p>Quickly browse through lists of tailored job roles based on your past or current occupation.</p>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='self-center w-1/2 text-left'>
              <h3>S.T.A.R Master</h3>
              <p>Want to test answering situational tasks? Take the Situation/Task/Action/Result (S.T.A.R.) Master!</p>
            </div>
            <img src={`${URI}${imgStarMaster}`} className="w-1/3" alt="Star in a bubble" />
          </div>
          
        </section>

        {/* TEAM SECTION */}

        <section className='py-10'>
          <h2>Meet our Team</h2>
          <p className='py-10'>Highly professional and capable  of running your business across all digital channels</p>

          <div className='flex justify-center'>
            <img src='./images/bts/PUBTS-01.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-02.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-03.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-04.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-05.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-06.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-07.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-09.jpg' className="w-80" alt="React logo" />
            <img src='./images/bts/PUBTS-11.jpg' className="w-80" alt="React logo" />
          </div>

        </section>

        <section>
          <h2 className='py-10'>Development Team</h2>

          <div className="w-70 flex">
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          

          <h2 className='py-10'>Design Team</h2>

          <div className="w-70 flex">
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src='https://placehold.co/264' className="" alt="Full Name" />
              <div>
                <h4>Shunsaku Sugita</h4>
                <p>Lead Full-Stack Developer</p>
                <p>5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry. I contribute to the project with product development and team management.</p>
                <p className="flex">
                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="LinkedIn" />
                  </a>

                  <a href="/" target="_blank">
                    <img src='https://placehold.co/24' className="" alt="GITHUB" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          
        </section>
        
      </main>

      {/* Footer */}
      <footer className='pt-10 pb-5'>
        <div className='w-full pt-10 pb-15'>
          <a href="/" target="_blank">
            <img src='https://placehold.co/171x50' className="" alt="Full Name" />
          </a>
        </div>
        

        <div className='width-full flex flex-nowrap justify-between py-5'>
          <div>
            <p className='text-left'>Download Our Proposal Now!</p>
            <p><small>Start preparing for future inteviews with Prep</small></p>
          </div>
          
          <div>
            <a href="/" className=''>Download Proposal</a>
          </div>
        </div>

        <div>
          <p>&copy; 2024 PrepUp. All rights reserved.</p>
        </div>

      </footer>
    </>
  )
}

export default App
