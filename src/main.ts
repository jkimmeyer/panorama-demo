document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="page">
  <header class="page-header">
    <h1>LOGO</h1>
    <nav class="page-navigation">
    <ul>
      <li><a href="#">Overview</a></li>
      <li><a href="#">Details</a></li>
      <li><a href="#">Highlights</a></li>
      <li><a href="#">Sign Up</a></li>
      <li><a href="#">Log In</a></li>
      </ul>
    </nav>
  </header>
  <main class="page-main">
    <img src="https://placehold.co/1920x400" style="width: 100%;"/>
    <section>
      <form>
        <div class="form-input">
          <label for="#input">E-Mail</label>
          <input id="input" type="email">
        </div>

        <fieldset>
          <legend>Interval</legend>
          <div class="form-radio">
            <input id="newsletter-interval-daily" type="radio" name="newsletter-interval" value="daily">
            <label for="newsletter-interval-daily">Daily</label>
          </div>
          <div class="form-radio">
            <input id="newsletter-interval-weekly" type="radio" name="newsletter-interval" value="weekly">
            <label for="newsletter-interval-weekly">Weekly</label>
          </div>
          <div class="form-radio">
            <input id="newsletter-interval-monthly" type="radio" name="newsletter-interval" value="monthly">
            <label for="newsletter-interval-monthly">Monthly</label>
          </div>
        </fieldset>

        <div class="form-checkbox">
          <input id="newsletter-terms" type="checkbox" name="newsletter-terms">
          <label for="newsletter-terms">I accept the terms and conditions</label>
        </div>

        <button>
          Register
        </button>
        <button>
          Submit
        </button>
      </form>

      <div class="card">
        <a href="#">
          <img src="https://placehold.co/400x300" />
        </a>

        <h2 class="card-title"><strong>Card Text</strong> Brand Information</h2>

        <div class="card-subtitle">19,99 €</div>

        <p>Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet. </p>
      </div>

      <div class="card">
        <a href="#">
          <img src="https://placehold.co/400x300" />
        </a>

        <h2 class="card-title"><strong>Card Text</strong> Brand Information</h2>

        <div class="card-subtitle">19,99 €</div>

        <p>Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet. </p>
      </div>

      <div class="card">
        <a href="#">
          <img src="https://placehold.co/400x300" />
        </a>

        <h2 class="card-title"><strong>Card Text</strong> Brand Information</h2>

        <div class="card-subtitle">19,99 €</div>

        <p>Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet. </p>
      </div>
    </section>
  </main>
</div>
`;
