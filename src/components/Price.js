import productStrf from "../product";

const objprice = JSON.parse(productStrf);
function Price() {
    return (objprice['price']);
}

export default Price;