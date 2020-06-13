import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Turtle({ tmnt }) {
  return (
    <section>
      <Link to={`https://mlp-vs-tmnt.herokuapp.com/api/v1/tmnt/${tmnt.id}`}>
        <img src={tmnt.image} />
        <p>{tmnt.name}</p>
        <p>{tmnt.weapon}</p>
        <p>{tmnt.coolFactor}</p>
      </Link>
    </section>
  );
}

Turtle.propTypes = {
  tmnt: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    weapon: PropTypes.string.isRequired,
    coolFactor: PropTypes.number.isRequired
  })
};

export default Turtle;
