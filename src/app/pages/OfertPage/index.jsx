import "./style.scss";
import { Link } from "react-router-dom";
import img1 from "@assets/img9.jpeg";
import img2 from "@assets/img7.jpeg";
import img3 from "@assets/img8.jpeg";
import img4 from "@assets/img10.jpeg";

export default function OfertPage() {
  return (
    <section className="ofert-page">
      <section className="offerHero">
        <div className="heroCopy">
          <p className="eyebrow">Oferta Bast-Grys</p>

          <h1>Granit Posągi i elementy małej architektury</h1>

          <p className="lead">
            Wykonujemy nawierzchnie z kostki granitowej oraz elementy
            infrastruktury terenowej i reprezentacyjnej. Realizujemy inwestycje
            dla samorządów, firm, nadleśnictw i klientów prywatnych.
          </p>
        </div>

        <div className="heroVisual">
          <figure className="mainImage">
            <img src={img1} alt="Realizacja z kostki granitowej" />
          </figure>

          <div className="sideImages">
            <figure>
              <img src={img2} alt="Układanie nawierzchni granitowej" />
            </figure>
            <figure>
              <img src={img3} alt="Ścieżki i chodniki z kostki granitowej" />
            </figure>
            <figure>
              <img src={img4} alt="Detale układania kostki granitowej" />
            </figure>
          </div>
        </div>
      </section>

      <section className="scopeSection">
        <div className="sectionHeading">
          <span className="sectionLine" />
          <p>Zakres oferty</p>
        </div>

        <div className="scopeGrid">
          <article className="scopeCard">
            <h3>Układanie kostki granitowej</h3>
            <p>
              Wykonujemy trwałe nawierzchnie z kostki granitowej o wysokiej
              odporności i estetycznym wykończeniu.
            </p>
          </article>

          <article className="scopeCard">
            <h3>Ścieżki parkowe i alejki</h3>
            <p>
              Realizacje do parków, terenów zielonych, ogrodów i przestrzeni
              publicznych.
            </p>
          </article>

          <article className="scopeCard">
            <h3>Posągi i elementy małej architektury</h3>
            <p>
              Wykonujemy elementy małej architektury z granitu, takie jak
              posągi, rzeźby, ławki, fontanny i detale architektoniczne.
            </p>
          </article>

          <article className="scopeCard">
            <h3>Place i parkingi</h3>
            <p>
              Kompleksowe wykonanie nawierzchni użytkowych dla inwestycji
              prywatnych i publicznych.
            </p>
          </article>

          <article className="scopeCard">
            <h3>Otoczenie obiektów zabytkowych</h3>
            <p>
              Nawierzchnie wokół pałaców, dworów, rezydencji i budynków o
              reprezentacyjnym charakterze.
            </p>
          </article>

          <article className="scopeCard">
            <h3>Renowacje i odtworzenia</h3>
            <p>
              Odtwarzamy układy granitowe i wykonujemy prace tam, gdzie liczy
              się dokładność oraz zgodność z istniejącą architekturą.
            </p>
          </article>
        </div>
      </section>

      <section className="specialSection">
        <div className="sectionHeading">
          <span className="sectionLine" />
          <p>Prace specjalistyczne</p>
        </div>

        <div className="specialLayout">
          <div className="specialContent">
            <h2>Realizacje wymagające doświadczenia i precyzji</h2>
            <p>
              Oprócz klasycznych nawierzchni wykonujemy także prace specjalne w
              miejscach wymagających trwałości, estetyki, dopasowania i
              charakteru.
            </p>
          </div>

          <div className="specialList">
            <div className="specialItem">
              Place, skwerki wraz z posągami i fontannami
            </div>
            <div className="specialItem">Renowacje elementów zabytkowych</div>
            <div className="specialItem">
              Architektura wodna i hydrotechnika
            </div>
            <div className="specialItem">
              Przestrzenie publiczne o wysokich wymaganiach estetycznych
            </div>
          </div>
        </div>
      </section>

      <section className="clientsSection">
        <div className="sectionHeading">
          <span className="sectionLine" />
          <p>Dla kogo pracujemy</p>
        </div>

        <div className="clientsGrid">
          <div className="clientTile">Samorządy i jednostki publiczne</div>
          <div className="clientTile">
            Nadleśnictwa i zarządcy terenów zielonych
          </div>
          <div className="clientTile">Firmy i inwestorzy prywatni</div>
          <div className="clientTile">Właściciele obiektów historycznych</div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaBox">
          <div className="ctaText">
            <h2>Potrzebujesz wyceny realizacji ?</h2>
            <p>
              Skontaktuj się z nami, a przygotujemy ofertę dopasowaną do Twoich
              potrzeb.
            </p>
          </div>

          <div className="ctaActions">
            <Link className="primaryBtn" to="/kontakt">
              Przejdź do kontaktu
            </Link>
            <Link className="secondaryBtn" to="/realizacje">
              Zobacz realizacje
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
