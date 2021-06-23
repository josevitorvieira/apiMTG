const axios = require('axios');

const baseUrl = 'https://api.magicthegathering.io/v1';

const getCardById =  async(id)=>{
    const response = await axios.get(`${baseUrl}/cards/${id}`);
    return response.data.card;
}

const allCards = async ()=>{
    const response = await axios.get(`${baseUrl}/cards`);
    return response.data.cards;
}

module.exports = {
    getCardById,
    allCards
};





