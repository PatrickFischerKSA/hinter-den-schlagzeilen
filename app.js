const STORAGE_KEY = "hinter-den-schlagzeilen-state-v2";
const data = window.LEARNING_DATA;

const state = loadState();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      notes: [],
      quiz: {},
      dilemmas: {},
      reflections: {},
      methodsSolved: false,
      sourceChoices: {}
    };
  } catch {
    return { notes: [], quiz: {}, dilemmas: {}, reflections: {}, methodsSolved: false, sourceChoices: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateProgress();
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function formatTime(seconds = 0) {
  if (!Number.isFinite(seconds)) return "00:00";
  const rounded = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(rounded / 60);
  const rest = String(rounded % 60).padStart(2, "0");
  return `${String(minutes).padStart(2, "0")}:${rest}`;
}

function parseTime(value) {
  const parts = value.split(":").map(Number);
  if (parts.some(Number.isNaN)) return null;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

function initVideoTools() {
  const video = $("#lesson-video");
  $("#capture-time")?.addEventListener("click", () => {
    $("#note-time").value = formatTime(video?.currentTime || 0);
    $("#note-text").focus();
  });

  $$("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!video) return;
      video.currentTime = Number(button.dataset.jump);
      video.play().catch(() => {});
    });
  });
}

function renderNotes() {
  const list = $("#note-list");
  if (!list) return;
  if (!state.notes.length) {
    list.innerHTML = `<p class="empty">Noch keine Notizen. Sammle beim Sehen mindestens drei präzise Beobachtungen.</p>`;
    return;
  }

  list.innerHTML = state.notes.map((note, index) => `
    <article class="note-card">
      <button type="button" class="note-time" data-note-jump="${escapeHtml(note.time)}">${escapeHtml(note.time)}</button>
      <div>
        <strong>${escapeHtml(note.category)}</strong>
        <p>${escapeHtml(note.text)}</p>
      </div>
      <button class="remove-note" type="button" data-remove-note="${index}" aria-label="Notiz löschen">×</button>
    </article>
  `).join("");

  $$("[data-remove-note]").forEach((button) => {
    button.addEventListener("click", () => {
      state.notes.splice(Number(button.dataset.removeNote), 1);
      saveState();
      renderNotes();
      renderPortfolio();
    });
  });

  $$("[data-note-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const video = $("#lesson-video");
      const seconds = parseTime(button.dataset.noteJump);
      if (video && seconds !== null) {
        video.currentTime = seconds;
        video.play().catch(() => {});
      }
    });
  });
}

function initNotes() {
  $("#add-note")?.addEventListener("click", () => {
    const time = $("#note-time").value.trim();
    const text = $("#note-text").value.trim();
    const category = $("#note-category").value;
    if (!time || !text) {
      $("#note-text").placeholder = "Bitte Zeitmarke und Beobachtung eintragen.";
      return;
    }
    state.notes.unshift({ time, text, category, createdAt: new Date().toISOString() });
    $("#note-text").value = "";
    saveState();
    renderNotes();
    renderPortfolio();
  });
  renderNotes();
}

function renderQuiz(items = data.quiz) {
  const grid = $("#quiz-grid");
  if (!grid) return;
  grid.innerHTML = items.map((item, itemIndex) => {
    const selected = state.quiz[item.id]?.selected;
    const feedback = selected === undefined ? "" : `
      <div class="answer-feedback ${selected === item.answer ? "correct" : "wrong"}">
        <strong>${selected === item.answer ? "Richtig" : "Noch nicht ganz"}</strong>
        <p>${item.feedback[selected]}</p>
        <p class="follow-up">${item.followUp}</p>
      </div>
    `;
    return `
      <article class="quiz-card" style="--delay:${itemIndex * 40}ms">
        <span class="tag">${item.type}</span>
        <h3>${escapeHtml(item.question)}</h3>
        <div class="option-list">
          ${item.options.map((option, index) => `
            <button
              class="${selected === index ? "is-selected" : ""} ${selected !== undefined && index === item.answer ? "is-answer" : ""}"
              type="button"
              data-quiz="${item.id}"
              data-answer="${index}"
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${escapeHtml(option)}
            </button>
          `).join("")}
        </div>
        ${feedback}
      </article>
    `;
  }).join("");

  $$("[data-quiz]").forEach((button) => {
    button.addEventListener("click", () => {
      state.quiz[button.dataset.quiz] = { selected: Number(button.dataset.answer) };
      saveState();
      renderQuiz(items);
      renderPortfolio();
    });
  });
}

function initQuiz() {
  renderQuiz();
  $("#shuffle-quiz")?.addEventListener("click", () => {
    const shuffled = [...data.quiz].sort(() => Math.random() - 0.5);
    renderQuiz(shuffled);
  });
}

function renderMethodSorter() {
  const sorter = $("#method-sorter");
  if (!sorter) return;
  const shuffled = [...data.methods].sort(() => Math.random() - 0.5);
  sorter.innerHTML = shuffled.map((method) => `
    <label class="sort-row">
      <input type="number" min="1" max="${data.methods.length}" aria-label="Position für ${escapeHtml(method)}">
      <span>${escapeHtml(method)}</span>
    </label>
  `).join("");

  $("#check-methods")?.addEventListener("click", () => {
    const rows = $$(".sort-row");
    const answers = rows.map((row) => ({
      method: row.querySelector("span").textContent,
      rank: Number(row.querySelector("input").value)
    }));
    const allFilled = answers.every((item) => item.rank >= 1 && item.rank <= data.methods.length);
    const unique = new Set(answers.map((item) => item.rank)).size === data.methods.length;
    const correct = allFilled && unique && answers.every((item) => data.methods[item.rank - 1] === item.method);
    const feedback = $("#method-feedback");
    if (!allFilled || !unique) {
      feedback.textContent = "Vergib jede Position von 1 bis 8 genau einmal.";
      feedback.className = "feedback warn";
      return;
    }
    state.methodsSolved = correct;
    saveState();
    feedback.textContent = correct
      ? "Stark. Die Kette führt vom Hinweis über Gegenprüfung zur verantworteten Veröffentlichung."
      : "Fast. Prüfe besonders: Erst Frage klären, dann Material suchen, am Ende Aussage und Ethik prüfen.";
    feedback.className = `feedback ${correct ? "ok" : "warn"}`;
  });
}

function renderSourceLab() {
  const lab = $("#source-lab");
  if (!lab) return;
  lab.innerHTML = data.sources.map((source, index) => `
    <button type="button" data-source="${index}" class="${state.sourceChoices[index] ? "is-selected" : ""}">
      <span>${escapeHtml(source.title)}</span>
      <meter min="0" max="100" value="${source.strength}"></meter>
      <small>${escapeHtml(source.verdict)}</small>
    </button>
  `).join("");

  $$("[data-source]").forEach((button) => {
    button.addEventListener("click", () => {
      const source = data.sources[Number(button.dataset.source)];
      state.sourceChoices[button.dataset.source] = true;
      saveState();
      button.classList.add("is-selected");
      button.querySelector("small").textContent = `${source.verdict}: ${source.note}`;
    });
  });
}

function initResearchPlan() {
  $("#copy-template")?.addEventListener("click", () => {
    $("#claim-input").value = "Im Film wird sichtbar, dass journalistische Qualität nicht an Tempo, sondern an überprüfbarer Recherche und fairer Darstellung hängt.";
  });

  $("#build-research")?.addEventListener("click", () => {
    const claim = $("#claim-input").value.trim();
    const output = $("#research-plan");
    if (!claim) {
      output.innerHTML = `<p class="feedback warn">Trage zuerst eine Behauptung ein.</p>`;
      return;
    }
    state.reflections.claim = claim;
    saveState();
    output.innerHTML = `
      <h4>Rechercheplan</h4>
      <ol>
        <li><strong>Präzisieren:</strong> Welche Begriffe in «${escapeHtml(claim)}» müssen definiert werden?</li>
        <li><strong>Belegen:</strong> Welche Dokumente, Daten oder Originalaussagen könnten die Behauptung stützen?</li>
        <li><strong>Gegencheck:</strong> Wer hätte ein Interesse daran, die Behauptung zu bestätigen oder zu widerlegen?</li>
        <li><strong>Betroffene:</strong> Wer muss vor Veröffentlichung mit der Aussage konfrontiert werden?</li>
        <li><strong>Transparenz:</strong> Was bleibt unsicher und muss im Beitrag kenntlich gemacht werden?</li>
      </ol>
    `;
    renderPortfolio();
  });
}

function initResearchLab() {
  renderMethodSorter();
  renderSourceLab();
  initResearchPlan();
}

function renderDilemmas() {
  const grid = $("#dilemma-grid");
  if (!grid) return;
  grid.innerHTML = data.dilemmas.map((dilemma) => {
    const saved = state.dilemmas[dilemma.id] || { value: 50, reason: "" };
    return `
      <article class="dilemma-card">
        <h3>${escapeHtml(dilemma.title)}</h3>
        <p>${escapeHtml(dilemma.scenario)}</p>
        <div class="scale-labels">
          <span>${escapeHtml(dilemma.left)}</span>
          <span>${escapeHtml(dilemma.right)}</span>
        </div>
        <input type="range" min="0" max="100" value="${saved.value}" data-dilemma-range="${dilemma.id}">
        <label>
          Begründung
          <textarea rows="4" data-dilemma-reason="${dilemma.id}" placeholder="Ich entscheide so, weil ...">${escapeHtml(saved.reason)}</textarea>
        </label>
        <button class="button small" type="button" data-dilemma-save="${dilemma.id}">Entscheidung sichern</button>
        <p class="ethic-advice">${escapeHtml(dilemma.advice)}</p>
      </article>
    `;
  }).join("");

  $$("[data-dilemma-save]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.dilemmaSave;
      state.dilemmas[id] = {
        value: Number($(`[data-dilemma-range="${id}"]`).value),
        reason: $(`[data-dilemma-reason="${id}"]`).value.trim()
      };
      saveState();
      button.textContent = "Gesichert";
      renderPortfolio();
    });
  });
}

function renderTransfer() {
  $("#tab-seminar").innerHTML = `
    <div class="question-grid">
      ${data.seminarQuestions.map((question, index) => `
        <label class="reflection-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(question)}</strong>
          <textarea rows="4" data-reflection="seminar-${index}" placeholder="Antwort, Beleg aus dem Film, eigene Position">${escapeHtml(state.reflections[`seminar-${index}`] || "")}</textarea>
        </label>
      `).join("")}
    </div>
  `;
  $("#tab-produktion").innerHTML = `
    <div class="task-list">
      ${data.productionTasks.map((task, index) => `
        <article>
          <strong>Auftrag ${index + 1}</strong>
          <p>${escapeHtml(task)}</p>
        </article>
      `).join("")}
    </div>
  `;
  $("#tab-debate").innerHTML = `
    <div class="role-grid">
      ${data.debateRoles.map((role) => `
        <article>
          <span>${escapeHtml(role.role)}</span>
          <p>${escapeHtml(role.goal)}</p>
        </article>
      `).join("")}
    </div>
  `;

  $$("[data-reflection]").forEach((field) => {
    field.addEventListener("input", () => {
      state.reflections[field.dataset.reflection] = field.value;
      saveState();
    });
  });

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach((item) => item.classList.toggle("is-active", item === tab));
      $$(".tab-panel").forEach((panel) => panel.classList.toggle("is-active", panel.id === `tab-${tab.dataset.tab}`));
    });
  });
}

function renderPortfolio() {
  const output = $("#portfolio-output");
  if (!output) return;
  const correct = data.quiz.filter((item) => state.quiz[item.id]?.selected === item.answer).length;
  const dilemmaCount = Object.values(state.dilemmas).filter((item) => item.reason).length;
  const reflections = Object.entries(state.reflections).filter(([, value]) => value).slice(0, 6);

  output.innerHTML = `
    <article>
      <h3>Quiz</h3>
      <p>${correct} von ${data.quiz.length} Konzeptfragen korrekt beantwortet.</p>
    </article>
    <article>
      <h3>Filmnotizen</h3>
      ${state.notes.length ? state.notes.map((note) => `<p><strong>${escapeHtml(note.time)} · ${escapeHtml(note.category)}:</strong> ${escapeHtml(note.text)}</p>`).join("") : "<p>Noch keine Filmnotizen gespeichert.</p>"}
    </article>
    <article>
      <h3>Recherche</h3>
      <p>${state.methodsSolved ? "Recherchekette korrekt sortiert." : "Recherchekette noch nicht vollständig gelöst."}</p>
      ${state.reflections.claim ? `<p><strong>Behauptung:</strong> ${escapeHtml(state.reflections.claim)}</p>` : ""}
    </article>
    <article>
      <h3>Ethik</h3>
      <p>${dilemmaCount} von ${data.dilemmas.length} Dilemmata begründet.</p>
    </article>
    <article class="wide">
      <h3>Reflexionen</h3>
      ${reflections.length ? reflections.map(([key, value]) => `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</p>`).join("") : "<p>Noch keine Reflexionen eingetragen.</p>"}
    </article>
  `;
}

function updateProgress() {
  const quizDone = Object.keys(state.quiz).length / data.quiz.length;
  const notesDone = Math.min(state.notes.length / 3, 1);
  const ethicsDone = Object.values(state.dilemmas).filter((item) => item.reason).length / data.dilemmas.length;
  const researchDone = (state.methodsSolved ? 0.5 : 0) + (state.reflections.claim ? 0.5 : 0);
  const reflectionDone = Math.min(Object.values(state.reflections).filter(Boolean).length / 4, 1);
  const score = Math.round(((quizDone + notesDone + ethicsDone + researchDone + reflectionDone) / 5) * 100);
  $("#progress-value").textContent = `${score}%`;
  $("#progress-detail").textContent = score < 35
    ? "Starte mit Filmnotizen und Quiz."
    : score < 75
      ? "Guter Arbeitsstand. Recherche und Ethik vertiefen."
      : "Sehr weit. Portfolio prüfen und Transferfragen schärfen.";
}

function initControls() {
  $("#theme-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  $("#reset-progress")?.addEventListener("click", () => {
    if (!confirm("Alle lokalen Antworten dieser Lernlandschaft löschen?")) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
  $("#refresh-portfolio")?.addEventListener("click", renderPortfolio);
  $("#print-portfolio")?.addEventListener("click", () => {
    renderPortfolio();
    window.print();
  });
}

initControls();
initVideoTools();
initNotes();
initQuiz();
initResearchLab();
renderDilemmas();
renderTransfer();
renderPortfolio();
updateProgress();
