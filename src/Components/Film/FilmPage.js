import {useDispatch, useSelector} from "react-redux";
import {selectPage, setPage} from "../../Redux/features/pageSlice";
import {selectTotalPage} from "../../Redux/features/filmSlice";

const FilmPage = () => {
    const page = useSelector(selectPage);
    const totalpage = useSelector(selectTotalPage)
    const dispatch = useDispatch()
    const handlePage = () => {
        page !== totalpage && dispatch(setPage(page + 1))


    }
    const handleTotalPage = () => {
        dispatch(setPage(totalpage))

    }
    return (
        <div className={"d-flex align-items-end mt-5 "}>
            {
                page > 1 ? <button onClick={() => dispatch((setPage(1)))} className={"btn btn-outline-dark mx-3"}>
                    1
                </button> : null

            }
            <button onClick={handlePage}
                    className={`${totalpage === page ? "disabled" : "btn btn-outline-dark  active"}`}>
                {page}
            </button>
            {
                totalpage > 1 ?
                    <>
                        <span className={"mx-3"}>..........</span>
                        <button onClick={handleTotalPage}
                                className={`${totalpage === page ? "disabled" : "btn btn-outline-dark"} `}>
                            {totalpage}
                        </button>

                    </> : null
            }

        </div>

    )
}

export default FilmPage;