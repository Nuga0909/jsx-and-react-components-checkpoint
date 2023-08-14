import productStrf from "../product";

const objImage = JSON.parse(productStrf);

function Image() {
    return (`"${objImage['imageUrl']}"`
    );
}

export default Image;