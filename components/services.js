class Service extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<section id="services-list" class="services-list">
        <div class="container" data-aos="fade-up">
  
          <div class="section-header">
            <h2>Let’s make something <br>great together!</h2>
  
          </div>
  
          <div class="row gy-5">
  
            <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
              <div class="icon flex-shrink-0"><i class="bi bi-briefcase" style="color: #f57813;"></i></div>
              <div>
                <h4 class="title">Website Development</h4>
                <p class="description">Our website development service specialises in designing and developing custom websites that are tailored to meet the unique needs of your business. We utilise the latest technologies and industry best practices to create modern, responsive websites that are user-friendly, visually appealing, and optimised for search engines.
                </p>
              </div>
            </div>
            <!-- End Service Item -->
  
            <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <div class="icon flex-shrink-0"><i class="bi bi-card-checklist" style="color: #15a04a;"></i></div>
              <div>
                <h4 class="title">E-Commerce Development</h4>
                <p class="description">We design and develop custom online stores that are optimised for conversions, user experience, and growth.
                </p>
              </div>
            </div><!-- End Service Item -->
  
            <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <div class="icon flex-shrink-0"><i class="bi bi-bar-chart" style="color: #d90769;"></i></div>
              <div>
                <h4 class="title">IOS APP Development</h4>
                <p class="description">We provide custom iOS app development services that leverage the latest technologies to create intuitive, user-friendly, and scalable applications for Apple's iOS platform.
                </p>
              </div>
            </div><!-- End Service Item -->
  
            <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <div class="icon flex-shrink-0"><i class="bi bi-binoculars" style="color: #15bfbc;"></i></div>
              <div>
                <h4 class="title">Android App Development</h4>
                <p class="description">We have a team of top-notch developers specialised in professional Android application development having detailed knowledge of the SDK and API frameworks.
                </p>
              </div>
            </div><!-- End Service Item -->
  
            <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <div class="icon flex-shrink-0"><i class="bi bi-brightness-high" style="color: #f5cf13;"></i></div>
              <div>
                <h4 class="title">API Integration</h4>
                <p class="description">We provide API integration services to connect different software systems, applications, and databases, enabling seamless communication and data exchange between them.
                </p>
              </div>
            </div><!-- End Service Item -->
  
            <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
              <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week" style="color: #1335f5;"></i></div>
              <div>
                <h4 class="title">React Development</h4>
                <p class="description">Our React development service specialises in designing and developing custom web applications using React, a popular JavaScript library for building modern, scalable, and responsive user interfaces.
                </p>
              </div>
            </div><!-- End Service Item -->
  
          </div>
  
        </div>
      </section>`;
    }
}

customElements.define('our-services', Service);
