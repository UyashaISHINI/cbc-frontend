import { Link, Routes } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="h-screen w-full">
            <Header/>
            <Routes path="/*">
            </Routes>            
        </div>

    );
};

export default HomePage;
