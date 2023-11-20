import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setRating } from "@/redux/modalSlice";
import ContentModal from "../Modal";

export default function RatingModal() {
  const dispatch = useAppDispatch();
  const { status, rating } = useAppSelector((state) => state.modal);

  const handleRatingChange = (value: any) => {
    dispatch(setRating(value));
  };

  return (
    <div>
      <ContentModal nameModal="rating">
        {" "}
        {status && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Đánh giá sản phẩm</h2>
              <div className="rating">
                <span className="rating-label">Đánh giá của bạn:</span>
                <select
                  value={rating}
                  onChange={(e) => handleRatingChange(e.target.value)}
                >
                  <option value={1}>1 sao</option>
                  <option value={2}>2 sao</option>
                  <option value={3}>3 sao</option>
                  <option value={4}>4 sao</option>
                  <option value={5}>5 sao</option>
                </select>
              </div>
              <button>Gửi đánh giá</button>
            </div>
          </div>
        )}
      </ContentModal>
    </div>
  );
}
