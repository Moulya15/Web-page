const Navigation = () => {

  return(
    <nav className="container">
          <div className="logo">
           <img src="./images/logo.png" alt="Logo" width="100px" />
          </div>
          
            <ul>
              <li href="#">Home</li>
              <li href="#">About</li>
              <li href="#">Services</li>
              <li href="#">Contact</li>
              </ul>
              
              <div><button>Login</button></div>
            
          
        </nav>
  );

};
export default Navigation;