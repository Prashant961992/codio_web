class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer id="footer" class="footer">
        <div class="footer-content">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-4 col-md-12 footer-info">
                <a href="index.html" class="logo d-flex align-items-center">
                  <img src="assets/img/footer-logo.png">
                </a>
                <p></p>
                <div class="social-links d-flex  mt-3">
                 
                 
                  
                  <a href="https://www.linkedin.com/company/codio-software/"  target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                </div>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="services.html">Website Development</a></li>
                  <li><a href="services.html">E-Commerce Development</a></li>
                  <li><a href="services.html">IOS APP Development</a></li>
                  <li><a href="services.html">Android App Development</a></li>
                  <li><a href="services.html">API Integration</a></li>
                  <li><a href="services.html">React Development</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                 
                
                  <strong>Phone:</strong> <a href="callto:+44 7311668663">+44 7311668663</a><br>
                  <strong>Email:</strong> <a href="mailto:info@codiosoftware.com">info@codiosoftware.com</a><br>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-legal">
          <div class="container">
            <div class="copyright">
             2023 &copy; Copyright <strong><span>Codio Software</span></strong>. All Rights Reserved.
            </div>
            
          </div>
        </div>
      </footer>`;
    }
}

customElements.define('footer-component', Footer);