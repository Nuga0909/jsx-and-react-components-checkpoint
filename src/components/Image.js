import productStrf from "../product";

const objImage = JSON.parse(productStrf);
let newImage = objImage["imageUrl"];

function Image() {
  return { newImage };
}

export default newImage;
