export type Address = {
    id: number;
    cep: string;
    street: string;
    number: string;
    neigborhood: string;
    city: string;
    state: string;
    complement?: string;
}