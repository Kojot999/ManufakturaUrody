import "./style.scss";
import phoneIcon from "@assets/iphone.png";
import mailIcon from "@assets/mailIcon.png";
import aboutImg from "@assets/hero.jpg";
import locationIcon from "@assets/location.png";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="about">
        <div className="about__image">
          <img src={aboutImg} alt="Zabiegi estetyczne" />
        </div>

        <div className="about__content">
          <span className="section-label">Kontakt</span>
          <h1>Skontaktuj się z nami i umów wizytę</h1>
          <p>
            Jeśli chcesz dowiedzieć się więcej o zabiegach, skonsultować wybór
            terapii lub umówić wizytę, zapraszamy do kontaktu. Chętnie odpowiemy
            na pytania i pomożemy dobrać rozwiązanie dopasowane do Twoich
            potrzeb.
          </p>
          <p>
            Manufaktura Urody to miejsce, w którym stawiamy na indywidualne
            podejście, komfort oraz naturalne efekty.
          </p>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-section__info">
          <span className="section-label">Dane kontaktowe</span>
          <h2>Pozostańmy w kontakcie</h2>

          <div className="contact-list">
            <div className="contact-item">
              <span className="iconWrap">
                <img src={phoneIcon} alt="Telefon" />
              </span>
              <div>
                <h3>Telefon</h3>
                <a href="tel:+48730007459">+48 730 007 459</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="iconWrap">
                <img src={mailIcon} alt="Email" />
              </span>
              <div>
                <h3>Email</h3>
                <a href="mailto:ankuskarolina@gmail.com">
                  ankuskarolina@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="iconWrap">
                <img src={locationIcon} alt="Lokalizacja" />
              </span>
              <div>
                <h3>Adres</h3>
                <p>Adama Mickiewicza 9/1, 59-220 Legnica</p>
              </div>
            </div>
          </div>

          <a
            className="mapButton"
            href="https://maps.app.goo.gl/X3Aia333XbBvDYwcA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otwórz trasę w Google Maps
          </a>
        </div>

        <div className="contact-section__map">
          <iframe
            title="Mapa dojazdu Manufaktura Urody"
            src="https://www.google.com/maps?q=Adama%20Mickiewicza%209/1,%2059-220%20Legnica&z=16&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
