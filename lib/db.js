const { Deta } = require('deta');

const deta = Deta('c055zyi3_v9cFibtfN5WGwdVF5HZAuhzqqW4NkTow');

const db = deta.Base('sig');
const drive = deta.Drive('certis');

// db.put({
//   sig: 'okokokokok',
//   owner: 'pulkie',
//   isCool: true,
// });

module.exports = { db, drive };
