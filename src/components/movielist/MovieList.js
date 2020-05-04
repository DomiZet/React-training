
import React from 'react';
import './Styles.scss';
import Movie from '../movie/Movie';


class MovieList extends React.Component {

  render() {

    return <div className="MovieListContainer">

        <Movie 
              title="Zakochany Menel"
              description="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              mark="8/10"
        />

        <Movie 
              title="Królewna Śnieżka"
              description="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              mark="1/10"
        />

        <Movie 
              title="Piti w krainie dreszczowców"
              description="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              mark="6/10"
        />

    </div>

  }

}

export default MovieList;