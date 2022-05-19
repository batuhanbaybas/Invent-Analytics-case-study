const DetailContent = (props) => {
    return (
        <div className={"d-flex"} style={{height: "600px"}}>

            <img src={props.film.Poster}
                 style={{width: "450px"}} className="object-fit-cover rounded-3"
                 alt="..."/>
            <div className={"px-5 h-100 d-flex justify-content-between flex-column fs-5"}>
                <div>Genre : <span>{props.film.Genre}</span></div>
                <div>Writer : <span>{props.film.Writer}</span></div>
                <div>Actors : <span>{props.film.Actors}</span></div>
                <div>Plot : <span>{props.film.Plot}</span></div>
                <div>Language : <span>{props.film.Language}</span></div>
                <div>Country : <span>{props.film.Country}</span></div>
                <div>Awards : <span>{props.film.Awards}</span></div>
                <div>IMDB Rating : <span>{props.film.imdbRating}</span></div>
                <div>IMDB Votes : <span>{props.film.imdbVotes}</span></div>
            </div>
        </div>
    )
}

export default DetailContent;