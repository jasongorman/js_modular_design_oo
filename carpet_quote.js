class CarpetQuote {
    quote(length, width, pricePerSqMtr, roundUp) {
        let roomArea = length * width;

        if(roundUp)
            roomArea = Math.ceil(roomArea);

        return roomArea * pricePerSqMtr;
    }
}

module.exports = CarpetQuote;