import "./style.scss";
import phoneIcon from "@assets/phoneIcon.png";
import mailIcon from "@assets/mailIcon.png";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <section className="contactHero">
        <div className="heroBox">
          <p className="eyebrow">Kontakt Bast-Grys</p>
          <h1>Skontaktuj się z nami</h1>
          <p className="lead">
            W celu nawiązania współpracy, uzyskania szczegółowych informacji o
            ofercie lub omówienia konkretnego projektu, zapraszamy do kontaktu.
            Jesteśmy do Państwa dyspozycji.
          </p>
        </div>
      </section>

      <section className="contactLayout">
        <div className="locationSection">
          <div className="sectionHeading">
            <span className="sectionLine" />
            <p>Lokalizacja</p>
          </div>

          <div className="locationGrid">
            <div className="aboutCard">
              <h2>Działamy na terenie całej Polski</h2>
              <p>
                Nasza firma znajduje się w Miśliborzu w województwie
                dolnośląskim i obsługuje realizacje na terenie całej Polski.
              </p>
              <p>
                Adres:
                <br />
                <strong>Myślibórz 18</strong>
                <br />
                <strong>59-411 Paszowice</strong>
              </p>
            </div>

            <div className="mapCard">
              <div className="mapHeader">
                <span className="dot" />
                <span>Mapa dojazdu</span>
              </div>

              <div className="mapFrame">
                <iframe
                  title="Mapa - Bast-Grys"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.2349107718827!2d16.117230773446153!3d51.02428723017498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f04fb743e023b%3A0xd02450749106356!2zTXnFm2xpYsOzcnogMThBLCA1OS00MTEgTXnFm2xpYsOzcno!5e1!3m2!1spl!2spl!4v1774695129913!5m2!1spl!2spl"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                className="mapLink"
                href="https://maps.app.goo.gl/nWzyGRk4hz6WwbJc7"
                target="_blank"
                rel="noreferrer"
              >
                Otwórz w Google Maps →
              </a>
            </div>
          </div>
        </div>

        <div className="contactSection">
          <div className="sectionHeading">
            <span className="sectionLine" />
            <p>Kontakt</p>
          </div>

          <div className="contactGrid">
            <div className="contactCard">
              <h2>Dane kontaktowe</h2>

              <ul className="contactList">
                <li>
                  <span className="iconWrap">
                    <img alt="" src={phoneIcon} />
                  </span>
                  <a href="tel:+48605144251">
                    Sebastian Ankus <span>+48 661 742 065</span>
                  </a>
                </li>

                <li>
                  <span className="iconWrap">
                    <img alt="" src={phoneIcon} />
                  </span>
                  <a href="tel:+48726057889">
                    Ewa łuszcz (Biuro) <span>+48 575 100 811</span>
                  </a>
                </li>

                <li>
                  <span className="iconWrap">
                    <img alt="" src={mailIcon} />
                  </span>
                  <a href="mailto:radbex2@gmail.com">
                    E-mail <span>radbex2@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="hoursCard">
              <h2>Godziny pracy</h2>

              <ul className="hoursList">
                <li>
                  <span className="day">Poniedziałek – Piątek</span>
                  <span className="time">7:00 – 17:00</span>
                </li>
                <li>
                  <span className="day">Sobota</span>
                  <span className="time">8:00 – 13:00</span>
                </li>
                <li>
                  <span className="day">Niedziela</span>
                  <span className="time muted">Nieczynne</span>
                </li>
              </ul>

              <p className="hoursNote">
                W pilnych sprawach dotyczących realizacji prosimy o kontakt
                telefoniczny.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
