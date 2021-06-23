const mtg = require('./mtg');

const getAll = async () => {
  const response = await mtg.allCards();
  return { status: 200, message: response };
};

const getById = async (id) => {
  const response = await mtg.getCardById(id);
  return { status: 200, message: response };
};

module.exports = {
  getAll,
  getById
};
