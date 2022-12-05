import React from 'react'


const IMG_API = "https://image.tmdb.org/t/p/w1280";
export default function Movie(props) {
   


    const setVoteAverage = (vote) => {
        if (vote >= 7) {
            return "green"
        }
        else if (vote >= 6) {
            return "yellow"
        }
        else {
            return "red"
        }
    }
    return (
        <div className='movie'>
            <img src={
                props.poster_path
                    ? IMG_API + props.poster_path
                    : "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80"
            }
                alt={props.title} />
            <div className='movie-info'>
                <h3>{props.title}</h3>
                <div className='rating'>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span className={`tag ${setVoteAverage(props.vote_average)}`}>{props.vote_average}</span>
                </div>
            </div>
            <div className='overlay'>
                <h3>Overview</h3>
                <p>{props.overview}</p>
            </div>

            


        </div >
    )
}
