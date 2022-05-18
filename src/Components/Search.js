const Search = () => {
    return (
        <div className="border border-1 p-3 mt-5 d-flex">
            <div className={"d-flex flex-column pe-3"}>
                <label htmlFor="search" className={"mb-1"}>Search By Title</label>
                <input
                    id={'search'}
                    className="p-1 form-control"
                    type="text"
                    placeholder="Title"
                />
            </div>
            <div className={"d-flex flex-column pe-5"}>
                <label htmlFor="year" className={"mb-1"}>Search By Year</label>
                <input
                    id={'year'}
                    className="p-1 form-control"
                    type="text"
                    placeholder="Filter by Year"
                />
            </div>
            <div className={"d-flex flex-column"}>
                <label htmlFor="floatingSelect" className={"mb-1"}>Select Type</label>
                <select className="form-select" id="floatingSelect">
                    <option selected>All</option>
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Episode">Episode</option>
                </select>
            </div>
        </div>
    )
}
export default Search;