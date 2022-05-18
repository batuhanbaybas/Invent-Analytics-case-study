import FilmItem from "./FilmItem";
import FilmPage from "./FilmPage";
import FilmHeader from "./FilmHeader";
import {useSelector} from "react-redux";
import {selectAllFilms} from "../../Redux/features/filmSlice";

const Films = () => {
    const films = useSelector(selectAllFilms)
    return (
        <div className={"mt-5 px-5"}>
            <FilmHeader/>
            {
                films.Search ?
                    films.Search.map(film => <FilmItem key={film.imdbID} film={film}/>)
                    :
                    <div className={"mt-3 text-center"}>Gösterilecek Veri yok</div>
            }


            <FilmPage/>
        </div>
    )
}
export default Films