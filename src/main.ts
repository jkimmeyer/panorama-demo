import "./reset.css";
import "@jkimmeyer/panorama-design-system/styles";
import "./styles.css";
import imgUrl from "./assets/panorama-design-system.png";
import greyscaleImgUrl from "./assets/greyscale-image.png";
import "@jkimmeyer/panorama-design-system";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page">
  <div class="placeholder-image">
    <img class="image" src="${greyscaleImgUrl}">
  </div>

  <div class="login-form">

    <div class="headings">
      <img class="brand-image" src="${imgUrl}">
      <h1>Welcome Back!</h1>
      <h2>Please enter your details</h2>
    </div>

    <pano-input label="Email" input-type="email" size="medium"></pano-input>
    <pano-input label="Passwort" input-type="password" size="medium"></pano-input>

    <div class="repel">
      <pano-checkbox label="Remember me"></pano-checkbox>
      <a href="#">Forgot Password?</a>
    </div>

    <div class="buttons">
      <pano-button label="Log In" appearance="filled" theme="primary" size="large"></pano-button>
      <pano-button label="Log In with Google" appearance="filled" theme="primary" size="large"></pano-button>
    </div>

    <div class="link">
      Don't have an account?
      <a href="#"><strong>Sign up!<strong></a>
    </div>
  </div>
</div>
`;
