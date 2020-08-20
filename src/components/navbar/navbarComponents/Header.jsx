import React from "react"
import SocialIcon from "./socialIcons"
import NavMenuItem from "./NavMenuItems"

export default function Header() {
  return (
    <div>
      <button type="button" className="mobile-nav-toggle d-xl-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="/static/assets/images/profile.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Shan Shaji</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <SocialIcon href="#" class="twitter" icon="bx bxl-twitter" />
              <SocialIcon href="#" class="facebook" icon="bx bxl-facebook" />
              <SocialIcon href="#" class="instagram" icon="bx bxl-instagram" />
              <SocialIcon href="#" class="google-plus" icon="bx bxl-skype" />
              <SocialIcon href="#" class="linkedin" icon="bx bxl-linkedin" />
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li className="active">
                <a href="index.html">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>

              <NavMenuItem
                href="#about"
                class="bx bx-user"
                navItemName="About"
              />
              <NavMenuItem
                href="#resume"
                class="bx bx-file-blank"
                navItemName="Resume"
              />
              <NavMenuItem
                href="#portfolio"
                class="bx bx-book-content"
                navItemName="Portfolio"
              />
              <NavMenuItem
                href="#services"
                class="bx bx-server"
                navItemName="Services"
              />
              <NavMenuItem
                href="#contact"
                class="bx bx-envelope"
                navItemName="Contact"
              />
            </ul>
          </nav>

          <button type="button" className="mobile-nav-toggle d-xl-none">
            <i className="icofont-navigation-menu"></i>
          </button>
        </div>
      </header>
    </div>
  )
}
