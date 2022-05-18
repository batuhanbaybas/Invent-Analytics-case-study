const Films = () => {
    return (
        <table className="table table-hover cursor mt-2">
            <thead>
            <tr>
                <th scope="col">IMDB ID</th>
                <th scope="col">Film Name</th>
                <th scope="col">Publish Year</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>

            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>

            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    )
}
export default Films