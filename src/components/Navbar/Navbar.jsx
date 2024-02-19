import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg" style={{  backgroundColor: "transparent" }}>
            <div class="container d-flex justify-content-between">
                <a class="navbar-brand" href="#">Sarita</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                 aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-4">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
