import {Link} from "react-router-dom";

const FilmItem = () => {
    return (
        <Link to="/"
              className={"row text-decoration-none  py-3 text-dark"}>
            <div className={"col"}>
                Lorem ipsum dolor sit amet.
            </div>
            <div className={"col text-center"}>
                Lorem ipsum dolor sit amet,
            </div>
            <div className={"col text-end"}>
                1999
            </div>
        </Link>
    )
}

export default FilmItem;