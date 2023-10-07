import React, { useState } from "react";
import TabPerpetual from "./TabMarket/TabPerpetual";
import TabFutures from "./TabMarket/TabFutures";
import TabSpot from "./TabMarket/TabSpot";
import Link from "next/link";

const ShowSellerChild = () => {
  const [showMore, setShowMore] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [showMore1, setShowMore1] = useState(false);
  const handleLoadMore = () => {
    setShowMore(true);
  };
  const handleLoadMore1 = () => {
    setShowMore1(true);
  };
  const handleHide1 = () => {
    setShowMore1(false);
  };
  const handleHideItems = () => {
    setShowMore(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      {" "}
      <div className={`${isDropdownOpen ? 'blur-sm	' : ''} md:blur-0 lg:blur-0`}>
        <div className="max-w-xxs mx-auto md:max-w-3xl lg:max-w-7xl  px-5 pt-12">
          <div className="mb-8 md:mb-0 lg:mb-0">
            <div className="lg:flex">
              <div className="flex w-auto md:w-auto my-3 mx-0 mb-8 lg:items-center lg:w-[390px] ">
                <img
                  src="https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png"
                  alt="Binance"
                  className="w-[28px] h-auto md:w-7 lg:w-10 lg:h-10 mr-5"
                />
                <h1 className="text-2xl text-gray-800 font-semibold md:text-2xl lg:text-3xl  ">
                  Market MMO
                </h1>
              </div>
              <div className="md:flex items-baseline my-3 mx-0 mb-8 lg:flex box-border m-0">
                <div className="w-auto md:w-[425px] lg:w-[425px]">
                  <p className="leading-9 lg:m-0 text-gray-600 text-sm font-medium ">
                    Tổng khối lượng giao dịch phái sinh(24h)
                  </p>
                  <span className="leading-10 text-[26px] lg:m-0 text-gray-800 text-3xl font-semibold">
                    $339,600,420.21
                  </span>
                  <p className="leading-9 lg:m-0 text-gray-500 text-base">
                    13,046 BTC
                  </p>
                </div>
                <div className="w-auto md:w-auto lg:w-[425px]">
                  <p className="leading-9 lg:m-0 text-gray-600 text-sm font-medium">
                    Tổng giá trị tài sản
                  </p>
                  <span className="leading-10 text-[26px] lg:m-0 text-gray-800 text-3xl font-semibold">
                    $55,073,056,677.58
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:flex mt-[24px]">
              <div className="md:mb-[30px] lg:flex">
                <div className="mb-8 w-auto md:mb-8 lg:flex-none lg:w-[390px]">
                  <ul className="lg:flex flex-col flex-0.33 order-3 mb-7">
                    <li className="md:my-[4px] lg:my-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="18px"
                        width="18px"
                        viewBox="0 0 24 24"
                        color="grey"
                        className="mr-2"
                      >
                        <path d="M11.877 15.9787C11.8146 16.8242 11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z"></path>
                        <path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z"></path>
                      </svg>

                      <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z"></path>
                      <Link
                        className="text-blue-500 py-1 lg:no-underline cursor-pointer"
                        href="https://www.binance.com/"
                        target="_blank"
                      >
                        https://www.marketmmo.com/
                      </Link>
                    </li>
                    <li className="md:my-[4px] lg:my-1 flex items-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="18px"
                        width="18px"
                        viewBox="0 0 24 24"
                        color="grey"
                        className="mr-2"
                      >
                        <path d="M20.25 19.4349H19.5V13.1738H18V19.4349H15V13.1738H13.5V19.4349H10.5V13.1738H9V19.4349H6V13.1738H4.5V19.4349H3.75C3.336 19.4349 3 19.7847 3 20.2175C3 20.6503 3.336 21.0001 3.75 21.0001H20.25C20.664 21.0001 21 20.6503 21 20.2175C21 19.7847 20.664 19.4349 20.25 19.4349Z"></path>
                        <path d="M20.6092 7.79137L12.3593 3.09558C12.135 2.96879 11.865 2.96879 11.6407 3.09558L3.39075 7.79137C3.15 7.92833 3 8.19207 3 8.47852V10.8264C3 11.2592 3.336 11.609 3.75 11.609H20.25C20.664 11.609 21 11.2592 21 10.8264V8.47852C21 8.19207 20.85 7.92833 20.6092 7.79137ZM12 9.26115C11.1713 9.26115 10.5 8.56069 10.5 7.69588C10.5 6.83108 11.1713 6.13062 12 6.13062C12.8287 6.13062 13.5 6.83108 13.5 7.69588C13.5 8.56069 12.8287 9.26115 12 9.26115Z"></path>
                      </svg>
                      <Link
                        className="text-blue-500 py-1 lg: no-underline cursor-pointer"
                        href="https://www.binance.com/en/fee/schedule"
                        target="_blank"
                      >
                        Lệ phí
                      </Link>
                    </li>
                    <li className="md:my-[4px] lg:my-1 flex items-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="18px"
                        width="18px"
                        viewBox="0 0 24 24"
                        color="grey"
                        className="mr-2"
                      >
                        <path
                          d="M8.5621 16.3721C9.62006 18.0941 11.8571 19.2855 14.4541 19.2855C14.9369 19.2855 15.4057 19.2418 15.8582 19.1638L19.3635 20.9998V17.5369C20.3789 16.6309 20.9999 15.4455 20.9999 14.1427C20.9999 12.8124 20.3519 11.6047 19.2972 10.691M11.1822 3C6.66319 3 3 6.07028 3 9.85712C3 11.3974 3.61367 12.8143 4.63645 13.9585V18.4285L8.59093 16.3577C9.40588 16.5857 10.2757 16.7142 11.1822 16.7142C15.7013 16.7142 19.3645 13.644 19.3645 9.85712C19.3645 6.07028 15.7013 3 11.1822 3Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <Link
                        className="text-blue-500 py-1 md:text-blue-500 lg:text-blue-500 no-underline cursor-pointer"
                        href="https://t.me/binanceexchange"
                        target="_blank"
                      >
                        Liên hệ
                      </Link>
                    </li>
                    <li className="md:my-[4px] lg:my-1 flex items-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="18px"
                        width="18px"
                        viewBox="0 0 24 24"
                        color="grey"
                        className="mr-2"
                      >
                        {" "}
                        <path
                          d="M22 5.89691C21.25 6.2268 20.5 6.47423 19.6667 6.5567C20.5 6.06186 21.1667 5.23711 21.5 4.3299C20.6667 4.82474 19.8333 5.15464 18.9167 5.31959C18.1667 4.49485 17.0833 4 15.9167 4C13.6667 4 11.8333 5.81443 11.8333 8.04124C11.8333 8.37113 11.8333 8.70103 11.9167 8.94845C8.41667 8.7835 5.41667 7.13402 3.41667 4.65979C3 5.31959 2.83333 5.97938 2.83333 6.72165C2.83333 8.12371 3.58333 9.36082 4.66667 10.1031C4 10.1031 3.33333 9.93814 2.83333 9.60825C2.83333 9.60825 2.83333 9.60825 2.83333 9.69072C2.83333 11.6701 4.25 13.3196 6.08333 13.6495C5.75 13.732 5.41667 13.8144 5 13.8144C4.75 13.8144 4.5 13.8144 4.25 13.732C4.75 15.3814 6.25 16.5361 8.08333 16.5361C6.66667 17.6082 4.91667 18.268 3 18.268C2.66667 18.268 2.33333 18.268 2 18.1856C3.83333 19.3402 6 20 8.25 20C15.8333 20 19.9167 13.8144 19.9167 8.45361C19.9167 8.28866 19.9167 8.12371 19.9167 7.95876C20.75 7.38144 21.4167 6.63917 22 5.89691Z"
                          fill="currenColor"
                        ></path>
                      </svg>
                      <Link
                        className="text-blue-500 py-1 md:text-blue-500 lg:text-blue-500 no-underline cursor-pointer"
                        href="https://twitter.com/binance"
                        target="_blank"
                      >
                        @marketmmo
                      </Link>
                    </li>
                  </ul>
                  <div className="w-[100%]">
                    <p className="lg:leading-1.5 text-light-neutral-6 mb-1 text-xs">
                      Bạn có làm việc cho một sàn giao dịch không?
                    </p>
                    <button className="w-[350px] md:w-auto items-center lg:items-center justify-center bg-blue-600 border-0 rounded-lg inline-flex text-white cursor-pointer font-semibold  h-[40px] text-base px-4 leading-6">
                      <Link
                        className="flex md:flex lg:flex items-center text-inherit leading-inherit "
                        href="https://support.Market MMO.com/hc/en-us/requests/new?ticket_form_id=360000553552"
                        target="_blank"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="lg:mr-1"
                          // style="vertical-align:text-top;margin-right:4px"
                        >
                          {" "}
                          <path
                            d="M7.19995 1.59998C6.75812 1.59998 6.39995 1.95815 6.39995 2.39998C6.39995 2.8418 6.75812 3.19998 7.19995 3.19998H8.79995C9.24178 3.19998 9.59995 2.8418 9.59995 2.39998C9.59995 1.95815 9.24178 1.59998 8.79995 1.59998H7.19995Z"
                            fill="white"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.19995 3.99998C3.19995 3.11632 3.9163 2.39998 4.79995 2.39998C4.79995 3.72546 5.87447 4.79998 7.19995 4.79998H8.79995C10.1254 4.79998 11.2 3.72546 11.2 2.39998C12.0836 2.39998 12.8 3.11632 12.8 3.99998V12.8C12.8 13.6836 12.0836 14.4 11.2 14.4H4.79995C3.9163 14.4 3.19995 13.6836 3.19995 12.8V3.99998ZM10.9656 8.56566C11.2781 8.25324 11.2781 7.74671 10.9656 7.43429C10.6532 7.12187 10.1467 7.12187 9.83427 7.43429L7.19995 10.0686L6.16564 9.03429C5.85322 8.72187 5.34669 8.72187 5.03427 9.03429C4.72185 9.34671 4.72185 9.85324 5.03427 10.1657L6.63427 11.7657C6.94669 12.0781 7.45322 12.0781 7.76564 11.7657L10.9656 8.56566Z"
                            fill="white"
                          ></path>
                        </svg>
                        Lưu dữ liệu
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="md:mb-[12px] lg:flex-grow flex-shrink">
                  <div>
                    <h2 className="text-gray-600 text-[18px] lg:text-[24px] leading-34 my-0 font-bold">
                      Giới thiệu về Market MMO
                    </h2>
                    <div>
                      <div>
                        <h2
                          className="lg:text-base text-gray-600 font-bold mt-3 mb-3"
                          id="what-is-binance"
                        >
                          Market MMO là gì?
                        </h2>
                        <p className=" lg: text-sm text-gray-600 leading-[1.8] break-words mb-1">
                          BinMarket MMOance là sàn giao dịch tiền điện tử lớn
                          nhất thế giới tính theo khối lượng giao dịch, với khối
                          lượng giao dịch hàng ngày là 76 tỷ USD trên Sàn giao
                          dịch Market MMO tính đến tháng 8 năm 2022 và 90 triệu
                          khách hàng trên toàn thế giới. Nền tảng đã tự thành
                          lập với tư cách là thành viên đáng tin cậy của không
                          gian tiền điện tử, nơi người dùng có thể mua, bán và
                          lưu trữ tài sản kỹ thuật số của họ, cũng như truy cập
                          hơn 350 loại tiền điện tử được liệt kê và hàng ngàn
                          các cặp giao dịch. Hệ sinh thái Market MMO hiện bao
                          gồm Sàn giao dịch Market MMO, Labs, Launchpad, Thông
                          tin, Học viện, Nghiên cứu, Ví Trust, Từ thiện, NFT và
                          hơn thế nữa.
                        </p>
                        <h2
                          className="lg:text-base text-gray-600 font-bold mt-3 mb-3"
                          id="who-are-the-binance-founders"
                        >
                          Ai là người sáng lập Market MMO?
                        </h2>{" "}
                        {showMore && (
                          <>
                            {" "}
                            <p className=" lg:text-gray-600 text-sm leading-[1.8] break-words mb-1">
                              Công ty toàn cầu được đồng sáng lập tại Trung Quốc
                              bởi Changpeng Zhao và Yi He. Một nhà phát triển
                              người Canada gốc Hoa và giám đốc kinh doanh,
                              Changpeng Zhao, người hay gọi là CZ, là Giám đốc
                              điều hành của công ty. Ông học tại Đại học McGill
                              Montreal và đã có thành tích thành công với tư
                              cách là một doanh nhân. Kinh nghiệm trước đây của
                              ông bao gồm Trưởng phòng Nhóm nghiên cứu và phát
                              triển hợp đồng tương lai của Bloomberg Tradebook,
                              người sáng lập Fusion Systems và Giám đốc Công
                              nghệ tại Blockchain.com.
                            </p>
                            <p className=" lg:text-gray-600 text-sm leading-[1.8] break-words mb-1">
                              Yi He là CMO tại Market MMO và đứng đầu tại Market
                              MMO Labs, nhánh đầu tư mạo hiểm của công ty. Yi
                              trước đây là Phó Chủ tịch của công ty công nghệ
                              video di động hàng đầu, Yixia Technology và đồng
                              sáng lập sàn giao dịch tài sản kỹ thuật số OKCoin.
                            </p>
                            <h2
                              className="lg:text-base text-gray-600 font-bold mt-3 mb-3"
                              id="when-did-binance-launch"
                            >
                              Market MMO ra mắt khi nào?
                            </h2>
                            <p className=" lg:text-gray-600 text-sm leading-[1.8] break-words mb-1">
                              Market MMO được ra mắt vào tháng 6 năm 2017 và
                              trong vòng 180 ngày đã phát triển thành sàn giao
                              dịch tiền điện tử lớn nhất trong thế giới.
                            </p>
                            <h2
                              className="lg:text-base text-gray-600 font-bold mt-3 mb-3"
                              id="binance-restricted-countries"
                            >
                              Các quốc gia bị hạn chế của Market MMO
                            </h2>
                            <p className=" lg:text-gray-600 text-sm leading-[1.8] break-words mb-1">
                              Theo Điều khoản sử dụng của Market MMO, các địa
                              điểm bị hạn chế bao gồm Hoa Kỳ, Singapore và
                              Ontario (Canada). Tuy nhiên, một số quốc gia đã
                              hạn chế sử dụng hoặc các tính năng có thể bị hạn
                              chế vì lý do quy định, bao gồm nhưng không giới
                              hạn ở Trung Quốc, Malaysia, Nhật Bản, Vương quốc
                              Anh và Thái Lan. Các sản phẩm tương lai và phái
                              sinh cũng không có sẵn ở Đức, Ý và Hà Lan. TRONG
                              Tháng 9 năm 2019, một nền tảng dành riêng cho Hoa
                              Kỳ khách hàng, Market MMO.US, đã được ra mắt.
                            </p>
                            <h2
                              className="lg:text-base text-gray-600 font-bold mt-3 mb-3"
                              id="how-much-are-binance-fees"
                            >
                              Phí Market MMO là bao nhiêu?{" "}
                            </h2>
                            <p className=" lg:text-gray-600 text-sm leading-[1.8] break-words mb-1">
                              Nền tảng này thân thiện với người dùng và là một
                              trong những nền tảng rẻ nhất với nhiều lựa chọn về
                              loại giao dịch và bộ công cụ giao dịch tiên tiến
                              dành cho các nhà đầu tư có kinh nghiệm. Nó tính
                              phí dựa trên hệ thống theo cấp độ, từ người dùng
                              thông thường đến VIP 9. Đối với người dùng thông
                              thường, phí cho người thực hiện 0,10% là tính phí
                              cho giao dịch giao ngay. Vào tháng 7 năm 2022,
                              Market MMO đã công bố giao dịch không tính phí cho
                              các cặp giao dịch giao ngay BTC, và vào tháng 8
                              đối với cặp ETH/BUSD.
                            </p>
                            <h2
                              className="lg:text-base text-gray-600 font-bold mt-3 mb-3"
                              id="is-it-possible-to-use-leverage-or-margin-trading-on-binance"
                            >
                              Có thể sử dụng đòn bẩy hoặc giao dịch ký quỹ trên
                              Market MMO
                            </h2>
                            <p className=" lg:text-gray-600 text-sm leading-[1.8] break-words mb-1">
                              Nhà giao dịch có thể vay vốn và tham gia ký quỹ
                              giao dịch trên Market MMO Margin, cho phép giao
                              dịch tiền điện tử với đòn bẩy lên tới 10 lần.
                              Người dùng cũng có thể sử dụng các sản phẩm phái
                              sinh như Market MMO Futures, thanh toán bằng USDT,
                              BUSD hoặc các loại tiền điện tử khác và Market MMO
                              Options để tận dụng các giao dịch của họ.
                            </p>{" "}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {!showMore && (
                    <button
                      id="myBtn"
                      className="bg-slate-100 text-primary-black text-sm font-semibold leading-6 flex items-center justify-center outline-none cursor-pointer w-full h-12 rounded-lg border-transparent my-5"
                      onClick={handleLoadMore}
                    >
                      Xem thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="16px"
                        width="16px"
                        viewBox="0 0 24 24"
                        className="lg:ml-1 font-bold"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  )}
                  {showMore && (
                    <button
                      id="myBtn"
                      className="bg-slate-100 text-primary-black text-sm font-semibold leading-6 flex items-center justify-center outline-none cursor-pointer w-full h-12 rounded-lg border-transparent"
                      onClick={handleHideItems}
                    >
                      Ẩn
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="16px"
                        width="16px"
                        viewBox="0 0 24 24"
                        className="lg:ml-1 font-bold"
                      >
                        <path
                          d="M6 15L12 9L18 15"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" justify-between mx-auto mb-4 md:flex lg:flex">
              <Link
                className="lg: text-2xl font-bold text-var(--text-color)"
                href="#reserve"
              >
                Sao lưu dữ liệu tài chính
              </Link>
              <div className="lg:font-medium text-sm flex items-center cursor-pointer">
                <span
                  className="lg:leading-6 m-0 text-grey-600 font-medium text-sm mr-2"
                  font-size="1"
                  data-sensors-click="true"
                >
                  Cập nhật lúc 7:12:14 AM
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.6665 1.66663V4.99996H2.05418M12.2919 6.33329C11.9638 3.70242 9.71958 1.66663 6.99984 1.66663C4.76159 1.66663 2.84536 3.04541 2.05418 4.99996M2.05418 4.99996H4.99984M12.3332 12.3333V8.99996H11.9455M11.9455 8.99996C11.1543 10.9545 9.23809 12.3333 6.99984 12.3333C4.28009 12.3333 2.03583 10.2975 1.70777 7.66663M11.9455 8.99996H8.99984"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-blue-600"
                  ></path>
                </svg>
              </div>
            </div>
            <div className=" lg:flex gap-x-4 gap-y-8 grid-rows-auto grid-rows-1fr">
              <div className=" lg:flex gap-x-4 gap-y-8  grid-rows-auto grid-rows-1fr">
                <div className="lg:flex w-[100%] gap-x-10 gap-y-32">
                  <div className="bg-slate-50 mb-6 md:w-[100%] lg:w-2/3 rounded-lg flex-0 col-span-2 p-6">
                    <div className="md:flex lg:flex justify-between mb-5 font-semibold text-lg text-black">
                      <span className="leading-9 md:leading-0 lg:leading-0">
                        Tổng: $54,595,973,478.89
                      </span>
                      <div className="md:py-3 lg:m-0 bg-gray-100 text-gray-600 rounded-md text-xs leading-4 px-2 py-1 items-center">
                        Nhận báo cáo trực tiếp từ sàn
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full lg:mx-auto text-base w-full isolation-isolate">
                        <thead className="md:sticky md:bg-slate-50 md:top-0 z-11 lg:sticky lg:bg-slate-50 lg:top-0 z-11">
                          <tr>
                            <th className="sticky lg:text-left bg-slate-50 left-0 border-t border-table-divider-color p-3 text-[12px] border-b">
                              Mã token
                            </th>
                            <th className="lg: bg-slate-50 left-0 border-t border-table-divider-color text-right p-3 text-[12px] border-b">
                              Sự cân bằng
                            </th>
                            <th className="lg: left-0 border-t border-table-divider-color text-right p-3 text-[12px] border-b">
                              Giá
                            </th>
                            <th className="lg: left-0 border-t border-table-divider-color text-right p-3 text-[12px] border-b">
                              Giá trị
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          <tr className="whitespace-nowrap">
                            <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                              <div className="flex md:flex lg:flex items-center">
                                <div className="relative lg:flex items-center">
                                  <img
                                    className="lg: w-[24px] h-[24px]"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <img
                                    className="absolute md:top-3 left-4 lg:w-[16px] h-[16px] top-3 left-4 z-11"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="md:ml-[15px] lg:ml-[15px]">
                                  <div className="lg:font-semibold text-sm text-primary-black">
                                    USDT
                                  </div>
                                  <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                    <svg
                                      className="w-[16px]"
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                        fill="#808A9D"
                                      ></path>
                                    </svg>
                                    <span className="lg:ml-1">
                                      TJCo98...9WkJFo
                                    </span>
                                    <svg
                                      className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      height="22px"
                                      width="22px"
                                      viewBox="0 0 24 24"
                                      stroke=""
                                    >
                                      <path
                                        d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              7,031,003,271.21
                            </td>
                            <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $0.9996
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $7,028,013,680.11
                            </td>
                          </tr>
                          <tr className="whitespace-nowrap">
                            <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                              <div className="flex md:flex lg:flex items-center">
                                <div className="relative lg:flex items-center">
                                  <img
                                    className="lg: w-[24px] h-[24px]"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <img
                                    className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="md:ml-[15px] lg:ml-[15px]">
                                  <div className="lg:font-semibold text-sm text-primary-black">
                                    USDT
                                  </div>
                                  <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                    <svg
                                      className="w-[16px]"
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                        fill="#808A9D"
                                      ></path>
                                    </svg>
                                    <span className="lg:ml-1">
                                      TJCo98...9WkJFo
                                    </span>
                                    <svg
                                      className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      height="22px"
                                      width="22px"
                                      viewBox="0 0 24 24"
                                      stroke=""
                                    >
                                      <path
                                        d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              7,031,003,271.21
                            </td>
                            <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $0.9996
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $7,028,013,680.11
                            </td>
                          </tr>
                          <tr className="whitespace-nowrap">
                            <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                              <div className="flex md:flex lg:flex items-center">
                                <div className="relative lg:flex items-center">
                                  <img
                                    className="lg: w-[24px] h-[24px]"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <img
                                    className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="md:ml-[15px] lg:ml-[15px]">
                                  <div className="lg:font-semibold text-sm text-primary-black">
                                    USDT
                                  </div>
                                  <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                    <svg
                                      className="w-[16px]"
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                        fill="#808A9D"
                                      ></path>
                                    </svg>
                                    <span className="lg:ml-1">
                                      TJCo98...9WkJFo
                                    </span>
                                    <svg
                                      className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      height="22px"
                                      width="22px"
                                      viewBox="0 0 24 24"
                                      stroke=""
                                    >
                                      <path
                                        d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              7,031,003,271.21
                            </td>
                            <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $0.9996
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $7,028,013,680.11
                            </td>
                          </tr>
                          <tr className="whitespace-nowrap">
                            <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                              <div className="flex md:flex lg:flex items-center">
                                <div className="relative lg:flex items-center">
                                  <img
                                    className="lg: w-[24px] h-[24px]"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <img
                                    className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="md:ml-[15px] lg:ml-[15px]">
                                  <div className="lg:font-semibold text-sm text-primary-black">
                                    USDT
                                  </div>
                                  <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                    <svg
                                      className="w-[16px]"
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                        fill="#808A9D"
                                      ></path>
                                    </svg>
                                    <span className="lg:ml-1">
                                      TJCo98...9WkJFo
                                    </span>
                                    <svg
                                      className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      height="22px"
                                      width="22px"
                                      viewBox="0 0 24 24"
                                      stroke=""
                                    >
                                      <path
                                        d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              7,031,003,271.21
                            </td>
                            <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $0.9996
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $7,028,013,680.11
                            </td>
                          </tr>
                          <tr className="whitespace-nowrap">
                            <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                              <div className="flex md:flex lg:flex items-center">
                                <div className="relative lg:flex items-center">
                                  <img
                                    className="lg: w-[24px] h-[24px]"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <img
                                    className="absolute left-4 top-3 lg:w-[16px] h-[16px] z-11"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="md:ml-[15px] lg:ml-[15px]">
                                  <div className="lg:font-semibold text-sm text-primary-black">
                                    USDT
                                  </div>
                                  <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                    <svg
                                      className="w-[16px]"
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                        fill="#808A9D"
                                      ></path>
                                    </svg>
                                    <span className="lg:ml-1">
                                      TJCo98...9WkJFo
                                    </span>
                                    <svg
                                      className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      height="22px"
                                      width="22px"
                                      viewBox="0 0 24 24"
                                      stroke=""
                                    >
                                      <path
                                        d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              7,031,003,271.21
                            </td>
                            <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $0.9996
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $7,028,013,680.11
                            </td>
                          </tr>
                          <tr className="whitespace-nowrap">
                            <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                              <div className="flex md:flex lg:flex items-center">
                                <div className="relative lg:flex items-center">
                                  <img
                                    className="lg: w-[24px] h-[24px]"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <img
                                    className="absolute left-4 md:top-3 lg:w-[16px] h-[16px] top-3z-11"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="md:ml-[15px] lg:ml-[15px]">
                                  <div className="lg:font-semibold text-sm text-primary-black">
                                    USDT
                                  </div>
                                  <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                    <svg
                                      className="w-[16px]"
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                        fill="#808A9D"
                                      ></path>
                                    </svg>
                                    <span className="lg:ml-1">
                                      TJCo98...9WkJFo
                                    </span>
                                    <svg
                                      className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      height="22px"
                                      width="22px"
                                      viewBox="0 0 24 24"
                                      stroke=""
                                    >
                                      <path
                                        d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              7,031,003,271.21
                            </td>
                            <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $0.9996
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $7,028,013,680.11
                            </td>
                          </tr>
                          <tr className="whitespace-nowrap">
                            <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                              <div className="flex md:flex lg:flex items-center">
                                <div className="relative lg:flex items-center">
                                  <img
                                    className="lg: w-[24px] h-[24px]"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <img
                                    className="absolute left-4 md:top-3 lg:w-[16px] h-[16px] top-3 z-11"
                                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <div className="md:ml-[15px] lg:ml-[15px]">
                                  <div className="lg:font-semibold text-sm text-primary-black">
                                    USDT
                                  </div>
                                  <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                    <svg
                                      className="w-[16px]"
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                        fill="#808A9D"
                                      ></path>
                                    </svg>
                                    <span className="lg:ml-1">
                                      TJCo98...9WkJFo
                                    </span>
                                    <svg
                                      className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      height="22px"
                                      width="22px"
                                      viewBox="0 0 24 24"
                                      stroke=""
                                    >
                                      <path
                                        d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              7,031,003,271.21
                            </td>
                            <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $0.9996
                            </td>
                            <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                              $7,028,013,680.11
                            </td>
                          </tr>
                          {showMore1 && (
                            <>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute md:top-3 left-4 lg:w-[16px] h-[16px] top-3 left-4 z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute left-4 top-3 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute md:top-3 left-4 lg:w-[16px] h-[16px] top-3 left-4 z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute top-3 left-4 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute left-4 top-3 lg:w-[16px] h-[16px] z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute left-4 md:top-3 lg:w-[16px] h-[16px] top-3z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                              <tr className="whitespace-nowrap">
                                <td className="sticky left-0 bg-slate-50 lg:border-t border-table-divider-color border-b p-3 font-medium text-left">
                                  <div className="flex md:flex lg:flex items-center">
                                    <div className="relative lg:flex items-center">
                                      <img
                                        className="lg: w-[24px] h-[24px]"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                      <img
                                        className="absolute left-4 md:top-3 lg:w-[16px] h-[16px] top-3 z-11"
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </div>
                                    <div className="md:ml-[15px] lg:ml-[15px]">
                                      <div className="lg:font-semibold text-sm text-primary-black">
                                        USDT
                                      </div>
                                      <div className="flex md:flex lg:flex items-center font-normal text-xs text-text-color-sub-1">
                                        <svg
                                          className="w-[16px]"
                                          width="22"
                                          height="22"
                                          viewBox="0 0 22 22"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3477 6.41667H4.69792C4.38138 6.41667 4.125 6.16029 4.125 5.84376C4.125 5.52722 4.38138 5.27084 4.69792 5.27084H18.4479C18.7645 5.27084 19.0208 5.01446 19.0208 4.69792C19.0208 3.74867 18.2513 2.97917 17.3021 2.97917H4.125C2.85921 2.97917 1.83334 4.00505 1.83334 5.27084V16.7292C1.83334 17.995 2.85921 19.0208 4.125 19.0208H18.3477C19.351 19.0208 20.1667 18.2499 20.1667 17.3021V8.13542C20.1667 7.1876 19.351 6.41667 18.3477 6.41667ZM16.7292 13.8646C16.0965 13.8646 15.5833 13.3515 15.5833 12.7188C15.5833 12.086 16.0965 11.5729 16.7292 11.5729C17.3619 11.5729 17.875 12.086 17.875 12.7188C17.875 13.3515 17.3619 13.8646 16.7292 13.8646Z"
                                            fill="#808A9D"
                                          ></path>
                                        </svg>
                                        <span className="lg:ml-1">
                                          TJCo98...9WkJFo
                                        </span>
                                        <svg
                                          className="lg:stroke-current text-white pl-1 hover:text-slate-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          height="22px"
                                          width="22px"
                                          viewBox="0 0 24 24"
                                          stroke=""
                                        >
                                          <path
                                            d="M5.7 14.7H4.8C4.32261 14.7 3.86477 14.5104 3.52721 14.1728C3.18964 13.8352 3 13.3774 3 12.9V4.8C3 4.32261 3.18964 3.86477 3.52721 3.52721C3.86477 3.18964 4.32261 3 4.8 3H12.9C13.3774 3 13.8352 3.18964 14.1728 3.52721C14.5104 3.86477 14.7 4.32261 14.7 4.8V5.7M11.1 9.3H19.2C20.1941 9.3 21 10.1059 21 11.1V19.2C21 20.1941 20.1941 21 19.2 21H11.1C10.1059 21 9.3 20.1941 9.3 19.2V11.1C9.3 10.1059 10.1059 9.3 11.1 9.3Z"
                                            stroke=""
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  7,031,003,271.21
                                </td>
                                <td className=" md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $0.9996
                                </td>
                                <td className="md:text-right lg:text-right border-t border-table-divider-color border-b py-3 font-medium text-[14px] p-3">
                                  $7,028,013,680.11
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                    <p className="lg:leading-1 mt-2 text-gray-400 text-[12px]">
                      Chỉ hiển thị các ví có số dư &gt;500,000 USD
                      <p>*Số dư từ các ví này có thể bị trì hoãn</p>
                    </p>
                    <div className="lg:flex justify-center mx-auto mt-[24px] mb-[8px] gap-56">
                      {!showMore1 && (
                        <button
                          className="w-full md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px]"
                          data-sensors-click="true"
                          onClick={handleLoadMore1}
                        >
                          <span className="lg: font-semibold text-[14px] text-var(--text-color)">
                            Xem thêm
                          </span>
                        </button>
                      )}
                      {showMore1 && (
                        <button
                          className="w-full md:w-[100%] lg:w-[260px] h-auto leading-none whitespace-nowrap p-0  bg-slate-100 rounded-md py-[16px]"
                          data-sensors-click="true"
                          onClick={handleHide1}
                        >
                          <span className="lg: font-semibold text-[14px] text-var(--text-color)">
                            Ẩn bớt
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="bg-slate-50 lg: rounded-lg flex-0 p-6 mb-4">
                      <p className="lg:leading-6 mb-[24px] text-rgb(34, 37, 49) text-[18px] font-bold">
                        Phân chia mã thông báo
                      </p>{" "}
                      <div
                      // className="min-h-[258.7px]"
                      >
                        <div className="w-full flex justify-center">
                          {" "}
                          <svg
                            id="SvgjsSvg1792"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            className="h-[258px]"
                            transform="translate(0, 0 )"
                            style={{ background: "transparent" }}
                          >
                            <g
                              id="SvgjsG1794"
                              className="flex items-center justify-center"
                              transform="translate(25, 0)"
                            >
                              <defs id="SvgjsDefs1793">
                                <clipPath id="gridRectMaskof3s4a2v">
                                  <rect
                                    id="SvgjsRect1796"
                                    width="262"
                                    height="280"
                                    x="-3"
                                    y="-1"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                                <clipPath id="gridRectMarkerMaskof3s4a2v">
                                  <rect
                                    id="SvgjsRect1797"
                                    width="260"
                                    height="282"
                                    x="-2"
                                    y="-2"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                              </defs>
                              <g>
                                <g>
                                  <g
                                    id="SvgjsG1799"
                                    transform="translate(0, 0) scale(1)"
                                  >
                                    <circle
                                      id="SvgjsCircle1800"
                                      r="59.439024390243915"
                                      cx="128"
                                      cy="128"
                                      fill="transparent"
                                      className="text-black"
                                    >
                                      asdasdasdasd
                                    </circle>
                                    <g
                                      id="SvgjsG1801"
                                      className="apexcharts-slices"
                                    >
                                      <g id="SvgjsG1802">
                                        <path
                                          id="SvgjsPath1803"
                                          d="M 128 9.121951219512184 A 118.87804878048782 118.87804878048782 0 0 1 232.96175835420047 183.8123621167432 L 180.48087917710023 155.9061810583716 A 59.439024390243915 59.439024390243915 0 0 0 128 68.56097560975608 L 128 9.121951219512184 z"
                                          fill="rgba(245,185,127,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                        ></path>
                                      </g>
                                      <g id="SvgjsG1804">
                                        <path
                                          id="SvgjsPath1805"
                                          d="M 232.96175835420047 183.8123621167432 A 118.87804878048782 118.87804878048782 0 0 1 94.17847765793721 241.9653241487137 L 111.0892388289686 184.98266207435685 A 59.439024390243915 59.439024390243915 0 0 0 180.48087917710023 155.9061810583716 L 232.96175835420047 183.8123621167432 z"
                                          fill="rgba(22,199,132,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                        ></path>
                                      </g>
                                      <g id="SvgjsG1806">
                                        <path
                                          id="SvgjsPath1807"
                                          d="M 94.17847765793721 241.9653241487137 A 118.87804878048782 118.87804878048782 0 0 1 20.93467834295214 179.66243684079294 L 74.46733917147606 153.83121842039648 A 59.439024390243915 59.439024390243915 0 0 0 111.0892388289686 184.98266207435685 L 94.17847765793721 241.9653241487137 z"
                                          fill="rgba(207,214,228,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                          className="apexcharts-pie-area apexcharts-donut-slice-2"
                                        ></path>
                                      </g>

                                      <g id="SvgjsG1808">
                                        <path
                                          id="SvgjsPath1809"
                                          d="M 20.93467834295214 179.66243684079294 A 118.87804878048782 118.87804878048782 0 0 1 11.188716530319383 105.92932860056226 L 69.59435826515968 116.96466430028113 A 59.439024390243915 59.439024390243915 0 0 0 74.46733917147606 153.83121842039648 L 20.93467834295214 179.66243684079294 z"
                                          fill="rgba(255,119,95,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                        ></path>
                                      </g>
                                      <g id="SvgjsG1810">
                                        <path
                                          id="SvgjsPath1811"
                                          d="M 11.188716530319383 105.92932860056226 A 118.87804878048782 118.87804878048782 0 0 1 23.584776393160766 71.17173624867812 L 75.79238819658038 99.58586812433906 A 59.439024390243915 59.439024390243915 0 0 0 69.59435826515968 116.96466430028113 L 11.188716530319383 105.92932860056226 z"
                                          fill="rgba(35,220,245,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="0"
                                          stroke-dasharray="0"
                                        ></path>
                                      </g>
                                      <g id="SvgjsG1812">
                                        <path
                                          id="SvgjsPath1813"
                                          d="M 23.584776393160766 71.17173624867812 A 118.87804878048782 118.87804878048782 0 0 1 127.97925186650966 9.121953030128395 L 127.98962593325483 68.5609765150642 A 59.439024390243915 59.439024390243915 0 0 0 75.79238819658038 99.58586812433906 L 23.584776393160766 71.17173624867812 z"
                                          fill="rgba(138,63,252,1)"
                                          fill-opacity="1"
                                          stroke-opacity="1"
                                          stroke-linecap="butt"
                                          stroke-width="1"
                                          stroke-dasharray="0"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG1814"
                                    className="apexcharts-datalabels-group"
                                    transform="translate(0, 0) scale(1)"
                                  >
                                    <text
                                      id="SvgjsText1815"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="128"
                                      y="118"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="var(--color-light-neutral-5)"
                                      className="font-[Helvetica], font-[Arial], font-sans"
                                    ></text>
                                    <text
                                      id="SvgjsText1816"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="128"
                                      y="144"
                                      text-anchor="middle"
                                      dominant-baseline="auto"
                                      font-size="14px"
                                      font-weight="400"
                                      fill="var(--color-light-neutral-5)"
                                      className="font-[Helvetica], font-[Arial], font-sans"
                                    ></text>
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine1818"
                                x1="0"
                                y1="0"
                                x2="256"
                                y2="0"
                                stroke-dasharray="0"
                                stroke-width="0"
                                className="apexcharts-ycrosshairs-hidden"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG1795"
                              className="apexcharts-annotations"
                            ></g>
                          </svg>
                          <div className="max-h-[140px]"></div>
                        </div>
                      </div>
                      <p className="w-[63%] md:w-[60%] lg:w-[70%] mx-auto flex justify-between py-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md">
                        <div className="flex">
                          <img
                            className="lg:w-[20px] h-[20px] mr-2"
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                            loading="lazy"
                            decoding="async"
                          />
                          <p
                            className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                            data-sensors-click="true"
                          >
                            USDT
                          </p>
                        </div>
                        <p
                          className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                          data-sensors-click="true"
                        >
                          31.87%
                        </p>
                      </p>
                      <p className="w-[63%] md:w-[60%] lg:w-[70%] mx-auto flex justify-between py-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md">
                        <div className="flex">
                          <img
                            className="lg:w-[20px] h-[20px] mr-2"
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                            loading="lazy"
                            decoding="async"
                          />
                          <p
                            className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                            data-sensors-click="true"
                          >
                            BTC
                          </p>
                        </div>
                        <p
                          className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                          data-sensors-click="true"
                        >
                          21.56%
                        </p>
                      </p>
                      <p className="w-[63%] md:w-[60%] lg:w-[70%] mx-auto flex justify-between py-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md">
                        <div className="flex">
                          <img
                            className="lg:w-[20px] h-[20px] mr-2"
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                            loading="lazy"
                            decoding="async"
                          />
                          <p
                            className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                            data-sensors-click="true"
                          >
                            BNB
                          </p>
                        </div>
                        <p
                          className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                          data-sensors-click="true"
                        >
                          13.21%
                        </p>
                      </p>
                      <p className="w-[63%] md:w-[60%] lg:w-[70%] mx-auto flex justify-between py-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md">
                        <div className="flex">
                          <img
                            className="lg:w-[20px] h-[20px] mr-2"
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                            loading="lazy"
                            decoding="async"
                          />
                          <p
                            className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                            data-sensors-click="true"
                          >
                            ETH
                          </p>
                        </div>
                        <p
                          className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                          data-sensors-click="true"
                        >
                          10.18%
                        </p>
                      </p>
                      <p className="w-[63%] md:w-[60%] lg:w-[70%] mx-auto flex justify-between py-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md">
                        <div className="flex">
                          <img
                            className="lg:w-[20px] h-[20px] mr-2"
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png"
                            loading="lazy"
                            decoding="async"
                          />
                          <p
                            className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                            data-sensors-click="true"
                          >
                            TUSD
                          </p>
                        </div>
                        <p
                          className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                          data-sensors-click="true"
                        >
                          5.08%
                        </p>
                      </p>
                      <p className="w-[63%] md:w-[60%] lg:w-[70%] mx-auto flex justify-between py-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md">
                        <div className="flex">
                          <span className="w-[20px]  md:w-[20px] lg:w-[20px] h-[20px] bg-stone-300 text-white rounded-full flex justify-center items-center mr-2">
                            ···
                          </span>
                          <p
                            className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                            data-sensors-click="true"
                          >
                            Others
                          </p>
                        </div>
                        <p
                          className="lg:leading-6 m-0 text-rgb(34, 37, 49) font-semibold text-[14px]"
                          data-sensors-click="true"
                        >
                          18.10%
                        </p>
                      </p>
                    </div>
                    <p className="md:hidden lg:block leading-1 m-0 text-gray-400 text-[12px] font-medium">
                      Miễn trách nhiệm:
                      <br />
                      Thông tin và dữ liệu về cổ phiếu trong địa chỉ ví của bên
                      thứ ba được dựa trên thông tin công khai của bên thứ ba.
                      Market MMO không xác nhận hoặc đảm bảo tính chính xác và
                      độ tin cậy của thông tin và dữ liệu đó.
                      <br />
                      <br />
                      Market MMO không chịu trách nhiệm hoặc trách nhiệm pháp lý
                      đối với thông tin và dữ liệu công khai từ bên thứ ba này.
                      MMO không có nghĩa vụ xem xét, xác nhận, xác minh hoặc
                      tiến hành bất kỳ yêu cầu hoặc điều tra nào liên quan đến
                      tính đầy đủ, chính xác, đủ độ, tính toàn vẹn, đáng tin cậy
                      hoặc kịp thời của thông tin hoặc dữ liệu được cung cấp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:max-w-3xl lg:max-w-7xl lg:mx-auto lg:pt-[24px] mt-[24px] border-t border-solid border-gray-300">
          <div className="block relative px-5 py-5 md:flex  bg-white box-border px-15 w-full items-center justify-between lg:flex">
            <div className="block md:flex lg:flex items-center">
              <h2
                className="text-black text-[24px] leading-34 font-bold"
                color="text"
                data-sensors-click="true"
              >
                Thị trường
              </h2>
              <div className="md:ml-[24px] lg:ml-[24px]">
                <div className="justify-between my-2 bg-gray-200 py-2 md:bg-gray-200 md:py-[10px] lg:bg-gray-100 px-[10px] rounded-[8px] flex items-center select-none relative border border-solid lg:py-[10px]">
                  {activeTab === 1 && (
                    <div className="absolute bg-white w-60px h-[25px] md:h-[30px] lg:z-10 shadow-md rounded-[6px] transition duration-300 ease-in-out w-[57px] left-[3px] top-[3px] lg:h-[30px]"></div>
                  )}
                  <button
                    // className="text-[12px] text-black z-11 lg:relative z-20 text-xs text-center px-2 font-semibold"
                    onClick={() => handleTabClick(1)}
                    className={`text-[12px] text-black lg:relative z-20 text-xs text-center px-2 font-semibold ${
                      activeTab === 1 ? "active" : ""
                    }`}
                    data-sensors-click="true"
                  >
                    <span>Điểm</span>
                  </button>
                  {activeTab === 2 && (
                    <div className=" absolute bg-white h-[25px] left-[81px] w-[107px] md:h-[30px] md:left-[58px] md:w-[100px] lg:z-10 shadow-md rounded-[6px] transition duration-300 ease-in-out top-[3px] lg:h-[30px] lg:left-[58px] lg:w-[100px]"></div>
                  )}
                  <button
                    // className="text-[12px] md:text-[12px] lg:z-20 text-xs text-center px-4 text-black font-semibold"
                    onClick={() => handleTabClick(2)}
                    className={`text-[12px] text-black lg:relative z-20 text-xs text-center px-2 font-semibold ${
                      activeTab === 2 ? "active" : ""
                    }`}
                    data-sensors-click="true"
                  >
                    <span>Không giới hạn</span>
                  </button>
                  {activeTab === 3 && (
                    <div className="absolute bg-white w-[135px] h-[25px] left-[207px] md:w-[130px] md:h-[30px] md:left-[160px] lg:z-10 shadow-md rounded-[6px] transition duration-300 ease-in-out top-[3px] lg:w-[130px] lg:h-[30px] lg:left-[160px]  "></div>
                  )}
                  <button
                    // className="text-[12px] md:text-[12px] lg:z-20 text-xs text-center px-2 text-black font-semibold"
                    onClick={() => handleTabClick(3)}
                    className={`ttext-[12px] text-black lg:relative z-20 text-xs text-center px-2 font-semibold ${
                      activeTab === 3 ? "active" : ""
                    }`}
                    data-sensors-click="true"
                  >
                    <span>Hợp đồng tương lai</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="justify-end my-5 flex lg:relative box-border m-0 lg:flex flex-row items-center">
              <p
                className="lg:leading-1.5 mr-[8px] text-gray-600 font-medium text-xs"
                data-sensors-click="true"
              >
                Cặp giao dịch
              </p>
              <div
                data-sensors-click="true"
                onClick={toggleDropdown}
                className="lg:box-border m-0 inline-flex flex-row items-center bg-gray-100 rounded-[8px] outline-none font-semibold cursor-pointer text-black py-[8px] px-[5px] text-xs leading-[5px]"
              >
                Tất cả
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="14"
                  width="14"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              {isDropdownOpen && (
                <>
                  <div className="hidden md:block lg:block">
                    {" "}
                    <div className="dropdown-boxshadown before:content-[''] before:w-0 before:h-0 before:border-solid before:border-[10px] before:border-white before:top-[-20px] before:border-l-transparent before:border-r-transparent before:border-t-transparent before:absolute before:left-[35px] left-[295px] top-40 md:left-[670px] md:top-[75px] lg:top-8 lg:left-[68px] absolute  bg-zinc-50 mt-1 w-min rounded-lg shadow-xl z-20">
                      <div>
                        <button className="py-3 px-5 text-sm font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                          Tất cả
                        </button>
                        <button className="py-3 px-5 text-sm font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                          USDT
                        </button>
                        <button className="py-3 px-5 text-sm font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                          FDUSD
                        </button>
                        <button className="py-3 px-5 text-sm font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                          TUSD
                        </button>
                        <button className="py-3 px-5 text-sm font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                          TRY
                        </button>
                        <button className="py-3 px-5 text-sm font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                          BUSD
                        </button>
                        <button className="py-3 px-5 text-sm font-medium lg:w-full hover:bg-slate-100 rounded-lg">
                          BTC
                        </button>
                        <button className="lg:w-full py-3 px-5 text-sm font-medium hover:bg-slate-100 rounded-lg">
                          EUR
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="md:max-w-3xl lg:max-w-7xl box-border px-15 mx-auto w-full">
            {activeTab === 1 && <TabSpot />}
            {activeTab === 2 && <TabPerpetual />}
            {activeTab === 3 && <TabFutures />}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="block md:hidden lg:hidden">
          <div className="fixed bottom-0 w-full z-40 bg-white">
            <div className="p-4">
              <div className="py-2">
                <div>
                  {" "}
                  <button className="text-left py-2 px-5 text-sm font-semibold w-full hover:bg-slate-100 rounded-lg">
                    Tất cả
                  </button> 
                </div>
                <div>
                  {" "}
                  <button className="text-left py-2 px-5 text-sm font-semibold w-full hover:bg-slate-100 rounded-lg">
                    USDT
                  </button>
                </div>
                <div>
                  {" "}
                  <button className="text-left py-2 px-5 text-sm font-semibold w-full hover:bg-slate-100 rounded-lg">
                    FDUSD
                  </button>
                </div>
                <div>
                  {" "}
                  <button className="text-left py-2 px-5 text-sm font-semibold w-full hover:bg-slate-100 rounded-lg">
                    TUSD
                  </button>
                </div>
                <div>
                  <button className="text-left py-2 px-5 text-sm font-semibold w-full hover:bg-slate-100 rounded-lg">
                    TRY
                  </button>
                </div>
                <div>
                  {" "}
                  <button className="text-left py-2 px-5 text-sm font-semibold w-full hover:bg-slate-100 rounded-lg">
                    BUSD
                  </button>
                </div>
                <div>
                  {" "}
                  <button className="text-left py-2 px-5 text-sm font-semibold w-full hover:bg-slate-100 rounded-lg">
                    BTC
                  </button>
                </div>
                <div>
                  {" "}
                  <button className="text-left w-full py-2 px-5 text-sm font-semibold hover:bg-slate-100 rounded-lg">
                    EUR
                  </button>
                </div>
              </div>
              <button
                onClick={toggleDropdown}
                className="bg-slate-100 text-primary-black text-sm font-semibold leading-6 flex items-center justify-center outline-none cursor-pointer w-full h-12 rounded-lg border-transparent"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ShowSellerChild;
