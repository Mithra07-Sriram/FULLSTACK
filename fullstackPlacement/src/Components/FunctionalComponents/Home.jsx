const Home = () => {
    const styling = {
        fontSize: "30px",
        textDecoration: "underline",
        color: "red",
    };
    return (
        <div className="home-container">
             <h1 id="idSEg">Fullstack Training</h1>
            <div className="box-model">
               
                <h2 style={{ color: "blue" }}>Day 4</h2>
                <p style={{textDecoration:"underline"}}>Example for box model ans</p>
                <h3 style={styling}>CSS Styling</h3>
            </div>
            <footer className="footer">
                <p>© 2024 Fullstack Training. All rights reserved.</p>
                <p>Contact: info@fullstacktraining.com</p>
            </footer>
        </div>
    );
}
export default Home;