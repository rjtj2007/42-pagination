import React {
    Component,
    Fragment
} from 'react';
import ReactDOM from 'react-dom';
import SONGS from '../songs.js';

class App extends Component {
    state = {
        loading: true,
        songs: [],
        total: 0,
        artist: undefined,
        title: undefined,
        index: 0
    }
    componentDidMount() {
        this.getSongs();
    }

    filter = (event) => {
        event.preventDefault();

        let queryArtist = document.getElementById('artist').value;
        let queryTitle = document.getElementById('title').value;

        if (!queryArtist && !queryTitle) {
            this.setState({
                songs: SONGS
            });
            return;
        }

        let songs = SONGS.filter(song => {
            let artist = song[1];
            let title = song[2];

            let artistMatch = !queryArtist || artist.includes(queryArtist);
            let titleMatch = !queryTitle || title.includes(queryTitle);
            return artistMatch && titleMatch;
        });
        this.setState({
            songs
        });
    }

    sortByArtist = () => {
        let songs = this.state.songs.slice();
        songs.sort((s1, s2) => {
            if (s2.artist < s1.artist) {
                return -1;
            } else if (s2.artist > m1.artist) {
                return 1;
            } else {
                return 0;
            }
        });
        this.setState({
            songs
        })
    }

    sortByTitle = () => {
        let songs = this.state.songs.slice();
        songs.sort((s1, s2) => {
            if (s2.title < s1.title) {
                return -1;
            } else {
                return 0;
            }
        });
        this.setState({
            songs
        });
    }

    getSongs = () => {
        this.setState({
            loading: true
        });
        fetch('/songs?skip=' + this.state.index)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    loading: false,
                    songs: json.songs,
                    total: json.total,
                });
            });
    }

    getPrev = () => {
        let index = Math.max(0, this.state.index - 10);
        this.setState({
            index
        }, () => {
            this.getSongs();
            this.updateUrl();
        });
    }

    getNext = () => {
        let index = this.state.index + 10;
        this.setState({
            index
        }, () => {
            this.getSongs();
            this.updateUrl();
        });
    }

    updateUrl = () => {
        let url = '/?index=' + this.state.index;
        if (this.state.index == 0) {
            url = '/';
        }
        history.pushState({
            index: 10
        }, 'search results', url);
    }

    render() {
        return <Fragment >
            <
            h1 > Artist / Song App < /h1> <
            p > {
                this.state.index
            } - {
                this.state.index + 10
            } of {
                this.state.total
            }
        results. <
            /p> <
            form onSubmit = {
                this.filter
            } >
            <
            input id = "artist"
        type = "text"
        placeholder = "artist" / >
            <
            input id = "title"
        type = "text"
        placeholder = "title" / >
            <
            button type = "submit" > filter < /button> <
            /form> <
            p >
            <
            button onClick = {
                this.sortByArtist
            } > sort by artist < /button> <
            button onClick = {
                this.sortByTitle
            } > sort by title < /button> <
            /p> {
                this.state.loading && < p > Loading... < /p>} {
                        !this.state.loading && this.state.songs.map((song, i) => {
                            return <div key = {
                                song.id
                            } > {
                                song.artist
                            } {
                                ' '
                            } {
                                song.title
                            } < /div>
                        })
                    } <
                    p >
                    <
                    button onClick = {
                        this.getPrev
                    } > prev < /button> <
                    button onClick = {
                        this.getNext
                    } > next < /button> <
                    /p> <
                    /Fragment>
            }
    }

    let root = document.getElementById('root');
    ReactDOM.render( < App / > , root);