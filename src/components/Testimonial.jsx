import React from 'react';
import '../stylesheets/Testimonial.css'
import { people } from '../data/data';
import { getImage } from '../utils/utils';

class Testimonial extends React.Component {
  render() {
    const listItems = people.map(person =>
    <div className='testimonial-container' key={person.id}>
      <img className='testimonial-image' src={getImage(person)} alt={`${person.name} Picture`} />
      <div className='text-testimonial-container'>
        <p className='testimonial-name'><strong>{person.name}</strong> in {person.country}</p>
        <p className='testimonial-charge'>{person.charge} in <strong>{person.company}</strong></p>
        <p className='testimonial-text' dangerouslySetInnerHTML={{ __html: person.testimonial }}></p>
      </div>
    </div>
  );
  return <ul>{listItems}</ul>;
  }
}

export default Testimonial;
