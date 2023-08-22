import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  bg-dark sticky-top p-3">
  <div class="container-fluid">
    <a class="navbar-brand text-light fw-bold" href="#">ReactRouting</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="" id="navbarNav">
      <ul class="navbar-nav mx-3">
        <li class="nav-item">
          <Link to='#home'  smooth class="nav-link active text-light" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='#about' smooth class="nav-link active text-light" >About</Link>
        </li>
        <li class="nav-item">
          <Link to='#contact' smooth class="nav-link active text-light">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to='#career'smooth class="nav-link  active text-light">Careers</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar