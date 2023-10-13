/** @type {import('@enhance/types').EnhanceElemFn} */
export default function GameForm({ html, state }) {
	return html` <style>
			form {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				font-family: Lato;
				padding: 1rem;
			}

			button {
				outline: 1px solid var(--secondary-600);
				padding: 0.1rem;
				width: fit-content;
			}
		</style>

		<pre>${JSON.stringify(state.store, null, 2)}</pre>

		<form method="post" action="/suggestion">
			<game-form-input name="username" label="Twitch Username"> </game-form-input>
			<game-form-input name="game" label="Game suggestion"> </game-form-input>
			<button type="submit">Submit</button>
		</form>`;
}
