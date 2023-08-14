import productStrf from "../product";

const objprice = JSON.parse(productStrf);

function Image() {
    return (objprice['imageUrl']);
}

export default Image;