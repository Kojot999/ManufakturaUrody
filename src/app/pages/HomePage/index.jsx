import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import img6 from "@assets/img5.jpeg";
import img7 from "@assets/img6.jpeg";
import img8 from "@assets/img11.jpeg";
import img9 from "@assets/img9.jpeg";

import img1 from "@assets/project3a.jpeg";
import img2 from "@assets/project4b.jpeg";
import img3 from "@assets/project5b.jpeg";
import img4 from "@assets/project3e.jpeg";
import img5 from "@assets/project4c.jpeg";

export default function HomePage() {
  return (
    <section className="home-page">
      <section className="heroSection">
        <div className="heroOverlay" />

        <div className="heroContent">
          <div className="heroCopy">
            <p className="eyebrow">Bast-Grys</p>
            <h1>
              Przestrzenie małej architektury,
              <br />
              rewitalizacje parków, zabytków,
              <br />
              mała retencja i hydrotechnika
            </h1>

            <p className="lead">
              Specjalizujemy się w pracach z kostki granitowej, realizacjach
              terenowych oraz elementach małej architektury. Oferujemy
              kompleksowe wykonanie nawierzchni, ścieżek, parkingów, mostków,
              kładek, przepustów oraz realizacje specjalistyczne w
              przestrzeniach publicznych, parkach, obiektach zabytkowych i
              terenach leśnych.
            </p>

            <div className="heroActions">
              <a className="primaryBtn" href="/oferta">
                Zobacz ofertę
              </a>
              <a className="secondaryBtn" href="/kontakt">
                Kontakt i lokalizacja
              </a>
            </div>
          </div>

          <div className="heroStats">
            <div className="stat">
              <strong>Specjalizacja</strong>
              <span>Kostka granitowa i realizacje terenowe</span>
            </div>
            <div className="stat">
              <strong>Realizacje</strong>
              <span>Parki, pałace, nadleśnictwa, przestrzenie publiczne</span>
            </div>
            <div className="stat">
              <strong>Zakres</strong>
              <span>Ścieżki, parkingi, kładki, przepusty, itp</span>
            </div>
          </div>
        </div>
      </section>

      <section className="introSection">
        <div className="sectionHeading">
          <span className="sectionLine" />
          <p>O firmie</p>
        </div>

        <div className="introGrid">
          <div className="introText">
            <h2>
              Tworzymy trwałe nawierzchnie granitowe wraz z elementami małej
              architektury
            </h2>
            <p>
              Bast-Grys to firma specjalizująca się w realizacjach prac zarówno
              klasycznych nawierzchni, jak i elementów specjalistycznych w
              przestrzeniach publicznych, leśnych i zabytkowych.
            </p>
            <p>
              Realizujemy inwestycje dla samorządów, nadleśnictw, firm oraz
              klientów prywatnych. Łączymy solidne wykonanie z estetyką, która
              dobrze wpisuje się w parki, historyczne założenia pałacowe i
              reprezentacyjne otoczenie budynków.
            </p>
          </div>

          <div className="introGallery">
            <figure className="img img1">
              <img src={img6} alt="Realizacja granitowa" />
            </figure>

            <figure className="img img2">
              <img src={img7} alt="Układanie kostki" />
            </figure>

            <figure className="img img3">
              <img src={img8} alt="Ścieżki z granitu" />
            </figure>

            <figure className="img img4">
              <img src={img9} alt="Nawierzchnie granitowe" />
            </figure>
          </div>
        </div>
      </section>

      <section className="servicesSection">
        <div className="sectionHeading">
          <span className="sectionLine" />
          <p>Zakres usług</p>
        </div>

        <div className="serviceGrid">
          <article className="serviceCard">
            <h3>Układanie kostki granitowej</h3>
            <p>
              Wykonujemy trwałe nawierzchnie z kostki granitowej o wysokiej
              odporności i estetycznym wykończeniu.
            </p>
          </article>
          <article className="serviceCard">
            <h3>Ścieżki parkowe i alejki</h3>
            <p>
              Realizacje do parków, terenów zielonych, ogrodów i przestrzeni
              publicznych.
            </p>
          </article>
          <article className="serviceCard">
            <h3>Małej architektury</h3>
            <p>
              Wykonujemy elementy małej architektury z granitu, takie jak
              posągi, rzeźby, ławki, fontanny i detale architektoniczne.
            </p>
          </article>
          <article className="serviceCard">
            <h3>Place i parkingi</h3>
            <p>
              Kompleksowe wykonanie nawierzchni użytkowych dla inwestycji
              prywatnych i publicznych.
            </p>
          </article>
          <article className="serviceCard">
            <h3>Otoczenie obiektów zabytkowych</h3>
            <p>
              Nawierzchnie wokół pałaców, dworów, rezydencji i budynków o
              reprezentacyjnym charakterze.
            </p>
          </article>
          <article className="serviceCard">
            <h3>Renowacje i odtworzenia</h3>
            <p>
              Odtwarzamy układy granitowe i wykonujemy prace tam, gdzie liczy
              się dokładność oraz zgodność z istniejącą architekturą.
            </p>
          </article>
        </div>

        <div className="sectionActions">
          <Link className="sectionBtn" to="/oferta">
            Zobacz ofertę
          </Link>
        </div>
      </section>

      <section className="gallerySection">
        <div className="sectionHeading">
          <span className="sectionLine" />
          <p>Realizacje</p>
        </div>

        <div className="galleryLayout">
          <figure className="galleryMain">
            <img src={img1} alt="Układanie kostki granitowej" />
          </figure>

          <div className="gallerySide">
            <figure>
              <img src={img2} alt="Ścieżki z kostki granitowej" />
            </figure>
            <figure>
              <img src={img3} alt="Przestrzeń z nawierzchnią granitową" />
            </figure>
            <figure>
              <img src={img4} alt="Realizacja brukarska z granitu" />
            </figure>
            <figure>
              <img src={img5} alt="Prace specjalistyczne z kostki granitowej" />
            </figure>
          </div>
        </div>

        <div className="sectionActions">
          <Link className="sectionBtn" to="/realizacje">
            Zobacz nasze zrealizowane projekty
          </Link>
        </div>
      </section>

      <section className="specialSection">
        <div className="specialBox">
          <div className="specialText">
            <p className="smallLabel">Prace specjalistyczne</p>
            <h2>
              Realizujemy inwestycje wymagające doświadczenia i dokładności
            </h2>
            <p>
              Wykonujemy kładki, pomosty, przepusty, ścieżki terenowe,
              nawierzchnie przy obiektach zabytkowych oraz układy granitowe w
              miejscach, gdzie liczy się trwałość, estetyka i dopasowanie do
              otoczenia.
            </p>
          </div>

          <div className="specialList">
            <div className="specialItem">
              Place, skwerki wraz z posągami i fontannami
            </div>
            <div className="specialItem">Renowacje elementów zabytkowych</div>
            <div className="specialItem">
              Architektura wodna i hydrotechnika{" "}
            </div>
            <div className="specialItem">
              Przestrzenie publiczne o wysokich wymaganiach estetycznych
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <h2>Szukasz wykonawcy prac małej architektury?</h2>
        <p>
          Skontaktuj się z nami, aby omówić szczegóły Twojej inwestycji i
          uzyskać indywidualną wycenę. Jesteśmy gotowi podjąć się realizacji
          nawet najbardziej wymagających projektów.
        </p>

        <div className="ctaSectionActions">
          <a className="primaryBtn" href="/kontakt">
            Skątakuj się z nami
          </a>
          <a className="secondaryBtn" href="/realizacje">
            Zobacz realizacje
          </a>
        </div>
      </section>
    </section>
  );
}
