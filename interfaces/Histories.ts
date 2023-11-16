export interface Histories {
  _id: string;
  user: {
    _id: string;
    username: string;
    website: string | null;
    isFlag: number;
    name: string;
    bio: string;
    email: string;
    role: string;
    online: boolean;
    avatar: string;
    phone: string;
    address: string;
    birthday: string;
  };
  product: {
    discount: number;
    _id: string;
    creator: {
      _id: string;
      username: string;
      website: string | null;
      isFlag: number;
      name: string;
      bio: string;
      email: string;
      role: string;
      online: boolean;
      avatar: string;
      phone: string;
      address: string;
      birthday: string;
    };
    categories: {
      _id: string;
      name: string;
      description: string;
    };
    quantity: number;
    name: string;
    description: string;
    price: number;
    numberHasSeller: number;
    statsSale: boolean;
    pictures: string[];
    slug: string;
    deletedAt: string | null;
    accompanyingProducts: any[]; // You can replace 'any' with the appropriate type if available
    __v: number;
    createdAt: string;
    updatedAt: string;
  };
  quantity: number;
  status: string;
  discount: number;
  orderPrice: number;
  totalPrice: number;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
