import productStrf from "../product";

const objprice = JSON.parse(productStrf);

function Name() {
    return objprice["name"];
}

export default Name;
