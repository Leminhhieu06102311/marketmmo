'use client';
import React, { useEffect, useRef, useState } from 'react'
import { FaPaperPlane, FaStar } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import Cookies from 'js-cookie';
import axios from 'axios';
// import moment from 'moment';
import { getUser } from '@/services/user';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import api from '@/services/api';
import { Histories } from '@/interfaces/Histories';
import { User } from '@/interfaces/user';
import { getTransactionHistory } from '@/services/transactionHistory';
import { toast } from 'react-toastify';
import { ratingProduct } from '@/services/rating';
import { setStatusRating } from '@/redux/ratingSlice';
export default function Comments({ productId, _id, reviews }: { productId: string, _id: string, reviews: { count: number; value: number | null } }) {
    const scrollRating = useRef<HTMLDivElement>(null);
    const { statusRating } = useAppSelector((state) => state.rating)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (scrollRating.current) {
            scrollRating.current.scrollIntoView();
            dispatch(setStatusRating(!statusRating))
        }
    }, []);
    const [dataUser, setDataUser] = useState<User | null>(null);
    const [modals, setModals] = useState<string[]>([]);
    const [visibleDivs, setVisibleDivs] = useState<{ [key: string]: boolean }>({});
    const [editedContent, setEditedContent] = useState<string>('');
    const modalRef = useRef<HTMLDivElement>(null!);
    const [dataComments, setDataComments] = useState([]);
    const [comment, setComment] = useState('');
    const [replyComment, setReplyComment] = useState('');
    const [childReplyComment, setChildReplyComment] = useState('');
    const [child2ReplyComment, setChild2ReplyComment] = useState('');
    const [editCommentContent, setEditCommentContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [reloadData, setReloadData] = useState(false);

    const [loading, setLoading] = useState(true);
    const [showRating, setShowRating] = useState(false);
    const [histories, setHistories] = useState<Histories[]>([]);
    const [rating, setRating] = useState<null | number>(null);
    const [hover, setHover] = useState<null | number>(null);

    const token = Cookies.get('token');

    const fetchDataUser = async () => {
        const res = await getUser(token);
        setDataUser(res)
    };

    const fetchDataComment = async () => {
        try {
            const response = await api.get(`/comment?product-slug=${productId}&limit=30&page=1`);
            const data = response.data.data;
            // console.log('Data from API:', data);
            if (data && data.result && Array.isArray(data.result)) {
                setDataComments(data.result);
            } else {
                console.error('Dữ liệu không hợp lệ từ API');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (token != null) {
            fetchDataUser();
        }

        fetchDataComment();
    }, [productId, reloadData]);

    useEffect(() => {

        const fetchHistories = async () => {
            try {
                const transHis = await getTransactionHistory(token);
                setHistories(transHis);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching histories", error);
            }
        };
        if (token == null) {
            return
        } else {
            fetchHistories();
        }
    }, [token]);

    useEffect(() => {
        const isProductIds = histories.map(historyItem => historyItem.product._id === _id);
        const hasTrue = isProductIds.some(value => value === true);
        setShowRating(hasTrue);
    }, [histories, _id]);


    const handleSendButtonClick = async (parent: any) => {
        //( câu này nó dư để tạm t fix lại )
        // const commentToSend = comment === "" ?
        //     (childReplyComment !== "" ? childReplyComment :
        //         (child2ReplyComment !== "" ? child2ReplyComment : replyComment))
        //     : comment;
        if (comment === "" || rating === null) {
            toast.warn("Bạn phải đánh giá đi kèm nội dung")
            return;
        }

        try {
            // Send comment
            const response = await api.post(
                `/comment?content=${comment}&parent=${parent}&productSlug=${productId}`, {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            // Reset comment-related states
            setComment('');
            setReplyComment('');
            setChildReplyComment('');
            setChild2ReplyComment('');

            closeVisibleDivs(productId);
            setReloadData(prev => !prev);

            // Send rating and handle both promises with toast.promise
            const ratingToSend = rating ?? 0;
            toast.promise(
                Promise.all([
                    response,
                    ratingProduct(token, ratingToSend, _id)
                ]),
                {
                    pending: {
                        render() {
                            return "Vui lòng đợi";
                        },
                    },
                    success: {
                        render() {
                            return "Xin cảm ơn, bạn đã đánh giá sản phẩm thành công!";
                        },
                        icon: "🟢",
                    },
                    error: {
                        render: ({ data }) => {
                            const error: any = data;

                            if (error.response && error.response.status === 401) {
                                console.log(error);
                            } else {
                                console.error("Lỗi, Vui lòng thử lại", error);
                            }

                            return <div>Đã có lỗi xin vui lòng thử lại</div>;
                        },
                    },
                }
            );
        } catch (error) {
            console.error('Lỗi khi đăng Đánh giá:', error);
        }
    };

    // const handleRatingClick = () => {
    //     const ratingToSend = rating ?? 0;

    //     toast.promise(ratingProduct(token, ratingToSend, _id), {
    //         pending: {
    //             render() {
    //                 return "Vui lòng đợi"
    //             },
    //         }, success: {
    //             render() {
    //                 return "Xin cảm ơn, bạn đã đánh giá sản phẩm thành công!"
    //             },
    //             // other options
    //             icon: "🟢",
    //         },
    //         error: {
    //             render: ({ data }) => {
    //                 const error: any = data
    //                 if (error.response && error.response.status === 401) {
    //                     console.log(error);
    //                 } else {
    //                     console.error("Lỗi, Vui lòng thử lại", error);
    //                 }
    //                 return <div>{error.response.data.message}</div>
    //             }
    //         }
    //     })
    // }


    const deleteComment = async (commentId: any) => {
        try {
            const response = await api.delete(`/comment?comment=${commentId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

            if (response.status === 200) {
                toast.success('Đánh giá đã được xóa thành công');
                setReloadData(prev => !prev);
            }
        } catch (error) {
            console.error('Lỗi khi xóa Đánh giá:', error);

        }
    };

    const handleUpdateComment = async (commentId: any, commentContent: any) => {
        try {
            const response = await api.patch(
                `/comment?comment=${commentId}&content=${commentContent}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            handleCloseButtonClick(commentId)
            toast.success('Comment updated successfully');
            setReloadData(prev => !prev);
        } catch (error) {
            console.error('Error updating comment:', error);

        }
    };

    const handleCommentChange = (event: React.FormEvent<HTMLDivElement>) => {
        const updatedContent = (event.target as HTMLDivElement).textContent || '';
        setEditCommentContent(updatedContent);
    };

    const handleButtonClick = (buttonId: number) => {
        setVisibleDivs((prevVisibleDivs) => ({
            ...prevVisibleDivs,
            [buttonId]: !prevVisibleDivs[buttonId],
        }));
        modals.forEach((modalId) => {
            if (modalRef.current) {
                closeModal(modalId);
            }
        });
    };


    const closeVisibleDivs = (commentId: string) => {
        setVisibleDivs((prevVisibleDivs) => ({
            ...prevVisibleDivs,
            [commentId]: false
        }));
        setEditedContent('');
    };

    const openModal = (modalId: string) => {
        setModals([...modals, modalId]);
    };

    const closeModal = (modalId: string) => {
        setModals(modals.filter((id) => id !== modalId));
    };

    const handleOutsideClick = (event: MouseEvent) => {
        const isClickInsideSpan = event.target instanceof Element && event.target.closest('span.cursor-pointer');
        if (!isClickInsideSpan) {
            // Đóng tất cả các modal đang mở
            modals.forEach((modalId) => {
                closeModal(modalId);
            });
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [modals, closeModal]);

    const handleBlur = (commentId: string) => {
        closeModal(commentId);
    };

    const handleCloseButtonClick = (commentId: any) => {
        setIsEditing(false);
    };

    return (
        <div>
            <div>
                <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ms-2 text-xl font-bold text-gray-900 dark:text-white">{reviews.value !== null ? reviews.value.toFixed(2) : "0"}/5</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{reviews.count / 2} lượt đánh giá</a>
                </div>
                {dataUser && showRating && (
                    <div className='w-full p-6 bg-[#eff2ef] rounded-2xl mb-3 mt-4' >
                        <div ref={scrollRating} ></div>

                        <div className='flex items-start'>
                            <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-cover flex-shrink-0'>
                                <img width={50} height={50} className='w-full h-full bg-cover object-cover' src={dataUser.avatar} alt="" />
                            </div>
                            <div className='ml-3 w-full'>
                                <div>
                                    <h1 className='text-base font-bold'>{dataUser.name}</h1>
                                </div>
                                <div className='relative flex'>
                                    <div className='w-full pr-[50px]'>
                                        <div className='flex text-[30px] absolute top-3 left-[14px]'>
                                            {[...Array(5)].map((star, index) => {
                                                const currentRating = index + 1;
                                                return (
                                                    <label>
                                                        <input className='hidden' type="radio" name="rating"
                                                            defaultValue={currentRating}

                                                            onClick={() => { setRating(currentRating) }} />
                                                        <FaStar
                                                            className="cursor-pointer"
                                                            color={currentRating <= (hover! || rating!) ? '#fde047' : '#cbd5e1'}
                                                            onMouseLeave={() => setHover(null)}
                                                            onMouseEnter={() => setHover(currentRating)} />
                                                    </label>
                                                )
                                            })}
                                        </div>
                                        <textarea className='resize-none focus:outline-primary rounded-2xl pt-[52px] px-[14px] pb-[14px] w-full' cols={30} rows={10} placeholder='Viết đánh giá của bạn' value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
                                    </div>

                                </div>
                                <div className='flex justify-end items-center px-12 mt-2'>
                                    <button className='border-black px-6 border text-primary rounded-full py-2 font-semibold mx-1'>Huỷ</button>
                                    <button className='bg-primary text-white px-6 border rounded-full py-2 font-semibold mx-1' onClick={() => handleSendButtonClick('')} >Đăng</button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <div>
                <div>
                    {dataComments.map((comment: any) => (

                        <div key={comment._id}>
                            {comment.parent === "" && (
                                <div className='flex items-top w-full mb-2 bg-[#eff2ef] px-5 py-5 rounded-xl'>
                                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden  bg-cover flex-shrink-0 '><img width={50} height={50} className='w-full h-full bg-cover object-cover' src={comment.user.avatar} alt="NOAVT" /></div>
                                    <div className='ml-3 w-full'>
                                        <div className='flex group'>
                                            <div className='mb-2 inline-block w-full'>
                                                <div className='flex items-center'>
                                                    <h3 className='font-semibold text-[13px] mr-3'>@{comment.user.username}</h3>
                                                    {/* <div className='flex justify-center items-center text-[#fde047]'>
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar className="text-gray-300 " />
                                                    </div> */}
                                                    {/* <div className='text-[#6b7280] text-xs font-semibold '>{moment(comment.createdAt).fromNow()}</div> */}
                                                </div>
                                                <div>
                                                    {isEditing !== comment._id && (
                                                        <><p className="text-base">{comment.content}</p>
                                                            <span className='text-xs mr-5'>{new Date(comment.createdAt).toISOString().split('T')[0]}</span>
                                                            <button
                                                                className='text-primary font-semibold text-sm mb-2'
                                                                onClick={() => handleButtonClick(comment._id)}
                                                            >
                                                                Trả lời
                                                            </button>
                                                        </>
                                                    )}
                                                    {(isEditing === comment._id) && (

                                                        <><div className='relative w-full max-w-[245px] md:max-w-[655px] lg:max-w-[20rem] lg:w-[20rem] mb-3'>
                                                            <div className='border rounded-lg '>
                                                                <div
                                                                    contentEditable
                                                                    suppressContentEditableWarning={true}
                                                                    onInput={handleCommentChange}
                                                                    className='w-full focus:outline-none p-2 text-sm '>{comment.content}</div>
                                                            </div>
                                                            <div className='flex justify-end mt-2'>
                                                                <button
                                                                    onClick={() => handleCloseButtonClick(comment._id)}
                                                                    className='mr-2  px-2 rounded-full hover:bg-gray-100 py-1 text-xs  font-semibold'
                                                                >
                                                                    Đóng
                                                                </button>
                                                                <button
                                                                    onClick={() => { handleUpdateComment(comment._id, editCommentContent) }}
                                                                    className='px-2 rounded-full py-1 text-xs bg-primary text-white font-semibold'
                                                                >
                                                                    Chỉnh sửa
                                                                </button>
                                                            </div>
                                                        </div></>

                                                    )}
                                                </div>

                                                {comment._id && visibleDivs[comment._id || ''] && (
                                                    <div className='flex items-start mb-3 bg-white  px-6 py-6 rounded-xl'>
                                                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-cover flex-shrink-0'>
                                                            <img width={50} height={50} className='w-full h-full bg-cover object-cover' src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/294104815_151317574157525_7345912620490732756_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2DJWjcOqYr8AX-GT2qz&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCpozWzI0ShPcGs3P1bn7B6zmgwjHe6Pv6TMAmnv27EVg&oe=656867BE" alt="" />
                                                        </div>
                                                        <div className='ml-3 w-full'>
                                                            <div className='flex items-center mb-3'>
                                                                <h3 className='text-base font-bold mr-2 '>Gia Kiệnn</h3>
                                                                <h4 className='bg-blue-50 text-primary px-2 py-1  rounded-lg uppercase text-xs font-bold border border-primary'>Chủ shop</h4>
                                                            </div>
                                                            <div className=' relative flex'>

                                                                <div className='w-full pr-[50px]'>
                                                                    <textarea className='bg-gray-50 resize-none focus:outline-primary rounded-2xl  px-[14px] py-[14px] w-full' cols={30} rows={10} placeholder='Viết đánh giá của bạn'></textarea>
                                                                </div>
                                                                {/* <input
                                                                    value={replyComment}
                                                                    onChange={(e) => setReplyComment(e.target.value)}
                                                                    type="text" className='focus:outline-none pl-1 py-2 pr-3 text-sm w-full'
                                                                    placeholder='Nhập Đánh giá của bạn' /> */}
                                                            </div>
                                                            <div className='flex justify-end mt-2 px-12'>
                                                                <button
                                                                    className='mr-2  px-2 rounded-full hover:bg-gray-100 py-1 text-sm  font-semibold'
                                                                    onClick={() => closeVisibleDivs(comment._id)}
                                                                >
                                                                    Đóng
                                                                </button>
                                                                <button onClick={() => handleSendButtonClick(comment._id)} className=' px-3 rounded-full  py-2 text-sm bg-primary text-white font-semibold'>
                                                                    Phản hồi
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className='relative flex items-center'>
                                                <span
                                                    className='absolute right-0 top-3 cursor-pointer group-hover:block hidden'
                                                    onClick={() => openModal(comment._id)}
                                                    onBlur={() => handleBlur(comment._id)}
                                                >
                                                    <FaEllipsis />
                                                </span>
                                                {modals.includes(comment._id) && (
                                                    <div ref={modalRef} className="absolute right-0 top-[0.5rem] mt-2 w-60 p-2 z-50 bg-white border rounded-md shadow-lg">
                                                        <div className='flex flex-col items-center'>
                                                            <button onClick={() => deleteComment(comment._id)} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Xoá Đánh giá</button>
                                                            <button onClick={() => { setIsEditing(comment._id), closeModal(comment._id) }} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Sửa Đánh giá</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {dataComments
                                            .filter((childComment: any) => childComment.parent === comment._id)
                                            .map((childComment: any) => (
                                                <div key={childComment._id}>
                                                    <div className='flex bg-white p-5 rounded-xl mb-5'>
                                                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-cover flex-shrink-0 '>
                                                            <img width={50} height={50} className='w-full h-full bg-cover object-cover' src={childComment.user.avatar} alt="" />
                                                        </div>
                                                        <div className='ml-3 w-full'>
                                                            <div className='flex group'>
                                                                <div className='inline-block w-full'>
                                                                    <div className='flex items-center'>
                                                                        <div className='flex items-center'>
                                                                            <h3 className='font-semibold text-[13px] mr-2'>@{childComment.user.username}</h3>
                                                                            <h4 className='bg-blue-50 text-primary px-2 py-1  rounded-lg uppercase text-xs font-bold border border-primary'>Chủ shop</h4>
                                                                        </div>
                                                                        <div>

                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        {isEditing !== childComment._id && (
                                                                            <div className='pr-4'>
                                                                                <p className="mb-1 text-base">{childComment.content}</p>

                                                                            </div>
                                                                        )}
                                                                        {(isEditing === childComment._id) && (

                                                                            <><div className='relative w-full max-w-[245px] md:max-w-[655px] lg:max-w-[20rem] lg:w-[20rem] mb-3'>
                                                                                <div className='border rounded-lg '>
                                                                                    <div
                                                                                        contentEditable
                                                                                        suppressContentEditableWarning={true}
                                                                                        className='w-full focus:outline-none p-2 text-sm '>{childComment.content}</div>
                                                                                </div>
                                                                                <div className='flex justify-end mt-2'>
                                                                                    <button

                                                                                        onClick={() => handleCloseButtonClick(childComment._id)}
                                                                                        className='mr-2  px-2 rounded-full hover:bg-gray-100 py-1 text-sm  font-semibold'
                                                                                    >
                                                                                        Đóng
                                                                                    </button>
                                                                                    <button className=' px-2 rounded-full  py-1 text-sm bg-primary text-white font-semibold'>
                                                                                        Phản hồi
                                                                                    </button>
                                                                                </div>
                                                                            </div></>

                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className='relative flex items-center'>
                                                                    <span className='absolute right-0 top-3 hidden group-hover:block group cursor-pointer' onClick={() => openModal(childComment._id)} onBlur={() => handleBlur(childComment._id)}> <FaEllipsis /> </span>
                                                                    {modals.includes(childComment._id) && (
                                                                        <div ref={modalRef} className="absolute right-0 top-10 mt-2 w-60 p-2 z-50 bg-white border rounded-md shadow-lg">
                                                                            <div className='flex flex-col items-center'>
                                                                                <button onClick={() => deleteComment(childComment._id)} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Xoá Đánh giá</button>
                                                                                <button onClick={() => { setIsEditing(childComment._id), closeModal(childComment._id) }} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Sửa Đánh giá</button>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            ))}


                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div >

        </div >
    )
}



