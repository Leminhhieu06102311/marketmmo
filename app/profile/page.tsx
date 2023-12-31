"use client";

import { BsFileEarmarkRichtext, BsPerson, BsHash } from "react-icons/bs";
import { FiEdit, FiMoreHorizontal } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineChatBubbleLeftEllipsis, HiOutlineXMark } from "react-icons/hi2";
import { AiOutlineRetweet, AiOutlineHeart, AiOutlineCamera, AiFillHeart } from "react-icons/ai";
import { FaChevronDown, FaEllipsis } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import Cookies from 'js-cookie';

import { GoRss } from "react-icons/go";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getUser } from "@/services/user";
import { setLoggedIn } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


export default function profile_user() {

    const dispatch = useAppDispatch();

    // const [showPicker, setShowPicker] = useState(false);
    // const [showButtonSearch, setShowButtonSearch] = useState(false);
    const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
    const [textareaValue, setTextareaValue] = useState('');
    const [activeTab, setActiveTab] = useState("post");


    const [access_token, setAccessToken] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [avatar, setAvatar] = useState('');
    const [creatAt, setCreatAt] = useState('');
    // const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(true);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const access_token = Cookies.get("token");
        if (!access_token) {
            dispatch(setLoggedIn(true));
            router.replace("/login");
            setLoading(false);
        }
    }, []);

    // const [isContentOpen, setIscontentOpen] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // setIscontentOpen(!isContentOpen);
    };

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClickOpenCardImage = () => {
        // Trigger the click event on the input file when the span is clicked
        fileInputRef.current?.click();
    };

    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    // const handleEmojiSelect = (emoji: any) => {
    //     const newEmojis = [...selectedEmojis, emoji];
    //     setSelectedEmojis(newEmojis);

    //     const newTextareaValue = newEmojis.join(' ');
    //     setTextareaValue(newTextareaValue);
    // };

    // const handleInputFocus = () => {
    //     setShowButtonSearch(true);
    // };



    const formatText = (text: string) => {
        return text.split(/(#[^\s$]+|\$[^\s]+|\@[^\s]+)/).map((word, index) => {
            if (
                word.startsWith("#") ||
                word.startsWith("$") ||
                word.startsWith("@")
            ) {
                return (
                    <React.Fragment key={index}>
                        <span className="text-primary">
                            <a href="#" className="hover:underline">
                                {word}
                            </a>
                        </span>{" "}
                    </React.Fragment>
                );
            }
            return word + " ";
        });
    }

    const token = Cookies.get('token');

    const fetchDataUser = async () => {
        try {
            let dataUser = await getUser(token);
            console.log(dataUser);
            setDisplayName(dataUser.name);
            setUsername(dataUser.username);
            setDescription(dataUser.bio);
            setAvatar(dataUser.avatar);
            setCreatAt(new Date(dataUser.createdAt).toISOString().split('T')[0])
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        if (token) {
            setAccessToken(token)
            fetchDataUser();
        } else {
            console.log('Access Token not found in cookie');
        }

    }, [access_token]);


    return (<div className=" mx-auto max-w-xxs  md:max-w-3xl lg:max-w-7xl flex relative min-h-[calc-108px] z-1 pointer-events-auto">
        <div className="flex relative max-w-[1280px] min-h-[calc(100vh-108px)] m-auto ">
            <div className=" mt-6 z-10 pl-4 flex-grow-0 flex-shrink-0 basis-[260px] hidden lg:flex">
                <aside className="sticky top-5 self-start">
                    <ul className="w-52 mt-7 mb-7">
                        <li className="mb-1">
                            <Link
                                href=""
                                className="flex justify-left items-center p-4 font-medium  text-sm rounded-lg gap-x-3 bg-gray-100 "
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 23.9872C15 18.591 11.4 14.9936 6 14.9936M24 23.9872C24 13.1949 16.8 6 6 6M6 24L6.01286 23.9859"
                                        stroke="black"
                                        stroke-width="1.5625"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>{" "}
                                Bảng tin
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href=""
                                className="flex justify-left items-center text-gray-500 p-4 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                            >
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.8333 14.5834H16.3542L17.1146 10.4167H20.8333C21.1096 10.4167 21.3746 10.307 21.5699 10.1116C21.7653 9.91625 21.875 9.6513 21.875 9.37504C21.875 9.09877 21.7653 8.83382 21.5699 8.63847C21.3746 8.44312 21.1096 8.33337 20.8333 8.33337H17.4896L18.2083 4.36462C18.2367 4.22535 18.2363 4.08175 18.2072 3.94264C18.178 3.80354 18.1206 3.67187 18.0387 3.55576C17.9567 3.43964 17.8519 3.34152 17.7306 3.26745C17.6092 3.19338 17.4741 3.14491 17.3333 3.12504C17.1934 3.0917 17.0481 3.08771 16.9065 3.11331C16.765 3.13892 16.6302 3.19357 16.5109 3.27381C16.3915 3.35406 16.29 3.45816 16.2128 3.57957C16.1357 3.70097 16.0845 3.83704 16.0625 3.9792L15.2812 8.33337H11.2396L11.9583 4.36462C11.9867 4.22535 11.9863 4.08175 11.9572 3.94264C11.928 3.80354 11.8706 3.67187 11.7887 3.55576C11.7067 3.43964 11.6019 3.34152 11.4806 3.26745C11.3592 3.19338 11.2241 3.14491 11.0833 3.12504C10.9434 3.0917 10.7981 3.08771 10.6565 3.11331C10.515 3.13892 10.3802 3.19357 10.2609 3.27381C10.1415 3.35406 10.04 3.45816 9.96283 3.57957C9.88566 3.70097 9.83448 3.83704 9.8125 3.9792L9.03125 8.33337H4.16667C3.8904 8.33337 3.62545 8.44312 3.4301 8.63847C3.23475 8.83382 3.125 9.09877 3.125 9.37504C3.125 9.6513 3.23475 9.91625 3.4301 10.1116C3.62545 10.307 3.8904 10.4167 4.16667 10.4167H8.64583L7.88542 14.5834H4.16667C3.8904 14.5834 3.62545 14.6931 3.4301 14.8885C3.23475 15.0838 3.125 15.3488 3.125 15.625C3.125 15.9013 3.23475 16.1663 3.4301 16.3616C3.62545 16.557 3.8904 16.6667 4.16667 16.6667H7.51042L6.79167 20.6355C6.76326 20.7747 6.76366 20.9183 6.79284 21.0574C6.82202 21.1965 6.87935 21.3282 6.96132 21.4443C7.04328 21.5604 7.14814 21.6585 7.26945 21.7326C7.39075 21.8067 7.52593 21.8552 7.66667 21.875C7.8066 21.9084 7.95193 21.9124 8.09348 21.8868C8.23503 21.8611 8.36975 21.8065 8.48914 21.7263C8.60853 21.646 8.71001 21.5419 8.78717 21.4205C8.86434 21.2991 8.91552 21.163 8.9375 21.0209L9.71875 16.6667H13.7604L13.0417 20.6355C13.0133 20.7747 13.0137 20.9183 13.0428 21.0574C13.072 21.1965 13.1294 21.3282 13.2113 21.4443C13.2933 21.5604 13.3981 21.6585 13.5194 21.7326C13.6408 21.8067 13.7759 21.8552 13.9167 21.875C14.0566 21.9084 14.2019 21.9124 14.3435 21.8868C14.485 21.8611 14.6198 21.8065 14.7391 21.7263C14.8585 21.646 14.96 21.5419 15.0372 21.4205C15.1143 21.2991 15.1655 21.163 15.1875 21.0209L15.9687 16.6667H20.8333C21.1096 16.6667 21.3746 16.557 21.5699 16.3616C21.7653 16.1663 21.875 15.9013 21.875 15.625C21.875 15.3488 21.7653 15.0838 21.5699 14.8885C21.3746 14.6931 21.1096 14.5834 20.8333 14.5834ZM10.1042 14.5834L10.8646 10.4167H14.8958L14.1354 14.5834H10.1042Z"
                                        fill="#808A9D"
                                    />
                                </svg>
                                Chủ đề
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href=""
                                className="flex justify-left items-center text-gray-500 p-4 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                            >
                                <BsFileEarmarkRichtext className="text-[25px] text-gray-500" />
                                Bài viết
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href=""
                                className="flex justify-left items-center p-4 text-gray-500 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                            >
                                <IoMdNotificationsOutline className="text-[25px] text-gray-500" />
                                Thông báo
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href=""
                                className="flex justify-left items-center p-4 text-gray-500 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                            >
                                <BsPerson className="text-[25px] text-gray-500" />
                                Trang cá nhân
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                href=""
                                className="flex justify-left items-center text-gray-500 p-4 text-sm rounded-lg font-normal hover:bg-gray-100 gap-x-3"
                            >
                                <FiMoreHorizontal className="text-[25px] text-gray-500" />
                                Xem thêm
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
            <main className="bg-white grow-[3] shrink basis relative z-10">
                <div className="flex flex-row justify-between">
                    <div className=" flex-1 grow-[2] md:min-w-[750px] max-w-[1000px] ">
                        <h2
                            className="text-2xl font-bold flex items-center m-0 pl-4 pr-4 pt-2 cursor-pointer justify-between lg:hidden"
                            onClick={toggleMenu}
                        >
                            Danh sách đề xuất
                            {/* <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-[#a6b0c3]"
                                /> */}
                            <FaChevronDown className="text-[#a6b0c3]" />
                        </h2>
                        {isMenuOpen ? (
                            <div className="fixed inset-0 bg-[rgba(10,30,66,0.4)] flex justify-center items-center transition-all duration-300 ease-in-out top-0 left-0 transform-none shadow-lg z-50">
                                <div className="h-screen w-screen max-h-screen max-h-[100vh] flex flex-col transition-height duration-300 ease-in-out max-w-screen bg-white rounded-lg overflow-hidden">
                                    <div className="p-4 text-center text-base leading-6 font-semibold relative flex-shrink-0 shadow-sm">
                                        Cộng đồng
                                        {/* <FontAwesomeIcon
                                                icon={faXmark}
                                                size="xl"
                                                onClick={toggleMenu}
                                                className="absolute top-4 right-4 text-[#a6b0c3] text-xs cursor-pointer z-10 w-6 h-6"
                                            /> */}
                                        < HiOutlineXMark onClick={toggleMenu}
                                            className="absolute top-4 right-4 text-[#a6b0c3] text-xs cursor-pointer z-10 w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col items-start ml-8  md:items-start gap-y-11 bg-white absolute left-0 md:left-20 top-20 h-full w-64 transform transition-transform duration-300 ease-in-out translate-x-0">
                                        <div className="flex justify-between items-center ">
                                            <div className="text-black text-xl font-semibold">
                                                Cộng đồng
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-black  font-semibold text-base text-primary flex items-center gap-x-4"
                                        >
                                            {/* <FontAwesomeIcon
                                                    icon={faRss}
                                                    size="xl"
                                                    className="text-black "
                                                /> */}
                                            <GoRss className="text-black " />
                                            Bảng tin
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            {/* <FontAwesomeIcon
                                                    icon={faHashtag}
                                                    // style={{ color: "#ffffff" }}
                                                    size="xl"
                                                    className="font-extralight text-[#a6b0c3]"
                                                /> */}

                                            <BsHash className="font-extralight text-[#a6b0c3]" />
                                            Chủ đề
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            <svg
                                                fill="#a6b0c3"
                                                className="font-extralight "
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 384 512"
                                            >
                                                <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                            </svg>
                                            Bài viết
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            <svg
                                                fill="#a6b0c3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                                            </svg>
                                            Thông báo
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            <svg
                                                fill="#a6b0c3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                            </svg>
                                            Trang của tôi
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            {/* <FontAwesomeIcon
                                                    icon={faEllipsis}
                                                    size="xl"
                                                    className="font-extralight text-[#a6b0c3]"
                                                /> */}
                                            <FaEllipsis className="font-extralight text-[#a6b0c3]" />
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="fixed inset-0 bg-[rgba(10,30,66,0.4)] flex justify-center items-center transition-all duration-300 ease-in-out top-0 left-0 translate-x-[-100%] shadow-lg z-[90]">
                                <div className="h-screen w-screen max-h-screen max-h-[100vh] flex flex-col transition-height duration-300 ease-in-out max-w-screen bg-white rounded-lg overflow-hidden">
                                    <div className="p-4 text-center text-base leading-6 font-semibold relative flex-shrink-0 z-[60] shadow-sm">
                                        Community
                                        {/* <FontAwesomeIcon
                                                icon={faXmark}
                                                size="xl"
                                                onClick={toggleMenu}
                                                className="absolute top-4 right-4 text-[#a6b0c3] text-xs cursor-pointer z-10 w-6 h-6"
                                            /> */}
                                    </div>
                                    <div className="flex justify-between items-center ">
                                        <div className="text-black text-xl font-semibold">Community</div>
                                    </div>
                                    <div className="flex flex-col items-start gap-y-11 bg-white absolute left-0 md:left-20 top-20 h-full w-64 transform transition-transform duration-300 ease-in-out translate-x-0">
                                        <a
                                            href="#"
                                            className="text-black  font-semibold text-base text-primary flex items-center gap-x-4"
                                        >
                                            {/* <FontAwesomeIcon
                                                    icon={faRss}
                                                    size="xl"
                                                    className="text-black "
                                                /> */}
                                            Feed
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            {/* <FontAwesomeIcon
                                                    icon={faHashtag}
                                                    // style={{ color: "#ffffff" }}
                                                    size="xl"
                                                    className="font-extralight text-[#a6b0c3]"
                                                /> */}
                                            Topics
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            <svg
                                                fill="#a6b0c3"
                                                className="font-extralight "
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 384 512"
                                            >
                                                <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                            </svg>
                                            Article
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            <svg
                                                fill="#a6b0c3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                                            </svg>
                                            Notifications
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            <svg
                                                fill="#a6b0c3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                            </svg>
                                            My Page
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black  text-base font-medium flex items-center gap-x-4"
                                        >
                                            {/* <FontAwesomeIcon
                                                    icon={faEllipsis}
                                                    size="xl"
                                                    className="font-extralight text-[#a6b0c3]"
                                                /> */}
                                            More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="border-box ">
                            <div className="mx-2 md:mx-8">
                                <div className="pb-3 border-box mt-6">
                                    <div className="box-border mb-[-24px] aspect-[3/1] relative w-full bg-[#eff2f5] rounded-lg overflow-hidden select-none transition-opacity duration-500 ease-in-out">
                                        {/* <img src="" className="bg-[#eff2f5] hidden w-full h-full rounded-[8px] cursor-pointer select-none before:content-['']" alt="" /> */}
                                        {/* <div className="bg-[#eff2f5] hidden w-full h-full rounded-[8px] cursor-pointer select-none " /> */}
                                        <span className="outline-none" onClick={handleClickOpenCardImage}>
                                            <AiOutlineCamera className="absolute inset-0 m-auto cursor-pointer text-[40px] text-gray-500 select-none inline-block shrink-0 leading-none align-middle" />
                                            <input type="file" name="" accept=".png, .jpg, .jpeg" id="" className="hidden" ref={fileInputRef}
                                                onChange={handleClickOpenCardImage} />
                                        </span>
                                    </div>
                                    <div className="pl-6">
                                        <div className="border-box m-0 flex">
                                            <div className="md:w-[128px] w-[74px] mr-2 border-box">
                                                <div className="cursor-pointer relative">
                                                    <a href="" className="md:w-32 md:h-32 w-[74px] h-[74px] p-2 rounded-full shadow-md bg-white overflow-hidden flex items-center justify-center">
                                                        <div className="w-[110px] h-[110px] rounded-full bg-[#f8fafd] transition-border duration-200 ease-out overflow-hidden">
                                                            <img className="w-full h-full object-cover" src={avatar} alt="" />
                                                        </div>
                                                    </a>
                                                </div>


                                            </div>
                                            <div className="flex flex-col md:flex-row lg:flex-row box-border m-0 justify-between grow-[2]">
                                                <div className="ml-6 mt-10 border-box">
                                                    <p className="truncate text-[18px] leading-6 m-0 text-gray-700 font-semibold">{displayName}</p>
                                                    <p className="truncate md:text-[14px] text-[12px] leading-6 m-0 text-gray-500">{username}</p>
                                                    <div className="border-box mt-2 flex flex-col md:flex-row lg:flex-row gap-2">
                                                        <div className="cursor-pointer border-box m-0">
                                                            <span className="leading-6 m-0 text-gray-700 font-bold text-base">0</span>
                                                            <span className="leading-6 ml-2 text-gray-700 text-base">Đang theo dõi</span>
                                                        </div>
                                                        <div className="cursor-pointer border-box">
                                                            <span className="leading-6 m-0 text-gray-700 font-bold text-base">0</span>
                                                            <span className="leading-6 ml-2 text-gray-700 text-base">Người theo dõi</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex mt-3 md:mt-[74px] lg:mt-[74px] flex-row border-box">
                                                    <div className="flex items-center h-10 px-4 border border-[#cfd6e4] rounded cursor-pointer ml-2">
                                                        <FiEdit className="object-cover" />
                                                        <span className="leading-6 ml-2 text-gray-700 text-base">Sửa</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-border mt-2 flex flex-col">
                                            <div className="leading-6 m-0 text-gray-600 ">
                                                <div className="overflow-ellipsis break-words">
                                                    <p className="my-3 mx-auto">{description}</p>
                                                </div>
                                            </div>
                                            <div className="box-border mt-1 flex items-center">
                                                <span className="leading-6 m-0 text-gray-600 ">
                                                    Đã tham gia từ {creatAt}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative ">

                                <div className="px-6 py-0.5 bg-white">
                                    <div className="mt-3 border-box flex items-center w-full pb-4 max-sm:justify-center" >
                                        <div className={`basis-auto mx-2  flex items-center justify-center relative leading-10 hover:text-black ${activeTab === "post" ? "font-bold after:w-[40px]  after:h-[4px] after:rounded-full after:absolute after:top-[35px] after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:bg-blue-500 " : "font-medium text-gray-400"}`}
                                            onClick={() => handleTabClick("post")}
                                            data-target="post"
                                        >
                                            <span className=" line-height-12 text-base cursor-pointer select-none">Bài đăng</span>
                                        </div>
                                        <div className={`basis-auto mx-2  flex items-center justify-center relative leading-10 hover:text-black ${activeTab === "comment" ? "font-bold after:w-[40px]  after:h-[4px] after:rounded-full after:absolute after:top-[35px] after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:bg-blue-500 " : "font-medium text-gray-400"}`}
                                            onClick={() => handleTabClick("comment")}
                                            data-target="comment">
                                            <span className="line-height-12 text-base cursor-pointer select-none ">Bình luận</span>
                                        </div>
                                        <div className={`basis-auto mx-2  flex items-center justify-center relative leading-10 hover:text-black ${activeTab === "liked" ? "font-bold after:w-[40px]  after:h-[4px] after:rounded-full after:absolute after:top-[35px] after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:bg-blue-500 " : "font-medium text-gray-400"}`}
                                            onClick={() => handleTabClick("liked")}
                                            data-target="liked">
                                            <span className="line-height-12 text-base cursor-pointer select-none ">Đã thích</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="h-full w-full relative">
                                        <div className={`${activeTab === "post" ? "" : "hidden"
                                            }`}
                                            id="post">
                                            <div className="md:px-8 px-2 border-box m-0 cursor-pointer overflow-hidden">
                                                <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">

                                                    <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                                        <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                                            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                                                <img src={avatar} className="w-full h-full object-cover" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                                        <div>
                                                            <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-0.5 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                                                <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                                                    <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                                                        {displayName}
                                                                    </span>
                                                                </a>
                                                                <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                                                    <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                                                        {username}
                                                                    </span>
                                                                </a>
                                                                <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                                                    Th11 7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                                        <div className="w-full">
                                                            <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                                                <div className="m-0  break-words text-base leading-6">
                                                                    <p className="mx-auto text-base leading-6">
                                                                        {formatText(
                                                                            ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                                                <div className="relative cursor-pointer w-full pt-[56%]">
                                                                    <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div
                                                            className={`overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm relative transition-transform transform ${liked ? 'scale-105' : 'scale-100'}`}
                                                            onClick={toggleLike}
                                                        >
                                                            {liked ? (
                                                                <AiFillHeart className="text-red-500 text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            ) : (
                                                                <AiOutlineHeart className="text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            )}
                                                        </div>

                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">

                                                    <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                                        <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                                            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                                                <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                                        <div>
                                                            <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                                                <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                                                    <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                                                        ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                                                    <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                                                        @ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                                                    Th11 7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                                        <div className="w-full">
                                                            <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                                                <div className="m-0  break-words text-base leading-6">
                                                                    <p className="mx-auto text-base leading-6">
                                                                        {formatText(
                                                                            ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                                                <div className="relative cursor-pointer w-full pt-[56%]">
                                                                    <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div
                                                            className={`overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm relative transition-transform transform ${liked ? 'scale-105' : 'scale-100'}`}
                                                            onClick={toggleLike}
                                                        >
                                                            {liked ? (
                                                                <AiFillHeart className="text-red-500 text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            ) : (
                                                                <AiOutlineHeart className="text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            )}
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">

                                                    <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                                        <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                                            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                                                <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                                        <div>
                                                            <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                                                <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                                                    <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                                                        ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                                                    <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                                                        @ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                                                    Th11 7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                                        <div className="w-full">
                                                            <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                                                <div className="m-0  break-words text-base leading-6">
                                                                    <p className="mx-auto text-base leading-6 mt-2">
                                                                        {formatText(
                                                                            ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                                                <div className="relative cursor-pointer w-full pt-[56%]">
                                                                    <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div
                                                            className={`overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm relative transition-transform transform ${liked ? 'scale-105' : 'scale-100'}`}
                                                            onClick={toggleLike}
                                                        >
                                                            {liked ? (
                                                                <AiFillHeart className="text-red-500 text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            ) : (
                                                                <AiOutlineHeart className="text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            )}
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className={`${activeTab === "liked" ? "" : "hidden"
                                            }`}
                                            id="liked">
                                            <div className="md:px-8 px-2 border-box m-0 cursor-pointer overflow-hidden">
                                                <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                                                    <div className="absolute top-0 right-0">
                                                        <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                                                    </div>
                                                    <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                                        <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                                            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                                                <img src={avatar} className="w-full h-full object-cover" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                                        <div>
                                                            <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                                                <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                                                    <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                                                        {displayName}
                                                                    </span>
                                                                </a>
                                                                <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                                                    <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                                                        {username}
                                                                    </span>
                                                                </a>
                                                                <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                                                    Th11 7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                                        <div className="w-full">
                                                            <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                                                <div className="m-0  break-words text-base leading-6">
                                                                    <p className="mx-auto text-base leading-6">
                                                                        {formatText(
                                                                            ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                                                <div className="relative cursor-pointer w-full pt-[56%]">
                                                                    <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div
                                                            className={`overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm relative transition-transform transform ${liked ? 'scale-105' : 'scale-100'}`}
                                                            onClick={toggleLike}
                                                        >
                                                            {liked ? (
                                                                <AiFillHeart className="text-red-500 text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            ) : (
                                                                <AiOutlineHeart className="text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            )}
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                                                    <div className="absolute top-0 right-0">
                                                        <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                                                    </div>
                                                    <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                                        <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                                            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                                                <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                                        <div>
                                                            <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                                                <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                                                    <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                                                        ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                                                    <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                                                        @ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                                                    Th11 7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                                        <div className="w-full">
                                                            <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                                                <div className="m-0  break-words text-base leading-6">
                                                                    <p className="mx-auto text-base leading-6">
                                                                        {formatText(
                                                                            ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                                                <div className="relative cursor-pointer w-full pt-[56%]">
                                                                    <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div
                                                            className={`overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm relative transition-transform transform ${liked ? 'scale-105' : 'scale-100'}`}
                                                            onClick={toggleLike}
                                                        >
                                                            {liked ? (
                                                                <AiFillHeart className="text-red-500 text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            ) : (
                                                                <AiOutlineHeart className="text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            )}
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                                                    <div className="absolute top-0 right-0">
                                                        <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                                                    </div>
                                                    <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                                        <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                                            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                                                <img src="../images/community/user.png" className="w-full h-full object-cover" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                                        <div>
                                                            <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                                                <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                                                    <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                                                        ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                                                    <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                                                        @ddq7mexeifil
                                                                    </span>
                                                                </a>
                                                                <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                                                    Th11 7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                                        <div className="w-full">
                                                            <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                                                <div className="m-0  break-words text-base leading-6">
                                                                    <p className="mx-auto text-base leading-6 mt-2">
                                                                        {formatText(
                                                                            ` $BTC The flight time is very close🚀
                                      It's not the time to sell; it's the time to hold and even add to your limited supply assets, like XRP $XRP Ethereum $ETH MANA $MANA SAND $SAND and PEPE $PEPE`)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <div className="max-w-[560px] mt-[10px] rounded-[8px] overflow-hidden">
                                                                <div className="relative cursor-pointer w-full pt-[56%]">
                                                                    <img src="https://pbs.twimg.com/media/F50ONSfbgAA8wzG.jpg" alt="" className="w-full h-full absolute top-0 left-0 object-cover" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div
                                                            className={`overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm relative transition-transform transform ${liked ? 'scale-105' : 'scale-100'}`}
                                                            onClick={toggleLike}
                                                        >
                                                            {liked ? (
                                                                <AiFillHeart className="text-red-500 text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            ) : (
                                                                <AiOutlineHeart className="text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            )}
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className={`${activeTab === "comment" ? "" : "hidden"
                                            }`}
                                            id="comment">
                                            <div className="md:px-8 px-2 border-box m-0 cursor-pointer overflow-hidden">

                                                <div className="md:mt-[20px] mt-[30px] grid md:grid-cols-[72px,1fr] grid-cols-[40px,1fr] grid-rows-[auto,auto,1fr,auto] relative transition-all duration-600 ease-in-out border-b border-gray-200">
                                                    <div className="absolute top-0 right-0">
                                                        <button className="h-8 p-0 w-[84px] text-[12px] items-center bg-blue-600 hover:bg-blue-400 rounded-lg inline-flex text-white cursor-pointer justify-center font-semibold ">+ Theo dõi</button>
                                                    </div>
                                                    <div className="col-span-1 md:row-span-4 row-span-1 cursor-pointer">
                                                        <a href="" className="md:w-14 md:h-14 w-8 h-8 shrink-0 mr-10">
                                                            <div className="md:w-14 md:h-14 w-8 h-8 rounded-full bg-gray-100 border boder-gray-100 transition flex items-center justify-center overflow-hidden">
                                                                <img src={avatar} className="w-full h-full object-cover" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-span-1 row-span-1 flex w-[calc(100%-90px)] relative justify-start min-h-[30px]">
                                                        <div>
                                                            <div className="box-border m-0 inline-grid leading-5 grid  md:gap-4 gap-x-2 items-center grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-3">
                                                                <a href="" className="grid grid-cols-1 auto-cols-auto gap-3 items-center justify-star">
                                                                    <span className="font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-[14px] leading-6">
                                                                        {displayName}
                                                                    </span>
                                                                </a>
                                                                <a href="" className="grid grid-cols-1 max-sm:grid-rows-1 max-sm:row-start-2">
                                                                    <span className="font-normal text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm leading-6">
                                                                        {username}
                                                                    </span>
                                                                </a>
                                                                <span className=" text-gray-400 whitespace-nowrap text-[14px] leading-6 grid grid-cols-1 ">
                                                                    Th11 7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 max-w-[560px]">
                                                        <div className="w-full">
                                                            <div className="max-h-[168px] max-w-[560px] relative overflow-hidden text-[14px]">
                                                                <div className="m-0  break-words text-base leading-6">
                                                                    <p className="mx-auto text-base leading-6 mt-2">
                                                                        {formatText(
                                                                            `@Hieu wow`)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden">
                                                            <div className="max-w-[560px] hidden mt-[10px] rounded-[8px] overflow-hidden">
                                                                <div className="hidden relative cursor-pointer w-full pt-[56%]">
                                                                    <img src="" alt="" className="hidden w-full h-full absolute top-0 left-0 object-cover" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 col-span-2 row-span-1 flex justify-between items-center p-3 max-w-[560px]">
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <HiOutlineChatBubbleLeftEllipsis className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <AiOutlineRetweet className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                        <div
                                                            className={`overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm relative transition-transform transform ${liked ? 'scale-105' : 'scale-100'}`}
                                                            onClick={toggleLike}
                                                        >
                                                            {liked ? (
                                                                <AiFillHeart className="text-red-500 text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            ) : (
                                                                <AiOutlineHeart className="text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                            )}
                                                        </div>
                                                        <div className="overflow-hidden whitespace-no-wrap truncate text-gray-500 leading-none cursor-pointer font-medium text-sm">
                                                            <FiMoreHorizontal className=" text-[24px] select-none inline-block flex-shrink-0 leading-none align-middle" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[350px] min-w-[280px] grow basis-0 shrink-0 m-0 max-lg:hidden  hidden xl:block pr-6">
                        <div className="sticky top-0 z-10 self-start">
                            <div className="border-box m-0 h-5"></div>
                            <div className="mb-4 shadow-md self-start bg-white p-2 pt-2.5 pb-2.5 rounded-[8px] box-border">
                                <div className="font-bold text-[16px] h-[28px] mb-2.5 flex items-center p-2 pt-2.5 pb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 128 128">
                                        <radialGradient id="notoFire0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
                                            <stop offset=".314" stop-color="#FF9800" />
                                            <stop offset=".662" stop-color="#FF6D00" />
                                            <stop offset=".972" stop-color="#F44336" />
                                        </radialGradient>
                                        <path fill="url(#notoFire0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z" />
                                        <radialGradient id="notoFire1" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse">
                                            <stop offset=".214" stop-color="#FFF176" />
                                            <stop offset=".328" stop-color="#FFF27D" />
                                            <stop offset=".487" stop-color="#FFF48F" />
                                            <stop offset=".672" stop-color="#FFF7AD" />
                                            <stop offset=".793" stop-color="#FFF9C4" />
                                            <stop offset=".822" stop-color="#FFF8BD" stop-opacity=".804" />
                                            <stop offset=".863" stop-color="#FFF6AB" stop-opacity=".529" />
                                            <stop offset=".91" stop-color="#FFF38D" stop-opacity=".209" />
                                            <stop offset=".941" stop-color="#FFF176" stop-opacity="0" />
                                        </radialGradient>
                                        <path fill="url(#notoFire1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z" />
                                    </svg> &nbsp;
                                    <span>
                                        Các chủ đề thịnh hành
                                    </span>
                                </div>
                                <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                                    <small>1</small>
                                    <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                                        <div className="truncate font-semibold">
                                            #Facebook
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                                    <small>2</small>
                                    <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                                        <div className="truncate font-semibold">
                                            #SEO
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                                    <small>3</small>
                                    <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                                        <div className="truncate font-semibold">
                                            #Twitter
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                                    <small>4</small>
                                    <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                                        <div className="truncate font-semibold">
                                            #Email
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between cursor-pointer h-8 px-2.5 rounded-full text-sm">
                                    <small>5</small>
                                    <div className="flex-1 pl-[15px] mr-1 overflow-hidden flex items-center">
                                        <div className="truncate font-semibold">
                                            #Tool
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box m-0 h-5"></div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    </div >

    );
}

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
