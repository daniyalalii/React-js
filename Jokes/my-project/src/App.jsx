import { useState } from 'react'
import './index.css'

function App() {
  const [joke, setJoke] = useState('');

  const getjokes = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?type=single');
      const data = await response.json();
      setJoke(data.joke);
      console.log(data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };



  return (
    <>
      <div>
        <div className='mx-auto p-4 bg-slate-400 flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-center text-white'>Jokes <span className='text-slate-700'>Generator</span></h1>
          <ul className='flex space-x-4 text-white hover:cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <div className='mx-auto p-4 bg-slate-300 flex justify-center items-center'>
            <button className='bg-slate-700 text-white px-4 py-2 rounded' onClick={getjokes}>Get a Joke</button>
          </div>
          <div className='p-4 bg-slate-200 flex justify-center items-center'>
          <p>{joke}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
