const fs = require('fs');
const web3 = require('@solana/web3.js');
const splToken = require('@solana/spl-token');

// const superSecretKey = JSON.parse(fs.readFileSync("../secrets/dev.json"));
const superSecretKey = [
  189, 111, 213, 112, 51, 74, 26, 118, 56, 188, 26, 224, 112, 89, 223, 123, 83,
  249, 234, 255, 202, 68, 54, 45, 23, 248, 58, 206, 145, 238, 247, 87, 47, 149,
  174, 155, 237, 154, 13, 10, 106, 178, 158, 49, 189, 4, 78, 152, 204, 74, 173,
  250, 32, 220, 85, 70, 4, 157, 252, 251, 192, 123, 145, 30,
];

async function makeNFT() {
  const conn = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

  // const fromWallet = web3.Keypair.generate();
  const fromWallet = web3.Keypair.fromSecretKey(new Uint8Array(superSecretKey));
  const fromAirdropSignature = await conn.requestAirdrop(
    fromWallet.publicKey,
    10 * web3.LAMPORTS_PER_SOL
  );

  await conn.confirmTransaction(fromAirdropSignature);

  let mint = await splToken.Token.createMint(
    conn,
    fromWallet,
    fromWallet.publicKey,
    null, // freeze authority
    0, // 0 decimals because NFT, stoopid
    splToken.TOKEN_PROGRAM_ID
  );

  let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
    fromWallet.publicKey
  );

  // Generate a new wallet to receive newly minted token
  const toWallet = web3.Keypair.generate();

  //get the token account of the toWallet Solana address, if it does not exist, create it
  const toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
    toWallet.publicKey
  );

  await mint.mintTo(
    fromTokenAccount.address,
    fromWallet.publicKey,
    [], // multiSigners
    1
  );

  await mint.setAuthority(
    mint.publicKey,
    null,
    'MintTokens',
    fromWallet.publicKey,
    [] // multiSigners
  );

  const transaction = new web3.Transaction().add(
    splToken.Token.createTransferInstruction(
      splToken.TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      toTokenAccount.address,
      fromWallet.publicKey,
      [], // multiSigner
      1 // since nft
    )
  );

  const sig = await web3.sendAndConfirmTransaction(
    conn,
    transaction,
    [fromWallet],
    { commitment: 'confirmed' }
  );

  console.log({ fromWallet, toTokenAccount, sig });

  return sig;
}

module.exports = makeNFT;
