import React from "react";
import "./videoCards.css"
import { useState } from "react";

function VideoCards (){
    const [movieObj, setMovieObj] = useState(null);

    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5fac1ff8")
    .then(response => response.json())
    .then((response) => {
        setMovieObj(response)
    })

    return (
        <div>
            <div className="top-movies">
                <br />
                <br />
                <br />
                <h1 >Featured movies</h1>
                <h3>
                    {movieObj?.Title}
                </h3>
                <img src={movieObj?.Poster} alt="" />

            </div>
        </div>
    )
}

export default VideoCards