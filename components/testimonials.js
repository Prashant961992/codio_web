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
                  We are happy with your services and we anticipate a smooth continuation of our business relationship in the days to come.
                  </p>
                  <div class="profile mt-auto">
                  
                    <h3>Saul Goodman</h3>
                   
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
                    Codio Software offers creative concepts for website design. The customer service crew is incredibly flexible and inventive. They are aware of their clients' needs and effectively plan the campaign. I heartily endorse it.
                  </p>
                  <div class="profile mt-auto">
                   
                    <h3>Sara Wilsson</h3>
                   
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
                   We are quite pleased with Codio Software's performance; the group is outstanding and the level of commitment is incredible. Keep going! 
                  </p>
                  <div class="profile mt-auto">
                    
                    <h3>Bhav Brandon</h3>
                    
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
