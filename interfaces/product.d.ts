interface Product {
    numberHasSeller: number;
    statsSale: boolean;
    _id: string;
    quantity: number;
    code: string;
    name: string;
    description: string;
    price: number;
    pictures: string[];
    status: string;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
    rating: {
      count: number;
      value: number;
    };
    seller: {
      count: number;
      value: number;
    };
  }

export default Product