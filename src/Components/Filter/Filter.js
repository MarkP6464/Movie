import React from "react";
import PropTypes from "prop-types";

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
                name="sort_field"
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
                <option selected="" value="phim-moi">
                  Phim Mới
                </option>
                <option value="phim-bo">Phim Bộ</option>
                <option value="phim-le">Phim Lẻ</option>
                <option value="tv-shows">TV Shows</option>
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
                <option value="hanh-dong">Hành Động</option>
                <option value="tinh-cam">Tình Cảm</option>
                <option value="hai-huoc">Hài Hước</option>
                <option value="co-trang">Cổ Trang</option>
                <option value="tam-ly">Tâm Lý</option>
                <option value="hinh-su">Hình Sự</option>
                <option value="chien-tranh">Chiến Tranh</option>
                <option value="the-thao">Thể Thao</option>
                <option value="vo-thuat">Võ Thuật</option>
                <option value="vien-tuong">Viễn Tưởng</option>
                <option value="phieu-luu">Phiêu Lưu</option>
                <option value="khoa-hoc">Khoa Học</option>
                <option value="kinh-di">Kinh Dị</option>
                <option value="am-nhac">Âm Nhạc</option>
                <option value="than-thoai">Thần Thoại</option>
                <option value="tai-lieu">Tài Liệu</option>
                <option value="gia-dinh">Gia Đình</option>
                <option value="chinh-kich">Chính kịch</option>
                <option value="bi-an">Bí ẩn</option>
                <option value="hoc-duong">Học Đường</option>
                <option value="kinh-dien">Kinh Điển</option>
                <option value="phim-18">Phim 18+</option>
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
                <option value="trung-quoc">Trung Quốc</option>
                <option value="han-quoc">Hàn Quốc</option>
                <option value="nhat-ban">Nhật Bản</option>
                <option value="thai-lan">Thái Lan</option>
                <option value="au-my">Âu Mỹ</option>
                <option value="dai-loan">Đài Loan</option>
                <option value="hong-kong">Hồng Kông</option>
                <option value="an-do">Ấn Độ</option>
                <option value="anh">Anh</option>
                <option value="phap">Pháp</option>
                <option value="canada">Canada</option>
                <option value="quoc-gia-khac">Quốc Gia Khác</option>
                <option value="duc">Đức</option>
                <option value="tay-ban-nha">Tây Ban Nha</option>
                <option value="tho-nhi-ky">Thổ Nhĩ Kỳ</option>
                <option value="ha-lan">Hà Lan</option>
                <option value="indonesia">Indonesia</option>
                <option value="nga">Nga</option>
                <option value="mexico">Mexico</option>
                <option value="ba-lan">Ba lan</option>
                <option value="uc">Úc</option>
                <option value="thuy-dien">Thụy Điển</option>
                <option value="malaysia">Malaysia</option>
                <option value="brazil">Brazil</option>
                <option value="philippines">Philippines</option>
                <option value="bo-ao-nha">Bồ Đào Nha</option>
                <option value="y">Ý</option>
                <option value="dan-mach">Đan Mạch</option>
                <option value="uae">UAE</option>
                <option value="na-uy">Na Uy</option>
                <option value="thuy-si">Thụy Sĩ</option>
                <option value="chau-phi">Châu Phi</option>
                <option value="nam-phi">Nam Phi</option>
                <option value="ukraina">Ukraina</option>
                <option value="a-rap-xe-ut">Ả Rập Xê Út</option>
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
