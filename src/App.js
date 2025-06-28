import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserRoutes from "./routes/UserRoutes";
import PageNotFound from "./user/pages/notpagefound/PageNotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./user/pages/auth/Login";
import Register from "./user/pages/auth/Register";
import Home from "./user/pages/home/Home";
import Navbar from "./user/component/navbar/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Home />} />

                <Route element={<ProtectedRoute roles={["user"]} />} >
                    <Route path="/*" element={<UserRoutes />} />
                </Route>

                <Route element={<ProtectedRoute roles={["bakery"]} />} >
                    <Route path="/*" element={<BakeryRoutes />} />
                </Route>

                <Route element={<ProtectedRoute roles={["admin"]} />} >
                    <Route path="/*" element={<AdminRoutes />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
