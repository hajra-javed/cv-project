// import GeneralInfo from './components/GeneralInfo';
// import Education from './components/Education';
// import Experience from './components/Experience';
import Section from './components/Section/Section';

import './App.css';


function App() {

  return (
    <div className="App">
      <Section className='generalInformation' />
      <Section className='education'/>
      <Section className='experience' />
    </div>
  );
}

export default App;
