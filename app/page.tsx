"use client";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import {
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import DetailProduct from "@/components/DetailProduct/DetailProduct";
import { useEffect, useRef, useState } from "react";
import { getAccountTrending, getSellingProduct, getSoftwareTrending } from "@/services/product";
import Product from "@/interfaces/product";
import ProductLoader from "@/components/Skeleton/ProductLoader";
import ProductItem from "@/components/Product/ProductItem";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import {  useAppSelector } from '@/redux/hooks';
export default function Home() {
  return (
    <div className=''></div>
  )
}
