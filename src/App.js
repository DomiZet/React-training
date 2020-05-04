
import React from 'react';
import './App.scss';
import Main from './components/main/Main';
import MovieList from './components/movielist/MovieList';
import Movie from './components/movie/Movie';
import StateTraining from './components/statetraining/StateTraining';


class App extends React.Component {

    render() {

      return (
        <div>
          <Main />
          <MovieList />
          <StateTraining />
        </div>
      )

     }

  }

export default App; 

