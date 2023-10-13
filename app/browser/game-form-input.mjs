// @ts-ignore
import enhance from '@enhance/element';
import GameFormInput from '../elements/game-form-input.mjs';

enhance('game-form-input', {
	render: GameFormInput,
	connectedCallback() {
		this.input = this.querySelector('input');

		/** @type {HTMLUListElement} */
		this.results = this.querySelector('.results');
		this.input.addEventListener('input', async () => {
			const value = this.input.value;
			if (!value) return;
			console.log({ value });

			/** @type {{id: number, name: string}[]} */
			const results = await fetch('/gamename?name=' + value)
				.then((res) => res.json())
				.then(({ results }) => results);

			const elements = results.map(({ name }) => {
				const el = document.createElement('li');
				el.textContent = name;
				return el;
			});

			/** @type {HTMLUListElement} */
			const resultsElement = this.results;
			resultsElement.innerHTML = '';
			elements.forEach((el) => resultsElement.appendChild(el));
		});
	},
});
