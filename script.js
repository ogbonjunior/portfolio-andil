/* Navigation, animations et rendu des contenus dynamiques */
(() => {
  "use strict";

  const projects = window.PORTFOLIO_PROJECTS || [];
  const links = window.PORTFOLIO_LINKS || {};
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Écran d'entrée court, supprimé pour les personnes réduisant les animations.
  window.addEventListener("load", () => document.body.classList.add("loaded"));

  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };
  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu?.setAttribute("aria-hidden", String(isOpen));
    document.body.classList.toggle("menu-open", !isOpen);
  });
  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

  // Révélations au défilement et animation des lignes.
  const revealItems = document.querySelectorAll(".reveal, .reveal-lines, .reveal-image, .skill-row");
  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -7%" });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const setActiveSection = () => {
    const current = sections.reduce((active, section) => section.getBoundingClientRect().top <= 180 ? section : active, sections[0]);
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current?.id}`));
  };
  document.addEventListener("scroll", setActiveSection, { passive: true });

  // Rendu partagé par la grille générale et le filtrage par catégorie d'expérience.
  const categoryLabels = window.PORTFOLIO_CATEGORIES || {
    personal: "PROJETS PERSONNELS",
    university: "PROJETS UNIVERSITAIRES",
    internship: "STAGES",
    client: "MISSIONS RÉALISÉES POUR DES CLIENTS"
  };
  const projectLink = (project) => `projects/project.html?id=${encodeURIComponent(project.id)}`;
  const projectCard = (project, index) => `
    <article class="project-card reveal is-visible" style="--d:${index * 60}ms">
      <a href="${projectLink(project)}" aria-label="Voir le projet ${project.name}">
        <figure><img src="${project.image}" alt="${project.imageAlt}" loading="lazy" width="1024" height="768"><span>${String(index + 1).padStart(2, "0")}</span></figure>
        <p class="card-category">${categoryLabels[project.category] || "PROJET"}</p>
        <h3>${project.name}</h3>
        ${project.shortDescription ? `<p class="card-text">${project.shortDescription}</p>` : ""}
        <span class="card-cta">Voir le projet <b>↗</b></span>
      </a>
    </article>`;
  const emptyState = (message) => `<div class="empty-state reveal is-visible"><span>À VENIR</span><p>${message}</p><small>Aucun projet réel n'a encore été renseigné.</small></div>`;

  const projectsList = document.getElementById("projects-list");
  if (projectsList) {
    projectsList.classList.add("projects-grid");
    projectsList.innerHTML = projects.length
      ? projects.map(projectCard).join("")
      : emptyState("Mes projets seront présentés ici dès que leurs informations et aperçus seront disponibles.");
  }

  // Filtrage par catégorie, sans rechargement de page.
  const experienceList = document.getElementById("experience-list");
  if (experienceList) {
    const keys = Object.keys(categoryLabels);
    experienceList.innerHTML = `
      <div class="experience-filters" role="tablist" aria-label="Catégories d'expérience">
        ${keys
          .map(
            (key, i) =>
              `<button type="button" role="tab" class="experience-filter${i === 0 ? " is-active" : ""}" data-category="${key}" aria-selected="${i === 0}"><span>${String(i + 1).padStart(2, "0")}</span>${categoryLabels[key]}</button>`
          )
          .join("")}
      </div>
      <div class="projects-grid experience-grid" id="experience-grid" aria-live="polite"></div>`;

    const grid = experienceList.querySelector("#experience-grid");
    const buttons = [...experienceList.querySelectorAll(".experience-filter")];
    const renderCategory = (key) => {
      const items = projects.filter((project) => project.category === key);
      grid.classList.remove("is-switching");
      void grid.offsetWidth;
      grid.classList.add("is-switching");
      grid.innerHTML = items.length
        ? items.map(projectCard).join("")
        : emptyState(`Aucun projet dans « ${categoryLabels[key]} » pour le moment.`);
    };
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        buttons.forEach((other) => {
          const active = other === button;
          other.classList.toggle("is-active", active);
          other.setAttribute("aria-selected", String(active));
        });
        renderCategory(button.dataset.category);
      })
    );
    renderCategory(keys[0]);
  }


  // ------------------------------------------------------------------
  // Liens sociaux (Facebook / WhatsApp) — désactivés tant que les vraies
  // URLs (contactLinks dans projects-data.js) n'ont pas été renseignées.
  // ------------------------------------------------------------------
  const isPlaceholderLink = (url) => !url || /^\[.*\]$/.test(url) || url === "#";

  const wireLink = (id, url, fallbackMessage) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isPlaceholderLink(url)) {
      el.setAttribute("aria-disabled", "true");
      el.classList.add("is-placeholder");
      el.addEventListener("click", (event) => {
        event.preventDefault();
        showToast(fallbackMessage, "error");
      });
    } else {
      el.href = url;
    }
  };

  wireLink("link-facebook-profile", links.facebookProfile, "Le lien vers le profil Facebook sera ajouté prochainement.");
  wireLink("link-facebook-page", links.facebookPage, "Le lien vers la page Facebook sera ajouté prochainement.");
  wireLink("link-whatsapp-contact", links.whatsapp, "Le lien WhatsApp sera ajouté prochainement.");
  wireLink("footer-link-facebook", links.facebookPage || links.facebookProfile, "Le lien Facebook sera ajouté prochainement.");
  wireLink("footer-link-whatsapp", links.whatsapp, "Le lien WhatsApp sera ajouté prochainement.");

  const whatsappButton = document.getElementById("whatsapp-button");
  whatsappButton?.addEventListener("click", () => {
    if (!isPlaceholderLink(links.whatsapp)) window.open(links.whatsapp, "_blank", "noopener,noreferrer");
    else showToast("L’URL WhatsApp sera ajoutée prochainement.", "error");
  });

  // ------------------------------------------------------------------
  // Notifications (toasts) après envoi du formulaire
  // ------------------------------------------------------------------
  const toastRegion = document.getElementById("toast-region");
  let toastTimer = null;
  const showToast = (message, type) => {
    if (!toastRegion) return;
    clearTimeout(toastTimer);
    toastRegion.innerHTML = `
      <div class="toast toast-${type}">
        <p>${message}</p>
        <button type="button" class="toast-close" aria-label="Fermer la notification">×</button>
      </div>`;
    const toastEl = toastRegion.querySelector(".toast");
    requestAnimationFrame(() => toastEl?.classList.add("is-visible"));
    const dismiss = () => {
      toastEl?.classList.remove("is-visible");
      setTimeout(() => { toastRegion.innerHTML = ""; }, 300);
    };
    toastRegion.querySelector(".toast-close")?.addEventListener("click", dismiss);
    toastTimer = setTimeout(dismiss, 7000);
  };

  // ------------------------------------------------------------------
  // Formulaire de contact : validation + envoi réel via Web3Forms
  // ------------------------------------------------------------------
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("contact-submit");
  const submitLabel = submitButton?.querySelector(".btn-label");
  const accessKey = window.WEB3FORMS_ACCESS_KEY || "";
  const formLoadTime = Date.now();
  const SUBMIT_COOLDOWN_MS = 30000;
  const RATE_LIMIT_KEY = "ogbonjunior_last_contact_submit";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fieldErrorMessages = {
    name: "Veuillez renseigner votre nom.",
    email: "Veuillez renseigner une adresse e-mail valide.",
    whatsapp: "Veuillez ajouter votre numéro WhatsApp.",
    subject: "Veuillez renseigner le sujet de votre message.",
    message: "Veuillez renseigner votre message."
  };

  const setFieldError = (name, message) => {
    const input = form?.elements.namedItem(name);
    const errorEl = document.getElementById(`${name}-error`);
    if (errorEl) errorEl.textContent = message || "";
    if (input instanceof HTMLElement) input.setAttribute("aria-invalid", String(Boolean(message)));
  };

  const validateForm = (data) => {
    const errors = {};
    if (!String(data.get("name") || "").trim()) errors.name = fieldErrorMessages.name;
    const email = String(data.get("email") || "").trim();
    if (!email || !emailPattern.test(email)) errors.email = fieldErrorMessages.email;
    if (!String(data.get("whatsapp") || "").trim()) errors.whatsapp = fieldErrorMessages.whatsapp;
    if (!String(data.get("subject") || "").trim()) errors.subject = fieldErrorMessages.subject;
    if (!String(data.get("message") || "").trim()) errors.message = fieldErrorMessages.message;
    return errors;
  };

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!(form instanceof HTMLFormElement) || !submitButton) return;

    // Piège à robots : si le champ caché est rempli, on ignore silencieusement.
    const honeypot = String(new FormData(form).get("botcheck") || "");
    // Piège temporel : un envoi en moins de 3 secondes après le chargement est suspect.
    const submittedTooFast = Date.now() - formLoadTime < 3000;
    if (honeypot || submittedTooFast) return;

    // Anti-spam simple côté client : un envoi toutes les 30 secondes maximum.
    const lastSubmit = Number(sessionStorage.getItem(RATE_LIMIT_KEY) || 0);
    if (Date.now() - lastSubmit < SUBMIT_COOLDOWN_MS) {
      showToast("Veuillez patienter quelques secondes avant de renvoyer un message.", "error");
      return;
    }

    const data = new FormData(form);
    Object.keys(fieldErrorMessages).forEach((name) => setFieldError(name, ""));
    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([name, message]) => setFieldError(name, message));
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    if (!accessKey || /^\[.*\]$/.test(accessKey)) {
      showToast("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement par WhatsApp.", "error");
      return;
    }

    submitButton.setAttribute("disabled", "true");
    if (submitLabel) submitLabel.textContent = "Envoi en cours…";

    const receivedAt = new Date().toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" });
    const payload = {
      access_key: accessKey,
      subject: `Nouveau message depuis le portfolio — ${String(data.get("subject") || "")}`,
      from_name: "Formulaire de contact — OGBON JUNIOR",
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      whatsapp: String(data.get("whatsapp") || ""),
      sujet: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      "Date et heure de réception": receivedAt,
      botcheck: ""
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result && result.success) {
        form.reset();
        sessionStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
        showToast("Merci pour votre message. Nous allons vous répondre dans un délai de 12 heures.", "success");
      } else {
        showToast("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement par WhatsApp.", "error");
      }
    } catch (error) {
      showToast("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement par WhatsApp.", "error");
    } finally {
      submitButton.removeAttribute("disabled");
      if (submitLabel) submitLabel.textContent = "Envoyer le message";
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
