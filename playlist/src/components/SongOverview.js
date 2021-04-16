import React from 'react';
import SongForm from './SongForm.js';
import ListSongs from './ListSongs.js';
import Filter from './Filter.js';

class SongOverview extends React.Component {
    constructor() {
        super(); 
        this.state = {
            songs: [
                
            ],
            filteredList: [],
            filterActive: false
        }
    }

    
    addSong = (event) => {
        event.preventDefault();
        const id = this.state.songs.length + 1;
        const song = event.target[0].value;
        const artist = event.target[1].value;
        const genre = event.target[2].value;
        const rating = event.target[3].value;
        const newSong = { id: id, song: song, artist: artist, genre: genre, rating: rating }
        this.setState(prevState => { 
            const newState = prevState.songs.concat(newSong);
            return {
                songs: newState
            }
        })
    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    removeSong = (event) => {
        event.preventDefault();
        const parentnode = event.target.parentNode;
        const oldState = this.state.songs;
        const oldFiltered = this.state.filteredList;
        const newState = oldState.filter(item => {
            return item.song !== parentnode.children[0].innerHTML;
        })
        const newFiltered = oldFiltered.filter(item => {
            return item.song !== parentnode.children[0].innerHTML;
        })
        this.setState({ 
            songs: newState,
            filteredList: newFiltered
        })
    }

    
    filterSongs = (event) => {

        const unfilteredState = this.state.songs;
        const filterBy = event.target.value;
        if (event.target.value !== "All") {
            if (event.target.name === "select-filter-genre") {
                const filteredState = unfilteredState.filter(item => {
                    return item.genre === filterBy;
                })


                this.setState({ 
                    filteredList: filteredState,
                    filterActive: true
                })
            }
            else {

                const filteredState = unfilteredState.filter(item => {
                    return item.rating === filterBy;
                })
                this.setState({ 
                    filteredList: filteredState,
                    filterActive: true
                })
            }
        }
        else {
            this.setState({
                filteredList: [],
                filterActive: false
            })
        }
    }



    render() {
        return ( 
            <div>
                <SongForm addSong={this.addSong} />
                <Filter filterSongs={this.filterSongs} />
                <table style={{ width: "15%" }}>
                    <tr className="song-header">
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </table>
                <ListSongs songs={this.state.filterActive ? this.state.filteredList : this.state.songs} removeSong={this.removeSong} />
            </div>
        )
    }
}

export default SongOverview;