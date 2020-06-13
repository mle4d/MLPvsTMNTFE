import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Pony({ mlp }) {
  return (
    <section>
      <Link to={'https://mlp-vs-tmnt.herokuapp.com/api/v1/mlp/{mlp.id}'}>
        <img src={mlp.image} />
        <p>{mlp.name}</p>
        <p>{mlp.cutieMark}</p>
        <p>{mlp.coolFactor}</p>
      </Link>
    </section>
  );
}

Pony.propTypes = {
  mlp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cutieMark: PropTypes.string.isRequired,
    coolFactor: PropTypes.number.isRequired
  })
};

export default Pony;
