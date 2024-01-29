import "./reset.css";
import "@jkimmeyer/panorama-design-system/styles";
import "./styles.css";
import logoUrlA from "./assets/logo-a.png";
import teaserImgUrlA from "./assets/teaser-image-a.png";

import logoUrlB from "./assets/logo-b.png";
import teaserImgUrlB from "./assets/teaser-image-b.png";

import logoUrlHsd from "./assets/hsd/hsd-logo.png";
import teaserImgUrlHsd from "./assets/hsd/teaser-image.png";

import logoUrlZw from "./assets/zweitag/zweitag.svg";
import teaserImgUrlZw from "./assets/zweitag/teaser-image.webp";

import logoUrlIkea from "./assets/ikea/Ikea_logo.png";
import teaserImgUrlIkea from "./assets/ikea/teaser-image.png";

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

const defineThemeSwitchers = () => {
  const themeSwitcherExampleA = document.querySelector<HTMLButtonElement>(
    "#theme-switcher-example-a"
  );
  themeSwitcherExampleA?.addEventListener("click", setThemeA);

  const themeSwitcherExampleB = document.querySelector<HTMLButtonElement>(
    "#theme-switcher-example-b"
  );
  themeSwitcherExampleB?.addEventListener("click", setThemeB);

  const themeSwitcherHsd = document.querySelector<HTMLButtonElement>(
    "#theme-switcher-hsd"
  );
  themeSwitcherHsd?.addEventListener("click", setHsdDesignSystem);

  const themeSwitcherIkea = document.querySelector<HTMLButtonElement>(
    "#theme-switcher-ikea"
  );
  themeSwitcherIkea?.addEventListener("click", setIkeaDesignSystem);

  const themeSwitcherZw =
    document.querySelector<HTMLButtonElement>("#theme-switcher-zw");
  themeSwitcherZw?.addEventListener("click", setZweitagDesignSystem);
};

const setThemeA = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="page" data-theme-a>
    <div class="page-container">
      <pano-a-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="secondary" size="medium"></pano-a-button>
      <pano-a-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="secondary" size="medium"></pano-a-button>
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

  defineThemeSwitchers();
};

const setThemeB = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page" data-theme-b>
  <div class="page-container">
    <pano-b-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="primary" size="medium"></pano-b-button>
    <pano-b-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="primary" size="medium"></pano-b-button>
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
  defineThemeSwitchers();
};
const setHsdDesignSystem = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page" data-theme-hsd>
  <div class="page-container">
    <hsd-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-example-hsd" label="HSD" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="primary" size="medium"></hsd-button>
    <hsd-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="primary" size="medium"></hsd-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${teaserImgUrlHsd}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${logoUrlHsd}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <hsd-radio-group class="radio-group" name="radio-b" label="Account Method" hiddenlabel options="${escapeHtml(
      radioOptions
    )}"></hsd-radio-group>

    <hsd-input label="Email" input-type="email" size="medium"></hsd-input>
    <hsd-input label="Passwort" input-type="password" size="medium"></hsd-input>

    <div class="repel">
      <hsd-checkbox label="Remember me"></hsd-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <hsd-button full-width label="Log In" appearance="filled" theme="primary" size="large"></hsd-button>
      <hsd-button full-width label="Log In with Google" appearance="outline" theme="primary" size="large"></hsd-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`;
  defineThemeSwitchers();
};

const setZweitagDesignSystem = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page" data-theme-zweitag>
  <div class="page-container">
      <zw-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="secondary" size="medium"></zw-button>
      <zw-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="secondary" size="medium"></zw-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${teaserImgUrlZw}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${logoUrlZw}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <zw-radio-group class="radio-group" name="radio-b" label="Account Method" hiddenlabel options="${escapeHtml(
      radioOptions
    )}"></zw-radio-group>

    <zw-input label="Email" input-type="email" size="medium"></zw-input>
    <zw-input label="Passwort" input-type="password" size="medium"></zw-input>

    <div class="repel">
      <zw-checkbox label="Remember me"></zw-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <zw-button full-width label="Log In" appearance="filled" theme="primary" size="large"></zw-button>
      <zw-button full-width label="Log In with Google" appearance="outline" theme="primary" size="large"></zw-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`;
  defineThemeSwitchers();
};

const setIkeaDesignSystem = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page" data-theme-ikea>
  <div class="page-container">
    <ikea-button id="theme-switcher-example-a" label="Example A" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-example-b" label="Example B" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-hsd" label="HSD" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-ikea" label="Ikea" appearance="filled" theme="secondary" size="medium"></ikea-button>
    <ikea-button id="theme-switcher-zw" label="Zweitag" appearance="filled" theme="secondary" size="medium"></ikea-button>
  </div>

  <div class="placeholder-image">
    <img class="image" src="${teaserImgUrlIkea}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${logoUrlIkea}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <ikea-radio-group class="radio-group" name="radio-b" label="Account Method" hiddenlabel options="${escapeHtml(
      radioOptions
    )}"></ikea-radio-group>

    <ikea-input label="Email" input-type="email" size="medium"></ikea-input>
    <ikea-input label="Passwort" input-type="password" size="medium"></ikea-input>

    <div class="repel">
      <ikea-checkbox label="Remember me"></ikea-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <ikea-button full-width label="Log In" appearance="filled" theme="primary" size="large"></ikea-button>
      <ikea-button full-width label="Log In with Google" appearance="outline" theme="primary" size="large"></ikea-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`;
  defineThemeSwitchers();
};

setThemeA();
