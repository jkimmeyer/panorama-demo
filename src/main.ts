import "./reset.css";
import "@jkimmeyer/panorama-design-system/styles";
import "./styles.css";
import imgUrl from "./assets/panorama-design-system.png";
import greyscaleImgUrl from "./assets/greyscale-image.png";
import "@jkimmeyer/panorama-design-system";

const setThemeB = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="page" data-theme-b>
    <div class="page-container">
      <pano-b-button id="theme-switcher" label="Switch to Example A" appearance="filled" theme="secondary" size="medium"></pano-b-button>
    </div>

    <div class="placeholder-image">
      <img class="image" src="${greyscaleImgUrl}">
    </div>

    <div class="login-form">

      <div class="headings">
        <img class="brand-image" src="${imgUrl}">
        <h1>Welcome Back!</h1>
        <h2>Please enter your details</h2>
      </div>

      <pano-b-input label="Email" input-type="email" size="medium"></pano-b-input>
      <pano-b-input label="Passwort" input-type="password" size="medium"></pano-b-input>

      <div class="repel">
        <pano-b-checkbox label="Remember me"></pano-b-checkbox>
        <a href="#">Forgot Password?</a>
      </div>

      <div class="buttons">
        <pano-b-button label="Log In" appearance="filled" theme="primary" size="large"></pano-b-button>
        <pano-b-button label="Log In with Google" appearance="filled" theme="secondary" size="large"></pano-b-button>
      </div>

      <div class="link">
        Don't have an account?
        <a href="#"><strong>Sign up!<strong></a>
      </div>
    </div>
  </div>
  `;

  const themeSwitcher =
    document.querySelector<HTMLButtonElement>("#theme-switcher");
  themeSwitcher!.addEventListener("click", setThemeA);
};

const setThemeA = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page" data-theme-a>
  <div class="page-container">
    <pano-a-button id="theme-switcher" label="Switch to Example B" appearance="filled" theme="primary" size="medium"></pano-a-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${greyscaleImgUrl}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${imgUrl}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <pano-a-input label="Email" input-type="email" size="medium"></pano-a-input>
    <pano-a-input label="Passwort" input-type="password" size="medium"></pano-a-input>

    <div class="repel">
      <pano-a-checkbox label="Remember me"></pano-a-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <pano-a-button label="Log In" appearance="filled" theme="primary" size="large"></pano-a-button>
      <pano-a-button label="Log In with Google" appearance="outline" theme="primary" size="large"></pano-a-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`;

  const themeSwitcher =
    document.querySelector<HTMLButtonElement>("#theme-switcher");
  themeSwitcher!.addEventListener("click", setThemeB);
};

setThemeA();
