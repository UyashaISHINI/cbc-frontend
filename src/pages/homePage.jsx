import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container">
            <header>
                <h1>Welcome to My Simple Home Page</h1>
            </header>
            <main>
                <p>This is a basic home page template. Add more content as needed!</p>
                <button>Learn More</button>
                
            </main>
            
            <footer>
                <p>&copy; 2024 Simple Home Page. All rights reserved.</p>
            </footer>
            <Link to="/login">Login</Link>
            
        </div>

    );
};

export default HomePage;
