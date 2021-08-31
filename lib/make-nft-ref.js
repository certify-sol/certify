const fs = require("fs");
const web3 = require("@solana/web3.js");
const splToken = require("@solana/spl-token");

const superSecretKey = JSON.parse(fs.readFileSync("../secrets/dev.json"));

async function main() {
  const conn = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

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
    "MintTokens",
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
    { commitment: "confirmed" }
  );

  console.log({ sig });
}

main();
