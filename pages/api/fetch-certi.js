import { db, drive } from '../../lib/db';

async function fetchCertiHandler(req, res) {
  const { sig } = req.query;

  console.log({ sig });

  try {
    const { items } = await db.fetch({ sig }, { limit: 1 });
    const { certiB64img } = items[0];
    res.status(200).json({ status: 'success', sig, certiB64img });
  } catch (e) {
    res.status(500).json({ status: 'certificate not found' });
    console.error(e);
  }
}

export default fetchCertiHandler;
