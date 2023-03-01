import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Carousel from "../components/Carousel";
import hp from "../assets/smartphone.png";
import laptop from "../assets/laptop.png";
import arloji from "../assets/arloji.png"
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [product, setProduct] = useState([
    {
      id: "",
      title: "",
      category: "",
      images: [],
    },
  ]);
//   const [map, setmap] = useState(null);
  const url = "https://dummyjson.com/products?limit=0";
  const options = {
    method: "GET",
    url: "https://dummyjson.com/products",
    params: { limit: 0 },
  };

  useEffect(() => {
    async function getData() {
      try {
        await axios
          .get("https://dummyjson.com/products?limit=0")
          .then((response) => setProduct(response.data.products));
      } catch (error) {
        console.error(error);
      }
    }
    getData();
    // async axios.get(url)
    //   .then((response) => setProduct(response.data.products))
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, []);
  //   setmap = product.products;

  console.log(product);

  return (
    <div>
      <Navbar />
      <div className="px-[80px] pt-[20px]">
        <Carousel />
        <p className="mt-[50px] font-poppins text-[30px] font-bold mb-[20px]">Category</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full gap-x-7 gap-y-5">
            <div className="bg-ungu relative flex items-center w-full justify-center h-[180px] rounded-xl">
                <img src={hp} className="absolute left-6 hidden lg:inline"></img>
                <p className="font-bold text-[20px] text-white font-poppins">Smartphone</p>
            </div>
            <div className="bg-ungu relative flex items-center w-full justify-center h-[180px] rounded-xl">
                <img src={laptop} className="absolute left-6 hidden lg:inline"></img>
                <p className="font-bold text-[20px] text-white font-poppins">Laptop</p>
            </div>
            <div className="bg-ungu relative flex items-center lg:col-span-2 2xl:col-span-1 w-full justify-center h-[180px] rounded-xl">
                <img src={arloji} className="absolute left-6 hidden lg:inline"></img>
                <p className="font-bold text-[20px] text-white font-poppins">Arloji</p>
            </div>
        </div>
        <p className="mt-[50px] font-poppins text-[30px] font-bold mb-[20px]">
          All Products
        </p>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-[30px] gap-y-10">
          {product.map((item) => {
            if (item.category === "smartphones" || item.category === "laptops" || item.category == "mens-watches" || item.category === "womens-watches"){
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center h-[300px] w-[280px] shadow-xl px-[30px] pt-[22px] pb-[8px]"
                >
                  <div className="h-[220px] w-[220px] overflow-hidden flex items-center mb-4">
                    <img
                      src={item.images[0]}
                      className="h-[220px] w-[220px]"
                    ></img>
                  </div>

                  <p className="font-poppins text-left w-full">{item.title}</p>
                  <p className="font-poppins text-left w-full">
                    <span>$</span>
                    {item.price}
                  </p>
                  <a href={`/product/${item.id}`} className="bg-blue-600 w-full text-center rounded-[6px] py-[5px] font-bold text-white">
                    Detail
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
