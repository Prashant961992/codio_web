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
                    <h4 class="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem,
                      dolorum.</h4>
                    <p>A software development company has a team of experienced developers and designers who have the
                      technical skills and knowledge to build and maintain complex software systems, including websites.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Customization</h3>
                    <h4 class="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                    <p>A software development company can tailor their services to the specific needs of their clients,
                      offering customized solutions that meet unique requirements.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Efficiency</h3>
                    <h4 class="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                    <p>Hiring a software development company can save time and resources, as they can complete projects
                      quickly and efficiently due to their experience and expertise.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Support</h3>
                    <h4 class="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est.
                      Eum similique neque autem ut.</h4>
                    <p>A reputable software development company will provide ongoing support and maintenance to ensure
                      that their clients' websites remain up-to-date and functional.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Quality</h3>
                    <h4 class="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est.
                      Eum similique neque autem ut.</h4>
                    <p> A software development company is committed to delivering high-quality software products that
                      meet industry standards and exceed customer expectations.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Innovation</h3>
                    <h4 class="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est.
                      Eum similique neque autem ut.</h4>
                    <p> A software development company is constantly researching and exploring new technologies and
                      approaches to software development, which can result in cutting-edge solutions for their clients.
                    </p>
                  </div>
                </div><!-- End slide item -->

                <div class="swiper-slide">
                  <div class="item">
                    <h3 class="mb-3">Competitive advantage</h3>
                    <h4 class="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est.
                      Eum similique neque autem ut.</h4>
                    <p> A well-designed and functional website can give businesses a competitive advantage in today's
                      digital marketplace, making it a worthwhile investment.
                    </p>
                  </div>
                </div><!-- End slide item -->

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
