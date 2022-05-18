import SearchLayout from "../../Layout/SearchLayout";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getFilms} from "../../Redux/features/filmSlice";

const Search = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");

    const handleSearch = () => {
        if (title === "") {
            alert("Please enter a Title of the film");
        } else {
            dispatch(getFilms({
                title,
                year,
                type
            }));
        }


    }

    return (
        <div className="border border-1 p-3 mt-5 d-flex align-items-end ">
            <SearchLayout>
                <label htmlFor="search" className={"mb-1"}>Search By Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id={'search'}
                    className="p-1 form-control"
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
                    className="p-1 form-control"
                    type="text"
                    placeholder="Filter by Year"
                />
            </SearchLayout>
            <SearchLayout>
                <label htmlFor="floatingSelect" className={"mb-1"}>Select Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="form-select"
                        id="floatingSelect">
                    <option selected value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Episode">Episode</option>
                </select>
            </SearchLayout>
            <div className={"pe-3"}>
                <button className={"btn btn-outline-dark"} onClick={handleSearch}>Search</button>
            </div>
            <div>
                <button className={"btn btn-dark"} type={"submit"}>Reset</button>

            </div>
        </div>
    )
}
export default Search;