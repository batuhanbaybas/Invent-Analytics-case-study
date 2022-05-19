import DetailHeader from "./DetailHeader";
import DetailContent from "./DetailContent";
import {useSelector} from "react-redux";
import {selectSingleFilm, selectStatus} from "../../Redux/features/filmSlice";
import Loading from "../Loading/Loading";
import {Link} from "react-router-dom";

const Detail = () => {
    const film = useSelector(selectSingleFilm)
    const loading = useSelector(selectStatus)
    return (
        <div >
            {loading === "pending" ? <Loading/> :
                <>
                    <Link className={"text-decoration-none text-dark mt-2 p-3 border hover text-center cursor"}
                          style={{width: "150px"}} to={"/"}>Back To Home</Link>
                    <DetailHeader film={film}/>
                    <DetailContent film={film}/>
                </>
            }
        </div>
    )
}
export default Detail;