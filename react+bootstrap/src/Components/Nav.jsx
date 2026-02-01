const Nav = ()=>{
    return(
        <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
    <a className="navbar-brand" href="#home">Bootstrap Tutorial| By kritesh</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
        </nav>
        </>
    )
}

export default Nav;