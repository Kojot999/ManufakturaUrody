import "./style.scss";
import iphone from "@assets/iphone.png";
import email from "@assets/email.png";
import fb from "@assets/fb.png";
import ig from "@assets/ig.png";
import location from "@assets/location.png";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="footerTop">
          <div className="col locationCol">
            <h3>Lokalizacja</h3>
            <p>Adama Mickiewicza 9/1</p>
            <p>59-220 Legnica</p>

            <a
              className="mapButton"
              href="https://maps.app.goo.gl/X3Aia333XbBvDYwcA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconWrap">
                <img src={location} alt="Lokalizacja" />
              </span>
            </a>
          </div>

          <div className="col contactCol">
            <h3>Kontakt</h3>

            <div className="phoneItem">
              <span className="iconWrap">
                <img src={iphone} alt="Telefon" />
              </span>

              <a href="tel:+48730007459">
                Karolina Ankus
                <span>+48 730 007 459</span>
              </a>
            </div>
            <div className="mailItem">
              <span className="iconWrap">
                <img src={email} alt="Email" />
              </span>
              <a className="mailLink" href="mailto:ankuskarolina@gmail.com">
                ankuskarolina@gmail.com
              </a>
            </div>
          </div>

          <div className="col socialCol">
            <h3>Social media</h3>

            <a
              href="https://www.instagram.com/manufaktura_urody_ankus/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <img src={ig} alt="Instagram" />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/ManufakturaAnkus/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <img src={fb} alt="Facebook" />
              Facebook
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} Manufaktura Urody. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
