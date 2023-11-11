interface SellerId {
    deletedAt: null,
    _id: string,
    username: string,
    website: null,
    isFlag: number,
    name: string,
    bio: string,
    email: string,
    online: boolean,
    avatar: string,
    phone: string,
    address: string,
    activeMail: boolean,
    twoFactorAuthenticationSecret: boolean,
    birthday: string,
    updatedAt: string,
    isSocial: boolean,
    productsOverall: {
      totalProducts: number,
      totalProductsSold: number
    },
    followOverall: {
      following: number,
      follower: number
    },
    totalRatingsOfSeller: number
  }

export default SellerId