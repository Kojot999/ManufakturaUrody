import "./style.scss";
import phoneIcon from "@assets/phoneIcon.png";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="footerTop">
          <div className="dataBox">
            <h3>Dane firmy</h3>
            <ul>
              <li>Bast-Grys</li>
              <li>Myślibórz 18</li>
              <li>59-411 Paszowice</li>
              <li>NIP: 6951336990</li>
            </ul>
          </div>

          <div className="contactBox">
            <h3>Kontakt</h3>

            <ul className="footerPhone">
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
                  Ewa Łuszcz (Biuro)<span>+48 575 100 811</span>
                </a>
              </li>
            </ul>

            <a className="mailLink" href="mailto:radbex2@gmail.com">
              radbex2@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
