require('dotenv').config();
const { Deta } = require('deta');

const deta = Deta(process.env.DETA_API_KEY);

const db = deta.Base('sig');
const drive = deta.Drive('certis');

// db.put({
//   sig: 'okokokokok',
//   owner: 'pulkie',
//   isCool: true,
// });

module.exports = { db, drive };
