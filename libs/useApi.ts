import { Tenant } from "../types/Tenant";
import { Product } from "../types/Product";
import { User } from "../types/User";
import { CartItem } from "../types/CartItem";
import { Address } from "../types/Address";


const TEMPORARYoneProduct: Product = {
    id: 1,
    image: '/tmp/item1.png',
    categoryName: 'Tradicional',
    name: 'Texas Burguer',
    price: 25.50,
    description: '2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal'

}

export const useApi = (tenantSlug: string) => ({
    getTenant: async () => {
        switch (tenantSlug) {
            case 'DeliveryBurguer':
                return {
                    slug: 'DeliveryBurguer',
                    name: 'DeliveryBurguer',
                    mainColor: '#FB9400',
                    secondColor: '#FFF9F2'
                }
                break;
            case 'DeliveryPizza':
                return {
                    slug: 'DeliveryPizza',
                    name: 'DeliveryPizza',
                    mainColor: '#6AB70A',
                    secondColor: '#E0E0E0'
                }
                break;
            default: return false;
        }
    },

    getAllProducts: async () => {
        let products = [];
        for (let q = 0; q < 10; q++) {
            products.push({
                ...TEMPORARYoneProduct,
                id: q + 1
            });
        }
        return products
    },

    getProduct: async (id: number) => {
        return { ...TEMPORARYoneProduct, id };
    },

    authorizeToken: async (token: string): Promise<User | false> => {
        if (!token) return false;
        return {
            name: 'Daniel',
            email: 'danielcarrobr@gmail.com'
        }
    },

    getCartProducts: async (cartCookie: string) => {
        let cart: CartItem[] = [];
        if (!cartCookie) return cart;
        const cartJson = JSON.parse(cartCookie);
        for (let i in cartJson) {
            if (cartJson[i].id && cartJson[i].qt) {
                const product = {
                    ...TEMPORARYoneProduct,
                    id: cartJson[i].id
                };
                cart.push({
                    qt: cartJson[i].qt,
                    product
                });
            }
        }

        return cart;
    },

    getUserAddresses: async (email: string) => {
        const addresses: Address[] = [];

        for (let i = 0; i < 4; i++) {
            addresses.push({
                id: i + 1,
                street: "Rua das Flores",
                number: `${i + 1}00`,
                cep: '99999-999',
                city: 'São Paulo',
                neigborhood: 'Jardins',
                state: 'SP'
            });
        }


        return addresses;
    }


});