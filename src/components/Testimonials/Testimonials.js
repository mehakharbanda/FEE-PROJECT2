import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>
        <div className="row">
          <Testimonial
            imgSrc="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            name="Rachel"
            stars={5}
            text="Over the top experience, outstanding service food, space, and tableware. A place to repeat. If you have the change: dine there! Manuel was our server, and he coud’t do a better job. Everything was over the top"
          />
          <Testimonial
            imgSrc="https://images.pexels.com/photos/4870888/pexels-photo-4870888.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            name="Elena"
            stars={4}
            text="I will be using this service again! Responsive and a delight to book a holiday through. Made it stressfree from the get-go! The on site tour rep came to the resort and helped me book all tours, hassle free!!"
          />
          <Testimonial
            imgSrc="https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            name="John"
            stars={5}
            text="The trip was flawless. For the price that we paid which includes return flight with 20kg baggage, airport transfers and hotel accomodation at Seminyak with lots of freebies, there's nothing more that we could ask for more."
          />
        </div>
      </div>
    </div>
  );
};

const Testimonial = ({ imgSrc, name, stars, text }) => {
  const starIcons = Array.from({ length: stars }, (_, i) => (
    <i key={i} className="fas fa-star"></i>
  ));
  const emptyStarIcons = Array.from({ length: 5 - stars }, (_, i) => (
    <i key={i + stars} className="far fa-star"></i>
  ));

  return (
    <div className="col">
      <div className="testimonial">
        <img src={imgSrc} alt="" />
        <div className="name">{name}</div>
        <div className="stars">
          {starIcons}
          {emptyStarIcons}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Testimonials;
