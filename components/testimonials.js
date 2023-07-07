class Testemonials extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">
  
          <div class="section-header">
            <h2>Testimonials</h2>
  
          </div>
  
          <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-item">
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                  I had a fantastic time working with the CODIO team. They designed an aesthetically appealing and user-friendly website that exceeded my expectations. Their attention to detail, straightforward communication, and technical knowledge were outstanding. The website they created has greatly improved my online presence and consumer interactions. I strongly suggest their services to anyone looking for high-quality web development.
                  </p>
                  <div class="profile mt-auto">
                    <img src="assets/img/testimonials.png" class="testimonial-img" alt="">
                    <h3>Bav</h3>
                    <h4>Letting Agent</h4>
                  </div>
                </div>
              </div><!-- End testimonial item -->

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>`;
    }
}

customElements.define('testemonials-custom', Testemonials);


/* <div class="swiper-slide">
<div class="testimonial-item">
  <div class="stars">
    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
  </div>
  <p>
    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
    minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
  </p>
  <div class="profile mt-auto">
    <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
    <h3>Matt Brandon</h3>
    <h4>Freelancer</h4>
  </div>
</div>
</div><!-- End testimonial item -->

<div class="swiper-slide">
<div class="testimonial-item">
  <div class="stars">
    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
  </div>
  <p>
    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
    labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
  </p>
  <div class="profile mt-auto">
    <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
    <h3>John Larson</h3>
    <h4>Entrepreneur</h4>
  </div>
</div>
</div><!-- End testimonial item --> */