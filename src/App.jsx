// import logo from './logo.svg';
// import './App.css';


import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import picture from "./assets/picture.jpg";



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


{/* 
function App() {
  return (
    <> */}
    <title>Portfolio – Fatna Benali</title>
      <Header />
      <div>
    
        <img src={picture} className="profile-img" alt="photo avatar de profil" />
      <a href="/CV-Fatna-Benali-stage-web.pdf" className="btn" target="_blank" rel="noreferrer">
      Télécharger mon CV
    </a>
      </div>
      
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    {/* </> */}
       </div>
  );
}
//   );
// }

// export default App;
 

export default App;
