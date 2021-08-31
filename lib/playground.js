const makeNFT = require('./make-nft')

async function main() {
	const sig = await makeNFT()
	console.log(sig)
}

main()