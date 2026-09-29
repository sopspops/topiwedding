import topiBg from "./assets/topi_bg.png";
import galOne from "./assets/topi_dancing.jpg";
import galTwo from "./assets/topi_goof.png";
import galThree from "./assets/topi_married.jpg";
import galFour from "./assets/topi_dance.png";
import celebrate from "./assets/celebrate.png";
import dressCode from "./assets/dress_code.png";
import love from "./assets/love.png";
import sopi_toni from "./assets/sopi_toni.jpg";

// Paste the deployed Google Apps Script web app URL ending in /exec.
const RSVP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5HjFOIgLK2HupMOKA8T_3DvqKgoHpNqRE3VjtxswCE9k4jzkdFnMbdHaOiEHmlapNlw/exec";

const details = [
  // Change each image value to another imported photo for that card.
  { number: "01", image: celebrate, title: "Let's party", date: "February 6, 2027", copy: "1711 N Val Vista Dr, Mesa, AZ, 85213. Starting at 4 pm." },
  { number: "02", image: dressCode, title: "Dress code?", date: "Come as you are", copy: "Wear anything you'd like." },
  { number: "03", image: love, title: "Your hugs are our registry", date: "For real", copy: "Your presence is our present." },
];

const galleryItems = [
  { image: galOne, alt: "Sophie and Tony dancing together" },
  { image: galTwo, alt: "Sophie and Tony being goofy" },
  { image: galThree, alt: "Sophie and Tony on their legal wedding day" },
  { image: galFour, alt: "Sophie and Tony dancing" },
];

export default function App() {
  const formReady = RSVP_SCRIPT_URL.startsWith("https://script.google.com/macros/s/")
    && RSVP_SCRIPT_URL.endsWith("/exec");

  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__photo" style={{ backgroundImage: `url(${topiBg})` }}>
          <nav className="hero__nav" aria-label="Main navigation">
            <div className="hero__nav-group">
              <a href="#story">Our story</a>
              <a href="#details">Details</a>
            </div>
            <a className="hero__rsvp-link" href="#rsvp">RSVP</a>
          </nav>
          <div className="hero__title-wrap">
            <p className="eyebrow">February 6, 2027</p>
            <h1 id="hero-title"><span>Sophie</span><span className="hero__amp">&amp;</span><span>Tony</span></h1>
          </div>
        </div>
      </section>

      <section className="story" id="story" aria-labelledby="story-title">
        <img className="story__photo" src={sopi_toni} alt="Sophie and Tony together" />
        <div className="story__copy">
          <p className="section-number">01</p>
          <h2 id="story-title">Our story</h2>
          <p>We have Strongmind to thank for bringing us together. We became friends, fell in love, and now we’re getting married!</p>
          <p>We’re happiest goofing around, trying a new restaurant or game, and cooking something together at home. Life with each other is full of laughter, and we can’t wait to celebrate this next chapter with our favorite people.</p>
        </div>
      </section>

      <section className="details" id="details" aria-labelledby="details-title">
        <header className="section-heading"><p className="section-number">02</p><h2 id="details-title">Details</h2></header>
        <div className="details__grid">
          {details.map((detail) => (
            <article className="detail-card" key={detail.number}>
              <div className="detail-card__visual">
                <img src={detail.image} alt="" />
                <span aria-hidden="true">{detail.number}</span>
              </div>
              <h3>{detail.title}</h3>
              <p className="detail-card__date">{detail.date}</p>
              <p>{detail.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" aria-label="Sophie and Tony photo gallery">
        {galleryItems.map((item) => (
          <figure className="gallery__item" key={item.image}>
            <img className="gallery__photo" src={item.image} alt={item.alt} />
          </figure>
        ))}
      </section>

      <section className="rsvp" id="rsvp" aria-labelledby="rsvp-title">
        <p className="section-number">03</p>
        <h2 id="rsvp-title">RSVP</h2>
        <p className="rsvp__intro">Let us know if you’ll be celebrating with us!</p>
        <form className="rsvp__form" action={formReady ? RSVP_SCRIPT_URL : undefined} method="POST" acceptCharset="UTF-8">
          {/* Hidden field traps basic spam bots. Leave blank. */}
          <div className="rsvp__honeypot" aria-hidden="true">
            <label>Leave this blank <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <div className="rsvp__row">
            <label>First name <input type="text" name="firstName" autoComplete="given-name" required /></label>
            <label>Last name <input type="text" name="lastName" autoComplete="family-name" required /></label>
          </div>
          <label>Email <input type="email" name="email" autoComplete="email" required /></label>
          <fieldset>
            <legend>Will you be attending?</legend>
            <div className="rsvp__choices">
              <label><input type="radio" name="attending" value="Yes" required /> Yes</label>
              <label><input type="radio" name="attending" value="No" required /> No</label>
            </div>
          </fieldset>
          <label>Names of guests in your party <span className="rsvp__optional">(if applicable)</span>
            <textarea name="guestNames" rows={3} placeholder="Please list everyone joining you" />
          </label>
          <label>Add your favorite anthem to our night <span className="rsvp__optional">(optional)</span>
            <input type="text" name="songRequest" placeholder="Song title and artist" />
          </label>
          {!formReady && <p className="rsvp__setup">Add your Apps Script web app URL in App.tsx to enable RSVP submissions.</p>}
          <button type="submit" disabled={!formReady}>Send RSVP</button>
        </form>
        <a className="back-to-top" href="#top"><span aria-hidden="true">↑</span> Back to top</a>
      </section>
    </main>
  );
}
