import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Shop = () => {

 







   
const workouts = [
  {
    title: 'MIND & BODY FITNESS',
    level: 'Intermediate Level',
    image: '/assets/images/img33.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '30 min',
    calories: '250 KCals',
  },
  {
    title: 'BREAK-THRU FITNESS',
    level: 'Advanced Level',
    image: '/assets/images/img34.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 mins',
    calories: '323 KCals',
  },
  {
    title: 'BODY BUILDING',
    level: 'Advanced Level',
    image: '/assets/images/img35.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '60 mins',
    calories: '423 KCals',
    price: 'Rs.59',
  },

   {
    title: 'MIND & BODY FITNESS',
    level: 'Intermediate Level',
    image: '/assets/images/img37.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '30 min',
    calories: '250 KCals',
  },

   {
    title: 'MIND & BODY FITNESS',
    level: 'Intermediate Level',
    image: '/assets/images/img38.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '30 min',
    calories: '250 KCals',
  },

   {
    title: 'MIND & BODY FITNESS',
    level: 'Intermediate Level',
    image: '/assets/images/img39.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '30 min',
    calories: '250 KCals',
  },

   {
    title: 'MIND & BODY FITNESS',
    level: 'Intermediate Level',
    image: '/assets/images/img33.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '30 min',
    calories: '250 KCals',
  },

   {
    title: 'MIND & BODY FITNESS',
    level: 'Intermediate Level',
    image: '/assets/images/img34.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '30 min',
    calories: '250 KCals',
  },

   {
    title: 'MIND & BODY FITNESS',
    level: 'Intermediate Level',
    image: '/assets/images/img35.jpg', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, pety do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    duration: '30 min',
    calories: '250 KCals',
  },
];



     const colors = ['#000000', '#0057D9', '#A52A2A', '#FFD2A6', '#808080', '#7AC47F'];
   const num = ['3XL', '4XL', '5XL', 'L', 'M', 'S', 'XL', 'XXL']
   const fabrc = ['Cotton', 'Denim', 'Muslin', 'Stretch ', 'Velvet']

   const [hovered, setHovered] = useState(null);


  return (
   <>
   
   {/* <div className='mt-5'>
    <img src="assets/images/img32.jpg" className='img-fluid w-100'></img>
   </div> */}


   <div className="mt-2 position-relative text-overlay">
  <img src="assets/images/img32.jpg" className="img-fluid w-100" alt="Gym Classes" />

  <div className="overlay-text-container">
    <h4 className="subheading">EXTREME FITNESS</h4>
    <h1 className="main-heading">GYM CLASSES</h1>
    <p className="tagline">Party Yourself into Shape!</p>
    <div className="stars">★★★★★</div>

     <div className="feature-section  mt-4">
  <div className="container d-flex justify-content-center flex-wrap gap-4">
    {[
      { icon: '🌀', label: 'TONE UP' },
      { icon: '🚴‍♂️', label: 'ENDURANCE' },
      { icon: '⚖️', label: 'WEIGHT LOSS' },
      { icon: '🩺', label: 'REHABILITATION' },
      { icon: '💪', label: 'MUSCLE GAIN' },
      { icon: '💃', label: 'DANCING' },
      { icon: '🏃‍♂️', label: 'CARDIO' }
    ].map((item, index) => (
      <div className="feature-item text-center text-white" key={index}>
        <div className="icon-circle mb-2">{item.icon}</div>
        <div className="label">{item.label}</div>
      </div>
    ))}
  </div>
</div>



    <div className="btn-group mt-4">
      <button className=" cstm-view me-3">VIEW CLASSES</button>
      <button className=" cstm-view ">VIEW SCHEDULE</button>
    </div>
  </div>
</div>




 <div className="filter-section">
      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="type-select">TYPE:</label>
          <select id="type-select" className="filter-select">
            <option>Show All</option>
            <option>Cardio</option>
            <option>Strength</option>
            <option>Dance</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="difficulty-select">DIFFICULTY:</label>
          <select id="difficulty-select" className="filter-select">
            <option>Show All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>
    </div>




      <div className="workout-section container py-5">
      <div className="row">
        {workouts.map((workout, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm position-relative">
              {/* <Link to="/detail"> */}
              <img src={workout.image} alt={workout.title} className="card-img-top" />
              {/* </Link> */}
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase">{workout.title}</h5>
                <p className="cstm-level fw-bold">{workout.level}</p>
                <p className="card-text text-muted">{workout.description}</p>
                <div className="d-flex justify-content-center gap-3 text-secondary mb-3">
                  <span><i className="bi bi-clock"></i> {workout.duration}</span>
                  <span><i className="bi bi-fire"></i> {workout.calories}</span>
                </div>
                <button className="btn btn-danger">View Details</button>
              </div>

              {workout.price && (
                <div className="price-badge position-absolute">
                  <div className="inner">
                    <i className="bi bi-fire text-white"></i>
                    <span className="text-white fw-bold">{workout.price}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>



   </>
  )
}

export default Shop