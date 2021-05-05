import {connectToDatabase} from '$lib/dbconnect';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
    const dbConnect = await connectToDatabase();
	const { slug } = params;
    const db = dbConnect.db
    const collection = db.collection('blog')
	const article = await db.get(slug);

	if (article) {
		return {
			body: {
				article
			}
		};
	}
}