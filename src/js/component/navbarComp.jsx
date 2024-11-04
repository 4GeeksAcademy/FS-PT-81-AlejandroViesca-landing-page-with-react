import React from "react";

const NavbarComp = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars text-light"></i>
                    </button>

                    <div className="collapse navbar-collapse container" id="navbarTogglerDemo01">
                        <a className="navbar-brand text-light" href="#">Start Bootstrap</a>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavbarComp;