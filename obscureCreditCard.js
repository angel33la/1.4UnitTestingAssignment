const obscureCreditCard = (cardNumber) => {
    if (typeof cardNumber !== "string") {
        return "invalid credit card";
    }
    if (cardNumber.length < 12 || cardNumber.length > 16) {
        return "invalid credit card";
    }
    const lastFour = cardNumber.slice(-4);
    return "*".repeat(cardNumber.length - 4) + lastFour;
};

module.exports = obscureCreditCard;