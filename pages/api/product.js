const product = {
  name: "Vision Shield",
  price: "$192",
  href: "#",
  breadcrumbs: [{ id: 1, name: "Shades", href: "#" }],
  images: [
    {
      src: "/warby-1.png",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "/warby-2.png",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "/warby-3.png",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "/warby-4.png",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "These fashion shield sunglasses Feature A Durable Lightweight Frame，Holding A Premium One Piece Lens，and very good for sun-shielding. These shades are also suitable for the beach, traveling, cycling, motorbike, and other outdoor activities, beautiful accessories to match your fun stylish outfits.",
  highlights: [
    "Fashion sport style sunglasses closure",
    "Plastic frame",
    "Anti-reflective lens",
    "Non-Polarized",
    "Mirror Coating coating",
  ],
  details: "",
};

export default function handler(req, res) {
  res.status(200).json(product);
}
