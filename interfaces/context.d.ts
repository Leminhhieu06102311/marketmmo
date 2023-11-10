export default interface Context {
    productId: string;
    handleClickProduct: (productId: string) => void;
    statusAddToCart : () => void
    isAddToCart: boolean;
}