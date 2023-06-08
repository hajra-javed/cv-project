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

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
  };

  handleDelete(section) {
    this.setState({
      ...this.state,
      [section]: this.state[section] - 1
    })
  };

  handleAdd(section) {
    this.setState({
      ...this.state,
      [section]: this.state[section] + 1
    })
  }

  handleAddEducation() {
    this.setState({
      ...this.state,
      education: this.state.education + 1
    })
  }

  render() {
    return (
      <div className="App" >
        <Section className='generalInformation' />
        {(()=> {
          if (this.state.education > 0){
            const arr = [];
            for (let i = 0; i < this.state.education; i++) {
              arr.push(<Section className='education' onDelete={this.handleDelete} onAdd={this.handleAdd} key={uniqid()} />);
            };
            return arr;
          } else {
            return <button onClick={this.handleAddEducation}>Add education</button>;
          }
          })()}

        {(() => {
          const arr = [];
          for (let i = 0; i < this.state.experience; i++) {
            arr.push(<Section className='experience' onDelete={this.handleDelete} onAdd={this.handleAdd} key={uniqid()} />);
          };
          return arr;
        })()}
      </div>
    );
  }
};

export default App;
