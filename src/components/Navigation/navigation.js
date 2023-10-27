export const Navigation = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed white no-background bootsnav navbar-mobile">
      <div class="call-us-area bg-info text-white">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-xs-12">
              <div class="call-us-number">
                <ul class="list-inline">
                  <li>
                    <span class="icon_mail_alt"></span> SPM@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-xs-12">
              <div class="call-us-text text-right">
                <a href="before-registration.html" class="signin">
                  Зареєструватись
                </a>
                <a href="login-page.html" class="signin">
                  Увійти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hv2-main-menu-bg">
        <div class="container">
          <div class="row">
            <div class="container">
              <div class="row">
                <div class="navbar-header ">
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                  <a class="navbar-brand" href="index.html#brand">
                    <img
                      src="assets/images/icon.png"
                      class="logo logo1 logo-display"
                      alt=""
                    ></img>
                    <img
                      src="assets/images/icon.png"
                      class="logo logo2 logo-scrolled"
                      alt=""
                    ></img>
                  </a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-menu">
                  <ul
                    class="nav navbar-nav navbar-right m-top-20"
                    data-in="fadeIn"
                    data-out="fadeOut"
                  >
                    <li class="active">
                      <a href="index.html#home">Головна</a>{' '}
                    </li>
                    <li>
                      <a href="#about">Про проект</a>
                    </li>
                    <li>
                      <a href="#controller">Про контролер</a>
                    </li>
                    <li>
                      <a href="#pricing">Вартість</a>
                    </li>
                    <li>
                      <a href="#contacts">Контакти</a>
                    </li>
                    <li>
                      <a class="hideButton" href="before-registration.html">
                        Реєстрація
                      </a>
                    </li>

                    <li>
                      <div class="dropdown">
                        <a class="hideButton" href="login-page.html">
                          {' '}
                          Вхід
                        </a>

                        <div class="dropdown-content">
                          <form
                            name="lgn"
                            action="/user/login/process/"
                            method="POST"
                          >
                            <div class="input-control text">
                              <span class="mif-user prepend-icon"></span>
                              <input
                                type="text"
                                name="email"
                                placeholder="Електронна адреса"
                              ></input>
                            </div>
                            <div class="input-control text">
                              <span class="mif-lock prepend-icon"></span>
                              <input
                                type="password"
                                name="pass"
                                placeholder="Пароль"
                              ></input>
                            </div>
                            <div class="form-actions">
                              <a href="login-page.html" class="button">
                                Увійти
                              </a>
                              <a href="forgot-password" class="button">
                                Забули пароль?
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
