/* Une seule page détail sert tous les projets selon ?id=... */
(() => {
  const root = document.querySelector(".project-main");
  if (!root) return;
  const categories = window.PORTFOLIO_CATEGORIES || {};
  const id = new URLSearchParams(window.location.search).get("id");
  const project = (window.PORTFOLIO_PROJECTS || []).find((item) => item.id === id);

  if (!project) {
    root.innerHTML = `<section class="missing-project"><p class="project-kicker">PROJET INTROUVABLE</p><h1>Aucun projet trouvé.</h1><p>Ce projet n'existe pas ou n'a pas encore été renseigné.</p><a class="button button-dark" href="../index.html#projets"><span>←</span> Retour aux projets</a></section>`;
    return;
  }

  document.title = `${project.name} — OGBON JUNIOR`;

  const link = (url, label) =>
    url ? `<a class="button button-dark" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span>↗</span></a>` : "";
  const buttons = `${link(project.demoUrl, "Voir la démo")}${link(project.githubUrl, "GitHub")}`;
  const notices = `${project.demoUrl ? "" : `<p class="project-unavailable">Démo non disponible pour le moment.</p>`}${
    project.githubUrl ? "" : `<p class="project-unavailable">Code source non disponible pour le moment.</p>`
  }`;

  root.innerHTML = `
    <article class="project-detail">
      <p class="project-kicker">${categories[project.category] || "PROJET"}</p>
      <h1>${project.name}</h1>
      <figure class="project-cover"><img src="../${project.image}" alt="${project.imageAlt}"></figure>
      <div class="project-copy">
        <h2>À propos du projet</h2>
        <div>
          <p class="project-description">${project.description}</p>
          <ul class="tech-list">${project.technologies
            .map((tech, i) => `<li style="--i:${i}">${tech}</li>`)
            .join("")}</ul>
          <dl class="project-meta">
            <div><dt>Catégorie d'expérience</dt><dd>${categories[project.category] || "—"}</dd></div>
          </dl>
          <div class="project-buttons">${buttons}</div>
          ${notices}
          <a class="back-bottom" href="../index.html#projets"><span>←</span> Retour aux projets</a>
        </div>
      </div>
    </article>`;
})();
