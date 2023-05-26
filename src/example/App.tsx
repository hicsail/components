import { useState } from 'react'
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom'; 
import LoginPage from '../pages/login';
import AutoCompletePage from '../pages/autcomplete';
import FileUpload from '../pages/fileUpload';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FileUploadPage from '../pages/fileUpload';



const Home = () => {
  
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <>      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{marginRight:'10px'}}>
          count is {count}
        </button>
        <button onClick={() => {navigate('/login')}}>
          Press to navigate
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/movies" element={<AutoCompletePage />} />
      <Route path="/fileUpload" element={<FileUploadPage />}/>
    </Routes>
  </BrowserRouter>
  )
  
}

export default App
