import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCarousel from "../components/DetailCarousel";
import Navbar from "../components/Navbar";

export default function ProductDetail() {
  const { id } = useParams();
  const errImage = "https://i.ibb.co/S5ssMRM/errImage.png";
  const [detail, setDetail] = useState([
    {
      id: "",
      title: "",
      category: "",
      images: [errImage, errImage, errImage],
    },
  ]);
  useEffect(() => {
    async function getProduct() {
      try {
        await axios
          .get(`https://dummyjson.com/products/${id}`)
          .then((response) => setDetail(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, []);
  console.log(id);
  console.log(detail);

  const fullStars = Math.floor(detail.rating);
  const halfStars = Math.round(detail.rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const starElements = [];
  for (let i = 0; i < fullStars; i++) {
    starElements.push(<i className="fa fa-star" key={i}></i>);
  }
  for (let i = 0; i < halfStars; i++) {
    starElements.push(
      <i className="fa fa-star-half-o" key={i + fullStars}></i>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    starElements.push(
      <i className="fa fa-star-o" key={i + fullStars + halfStars}></i>
    );
  }
  function getStars(num) {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i className="fa fa-star" key={i}></i>);
    }
    return stars;
  }

  return (
    <div>
      <Navbar />
      <div className="flex mt-[20px]">
        <div className="h-[500px] w-[500px] mx-[80px] bg-[#C2C2C2]">
          <DetailCarousel
            img1={`https://i.dummyjson.com/data/products/${id}/1.jpg`}
            img2={`https://i.dummyjson.com/data/products/${id}/2.jpg`}
            img3={`https://i.dummyjson.com/data/products/${id}/3.jpg`}
          />
        </div>
        <div className="grid content-between h-[500px] py-[30px]">
            <div>
              <p className="font-poppins font-bold text-[40px] mb-5">
                {detail.title}
              </p>
              <p className="font-poppins text-[30px] mb-5">${detail.price}</p>
              <p className="font-poppins text-[20px]">{detail.description}</p>
            </div>
            <div className="grid grid-rows-3 grid-cols-3 w-[500px]">
              <p className="font-poppins text-[20px]">Brand</p>
              <p className="font-poppins text-[20px] col-span-2">
                {detail.brand}
              </p>
              <p className="font-poppins text-[20px]">Rating</p>
              <p className="font-poppins text-[20px] col-span-2">
                {starElements} {detail.rating}
              </p>
              <p className="font-poppins text-[20px]">Stock</p>
              <p className="font-poppins text-[20px] col-span-2">
                {detail.stock}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
