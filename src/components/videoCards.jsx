import React from "react";
import "./videoCards.css"

function VideoCards (){
    var videoData ={};

    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5fac1ff8")
    .then(response => response.json())
    .then((response) => {

        console.log(response);
         console.log(response.Title);
         console.log(response.Poster);
        console.log(response.Actors);
        console.log(response.Genre);

        console.log(videoData.Actors)
    })

    return (
        <div>
            <div className="top-movies">
                <br />
                <br />
                <br />
                <h1 >Featured movies</h1>
                <img src="" alt="" />
                <h1>

                </h1>

            </div>
            
            {/* {console.log(videoData)} */}
        </div>
    )
}

export default VideoCards