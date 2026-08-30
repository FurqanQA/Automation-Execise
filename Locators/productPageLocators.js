import { subscribe } from "node:diagnostics_channel";

export const productPageLocators = {

    productsLink: 'a[href="/products"]',
    allProductsTitle: 'h2.title.text-center',
    productsList: '.features_items',
    productCards: '.features_items .product-image-wrapper',
      firstViewProduct: 'a[href="/product_details/1"]',
    productDetailName: '.product-information h2',
    productDetailCategory: '.product-information p',
    productDetailPrice: '.product-information span span',
    productDetailAvailability: '.product-information p:has-text("Availability")',
    productDetailCondition: '.product-information p:has-text("Condition")',
    productDetailBrand: '.product-information p:has-text("Brand")',
    subscribeInput: '#susbscribe_email',
    subscribeButton: '#subscribe',
    subscribeSuccessMessage: '.alert-success'
    
};