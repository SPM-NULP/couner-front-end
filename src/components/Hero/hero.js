import { Section } from './hero.styled';

export const Hero = () => {
  return (
    <Section id="home" className="home">
      <div class="transit-01">
        <img src="assets/images/shape-01.png" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="banner m-top-150 p-top-100">
            <div class="container">
              <div class="row">
                <div class="col-md-10 col-md-offset-1">
                  <div class="banner-text text-center m-top-20">
                    <h1 class=" i-met start text-white">SPM</h1>
                    <p class="start text-black">
                      {' '}
                      Пристрій, що зробить подання показників лічильників
                      святом!
                    </p>
                    <a class="btn btn-default btn-round m-top-20" href="#about">
                      Дізнатись більше
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
