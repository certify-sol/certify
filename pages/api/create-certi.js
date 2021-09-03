import fetch from 'isomorphic-unfetch';

import makeNFT from '../../lib/make-nft';
import { db, drive } from '../../lib/db';

async function createCertiHandler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  // console.log({ reqBody: req.body });
  const { registrant } = req.body;
  // const owner = 'sms';
  const sig = await makeNFT();

  const pillowResp = await fetch('https://certify.someshkar.com/pillow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...req.body, sig }),
  });
  const certiB64img = await pillowResp.text();
  console.log(certiB64img);
  // const certiB64img = await pillowRespJSON()

  // TODO: Arweave
  // await drive.put(`${sig}.png`, {
  //   data: Buffer.from(certiB64img, 'base64'),
  //   contentType: 'image/png',
  // });

  const data = { sig, registrant, certiB64img };

  await db.put(data);
  console.log(data);
  res.status(200).json(data);
}

export default createCertiHandler;
