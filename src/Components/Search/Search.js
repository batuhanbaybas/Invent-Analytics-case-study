import SearchLayout from "../../Layout/SearchLayout";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllFilms} from "../../Redux/features/filmSlice";
import {selectPage} from "../../Redux/features/pageSlice";

const Search = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("Pokemon");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const page = useSelector(selectPage)

    useEffect(() => {
        dispatch(getAllFilms({title, year, type, page}))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, type, page, dispatch,])

    const handleSearch = () => {
        if (title === "") {
            alert("Please enter a Title of the film");
        } else {
            dispatch(getAllFilms({
                title,
                year,
                type,
                page
            }));
        }


    }

    return (
        <div
            className="border border-1 p-3 mt-5 d-flex flex-md-row flex-column align-items-end justify-content-center ">
            <SearchLayout>
                <label htmlFor="search" className={"mb-1"}>Search By Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id={'search'}
                    className="p-1 form-control:focus"
                    type="text"
                    placeholder="Title"
                />
            </SearchLayout>
            <SearchLayout>
                <label htmlFor="year" className={"mb-1"}>Filter By Year</label>
                <input
                    id={'year'}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="p-1 form-control:focus"
                    type="text"
                    placeholder="Filter by Year"
                />
            </SearchLayout>
            <SearchLayout>
                <label htmlFor="floatingSelect" className={"mb-1"}>Select Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}
                        className="form-select"
                        id="floatingSelect">
                    <option value={""}>All</option>
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Episode">Episode</option>
                </select>
            </SearchLayout>
            <div className={"pe-3 mt-2 mt-md-0"}>
                <button type={"submit"} className={"btn btn-outline-dark"} onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}
export default Search;