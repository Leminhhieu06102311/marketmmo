interface SubCategory {
    name: string;
  }
  
export default interface Links {
    name: string;
    sub_category?: SubCategory[];
}