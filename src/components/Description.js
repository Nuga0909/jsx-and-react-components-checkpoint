import productStrf from "../product";

const objprice = JSON.parse(productStrf);

function Description() {
  return objprice["description"];
}

export default Description;
