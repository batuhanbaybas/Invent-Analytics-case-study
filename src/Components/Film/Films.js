import FilmItem from "./FilmItem";
import FilmPage from "./FilmPage";
import FilmHeader from "./FilmHeader";

const Films = () => {
    return (
        <div className={"mt-5 px-5"}>
            <FilmHeader/>
            <FilmItem/>
            <FilmItem/>
            <FilmItem/>

            <FilmPage/>
        </div>
    )
}
export default Films