import makeNFT from '../../lib/make-nft';
import { db, drive } from '../../lib/db';

async function createNftHandler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  // console.log({ reqBody: req.body });
  const { owner, certiB64img } = req.body;
  // const owner = 'sms';

  const sig = await makeNFT();

  // TODO: Arweave
  // await drive.put(`${sig}.png`, {
  //   data: Buffer.from(certiB64img, 'base64'),
  //   contentType: 'image/png',
  // });

  const data = { sig, owner, certiB64img };

  await db.put(data);
  console.log(data);
  res.status(200).json(data);
}

export default createNftHandler;
