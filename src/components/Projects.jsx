// import {FaGithub} from "react-icons/fa";
import starwarsImg from "../assets/starwars.jpg";
import leamoreauImg from "../assets/Lea-moreau.png";
import mrpopcornImg from "../assets/MrPopcorn.png";

function Projects() {
  return (
    <section className="projects">
      <h2>Projets</h2>

      <article className="project-card">
        <h3>Projet simple Léa Moreau (HTML / CSS)</h3>
        <a
          className="App-link"
          href="https://github.com/benalifatna/Projet-Lea-Moreau"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaGithub className="github-icon" /> */}
          Site de Léa Moreau
        </a>
        <p>
          Site vitrine professionnelle pour une infirmière libérale qui présente
          son profil, ses services avec un lien menant à Calendly pour une prise 
          de rendez-vous ainsi qu'un moyen de contact : email, téléphone et formulaire.
          Utilisation uniquement de HTML5 et CSS3 pour un site statique en responsive.
        </p>
         <img src={leamoreauImg} alt="Aperçu projet Léa Moreau" />
      </article>

      <article className="project-card">
        <h3>Gestion de films (PHP / MySQL)</h3>
        <a
          className="App-link"
          href="https://github.com/benalifatna/MR-Popcorn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaGithub className="github-icon" /> */}
          GIT-Mr-Popcorn
        </a>
        <p>
          Application permettant d'ajouter, modifier et supprimer des films.
          Utilisation de PDO, formulaires sécurisés et base de données relationnelle.
        </p>
          <img src={mrpopcornImg} alt="Aperçu projet Mr Popcorn" />
      </article>

      <article className="project-card">
        <h3>Application API Star Wars (JavaScript-Fetch-Axios)</h3>
        <a
          className="App-link"
          href="https://github.com/benalifatna/dwwm22-TP-AJAX-FETCH-AXIOS"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaGithub className="github-icon" /> */}
          GIT-TP-AJAX-FETCH-AXIOS 
        </a>
        <p>
          Application JavaScript consommant l'API SWAPI pour afficher et rechercher
          des personnages Star Wars. Développé en JavaSript, Fetch et Axios.
        </p>
         <img src={starwarsImg} alt="Aperçu projet Star Wars API" />
      </article>
      
      {/* <article className="project-card">
        <h3>Blog dynamique</h3>
        <p>
          Blog avec système de пavigation, commentaires et gestion des utilisateurs.
          Développé en PHP avec une architecture claire.
        </p>
      </article> */}

      <article className="project-card">
        <h3>Portfolio React</h3>
        <p>
          Version React de mon portfolio afin de découvrir les composants,
          le JSX et l'organisation d'une application moderne.
        </p>
      </article>
    </section>
  );
}

export default Projects;


