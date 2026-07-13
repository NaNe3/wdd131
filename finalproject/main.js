const formPool = [
  {
    form: "amabamus",
    note: "Imperfect active indicative, 1st person plural from amo."
  },
  {
    form: "puellis",
    note: "Dative or ablative plural, 1st declension noun ending."
  },
  {
    form: "ducetis",
    note: "Future active indicative, 2nd person plural from duco."
  },
  {
    form: "regum",
    note: "Genitive plural, 3rd declension noun ending pattern."
  },
  {
    form: "audiebant",
    note: "Imperfect active indicative, 3rd person plural from audio."
  }
];

function displayRandomForm() {
  const targetForm = document.querySelector("#daily-form");
  const targetNote = document.querySelector("#daily-note");

  if (!targetForm || !targetNote) {
    return;
  }

  const randomItem = formPool[Math.floor(Math.random() * formPool.length)];
  targetForm.textContent = randomItem.form;
  targetNote.textContent = randomItem.note;
}

document.querySelector("#new-form")?.addEventListener("click", displayRandomForm);

displayRandomForm();
