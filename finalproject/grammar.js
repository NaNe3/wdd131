const conjugationRows = [
  {
    conjugation: "1st",
    infinitive: "amare",
    tense: "present",
    person: "1s",
    label: "1st singular",
    form: "amo",
    example: "Puella rosam amat. (The girl loves a rose.)"
  },
  {
    conjugation: "1st",
    infinitive: "amare",
    tense: "imperfect",
    person: "3p",
    label: "3rd plural",
    form: "amabant",
    example: "Nautae patriam amabunt. (Sailors will love their homeland.)"
  },
  {
    conjugation: "2nd",
    infinitive: "monere",
    tense: "present",
    person: "2p",
    label: "2nd plural",
    form: "monetis",
    example: "Magistri discipulos monent. (Teachers advise students.)"
  },
  {
    conjugation: "2nd",
    infinitive: "monere",
    tense: "future",
    person: "1p",
    label: "1st plural",
    form: "monebimus",
    example: "Nos amicos monebimus. (We will warn friends.)"
  },
  {
    conjugation: "3rd",
    infinitive: "ducere",
    tense: "present",
    person: "3s",
    label: "3rd singular",
    form: "ducit",
    example: "Dux copias ducit. (The leader guides troops.)"
  },
  {
    conjugation: "3rd",
    infinitive: "ducere",
    tense: "future",
    person: "2s",
    label: "2nd singular",
    form: "duces",
    example: "Tu equum duces. (You will lead the horse.)"
  },
  {
    conjugation: "4th",
    infinitive: "audire",
    tense: "present",
    person: "1p",
    label: "1st plural",
    form: "audimus",
    example: "Nos vocem audimus. (We hear the voice.)"
  },
  {
    conjugation: "4th",
    infinitive: "audire",
    tense: "imperfect",
    person: "3s",
    label: "3rd singular",
    form: "audiebat",
    example: "Discipulus fabulam audiebat. (The student was hearing the story.)"
  },
  {
    conjugation: "irregular",
    infinitive: "esse",
    tense: "present",
    person: "1s",
    label: "1st singular",
    form: "sum",
    example: "Ego paratus sum. (I am ready.)"
  },
  {
    conjugation: "irregular",
    infinitive: "esse",
    tense: "future",
    person: "3p",
    label: "3rd plural",
    form: "erunt",
    example: "Puellae laetae erunt. (The girls will be happy.)"
  }
];

const declensionRows = [
  {
    declension: "1st",
    dictionary: "puella, puellae (f)",
    caseName: "nominative",
    number: "plural",
    ending: "-ae",
    form: "puellae",
    example: "Puellae in via ambulant. (The girls walk on the road.)"
  },
  {
    declension: "1st",
    dictionary: "puella, puellae (f)",
    caseName: "ablative",
    number: "singular",
    ending: "-a",
    form: "puella",
    example: "Cum puella laboro. (I work with the girl.)"
  },
  {
    declension: "2nd",
    dictionary: "servus, servi (m)",
    caseName: "vocative",
    number: "singular",
    ending: "-e",
    form: "serve",
    example: "Serve, veni! (Servant, come!)"
  },
  {
    declension: "2nd",
    dictionary: "bellum, belli (n)",
    caseName: "accusative",
    number: "plural",
    ending: "-a",
    form: "bella",
    example: "Poeta bella narrat. (The poet tells wars.)"
  },
  {
    declension: "3rd",
    dictionary: "rex, regis (m)",
    caseName: "genitive",
    number: "singular",
    ending: "-is",
    form: "regis",
    example: "Corona regis splendida est. (The king's crown is splendid.)"
  },
  {
    declension: "3rd",
    dictionary: "rex, regis (m)",
    caseName: "dative",
    number: "plural",
    ending: "-ibus",
    form: "regibus",
    example: "Dona regibus damus. (We give gifts to kings.)"
  },
  {
    declension: "4th",
    dictionary: "manus, manus (f)",
    caseName: "nominative",
    number: "singular",
    ending: "-us",
    form: "manus",
    example: "Manus valida est. (The hand is strong.)"
  },
  {
    declension: "4th",
    dictionary: "manus, manus (f)",
    caseName: "genitive",
    number: "plural",
    ending: "-uum",
    form: "manuum",
    example: "Color manuum mutatur. (The color of the hands changes.)"
  },
  {
    declension: "5th",
    dictionary: "dies, diei (m/f)",
    caseName: "nominative",
    number: "plural",
    ending: "-es",
    form: "dies",
    example: "Dies breves sunt. (The days are short.)"
  },
  {
    declension: "5th",
    dictionary: "dies, diei (m/f)",
    caseName: "dative",
    number: "singular",
    ending: "-ei",
    form: "diei",
    example: "Finem diei exspecto. (I await the end of the day.)"
  }
];

const grammarMode = document.querySelector("#grammar-mode");
const verbFilters = document.querySelector("#verb-filters");
const nounFilters = document.querySelector("#noun-filters");

const conjugationFilter = document.querySelector("#conjugation-filter");
const tenseFilter = document.querySelector("#tense-filter");
const personFilter = document.querySelector("#person-filter");

const declensionFilter = document.querySelector("#declension-filter");
const caseFilter = document.querySelector("#case-filter");
const numberFilter = document.querySelector("#number-filter");
const endingsOnly = document.querySelector("#endings-only");

const conjugationsTableWrap = document.querySelector("#conjugations-table-wrap");
const declensionsTableWrap = document.querySelector("#declensions-table-wrap");

function renderConjugations() {
  let filteredRows = [...conjugationRows];

  if (conjugationFilter.value !== "all") filteredRows = filteredRows.filter((row) => row.conjugation === conjugationFilter.value);
  if (tenseFilter.value !== "all") filteredRows = filteredRows.filter((row) => row.tense === tenseFilter.value);
  if (personFilter.value !== "all") filteredRows = filteredRows.filter((row) => row.person === personFilter.value);

  const rowMarkup = filteredRows
    .map(
      (row) => `
        <tr>
          <td>${row.infinitive}</td>
          <td>${row.conjugation}</td>
          <td>${row.tense}</td>
          <td>${row.label}</td>
          <td>${row.form}</td>
          <td><details><summary>Example</summary><p class="example">${row.example}</p></details></td>
        </tr>
      `
    )
    .join("");

  conjugationsTableWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Infinitive</th>
          <th>Conjugation</th>
          <th>Tense</th>
          <th>Person</th>
          <th>Form</th>
          <th>Context</th>
        </tr>
      </thead>
      <tbody>
        ${rowMarkup || '<tr><td colspan="6">No rows match the current filters.</td></tr>'}
      </tbody>
    </table>
  `;
}

function renderDeclensions() {
  let filteredRows = [...declensionRows];

  if (declensionFilter.value !== "all") filteredRows = filteredRows.filter((row) => row.declension === declensionFilter.value);
  if (caseFilter.value !== "all") filteredRows = filteredRows.filter((row) => row.caseName === caseFilter.value);
  if (numberFilter.value !== "all") filteredRows = filteredRows.filter((row) => row.number === numberFilter.value);

  const rowsMarkup = filteredRows
    .map((row) => {
      const formCell = endingsOnly.checked ? row.ending : row.form;
      return `
        <tr>
          <td>${row.dictionary}</td>
          <td>${row.declension}</td>
          <td>${row.caseName}</td>
          <td>${row.number}</td>
          <td>${row.ending}</td>
          <td>${formCell}</td>
          <td><details><summary>Example</summary><p class="example">${row.example}</p></details></td>
        </tr>
      `;
    })
    .join("");

  declensionsTableWrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Dictionary Entry</th>
          <th>Declension</th>
          <th>Case</th>
          <th>Number</th>
          <th>Ending</th>
          <th>${endingsOnly.checked ? "Ending shown" : "Sample form"}</th>
          <th>Context</th>
        </tr>
      </thead>
      <tbody>${rowsMarkup || '<tr><td colspan="7">No rows match the current filters.</td></tr>'}</tbody>
    </table>
  `;
}

function updateFilterPanels() {
  const mode = grammarMode.value;
  const isVerb = mode === "conjugations";

  verbFilters.hidden = !isVerb;
  nounFilters.hidden = isVerb;
}

[grammarMode, conjugationFilter, tenseFilter, personFilter].forEach((el) => {
  el.addEventListener("change", () => {
    updateFilterPanels();
    renderConjugations();
  });
});

[declensionFilter, caseFilter, numberFilter, endingsOnly].forEach((el) => {
  el.addEventListener("change", renderDeclensions);
});

updateFilterPanels();
renderConjugations();
renderDeclensions();
