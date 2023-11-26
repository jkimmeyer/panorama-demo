import "./reset.css";
import "@jkimmeyer/panorama-design-system/styles";
import "./styles.css";
import logoUrlA from "./assets/logo-a.png";
import teaserImgUrlA from "./assets/teaser-image-a.png";

import logoUrlB from "./assets/logo-b.png";
import teaserImgUrlB from "./assets/teaser-image-b.png";
import "@jkimmeyer/panorama-design-system";

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const radioOptions = JSON.stringify([
  { login: "Log In" },
  { signUp: "Sign Up" },
]);

const setThemeA = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="page" data-theme-a>
    <div class="page-container">
      <pano-a-button id="theme-switcher" label="Switch to Example B" appearance="filled" theme="secondary" size="medium"></pano-a-button>
    </div>

    <div class="placeholder-image">
      <img class="image" src="${teaserImgUrlA}">
    </div>

    <div class="login-form">

      <div class="headings">
        <img class="brand-image" src="${logoUrlA}">
        <h1>Welcome Back!</h1>
        <h2>Please enter your details</h2>
      </div>

      <pano-a-radio-group class="radio-group" name="radio-a" label="Account Method" hiddenlabel options="${escapeHtml(
        radioOptions
      )}"></pano-a-radio-group>

      <pano-a-input label="Email" input-type="email" size="medium"></pano-a-input>
      <pano-a-input label="Passwort" input-type="password" size="medium"></pano-a-input>

      <div class="repel">
        <pano-a-checkbox label="Remember me"></pano-a-checkbox>
        <a href="#">Forgot Password?</a>
      </div>

      <div class="buttons">
        <pano-a-button full-width label="Log In" appearance="filled" theme="primary" size="large"></pano-a-button>
        <pano-a-button full-width label="Log In with Google" appearance="filled" theme="secondary" size="large"></pano-a-button>
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

const setThemeB = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page" data-theme-b>
  <div class="page-container">
    <pano-b-button id="theme-switcher" label="Switch to Example A" appearance="filled" theme="primary" size="medium"></pano-b-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${teaserImgUrlB}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${logoUrlB}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <pano-b-radio-group class="radio-group" name="radio-b" label="Account Method" hiddenlabel options="${escapeHtml(
      radioOptions
    )}"></pano-b-radio-group>

    <pano-b-input label="Email" input-type="email" size="medium"></pano-b-input>
    <pano-b-input label="Passwort" input-type="password" size="medium"></pano-b-input>

    <div class="repel">
      <pano-b-checkbox label="Remember me"></pano-b-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <pano-b-button full-width label="Log In" appearance="filled" theme="primary" size="large"></pano-b-button>
      <pano-b-button full-width label="Log In with Google" appearance="outline" theme="primary" size="large"></pano-b-button>
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

setThemeA();
