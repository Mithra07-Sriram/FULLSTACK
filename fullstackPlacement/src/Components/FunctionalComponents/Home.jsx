import '../../assets/css/Home.css';

const Home = () => {
    const styling = {
        fontSize: "30px",
        textDecoration: "underline",
        color: "red",
    };

    return (
        <div className="home-container">
            <div className="box-model">
                <h1 id="idSEg">Fullstack Training</h1>
                <h2 style={{ color: "blue" }}>Day 4</h2>
                <h3 style={styling}>CSS Styling</h3>
            </div>
            <footer className="footer">
                <p>© 2024 Fullstack Training. All rights reserved.</p>
                <p>Contact: info@fullstacktraining.com</p>
            </footer>
        </div>
    );
};

export default Home;
