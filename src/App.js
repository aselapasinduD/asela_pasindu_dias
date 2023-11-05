import './App.css';
import Header from './components/header';
import AboutMe from './components/about_me';
import Skills from './components/skills';
import Education from './components/education';
import BigProject from './components/big_project';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="App text-center ">
      <Header />
      <AboutMe />
      <Skills />
      <Education />
      <BigProject />
      <Footer />
    </div>
  );
}

export default App;
