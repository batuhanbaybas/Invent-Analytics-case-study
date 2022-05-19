import {Link} from "react-router-dom";


const FilmItem = (props) => {



    return (

                    <Link to="/"
                          className={"row text-decoration-none align-items-center  py-3 text-dark"}>
                        <div className={"col"}>
                            {props.film.imdbID}
                        </div>
                        <div className={"col text-center"}>
                            {props.film.Title}
                        </div>
                        <div className={"col text-end"}>
                            {props.film.Year}
                        </div>
                    </Link>
    )
}

export default FilmItem;