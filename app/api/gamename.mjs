// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/** @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn */

/** @type {EnhanceApiFn} */
export async function get(req) {
	const { name = '' } = req.query;
	if (!name) return {};

	/** @type {{id: number, name: string}[]} */
	const results = await fetch('https://api.igdb.com/v4/games', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
		},
		body: `search "${name}"; fields name; limit 25;`,
	}).then((res) => res.json());

	results.sort((a,b) => a.id - b.id)
	console.log(results)

	return {
		json: {
			results,
		},
	};
}
