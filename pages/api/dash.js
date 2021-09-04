import { db } from '../../lib/db';

async function DashHandler(req, res) {
  const { registrant } = req.query;
  console.log({ registrant });

  try {
    const { items } = await db.fetch({ registrant });
    console.log({ registrant, items });
    res.status(200).json({ status: 'success', items });
  } catch (e) {
    res.status(500).json({ status: 'error' });
    console.error(e);
  }
}

export default DashHandler;
