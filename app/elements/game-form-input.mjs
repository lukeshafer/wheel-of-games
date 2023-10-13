/** @type {import('@enhance/types').EnhanceElemFn} */
export default function GameFormInput({ html, state }) {
	const { label = '', name = '' } = state.attrs || {};

	return html`
		<style>
			label {
				border: 1px solid #222;
				padding: 0.4rem;
				color: var(--primary-800);
				background-color: white;
			}

			input {
				outline: 1px solid var(--secondary-700);
				color: black;
				padding: 0.2rem;
			}
		</style>

		<label>
			${label}
			<input type="text" name=${name} />
		</label>

		<ul class="results"></ul>

		<script type="module" src="/_public/browser/game-form-input.mjs"></script>
	`;
}
