export const Benefits = () => {
  return (
    <section id="benefits" class="benefits  bg-white fix swing">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="benefits-title text-center">
              <h1>
                {' '}
                <span>Наші переваги</span>
              </h1>
            </div>
          </div>
          <div class="main-benefits text-center p-top-30">
            <div class="col-md-4">
              <div class="benefits-item bg-white alfa wow animated slideInLeft">
                <span class="icon_desktop"></span>
                <h3 class="m-top-30"> Веб-сайт </h3>
                <p class="m-top-20">
                  {' '}
                  Будьте завжди в курсі змін показників лічильників.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefits-item bg-white alfa wow animated slideInUp">
                <span class="icon_mobile"></span>
                <h3 class="m-top-30">Android застосунок</h3>
                <p class="m-top-20">
                  Скористайтесь нашим застосунком у будь якому куточку світу.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefits-item bg-white alfa wow animated slideInRight">
                <span class=" icon_gift"></span>
                <h3 class="m-top-30">Автоматизація</h3>
                <p class="m-top-20">
                  Подання показників лічильників без зайвих клопотів.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
