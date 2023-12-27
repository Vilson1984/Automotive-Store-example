import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CarGallery from '../CarGallery/CarGallery';
import "./Header.css";
import App from "../../App"

function Header() {
    return (
        <>
            <h2 className="Title-Header">A loja onde você encontrará o seu automóvel</h2>
            <Router>
                <div>
                    <nav>

                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/CarGallery">Galeria de Carros</Link>
                        </ul>
                    </nav>
                </div>

                <Routes>
                    <Route path="CarGallery" element={<CarGallery App={App} />} />
                </Routes>
            </Router>
        </>
        
        
            
           
    );
}

export default Header;
