// import GeneralInfo from './components/GeneralInfo';
// import Education from './components/Education';
// import Experience from './components/Experience';
import Section from './components/Section/Section';

import './App.css';
import { Component } from 'react';
import uniqid from 'uniqid';


class App extends Component {
  constructor() {
    super();

    this.state = {
      education: 1,
      experience: 1
    };
  };
  
  render() {
    return (
      <div className="App" >
        <Section className='generalInformation' />
        <Section className='summary' />
        <Section className='education' />
        <Section className='experience' />
      </div>
    );
  }
};

export default App;
