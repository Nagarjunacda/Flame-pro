export const priceFormatter = (price) => {
    const formattedPrice = new Intl.NumberFormat('en-GB').format(price);
    return formattedPrice.replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.$/, '');
}
