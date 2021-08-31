import makeNFT from '../../lib/make-nft';
import { db, drive } from '../../lib/db';

async function createNftHandler(req, res) {
  // const { owner } = req.body;
  const owner = 'sms';

  const sig = await makeNFT();

  db.put({
    sig,
    owner,
  });

  res.status(200).json({ sig });
}

export default createNftHandler;
