import React from "react";
import PropTypes from "prop-types";
import apiIcon from "../../imgs/icons-api-48.png";

Banner.propTypes = {};

function Banner(props) {
  return (
    <div>
      <h1 class="text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
        Dữ liệu phim miễn phí vĩnh viễn. Cập nhật nhanh, chất lượng cao, ổn định
        và lâu dài. Tốc độ phát cực nhanh với đường truyền băng thông cao, đảm
        bảo đáp ứng được lượng xem phim trực tuyến lớn. Đồng thời giúp nhà phát
        triển website phim giảm thiểu chi phí của các dịch vụ lưu trữ và stream.
      </h1>
      <div class="flex items-center justify-center">
        <div class="w-full mb-2 justify-center rounded-lg">
          <div class="pt-1 flex-wrap flex items-center gap-2 justify-center">
            <div class="bg-gradient-to-r flex-auto w-42 h-42 from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-lg">
              <div class="md:p-2 p-1">
                <div class="text-xl text-center text-orange-500 capitalize">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="w-5 h-5 inline"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  110
                </div>
                <h2 class="text-sm text-gray-800 dark:text-gray-400 text-center">
                  Phim cập nhật hôm nay
                </h2>
              </div>
            </div>
            <div class="bg-gradient-to-r flex-auto w-42 h-42 from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-lg">
              <div class="md:p-2 p-1">
                <div class="text-xl text-center text-sky-500 capitalize">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="w-5 h-5 inline"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  10954
                </div>
                <h2 class="text-sm text-gray-800 dark:text-gray-400 text-center">
                  Tổng số lượng phim
                </h2>
              </div>
            </div>
            <div class="bg-gradient-to-r flex-auto w-42 h-42 from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-lg">
              <div class="md:p-2 p-1">
                <ul class="text-lg flex justify-center text-orange-500 capitalize">
                  <li>
                    <span class="sr-only">Telegram</span>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://t.me/+QMfjBOtNpkZmNTc1"
                      title="Nhóm telegram OPhim.Tv"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="28px"
                        height="28px"
                      >
                        <path
                          fill="#29b6f6"
                          d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                        ></path>
                        <path
                          fill="#b0bec5"
                          d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                        ></path>
                        <path
                          fill="#cfd8dc"
                          d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <span class="sr-only">Facebook</span>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                      title="Nhóm Facebook OPhim.Tv"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="28px"
                        height="28px"
                      >
                        <path
                          fill="#039be5"
                          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <h2 class="text-sm text-gray-800 dark:text-gray-400 text-center">
                  Cộng đồng Ổ Phim
                </h2>
              </div>
            </div>
            <div class="bg-gradient-to-r flex-auto w-42 h-42 from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-lg">
              <div class="md:p-2 p-1">
                <div class="text-xl text-center text-sky-500 capitalize">
                  <span class="sr-only">
                    Api dành cho nhà phát triển website xem phim trực tuyến
                  </span>
                  <span class="font-bold">
                    <a
                      title="Api dành cho nhà phát triển website xem phim trực tuyến"
                      href="/api-document"
                    >
                      <img
                        class="mx-auto"
                        src={apiIcon}
                        width="28"
                        height="28"
                        alt="Api"
                      />
                    </a>
                  </span>
                </div>
                <h3 class="text-sm text-gray-800 dark:text-gray-400 text-center">
                  Dành cho nhà phát triển
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
