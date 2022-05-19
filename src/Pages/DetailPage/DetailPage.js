import Detail from "../../Components/Detail/Detail";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getSingleFilm} from "../../Redux/features/filmSlice";

const DetailPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleFilm(id));
    }, [dispatch, id]);


    return (
        <div className={"p-5"}>
            <Detail/>
        </div>

    );
}
export default DetailPage;