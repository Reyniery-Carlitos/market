export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  olderPrice?: number;
  discount?: number;
  image: string;
  categories: number[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Air Max 70",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride.",
    price: 25,
    discount: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [1, 2, 3]
  },
  {
    id: 2,
    name: "Air Max 80 - Version 2.23123 of 2025 adsad adsa asdd daiodas dsakl dsad asda dsa",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride.",
    price: 25,
    discount: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [2]
  },
  {
    id: 3,
    name: "Air Max 90",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride.",
    price: 25,
    olderPrice: 30,
    discount: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [4, 5]
  },
  {
    id: 4,
    name: "Air Max 100",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride.",
    price: 25,
    discount: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [6]
  },
  {
    id: 5,
    name: "Air Max 101",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride.",
    price: 25,
    discount: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [6, 1]
  },
  {
    id: 6,
    name: "Air Max 90123123",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride.",
    price: 25,
    discount: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [5, 2, 3]
  },
  {
    id: 7,
    name: "Air Max 9312310",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride. The product especially designed for the snowboarder. The product especially designed for the snowboarder. The product especially designed for the snowboarder.",
    price: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [1, 6, 2]
  },
  {
    id: 8,
    name: "Air Max 90131",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride. This is a description of the product. This is a description of the product. This is a description of the product.",
    price: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [2, 4, 5]
  },
  {
    id: 9,
    name: "Air Max 9013123",
    description: "Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride. Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride. Air Max 90 is a premium electric snowboard that offers a smooth ride and a comfortable ride.",
    price: 25,
    discount: 25,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/AIR+MAX+90.png",
    categories: [5, 6, 7]
  }
]     
