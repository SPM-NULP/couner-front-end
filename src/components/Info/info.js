export const Info = () => {
  return (
    <div id="app" class="app m-top-70 m-bottom-30">
      <div class="app-slid">
        <div class="container">
          <div class="row">
            <div class="col-md-7 m-bottom-30 about-slider alfa">
              <div class="slide-item">
                <div class="about-item">
                  <h2 class="text-center m-top-10">Раді представити!</h2>
                  <h3 class="m-top-30">
                    <span>SPM</span> також доступний на платформі{' '}
                    <span>Android!</span> <br /> Скористайтесь зручною мобільною
                    аплікацією, яка дозволить Вам завжди бути у курсі змін
                    електроенергії.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="pricing" class="pricing bg-grey m-bottom-30">
        <div class="container">
          <div class="row">
            <h1 class="m-bottom-10 m-top-100 text-center">Вартість I-MET </h1>
            <div class="col-md-6">
              <div class="pricing-item text-center m-top-40 alfa bg-white m-bottom-30">
                <p class="catagory m-bottom-30">1 пристрій</p>
                <p class="price">
                  ₴<span class="statistic-counter">600</span>
                </p>

                <p class="type m-top-20">Для одного лічильника</p>
                <p class="desc">Автоматизація</p>
                <p class="support">Цілодобова підтримка</p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="pricing-item text-center m-top-40 alfa bg-white m-bottom-30">
                <p class="catagory m-bottom-30">2 пристрої </p>
                <p class="price">
                  ₴<span class="statistic-counter">1100</span>
                </p>

                <p class="type m-top-20">Для двох лічильників</p>
                <p class="desc">Автоматизація</p>
                <p class="support">Цілодобова підтримка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="partners"
        class="text-center sections3 bg-white p-bottom-90  wow animated slideInUp"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="head-title">
                <h2>
                  <span>Ми співпрацюємо з:</span>
                </h2>
              </div>
            </div>
            <div class="main-brandv1 p-top-50">
              <div class="col-md-3 col-sm-3"></div>
              <div class="col-md-3 col-sm-3">
                <div class="brand-itemv1">
                  <a href="index.html">
                    <img src="assets/images/lvivHaz.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-3 xs-m-top-20">
                <div class="brand-itemv1">
                  <a href="index.html">
                    <img src="assets/images/iot.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-3"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" class="contact-info alfa fix m-top-40 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <div class="contact-item text-center m-top-80">
                <span class="icon_mail_alt"></span>
                <p>SPM@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
