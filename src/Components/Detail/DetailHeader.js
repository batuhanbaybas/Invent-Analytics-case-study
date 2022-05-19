const DetailHeader = (props) => {
    return (
        <div className={"text-center py-5 "}>
            <div className={"fs-4"}>{props.film.Type}</div>
            <h3>{props.film.Title}<span className={"text-muted ps-3 "}>{props.film.Year}</span></h3>
            <h5>{props.film.Director}</h5>
            <div>{props.film.Runtime}</div>
        </div>
    )
}

export default DetailHeader;