import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import MOVIES from '../movies';

class App extends Component {
  state = {
    movies: MOVIES,
    title: undefined,
    minyear: null, maxYear: null,
  }

  filter = (ev) => {
    console.log('filtering')
    ev.preventDefault();

    // qTitle will be an empty string at the very least
    let qTitle = document.getElementById('title').value;
    let qMinYear = parseInt(document.getElementById('minyear').value);
    let qMaxYear = parseInt(document.getElementById('maxyear').value);

    /// if there's no search terms provided then reinflate the whole list.
    if (!qTitle && !qMaxYear && !qMinYear) {
      this.setState({movies: MOVIES});
      return;
    }

    let movies = MOVIES.filter(movie => {
      let year = movie[1];
      let title = movie[2];

      let titleMatches = !qTitle || title.includes(qTitle);
      let minYearMatches = isNaN(qMinYear) || year >= qMinYear;
      let maxYearMatches = isNaN(qMaxYear) || year <= qMaxYear;
      return titleMatches && minYearMatches && maxYearMatches;
    });

    this.setState({movies});
  }

  sortByYear = () => {
    let movies = this.state.movies.slice();
    movies.sort((m1, m2) => {
      if (m2[1] < m1[1]) {
        return -1;
      } else if (m2[1] > m1[1]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({movies})
  }

  sortByTitle = () => {
    let movies = this.state.movies.slice();
    movies.sort((m1, m2) => {
      if (m2[2] < m1[2]) {
        return 1;
      } else if (m2[2] > m1[2]) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({movies})
  }

  render() {
    return <Fragment>
      <h1>My App!!</h1>
      <p>{this.state.movies.length}{' '} results.</p>
      <form onSubmit={this.filter}>
        <input id="title" type="text" placeholder="movie name"/>
        <input id="minyear" type="number" placeholder="start year"/>
        <input id="maxyear" type="number" placeholder="end year" />
        <button type="submit">filter</button>
      </form>
      <p>
        <button onClick={this.sortByYear}>sort by year</button>
        <button onClick={this.sortByTitle}>sort by title</button>
      </p>

      {this.state.movies.map((movie, i) => {
        return <div key={i}>{movie[1]} {' '} {movie[2]}</div>
      })}
    </Fragment>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);