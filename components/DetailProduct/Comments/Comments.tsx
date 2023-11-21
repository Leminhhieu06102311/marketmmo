import React, { useEffect, useRef, useState } from 'react'
import { FaPaperPlane } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import Cookies from 'js-cookie';

import axios from 'axios';
// import moment from 'moment';
import { getUser } from '@/services/user';
import { useAppDispatch } from '@/redux/hooks';
export default function Comments({ productId }: { productId: string }) {
    const [access_token, setAccessToken] = useState('');
    const [dataUser, setDataUser] = useState({});
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
    const token = Cookies.get('access_token');
    useEffect(() => {
        const fetchDataUser = async () => {
            const res = await getUser(token);
            setDataUser(res)
        };
        fetchDataUser();
        const fetchDataComment = async () => {
            try {
                const response = await axios.get(`https://fancy-cemetery-production.up.railway.app/comment?product-slug=${productId}&limit=30&page=1`);
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
        fetchDataComment();
    }, [productId, reloadData]);

    const handleSendButtonClick = async (parent: any) => {
        //( câu này nó dư để tạm t fix lại )
        const commentToSend = comment === "" ?
            (childReplyComment !== "" ? childReplyComment :
                (child2ReplyComment !== "" ? child2ReplyComment : replyComment))
            : comment;
        if (commentToSend === "") {
            return;
        }
        try {
            const response = await axios.post(
                `https://fancy-cemetery-production.up.railway.app/comment?content=${commentToSend}&parent=${parent}&productSlug=${productId}`, {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`,
                    },
                }
            );
            console.log('Bình luận đã được đăng:', response.data);
            setComment('');
            setReplyComment('')
            setChildReplyComment('')
            setChild2ReplyComment('')
            closeVisibleDivs(productId);
            setReloadData(prev => !prev);
        } catch (error) {
            console.error('Lỗi khi đăng bình luận:', error);
        }
    };
    const deleteComment = async (commentId: any) => {
        const token = Cookies.get('access_token');
        console.log(token)
        try {
            const response = await axios.delete(`https://fancy-cemetery-production.up.railway.app/comment?comment=${commentId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`,
                    },
                });

            if (response.status === 200) {
                console.log('Bình luận đã được xóa thành công');
                setReloadData(prev => !prev);
            }
        } catch (error) {
            console.error('Lỗi khi xóa bình luận:', error);

        }
    };
    const handleUpdateComment = async (commentId: any, commentContent: any) => {
        console.log(access_token)
        try {
            const response = await axios.patch(
                `https://fancy-cemetery-production.up.railway.app/comment?comment=${commentId}&content=${commentContent}`, {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            );
            handleCloseButtonClick(commentId)
            console.log('Comment updated successfully');
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
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const isClickInsideSpan = event.target instanceof Element && event.target.closest('span.cursor-pointer');
            if (!isClickInsideSpan) {
                // Đóng tất cả các modal đang mở
                modals.forEach((modalId) => {
                    closeModal(modalId);
                });
            }
        };

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

    useEffect(() => {
        console.log(dataUser)
    }, [dataUser])
    return (
        <div>
            <div>
                <h2 className='text-xl mb-3 font-semibold'>Bình Luận</h2>
                <div className='w-full'>
                    <div className='flex items-center mb-3'>
                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-cover flex-shrink-0'>
                            <img width={50} height={50} className='w-full h-full bg-cover object-cover' src="/images/avt/1.jpg" alt="" />
                        </div>
                        <div className='ml-3 w-full'>
                            <div className='border-b relative flex'>
                                <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" className='focus:outline-none pl-1 pt-3 pb-[1rem] pr-3 text-sm w-full' placeholder='Nhập bình luận của bạn' />
                                <span onClick={() => handleSendButtonClick('')} className='absolute right-2 top-1/2 transform -translate-y-1/2 text-primary'>
                                    <FaPaperPlane className="mr-2 cursor-pointer" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {dataComments.map((comment: any) => (

                        <div key={comment._id}>
                            {comment.parent === "" && (
                                <div className='flex items-top w-full mb-2'>
                                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden  bg-cover flex-shrink-0 '><img width={50} height={50} className='w-full h-full bg-cover object-cover' src={comment.user.avatar} alt="NOAVT" /></div>
                                    <div className='ml-3 w-full'>
                                        <div className='flex group'>
                                            <div className='mb-2 inline-block w-full'>
                                                <div className='flex items-center'>
                                                    <h3 className='font-semibold text-[13px] mr-3'>@{comment.user.username}</h3>
                                                    {/* <div className='text-[#6b7280] text-xs font-semibold '>{moment(comment.createdAt).fromNow()}</div> */}
                                                </div>
                                                <div>
                                                    {isEditing !== comment._id && (
                                                        <><p className="mb-1 text-sm">{comment.content}</p>
                                                            <button
                                                                className='text-primary font-semibold text-sm mb-2'
                                                                onClick={() => handleButtonClick(comment._id)}
                                                            >
                                                                Trả lời
                                                            </button></>
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
                                                    <div className='flex items-start mb-3'>
                                                        <div className='w-[35px] h-[35px] rounded-full overflow-hidden bg-cover flex-shrink-0'>
                                                            <img width={35} height={35} className='w-full h-full bg-cover object-cover' src="/images/avt/1.jpg" alt="" />
                                                        </div>
                                                        <div className='ml-3 w-full'>
                                                            <div className='border-b relative flex'>
                                                                <input
                                                                    value={replyComment}
                                                                    onChange={(e) => setReplyComment(e.target.value)}
                                                                    type="text" className='focus:outline-none pl-1 py-2 pr-3 text-sm w-full'
                                                                    placeholder='Nhập bình luận của bạn' />

                                                            </div>
                                                            <div className='flex justify-end mt-2'>
                                                                <button
                                                                    className='mr-2  px-2 rounded-full hover:bg-gray-100 py-1 text-sm  font-semibold'
                                                                    onClick={() => closeVisibleDivs(comment._id)}
                                                                >
                                                                    Đóng
                                                                </button>
                                                                <button onClick={() => handleSendButtonClick(comment._id)} className=' px-2 rounded-full  py-1 text-sm bg-primary text-white font-semibold'>
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
                                                            <button onClick={() => deleteComment(comment._id)} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Xoá Bình Luận</button>
                                                            <button onClick={() => { setIsEditing(comment._id), closeModal(comment._id) }} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Sửa Bình Luận</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {dataComments
                                            .filter((childComment: any) => childComment.parent === comment._id)
                                            .map((childComment: any) => (
                                                <div key={childComment._id}>
                                                    <div className='flex'>
                                                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-cover flex-shrink-0 '>
                                                            <img width={50} height={50} className='w-full h-full bg-cover object-cover' src={childComment.user.avatar} alt="" />
                                                        </div>
                                                        <div className='ml-3 w-full'>
                                                            <div className='flex group'>
                                                                <div className='mb-2 inline-block w-full'>
                                                                    <div className='flex items-center'>
                                                                        <h3 className='font-semibold text-[13px] mr-3'>@{childComment.user.username}</h3>
                                                                        {/* <div className='text-[#6b7280] text-xs font-semibold '>{moment(childComment.createdAt).fromNow()}</div> */}
                                                                    </div>
                                                                    <div>
                                                                        {isEditing !== childComment._id && (
                                                                            <><p className="mb-1 text-sm">{childComment.content}</p>
                                                                                <button
                                                                                    className='text-primary font-semibold text-sm mb-2'
                                                                                    onClick={() => handleButtonClick(childComment._id)}
                                                                                >
                                                                                    Trả lời
                                                                                </button></>
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
                                                                                <button onClick={() => deleteComment(childComment._id)} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Xoá Bình Luận</button>
                                                                                <button onClick={() => { setIsEditing(childComment._id), closeModal(childComment._id) }} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Sửa Bình Luận</button>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {childComment._id && visibleDivs[childComment._id || ''] && (
                                                                <div className='flex items-start mb-3'>
                                                                    <div className='w-[35px] h-[35px] rounded-full overflow-hidden bg-cover flex-shrink-0'>
                                                                        <img width={35} height={35} className='w-full h-full bg-cover object-cover' src="/images/avt/1.jpg" alt="" />
                                                                    </div>
                                                                    <div className='ml-3 w-full'>
                                                                        <div className='border-b relative flex'>
                                                                            <input
                                                                                value={childReplyComment}
                                                                                onChange={(e) => setChildReplyComment(e.target.value)}
                                                                                type="text" className='focus:outline-none pl-1 py-2 pr-3 text-sm w-full'
                                                                                placeholder='Nhập bình luận của bạn' />

                                                                        </div>
                                                                        <div className='flex justify-end mt-2'>
                                                                            <button
                                                                                className='mr-2  px-2 rounded-full hover:bg-gray-100 py-1 text-sm  font-semibold'
                                                                                onClick={() => closeVisibleDivs(childComment._id)}
                                                                            >
                                                                                Đóng
                                                                            </button>
                                                                            <button onClick={() => handleSendButtonClick(comment._id)} className=' px-2 rounded-full  py-1 text-sm bg-primary text-white font-semibold'>
                                                                                Phản hồi
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {/* {dataComments
                                                        .filter((nestedComment: any) => nestedComment.parent === childComment._id)
                                                        .map((nestedComment: any) => (
                                                            <div key={nestedComment._id}>
                                                                <div className='flex group'>
                                                                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-cover flex-shrink-0 '>
                                                                        <img width={50} height={50} className='w-full h-full bg-cover object-cover' src={nestedComment.user.avatar} alt="" />
                                                                    </div>
                                                                    <div className='ml-3 w-full'>
                                                                        <div className='flex'>
                                                                            <div className='mb-2 inline-block w-full'>
                                                                                <div className='flex items-start'>
                                                                                    <h3 className='font-semibold text-[13px] mr-3'>@{nestedComment.user.username}</h3>
                                                                                    <div className='text-[#6b7280] text-xs font-semibold '>{moment(nestedComment.createdAt).fromNow()}</div>
                                                                                </div>
                                                                                <div>
                                                                                    {isEditing !== nestedComment._id && (
                                                                                        <><p className="mb-1 text-sm">{nestedComment.content}</p>
                                                                                            <button
                                                                                                className='text-primary font-semibold text-sm mb-2'
                                                                                                onClick={() => handleButtonClick(nestedComment._id)}
                                                                                            >
                                                                                                Trả lời
                                                                                            </button></>
                                                                                    )}
                                                                                    {(isEditing === nestedComment._id) && (

                                                                                        <><div className='relative w-full max-w-[245px] md:max-w-[655px] lg:max-w-[20rem] lg:w-[20rem] mb-3'>
                                                                                            <div className='border rounded-lg '>
                                                                                                <div
                                                                                                    contentEditable
                                                                                                    suppressContentEditableWarning={true}
                                                                                                    className='w-full focus:outline-none p-2 text-sm '>{nestedComment.content}</div>
                                                                                            </div>
                                                                                            <div className='flex justify-end mt-2'>
                                                                                                <button

                                                                                                    onClick={() => handleCloseButtonClick(nestedComment._id)}
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
                                                                                <span className='absolute right-0 top-3 hidden group-hover:block group cursor-pointer' onClick={() => openModal(nestedComment._id)} onBlur={() => handleBlur(nestedComment._id)}> <FaEllipsis /> </span>
                                                                                {modals.includes(nestedComment._id) && (
                                                                                    <div ref={modalRef} className="absolute right-0 top-10 mt-2 w-60 p-2 z-50 bg-white border rounded-md shadow-lg">
                                                                                        <div className='flex flex-col items-center'>
                                                                                            <button onClick={() => deleteComment(nestedComment._id)} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Xoá Bình Luận</button>
                                                                                            <button onClick={() => { setIsEditing(nestedComment._id), closeModal(nestedComment._id) }} className='w-full p-2 text-start text-xs font-medium hover:bg-gray-200 rounded-lg'>Sửa Bình Luận</button>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        {nestedComment._id && visibleDivs[nestedComment._id || ''] && (
                                                                            <div className='flex items-start mb-3'>
                                                                                <div className='w-[35px] h-[35px] rounded-full overflow-hidden bg-cover flex-shrink-0'>
                                                                                    <img width={35} height={35} className='w-full h-full bg-cover object-cover' src="/images/avt/1.jpg" alt="" />
                                                                                </div>
                                                                                <div className='ml-3 w-full'>
                                                                                    <div className='border-b relative flex'>
                                                                                        <input
                                                                                            value={child2ReplyComment}
                                                                                            onChange={(e) => setChild2ReplyComment(e.target.value)}
                                                                                            type="text" className='focus:outline-none pl-1 py-2 pr-3 text-sm w-full'
                                                                                            placeholder='Nhập bình luận của bạn' />

                                                                                    </div>
                                                                                    <div className='flex justify-end mt-2'>
                                                                                        <button
                                                                                            className='mr-2  px-2 rounded-full hover:bg-gray-100 py-1 text-sm  font-semibold'
                                                                                            onClick={() => closeVisibleDivs(nestedComment._id)}
                                                                                        >
                                                                                            Đóng
                                                                                        </button>
                                                                                        <button onClick={() => handleSendButtonClick(nestedComment._id)} className=' px-2 rounded-full  py-1 text-sm bg-primary text-white font-semibold'>
                                                                                            Phản hồi
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))} */}
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

function fetchData() {
    throw new Error('Function not implemented.');
}

