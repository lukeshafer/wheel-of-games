// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/** @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn */

/** @type {EnhanceApiFn} */
export async function post(req) {
	const {
		game = null,
		username = null
	} = req.body

	return {
		json: { game, username },
		session: { game, username },
		location: '/',
	};
}
