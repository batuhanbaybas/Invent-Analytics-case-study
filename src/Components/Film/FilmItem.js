import {Link} from "react-router-dom";


const FilmItem = (props) => {


    return (

        <Link to={`/${props.film.imdbID}`}
              className={"row text-decoration-none align-items-center  py-3 text-dark hover"}>
            <div className={"col font_size_item"}>
                {props.film.imdbID}
            </div>
            <div className={"col text-center font_size_item"}>
                {props.film.Title}
            </div>
            <div className={"col text-center font_size_item"}>
                {props.film.Type}
            </div>
            <div className={"col text-end font_size_item"}>
                {props.film.Year}
            </div>
        </Link>
    )
}

export default FilmItem;