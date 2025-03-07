import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserRoutes from "./routes/UserRoutes";
import PageNotFound from "./pages/notpagefound/PageNotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<UserRoutes />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
