import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

Filter.propTypes = {};

function Filter(props) {
  return (
    <div class="w-full px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded-md">
      <div class="text-black">
        <form id="form-filter" class="lg:flex gap-2 items-center">
          <div class="p-2 flex justify-between">
            <span class="text-black dark:text-white">Lọc Phim</span>
            <div class="block lg:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div class="hidden lg:flex gap-2 items-center">
            <div class="p-2">
              <select
                class="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-white p-2 rounded-md outline-none"
                id="filter-sort"
                name="sortField"
              >
                <option selected="" class="py-2" value="_id">
                  Phim mới nhất
                </option>
                <option class="py-2" value="modified.time">
                  Thời gian cập nhật
                </option>
                <option class="py-2" value="year">
                  Năm sản xuất
                </option>
              </select>
            </div>
            <div class="p-2">
              <select
                class="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-white p-2 rounded-md outline-none"
                id="filter-eptype"
                name="type"
              >
                <option selected="" value="">
                  Phim Mới
                </option>
                <option value="series">Phim Bộ</option>
                <option value="single">Phim Lẻ</option>
                <option value="TV Shows">TV Shows</option>
                <option value="hoat-hinh">Hoạt Hình</option>
                <option value="phim-vietsub">Phim Vietsub</option>
                <option value="phim-thuyet-minh">Phim Thuyết Minh</option>
                <option value="phim-long-tieng">Phim Lồng Tiếng</option>
                <option value="phim-bo-dang-chieu">Phim Bộ Đang Chiếu</option>
                <option value="phim-bo-hoan-thanh">Phim Trọn Bộ</option>
                <option value="phim-sap-chieu">Phim Sắp Chiếu</option>
                <option value="subteam">Subteam</option>
              </select>
            </div>
            <div class="p-2">
              <select
                id="filter-category"
                name="category"
                class="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-white p-2 rounded-md outline-none"
              >
                <option selected="" value="">
                  Toàn bộ Thể loại
                </option>
                <option value="Hành Động">Hành Động</option>
                <option value="Tình Cảm">Tình Cảm</option>
                <option value="Hài Hước">Hài Hước</option>
                <option value="Tâm Lý">Tâm Lý</option>
                <option value="Hình Sự">Hình Sự</option>
                <option value="Chiến Tranh">Chiến Tranh</option>
                <option value="Thể Thao">Thể Thao</option>
                <option value="Võ Thuật">Võ Thuật</option>
                <option value="Viễn Tưởng">Viễn Tưởng</option>
                <option value="Phiêu Lưu">Phiêu Lưu</option>
                <option value="Khoa Học">Khoa Học</option>
                <option value="Kinh Dị">Kinh Dị</option>
                <option value="Gia Đình">Gia Đình</option>
                <option value="Chính kịch">Chính kịch</option>
                <option value="Bí ẩn">Bí ẩn</option>
              </select>
            </div>
            <div class="p-2">
              <select
                id="filter-country"
                name="country"
                class="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-white p-2 rounded-md outline-none"
              >
                <option selected="" value="">
                  Toàn bộ Quốc gia
                </option>
                <option value="Trung Quốc">Trung Quốc</option>
                <option value="Hàn Quốc">Hàn Quốc</option>
                <option value="Nhật Bản">Nhật Bản</option>
                <option value="Thái Lan">Thái Lan</option>
                <option value="Âu Mỹ">Âu Mỹ</option>
                <option value="Đài Loan">Đài Loan</option>
                <option value="Hồng Kông">Hồng Kông</option>
                <option value="Ấn Độ">Ấn Độ</option>
                <option value="anh">Anh</option>
                <option value="phap">Pháp</option>
              </select>
            </div>
            <div class="p-2">
              <select
                id="filter-year"
                name="year"
                class="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-white p-2 rounded-md outline-none"
              >
                <option selected="" value="">
                  Toàn bộ Năm
                </option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
              </select>
            </div>
            <div class="p-2">
              <button
                type="submit"
                id="btn-movie-filter"
                class="bg-violet-500 text-white p-1.5 rounded hover:bg-violet-400"
              >
                <span>Duyệt phim</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
