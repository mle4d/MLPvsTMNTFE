import React from 'react';
import PropTypes from 'prop-types';
import Turtle from './Turtle';

function AllTurtles({ turtles }) {
  const turtleList = turtles.map(turle => (
    <li key={tmnt.id}>
      </>
    </li>
  )
  );
}

AllTurtles.propTypes = {
  tmnt: PropTypes.array
};

export default AllTurtles;
