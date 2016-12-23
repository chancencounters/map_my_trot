import React from 'react';
import { Link } from 'react-router';

const Welcome = ({ store }) => {
  return (
    <div className="splash_background">
      <img src="https://s3.amazonaws.com/mapmytrot-prod/bg_image.jpg"></img>
      <div className="greeting">
        <p>MAKE EVERY MILE COUNT, JOIN FREE TODAY</p>
        <p>
          You pound the pavement, we provide the motivation.
          Plan each stride and learn from every route with MapMyTrot.
        </p>
      </div>
      <div className='splash_links'>
        <Link to="/login" className='login'>LOGIN</Link>
                 or
        <Link to="/signup" className='signup'>SIGN UP</Link>
      </div>
    </div>

  );
};

export default Welcome;
