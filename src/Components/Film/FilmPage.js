import {useState} from "react";
import {useDispatch} from "react-redux";
import {getFilms} from "../../Redux/features/filmSlice";

const FilmPage = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const handlePage = () => {
        setPage(page + 1);
        dispatch(getFilms({page}))
    }
    return (
        <button onClick={handlePage} className={"btn btn-outline-dark mt-5 active"}>
            {page}
        </button>
    )
}

export default FilmPage;