import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './learning.css'
import App from "./learning.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)