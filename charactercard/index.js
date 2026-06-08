const nameEl = document.querySelector("#character-name");
const classEl = document.querySelector("#character-class");
const levelEl = document.querySelector("#character-level");
const healthEl = document.querySelector("#character-health");
const imageEl = document.querySelector("#character-image");
const statusEl = document.querySelector("#status-message");
const attackBtn = document.querySelector("#attack-btn");
const levelUpBtn = document.querySelector("#levelup-btn");

const character = {
	name: "Snortleblat",
	class: "Swamp Sorcerer",
	level: 1,
	health: 100,
	image: "./snortleblat.webp",

	attacked() {
		if (this.health <= 0) {
			return `${this.name} has already died.`;
		}

		this.health = Math.max(0, this.health - 20);

		if (this.health === 0) {
			return `${this.name} has died.`;
		}

		return `${this.name} was attacked!`;
	},

	levelUp() {
		this.level += 1;
		return `${this.name} reached level ${this.level}!`;
	}
};

function renderCharacter(message = "") {
	nameEl.textContent = character.name;
	classEl.textContent = character.class;
	levelEl.textContent = character.level;
	healthEl.textContent = character.health;
	imageEl.src = character.image;
	statusEl.textContent = message;

	if (character.health === 0) {
		attackBtn.disabled = true;
		statusEl.textContent = `${character.name} has died.`;
	}
}

attackBtn.addEventListener("click", () => {
	const message = character.attacked();
	renderCharacter(message);
});

levelUpBtn.addEventListener("click", () => {
	const message = character.levelUp();
	renderCharacter(message);
});

renderCharacter();
