import FilmItem from "./FilmItem";
import FilmPage from "./FilmPage";
import FilmHeader from "./FilmHeader";
import {useSelector} from "react-redux";
import {selectAllFilms, selectStatus} from "../../Redux/features/filmSlice";

const Films = () => {
    const films = useSelector(selectAllFilms)
    const loading = useSelector(selectStatus)
    return (
        <div className={"mt-5 px-5"}>
            <FilmHeader/>
            {
                loading === "pending" && <div>Loading...</div>
            }
            {
                films.Search &&
                    films.Search.map(film => <FilmItem key={film.imdbID} film={film}/>)

            }

            {
                films.Search ?
                    <FilmPage/>
                    :
                    null
            }
        </div>
    )
}
export default Films