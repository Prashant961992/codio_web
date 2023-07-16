class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const index = this.getAttribute('index') || 'inactive';
    const about = this.getAttribute('about') || 'inactive';
    const services = this.getAttribute('services') || 'inactive';
    const portfolio = this.getAttribute('portfolio') || 'inactive';
    const contact = this.getAttribute('contact') || 'inactive';

    this.innerHTML = `<header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
          
          <img src="assets/img/logo.png">
          </a>
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="index.html" class="${index}">Home</a></li>
              <li><a href="about.html" class="${about}">About</a></li>
              <li><a href="services.html" class="${services}">Services</a></li>
              <li><a href="portfolio.html" class="${portfolio}">Portfolio</a></li>
              <li><a href="contact.html" class="${contact}">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>`;
  }
}

customElements.define('header-component', Header);
