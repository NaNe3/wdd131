const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const eventDateInput = document.querySelector("#eventDate");
const extraFieldContainer = document.querySelector("#extraFieldContainer");
const extraFieldLabel = document.querySelector("#extraFieldLabel");
const extraFieldInput = document.querySelector("#extraField");
const messages = document.querySelector("#messages");
const ticketOutput = document.querySelector("#ticketOutput");

function getTomorrowDateString() {
  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
}

function setDateMinimum() {
  eventDateInput.min = getTomorrowDateString();
}

function updateExtraField() {
  const type = typeSelect.value;

  if (!type) {
    extraFieldContainer.hidden = true;
    extraFieldInput.required = false;
    extraFieldInput.value = "";
    extraFieldInput.placeholder = "";
    return;
  }

  extraFieldContainer.hidden = false;
  extraFieldInput.required = true;

  if (type === "student") {
    extraFieldLabel.textContent = "Student I#";
    extraFieldInput.placeholder = "123456789";
  } else {
    extraFieldLabel.textContent = "Access Code";
    extraFieldInput.placeholder = "EVENT131";
  }
}

function showErrors(errors) {
  messages.className = "error";
  messages.innerHTML = `<ul class="error-list">${errors
    .map((error) => `<li>${error}</li>`)
    .join("")}</ul>`;
}

function clearErrors() {
  messages.className = "";
  messages.textContent = "";
}

function validateForm(data) {
  const errors = [];

  if (!data.firstName) errors.push("First name is required.");
  if (!data.lastName) errors.push("Last name is required.");
  if (!data.email) errors.push("Email is required.");
  if (!data.type) errors.push("Please choose a type.");

  if (!data.eventDate) {
    errors.push("Event date is required.");
  } else {
    const selectedDate = new Date(data.eventDate + "T00:00:00");
    const tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (selectedDate < tomorrow) {
      errors.push("Event date must be later than the current date.");
    }
  }

  if (data.type === "student") {
    if (!/^\d{9}$/.test(data.extraValue)) {
      errors.push("Student I# must be 9 digits.");
    }
  }

  if (data.type === "guest") {
    if (data.extraValue !== "EVENT131") {
      errors.push("Access code is not valid");
    }
  }

  return errors;
}

function createTicket(data) {
  ticketOutput.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${data.firstName} ${data.lastName}</p>
    <p>${data.type}</p>
    <p>${data.eventDate}</p>
  `;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    type: form.type.value,
    eventDate: form.eventDate.value,
    extraValue: extraFieldInput.value.trim()
  };

  const errors = validateForm(formData);

  if (errors.length > 0) {
    showErrors(errors);
    return;
  }

  clearErrors();
  createTicket(formData);

  form.reset();
  updateExtraField();
  setDateMinimum();
});

typeSelect.addEventListener("change", updateExtraField);

setDateMinimum();
updateExtraField();
