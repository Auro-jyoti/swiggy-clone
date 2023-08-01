const Title = () => (
    <a href="" id="title">
        <h1>
            SWIGGY
        </h1>
    </a>
)

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <Title />
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;