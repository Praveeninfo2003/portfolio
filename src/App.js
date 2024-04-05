import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import TopContainer from './TopContainer/TopContainer';
import SkillConatainer from './skillContainer/SkillConatainer';
import ProjectContainer from './projectContainer/ProjectContainer';
import Experience_Container from './ExperienceContainer/Experience_Container';
import Contact from './Contact/Contact';

function App() {
  return (
    <div >
      <Header />
      <TopContainer/>
      <SkillConatainer/>
      <ProjectContainer/>
      <Experience_Container/>
      <Contact/>
    </div>

  );
}

export default App;
