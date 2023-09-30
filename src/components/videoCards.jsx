import React from "react";
import "./videoCards.css"
import { useState } from "react";

function VideoCards (){
    const [moviePoster, setMoviePoster] = useState("");
    const [movieTitle, setMovieTitle] = useState("");


    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5fac1ff8")
    .then(response => response.json())
    .then((response) => {
        setMoviePoster(response.Poster)
        setMovieTitle(response.Title)
    })

    return (
        <div>
            <div className="top-movies">
                <br />
                <br />
                <br />
                <h1 >Featured movies</h1>
                <h3>
                    {movieTitle}
                </h3>
                <img src={moviePoster} alt="" />

            </div>
        </div>
    )
}

export default VideoCards