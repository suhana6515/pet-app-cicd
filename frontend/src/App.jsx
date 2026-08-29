import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/NavBar";
import "./App.css";
import PetSetup from "./pages/PetSetup";
import PetDashboard from "./pages/PetDashboard";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <PetDashboard /> : <Navigate to="/register" replace />
          }
        />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/pet-setup" element={<PetSetup />} />

        <Route
          path="/home"
          element={
            isLoggedIn ? <PetDashboard /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
