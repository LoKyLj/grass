const productsDataJSON = fetch('../../data/grass.json');
const productDataString = JSON.stringify(productsDataJSON);


for (let i = 0; i < productsDataJSON.length; i++) {
    const obj = productsDataJSON[i];
    console.log(obj.name, obj.id);
}