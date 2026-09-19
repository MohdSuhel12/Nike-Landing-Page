const HeroSection=()=>{
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Your feet deserve the best And we are here to help you with our shoes.Your feet deserve the best And we are here to help you with our shoes </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/Images/Amaon Photo.png" alt="Amazon Logo" style={{height:"95px"}} />
                    <img src="/Images/Flipkart.jpg" alt="Flipkart Logo"  />
                </div>
            </div>
            </div>
            <div className="hero-image">
                <img src="/Images/Nike Shoes.jpg" alt="Amazon Logo" style={{width:"500px",height:"300px",objectFit:"cover", marginTop:"70px",marginLeft:"85px",borderRadius:"50%",border:"1px solid red"}} />
            </div>
        </main>
    )
};
export default HeroSection