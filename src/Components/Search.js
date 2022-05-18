import SearchLayout from "../Layout/SearchLayout";

const Search = () => {
    return (
        <div className="border border-1 p-3 mt-5 d-flex align-items-end ">
            <SearchLayout>
                <label htmlFor="search" className={"mb-1"}>Search By Title</label>
                <input
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
                    className="p-1 form-control"
                    type="text"
                    placeholder="Filter by Year"
                />
            </SearchLayout>
            <SearchLayout>
                <label htmlFor="floatingSelect" className={"mb-1"}>Select Type</label>
                <select className="form-select" id="floatingSelect">
                    <option selected>All</option>
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Episode">Episode</option>
                </select>
            </SearchLayout>
            <div className={"pe-3"}>
                <button className={"btn btn-outline-dark"} type={"submit"}>Search</button>
            </div>
            <div>
                <button className={"btn btn-dark"} type={"submit"}>Reset</button>

            </div>
        </div>
    )
}
export default Search;