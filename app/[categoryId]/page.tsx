import {
    faArrowDownShortWide,
    faBars,
    faFireFlameCurved,
    faFontAwesome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
export default function detailCategory() {
    return (
        <>
            <div className="mx-auto w-full">
                <div className="flex justify-center">
                    {/* Aside */}
                    <div className="hidden w-2/12 px-5 xl:block lg:block">
                        {/* Vertical navigation  */}
                        <div className="block scroll-auto overflow-y-auto max-h-screen sticky top-0 overscroll-contain">
                            <ul className="sticky">
                                <li className="p-3 rounded-md hover:bg-gray-100">

                                    <Link
                                        href="/intermediary"
                                        className="flex items-center "
                                    >
                                        <span className="mr-4"><FontAwesomeIcon icon={faFireFlameCurved} width={20} height={20} /></span>
                                        <span className="text-sm font-medium ">Xu hướng</span>
                                    </Link>
                                </li>
                                <li className="p-3 rounded-md hover:bg-gray-100">

                                    <Link
                                        href="/intermediary"
                                        className="flex items-center"
                                    >
                                        <span className="mr-4"><FontAwesomeIcon icon={faArrowDownShortWide} width={20} height={20} /></span>
                                        <span className="text-sm font-medium">Giảm giá</span>
                                    </Link>
                                </li>
                            </ul>
                            <span className="sticky text-sm  font-medium text-gray-400">Networks</span>
                            <ul className="sticky">
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-sky-700 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} /><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Facebook</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} /><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Messenger</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-sky-400 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} /><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Twitter</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-black w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Tiktok</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-red-800 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Gmail</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-fuchsia-600 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M223.69,141.06,167,284.23,111,141.06H14.93L120.76,390.19,82.19,480h94.17L317.27,141.06Zm105.4,135.79a58.22,58.22,0,1,0,58.22,58.22A58.22,58.22,0,0,0,329.09,276.85ZM394.65,32l-93,223.47H406.44L499.07,32Z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Yahoo!</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-sky-700 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} /><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Facebook</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} /><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Messenger</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-sky-400 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} /><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Twitter</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-black w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Tiktok</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-red-800 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Gmail</span>
                                    </Link>
                                </li>
                                <li className="p-3 m-1 rounded-md hover:bg-gray-100 cursor-pointer">
                                    <Link href="" className="flex items-center">
                                        <span className="mr-3">
                                            <div className="flex justify-center items-center bg-fuchsia-600 w-8 h-8 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M223.69,141.06,167,284.23,111,141.06H14.93L120.76,390.19,82.19,480h94.17L317.27,141.06Zm105.4,135.79a58.22,58.22,0,1,0,58.22,58.22A58.22,58.22,0,0,0,329.09,276.85ZM394.65,32l-93,223.47H406.44L499.07,32Z" /></svg>
                                            </div>
                                        </span>
                                        <span className="text-sm font-medium">Yahoo!</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Product List */}
                    <div className="px-1 lg:w-10/12 lg:px-12 md:w-11/12">
                        {/* Category */}
                        <div className="my-3 top-0">
                            <div className="flex items-center text-xs font-semibold text-gray-600 justify-center lg:justify-end md:w-full">
                                <span className="">Filter by</span>
                                <ul className="mx-2 inline-flex items-center bg-gray-100  rounded">
                                    <li className=""><button className="px-4 py-2 m-1 rounded-md active:bg-white hover:bg-white" >Tất cả</button></li>
                                    <li className=""><button className="px-4 py-2 m-1 rounded-md active:bg-white hover:bg-white" >Phổ biến</button></li>
                                    <li className=""><button className="px-4 py-2 m-1 rounded-md active:bg-white hover:bg-white" >Giảm giá</button></li>
                                </ul>
                                <div className=" relative">
                                    <select className="bg-gray-100 p-3 rounded-lg outline-none">
                                        <option className="py-2 px-4 hidden">Category</option>
                                        <option className="py-2 px-4">All</option>
                                        <option className="py-2 px-4">1</option>
                                        <option className="py-2 px-4">2</option>
                                    </select>
                                </div>
                                <div className="mx-2 flex bg-gray-100 rounded">
                                    <span className="rounded p-2 m-1 hover:bg-white active:bg-white"><FontAwesomeIcon icon={faBars} width={15} height={15} /></span>
                                    <span className="rotate-90 rounded p-2 m-1 hover:bg-white active:bg-white"><FontAwesomeIcon icon={faBars} rotate={90} width={15} height={15} /></span>
                                </div>
                            </div>
                        </div>
                        {/* Products */}
                        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 ">
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>   <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="">
                                <div className="transition ease-in-out delay-150 m-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-gray-400 duration-300 ">
                                    <Image src="/images/detail-category/1.png"
                                        alt=""
                                        width={0}
                                        height={0}
                                        className="w-full rounded-t-xl"
                                        sizes="100vh"
                                    ></Image>
                                    <div className="p-3">
                                        <div className=" w-full line-clamp-1 overflow-hidden">
                                            <p className="w-full font-bold">ArtBlocks: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, atque.</p>
                                        </div>
                                        <div className="my-2 inline-flex items-center text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            <span className="mr-1 text-gray-900"><FontAwesomeIcon icon={faFontAwesome} width={12} height={12} /></span>
                                            <span>Etherium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="my-1">
                                                <h4 className="text-xs font-bold text-gray-500">Starts</h4>
                                                <span className="my-2 text-base font-bold">Aug 22</span>
                                            </div>
                                            <div className="my-1">
                                                <h4 className=" text-xs font-bold text-gray-500">Mint Price</h4>
                                                <span className="my-2 text-base font-bold">0.01 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center my-3">
                            <nav aria-label="Page navigation example">
                                <ul className="flex items-center -space-x-px h-8 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <span className="sr-only">Previous</span>
                                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <span className="sr-only">Next</span>
                                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}