(function () {
  const root = document.documentElement;
  const COPY = {
    lede: {
      en: "This site gathers the information for the recommendation letters. It includes my profile, what I am looking for in the doctorate, and the seven programs for which I need the letters, with the faculty and their publications. At the end are my CV, personal statement, and study objective.",
      es: "Este sitio reúne la información para las cartas de recomendación. Incluye mi perfil, lo que busco en el doctorado y el listado de los siete programas para los que necesito las cartas, con los académicos y sus publicaciones. Al final están mi CV, el personal statement y el objetivo de estudio."
    },
    intro: {
      en: "I am a statistician and epidemiological modeler with a background in the social sciences. I work on tuberculosis and influenza, and I want to understand respiratory infectious diseases more clearly: where they concentrate, how much of that concentration is explained by shared air and housing, and how to turn surveillance data into evidence. I am an early career researcher at SENTINET in Chile and a Lagrange fellow at the ISI Foundation. I want to do the doctorate to be competitive at an international level.",
      es: "Soy estadístico y modelador epidemiológico con background en Ciencias sociales. Trabajo en tuberculosis e influenza y me interesa comprender mejor enfermedades transmisibles respiratorias: dónde se concentran, qué parte de esa concentración se explica por el aire compartido y la vivienda, y cómo convertir datos de vigilancia en evidencia. Soy investigador joven en SENTINET, en Chile, y fellow Lagrange en la ISI Foundation. Quiero hacer el doctorado para ser competitivo a nivel internacional."
    },
    aims: [
      {
        en: {
          kicker: "Aim 1",
          strong: "Understand the biological, environmental, social, and epidemiological mechanisms of airborne infections and their mechanisms of transmission.",
          detail: "I want to treat airborne infection, chiefly tuberculosis and influenza, as one process: pathogen biology, the physical state of shared air, and the social conditions that decide who shares that air and for how long. Humidity, temperature, ventilation, and the behavior of infectious particles are one side. Overcrowding, work, transport, school, and the decision to close a room against the cold are the other."
        },
        es: {
          kicker: "Objetivo 1",
          strong: "Entender los mecanismos biológicos, ambientales, sociales y epidemiológicos de las infecciones aéreas y sus mecanismos de transmisión.",
          detail: "Quiero tratar la infección aérea, sobre todo la tuberculosis y la influenza, como un solo proceso: la biología del patógeno, el estado físico del aire compartido y las condiciones sociales que deciden quién comparte ese aire y por cuánto tiempo. Humedad, temperatura, ventilación y el comportamiento de las partículas infecciosas son un lado. El hacinamiento, el trabajo, el transporte, la escuela y la decisión de cerrar una pieza contra el frío son el otro."
        }
      },
      {
        en: {
          kicker: "Aim 2",
          strong: "Strengthen my skills in statistical and mathematical modeling, and in the use of artificial intelligence, for the public health problems of the next fifty years.",
          detail: "I want to improve my technical skills for understanding the relationship between climate and disease. In the doctorate I want to build and calibrate transmission models that hold particle behavior, contact, and environmental variability in one framework, and to use genomic data to reconstruct how a pathogen moves in space and time. The horizon is respiratory health over the next fifty years, under a climate that is no longer a stable background, with the result tied to a decision: when to vaccinate, what ventilation is worth, where to look for cases."
        },
        es: {
          kicker: "Objetivo 2",
          strong: "Fortalecer mis capacidades en modelamiento estadístico, matemático y el uso de inteligencia artificial, para los problemas de salud pública de los próximos cincuenta años.",
          detail: "Busco mejorar mis capacidades técnicas para comprender la relación entre clima y enfermedad. En el doctorado quiero construir y calibrar modelos de transmisión que junten, en un mismo marco, el comportamiento de las partículas, el contacto y la variabilidad ambiental, y usar datos genómicos para reconstruir cómo se mueve un patógeno en el espacio y en el tiempo. El horizonte es la salud respiratoria de los próximos cincuenta años, con un clima que ya no es un fondo estable, y con el resultado atado a una decisión: cuándo vacunar, qué vale la ventilación, dónde buscar casos."
        }
      },
      {
        en: {
          kicker: "Aim 3",
          strong: "Strengthen skills that belong to the work of a researcher: communication and persuasion, academic writing, funding applications, and building international collaborative networks.",
          detail: "I want to carry a research line across borders: write so a reader outside the project can follow the argument, apply for the funding that continues it, and keep a collaboration active after I return to Chile. I already work across SENTINET in Chile, the ISI Foundation in Turin, and with colleagues I met in São Paulo, Bogotá, and Ireland. After the doctorate I want to return to Chile to work on respiratory health with researchers and public health institutions, and to train students in these methods."
        },
        es: {
          kicker: "Objetivo 3",
          strong: "Fortalecer capacidades propias de la labor del investigador: la comunicación y persuasión, la escritura académica, la postulación a fondos y la construcción de redes de colaboración internacional.",
          detail: "Quiero sostener una línea de investigación a través de fronteras: escribir para que alguien fuera del proyecto pueda seguir el argumento, postular al financiamiento que la continúe y mantener una colaboración activa después de volver a Chile. Ya trabajo entre SENTINET en Chile, la ISI Foundation en Turín y colegas que conocí en São Paulo, Bogotá e Irlanda. Después del doctorado quiero volver a Chile para trabajar en salud respiratoria con investigadores e instituciones de salud pública, y para formar estudiantes en estos métodos."
        }
      }
    ],
    groups: {
      independent: { en: "Independent applications (letters of support)", es: "Postulaciones independientes (cartas de apoyo)" },
      fulbright: { en: "Applied through Fulbright (already submitted)", es: "Programas aplicados a través de Fulbright (ya listos)" }
    },
    ui: {
      deadline: { en: "Deadline", es: "Cierre" },
      programPage: { en: "Program page", es: "Página del programa" },
      courseList: { en: "course list", es: "lista de cursos" },
      core: { en: "Core", es: "Núcleo" },
      people: { en: "People", es: "Personas" },
      profile: { en: "Profile", es: "Perfil" },
      pubs: { en: "Recent publications:", es: "Publicaciones recientes:" },
      preprint: { en: "preprint", es: "prepublicación" },
      download: { en: "Download", es: "Descargar" },
      docs: [
        { id: "cv", en: "Curriculum vitae", es: "Currículum", kind: "CV", file: "docs/CV_JConejeros_2026.pdf" },
        { id: "ps", en: "Personal statement", es: "Declaración personal", kind: "PS", file: "docs/Personal_Statement_JConejeros_EN.pdf" },
        { id: "os", en: "Study objective", es: "Objetivo de estudio", kind: "OS", file: "docs/Study_Objective_JConejeros_EN.pdf" }
      ]
    }
  };

  let lang = root.getAttribute("lang") === "en" ? "en" : "es";
  let openAim = null;
  let openProgramId = null;

  function textOf(value) {
    if (value && typeof value === "object") return value[lang] || value.en;
    return value || "";
  }

  function applyStatic() {
    document.querySelectorAll("[data-en]").forEach(function (node) {
      node.textContent = node.getAttribute(lang === "es" ? "data-es" : "data-en");
    });
    document.getElementById("lede").textContent = COPY.lede[lang];
    document.getElementById("intro").textContent = COPY.intro[lang];
    document.title = lang === "es"
      ? "Guía de aplicaciones doctorales"
      : "Doctoral application guide";
    document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    document.getElementById("lang-es").setAttribute("aria-pressed", lang === "es" ? "true" : "false");
    root.setAttribute("lang", lang);
  }

  const themeBtn = document.getElementById("theme");
  themeBtn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("dossier-theme", next);
  });

  function setLang(next) {
    lang = next;
    localStorage.setItem("site-lang", next);
    applyStatic();
    renderAims();
    renderNav();
    const current = window.DOSSIER.programs.find(function (program) { return program.id === openProgramId; });
    if (current) renderProgram(current);
    renderDocs();
  }
  document.getElementById("lang-en").addEventListener("click", function () { setLang("en"); });
  document.getElementById("lang-es").addEventListener("click", function () { setLang("es"); });

  const aimGrid = document.getElementById("aim-grid");
  const aimDialog = document.getElementById("aim-dialog");
  const colors = ["c-blue", "c-violet", "c-green"];

  function fillDialog(index) {
    const aim = COPY.aims[index][lang];
    document.getElementById("aim-dialog-kicker").textContent = aim.kicker;
    document.getElementById("aim-dialog-body").textContent = aim.detail;
  }

  function renderAims() {
    aimGrid.replaceChildren();
    COPY.aims.forEach(function (aim, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "aim-card " + colors[index];
      const kicker = document.createElement("span");
      kicker.className = "aim-kicker";
      kicker.textContent = aim[lang].kicker;
      const strong = document.createElement("span");
      strong.className = "aim-strong";
      strong.textContent = aim[lang].strong;
      button.append(kicker, strong);
      button.addEventListener("click", function () {
        openAim = index;
        fillDialog(index);
        if (!aimDialog.open) aimDialog.showModal();
      });
      aimGrid.append(button);
    });
    if (aimDialog.open && openAim !== null) fillDialog(openAim);
  }

  document.getElementById("aim-close").addEventListener("click", function () {
    aimDialog.close();
  });
  aimDialog.addEventListener("click", function (event) {
    if (event.target === aimDialog) aimDialog.close();
  });

  const nav = document.getElementById("program-nav");
  const detail = document.getElementById("program-detail");
  const programs = window.DOSSIER.programs;

  function cite(paper) {
    const authors = paper.authors || [];
    let who;
    if (authors.length === 0) who = "";
    else if (authors.length <= 4) who = authors.join(", ");
    else who = authors.slice(0, 3).join(", ") + ", et al";
    const year = paper.year ? paper.year + ". " : "";
    return (who ? who + ". " : "") + year + paper.title + ". " + paper.journal + ".";
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderProgram(program) {
    openProgramId = program.id;
    detail.replaceChildren();
    const head = el("div", "program-head");
    const titles = el("div");
    titles.append(el("p", "aim-kicker", program.university), el("h3", null, program.program));
    const deadline = el("p", "deadline");
    const label = el("span", null, COPY.ui.deadline[lang] + " ");
    const date = el("strong", null, lang === "es" ? "1 dic 2026" : "1 Dec 2026");
    deadline.append(label, date);
    head.append(titles, deadline);
    detail.append(head);

    const links = el("p", "links");
    const programLink = el("a", null, COPY.ui.programPage[lang]);
    programLink.href = program.url;
    programLink.target = "_blank";
    programLink.rel = "noopener";
    links.append(programLink);
    if (program.coursesUrl && program.coursesUrl !== program.url) {
      links.append(document.createTextNode(", "));
      const courseLink = el("a", null, COPY.ui.courseList[lang]);
      courseLink.href = program.coursesUrl;
      courseLink.target = "_blank";
      courseLink.rel = "noopener";
      links.append(courseLink);
    }
    detail.append(links, el("p", "fit", textOf(program.fit)));

    detail.append(el("h4", null, COPY.ui.core[lang]));
    if (program.courses && program.courses.length) {
      const list = el("ul", "courses");
      program.courses.forEach(function (course) {
        const item = el("li");
        item.append(el("code", null, course.code), el("span", null, course.title));
        list.append(item);
      });
      detail.append(list);
    }
    if (program.courseNote) detail.append(el("p", "note", textOf(program.courseNote)));

    detail.append(el("h4", null, COPY.ui.people[lang]));
    program.faculty.forEach(function (person) {
      const row = el("div", "person");
      const photo = document.createElement("img");
      photo.src = "photos/" + person.photo;
      photo.alt = "";
      const body = el("div");
      body.append(el("h5", null, person.name), el("p", "about", textOf(person.about)));
      const profile = el("a", "profile", COPY.ui.profile[lang]);
      profile.href = person.url;
      profile.target = "_blank";
      profile.rel = "noopener";
      body.append(profile, el("p", "pubs-label", COPY.ui.pubs[lang]));
      const pubs = el("ul", "pubs");
      person.papers.forEach(function (paper) {
        const item = el("li");
        if (paper.doi) {
          const link = el("a", null, cite(paper));
          link.href = "https://doi.org/" + paper.doi;
          link.target = "_blank";
          link.rel = "noopener";
          item.append(link);
        } else {
          item.append(document.createTextNode(cite(paper)));
        }
        if (paper.preprint) {
          item.append(document.createTextNode(" "));
          item.append(el("span", "preprint", COPY.ui.preprint[lang]));
        }
        pubs.append(item);
      });
      body.append(pubs);
      row.append(photo, body);
      detail.append(row);
    });

    nav.querySelectorAll("button[data-id]").forEach(function (button) {
      if (button.dataset.id === program.id) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
  }

  function renderNav() {
    const current = openProgramId;
    nav.replaceChildren();
    ["independent", "fulbright"].forEach(function (group) {
      nav.append(el("p", "group-label", COPY.groups[group][lang]));
      let n = 0;
      programs.forEach(function (program) {
        if (program.group !== group) return;
        n += 1;
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.id = program.id;
        button.style.setProperty("--bar", program.color);
        button.append(
          el("span", "num", String(n).padStart(2, "0")),
          el("span", "pname", program.short),
          el("span", "psub", program.city)
        );
        button.addEventListener("click", function () { renderProgram(program); });
        nav.append(button);
      });
    });
    const selected = programs.find(function (program) { return program.id === current; }) || programs[0];
    renderProgram(selected);
  }

  const fileList = document.getElementById("file-list");
  const viewer = document.getElementById("viewer");
  let openDoc = "cv";

  function renderDocs() {
    fileList.replaceChildren();
    COPY.ui.docs.forEach(function (doc) {
      const row = el("div", "file-row");
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.id = doc.id;
      button.setAttribute("role", "tab");
      button.append(el("span", "fname", doc[lang]), el("span", "fkind", doc.kind));
      button.addEventListener("click", function () {
        openDoc = doc.id;
        showDoc(doc);
      });
      const download = el("a", "download", COPY.ui.download[lang]);
      download.href = doc.file;
      download.setAttribute("download", doc.file.split("/").pop());
      row.append(button, download);
      fileList.append(row);
      if (doc.id === openDoc) showDoc(doc);
    });
  }

  function showDoc(doc) {
    viewer.src = doc.file;
    fileList.querySelectorAll("button").forEach(function (button) {
      if (button.dataset.id === doc.id) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
  }

  applyStatic();
  renderAims();
  renderNav();
  renderDocs();
})();
