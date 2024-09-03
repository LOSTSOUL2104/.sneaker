import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: bigShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: bigShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: bigShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "110+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250T+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Air Jordan-01",
    price: "20000",
  },
  {
    imgURL: shoe5,
    name: "Air Jordan-10",
    price: "21000",
  },
  {
    imgURL: shoe6,
    name: "Air Jordan-100",
    price: "22000",
  },
  {
    imgURL: shoe7,
    name: "Air Jordan-001",
    price: "23000",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Rahul  Sharma",
    rating: 5.0,
    feedback:
      "I have been using this product for a few weeks now and I must say it's really great. The quality is very good!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 5.0,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@sneakers.com", link: "mailto:customer@sneakers.com" },
      { name: "+92554862354", link: "tel:+91 99911" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
