import { Link } from "react-router-dom";

const Title = () => (
    <a href="/" id="title">
        <h1>
            SWIGGY
        </h1>
    </a>
)

// Routing - client side routing and server side routing;
// - server side routing is the way that all are pages come from the server;
// - client side routing is the way that all the pages are stored 
const Header = () => {
    return (
        <nav>
            <div className='header'>
                <Title />
                <div className='nav-items'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">
                            About
                        </Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;