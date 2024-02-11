const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

describe('Adding Products', () => {
    beforeEach(() => {
        resetProducts();
    });
    
    it('should add a product', () => {
        addProduct('manzana', 2)
        expect(getProducts()).toEqual([{id: 1, name: 'manzana', price: 2}]);
    })
    it('should fail when adding a repeated product', () => {
        addProduct('manzana', 2)
        expect(() => addProduct('manzana', 5)).toThrow('Product already exists')
    })
    it('should fail when adding a product with no name', () => {
        expect(() => addProduct('', 4)).toThrow('the name cannot be empty')
    })
    it('should fail when adding a product with no name', () => {
        expect(() => addProduct('platano', )).toThrow('the price cannot be empty')
    });
});

describe('Removing Products', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should remove a product', () => {
        addProduct('manzana', 10);
        removeProduct(1);
        expect(getProducts()).toEqual([]);
    });
    it('should fail when removing a product that does not exist', () => {
        expect(() => removeProduct(2)).toThrow('Product not found');
    });
});

describe('Getting a single product', () => {
    beforeEach(() => {
        resetProducts();
    });
    it('should get a product', () => {
        addProduct('manzana', 10);
        expect(getProduct(1)).toEqual({id: 1, name: 'manzana', price: 10})
    })
});

describe('Updating Products', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('manzana', 10);
    });
    it('should update a product', () => {
        updateProduct(1, 'pera', 20);
        expect(getProduct(1)).toEqual({id: 1, name: 'pera', price: 20});
    });
    it('should fail when updating a product that does not exist', () => {
        expect(() => updateProduct(2, 'platano', 3)).toThrow('Product not found');
    });    
    it('should only update the price', () => {
        updateProduct(1, '', 20);
        expect(getProduct(1)).toEqual({id: 1, name: 'manzana', price: 20});
    });    
    it('should only update the name', () => {
        updateProduct(1, 'platano');
        expect(getProduct(1)).toEqual({id:1, name: 'platano', price: 10});
    });
})
