import HomePage from "./Pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom"
import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:id" element={<DetailPage/>}/>
        </Routes>

    );
}

export default App;
