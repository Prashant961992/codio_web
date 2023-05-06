class ChooseUs extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Why Choose Us</h2>

        </div>

        <div class="row g-0" data-aos="fade-up" data-aos-delay="200">

          <div class="col-xl-5 img-bg" style="background-image: url('assets/img/why-us-bg.jpg')"></div>
          <div class="col-xl-7 slides  position-relative">

            <div class="slides-1 swiper">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Expertise</h3>
                    <p>As a custom software development company we have a team of experienced developers and designers who have the technical skills and knowledge to build and maintain complex software websites & applications.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Customization</h3>
                    <p>We tailor our services to specific needs of our clients, offering customised solutions that meet unique requirements.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Efficiency</h3>
                    <p>As a company we value efficiency that has a well-defined development process, project management techniques, and tools that enable them to deliver projects on time while maintaining quality.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Support</h3>
                    <p>We provide ongoing support and maintenance to ensure that our clients websites and applications remain up-to-date and functional.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Quality</h3>
                    <p>We are committed to deliver high-quality software products that meet industry standards and exceed customer expectations.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Innovation</h3>
                    <p>By choosing us, you can be assured that your project will be developed using the latest technology and methodologies, resulting in a cutting-edge solutions that meets your specific business needs.
                    </p>
                  </div>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>

        </div>

      </div>
    </section>`;
    }
}

customElements.define('choose-us', ChooseUs);
