
import React from 'react';
import './Styles.scss';


function Movie (props) {

  return (
    <div className="MovieWrap">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.mark}</p>
    </div>
  )

}

export default Movie;