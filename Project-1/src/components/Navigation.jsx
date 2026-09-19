const Navigation=()=>{
    return(
        <nav className="container">
          <div className='logo'>
            <img id="i1"src="Images/LOGO.png" alt="LOGO"/>
          </div>
          <ul>
            <li a href="#">Menu</li>
            <li a href="#">Location</li>
            <li a href="#">About</li>
            <li a href="#">Contact</li>
          </ul>
          <button>Login</button>
        </nav>
    )
};
export default Navigation