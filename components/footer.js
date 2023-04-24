class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer id="footer" class="footer">
        <div class="footer-content">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-md-12 footer-info">
                <a href="index.html" class="logo d-flex align-items-center">
                  <span>codio</span>
                </a>
                <p>As a software development company, focus on delivering high-quality software that meets the needs of your customers. Emphasise the importance of effective communication, collaboration, and continuous improvement. Prioritise customer satisfaction and adapt to changing market demands to stay ahead of the competition.</p>
                <div class="social-links d-flex  mt-3">
                  <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                  <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
    
              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bi bi-dash"></i> <a href="index.html">Home</a></li>
                  <li><i class="bi bi-dash"></i> <a href="about.html">About us</a></li>
                  <li><i class="bi bi-dash"></i> <a href="services.html">Services</a></li>
                  <li><i class="bi bi-dash"></i> <a href="#">Terms of service</a></li>
                  <li><i class="bi bi-dash"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
    
              <div class="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i class="bi bi-dash"></i> <a href="#">Website Development</a></li>
                  <li><i class="bi bi-dash"></i> <a href="#">E-Commerce Development</a></li>
                  <li><i class="bi bi-dash"></i> <a href="#">IOS APP Development</a></li>
                  <li><i class="bi bi-dash"></i> <a href="#">Android App Development</a></li>
                  <li><i class="bi bi-dash"></i> <a href="#">API Integration</a></li>
                  <li><i class="bi bi-dash"></i> <a href="#">React Development</a></li>
                </ul>
              </div>
    
              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  26B Osward Road  SW177SS <br>
                  London, SW177SS<br>
                  United Kingdom <br><br>
                  <strong>Phone:</strong> +1 07311668663<br>
                  <strong>Email:</strong> info@example.com<br>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-legal">
          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong><span>Nova</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nova-bootstrap-business-template/ -->
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </footer>`;
    }
}

customElements.define('footer-component', Footer);