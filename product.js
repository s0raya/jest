//resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct

let products = [];
let id = 0;

const resetProducts = () => {
    products = [];
    id = 0;
}

const getProducts = () => {
    return products;
}

const addProduct = (name, price) => {
    if(!name) {
        throw new Error('the name cannot be empty');
    }
    if(!price) {
        throw new Error('the price cannot be empty');
    }
    if(products.some(product => product.name === name)) {
        throw new Error('Product already exists')
    }
    id++;
    products.push({id, name, price});
    getProducts();
    
}

const removeProduct = (productId) => {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error('Product not found');
    }
    products.splice(index, 1);
    getProducts();
}

const getProduct = (productId) => {
    const findProduct = products.find(product => product.id === productId);
    return findProduct;
}

const updateProduct = (id, name, price) => {
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        throw new Error('Product not found');
    }
    if(name) {
        products[index].name = name;
    }
    if(price) {
        products[index].price = price;
    }
    getProducts();
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
}