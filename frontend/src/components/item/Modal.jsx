import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={onClose}
          />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
        <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full h-5/6">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form onSubmit={handleSubmit(onSubmit)} className="p-4">
              {/* 表單欄位 */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-mg font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  disabled
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled:bg-amber-300"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">Name is required.</p>
                )}
              </div>
              {/* 時間選擇 */}
              <div className="mb-96 w-full">
                <label
                  htmlFor="檢核日期"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Time:
                </label>
                <DatePicker
                  id="time"
                  // className=""
                  // selected={startTime}
                  // onChange={(date) => setStartTime(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
              <div className="mb-96 w-full">
                <label
                  htmlFor="檢核日期"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Time:
                </label>
                <DatePicker
                  id="time"
                  // className=""
                  // selected={startTime}
                  // onChange={(date) => setStartTime(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
              <div className="mb-96 w-full">
                <label
                  htmlFor="檢核日期"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Time:
                </label>
                <DatePicker
                  id="time"
                  // className=""
                  // selected={startTime}
                  // onChange={(date) => setStartTime(date)}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
              <div className="flex justify-end space-x-1">
                <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                  提交
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
