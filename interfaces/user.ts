// export interface User {
//     _id: string;
//     username: string;
//     website: string | null;
//     isFlag: number;
//     name: string;
//     bio: string;
//     email: string;
//     role: string;
//     online: boolean;
//     avatar: string;
//     phone: string;
//     address: string;
//     birthday: string;
// }
  
interface User {
    _id: string;
    username: string;
    name: string;
    bio: string | null;
    email: string;
    role: string;
    online: boolean;
    avatar: string | null;
    phone: string | null;
    isFlag: number;
    address: string | null;
    website: string | null;
    activeMail: boolean;
    twoFactorAuthenticationSecret: boolean;
    birthday: string | null;
    balance: number | null;
    bank: string | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  