import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='main-container'>
          <h1>This is what our students say about us</h1>
          <Testimonial/>
        </div>
      </div>
    );
  }
}

export default App;
