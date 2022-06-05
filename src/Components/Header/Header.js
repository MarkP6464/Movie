import React from "react";
import logo from "../../imgs/logo.png";
import PropTypes from "prop-types";

Header.propTypes = {};

function Header(props) {
  return (
    <div class="sticky top-0 z-40 w-full flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] backdrop-blur bg-white/60 dark:bg-transparent">
      <div class="max-w-8xl mx-auto">
        <div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div class="relative flex items-center">
            <div class="mr-3 flex-none overflow-hidden w-auto">
              <span class="sr-only">
                Dữ liệu phim vietsub miễn phí mới nhất. Cập nhật nhanh chóng,
                chất lượng cao và không quảng cáo
              </span>
              <span class="font-bold">
                <a href="/">
                  <img src={logo} class="w-[150px] h-[40px]" alt="Ổ Phim" />
                </a>
              </span>
            </div>
            <div class="relative pointer-events-auto">
              <div class="relative hidden xl:block">
                <form class="group relative" method="GET" action="/search">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 dark:text-slate-100 placeholder-slate-400 rounded-full py-2 pl-10 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
                    aria-label="Tìm kiếm phim"
                    placeholder="Tìm kiếm phim..."
                    name="keyword"
                  />
                </form>
              </div>
            </div>
            <div class="relative hidden xl:flex items-center ml-auto">
              <nav class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul class="flex space-x-8">
                  <li>
                    <a
                      class="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/sort?sortField=&type=&year=&category=&country="
                    >
                      Phim Bộ
                    </a>
                  </li>
                  <li>
                    <a
                      class="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/sort"
                    >
                      Phim Lẻ
                    </a>
                  </li>
                  <li>
                    <a
                      class="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/sort"
                    >
                      Shows
                    </a>
                  </li>
                  <li>
                    <a
                      class="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/sort"
                    >
                      Hoạt Hình
                    </a>
                  </li>
                  <li>
                    <span class="hover:text-sky-500 dark:hover:text-sky-400">
                      <div class="relative inline-block text-left">
                        <div>
                          <button
                            class="inline-flex justify-center w-full text-sm font-medium rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            id="headlessui-menu-button-undefined"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Thể Loại
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-5 h-5 ml-2 -mr-1 text-violet-400 hover:text-violet-800"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li>
                    <span class="hover:text-sky-500 dark:hover:text-sky-400">
                      <div class="relative inline-block text-left">
                        <div>
                          <button
                            class="inline-flex justify-center w-full text-sm font-medium rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            id="headlessui-menu-button-undefined"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Quốc Gia
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-5 h-5 ml-2 -mr-1 text-violet-400 hover:text-violet-800"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li>
                    <a
                      class="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/danh-sach/phim-sap-chieu"
                    >
                      Sắp Chiếu
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-red-500 hover:text-sky-500 dark:hover:text-sky-400"
                      href="/danh-sach/subteam"
                    >
                      Subteam
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <label class="sr-only">Theme</label>
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      class="inline-flex justify-center w-full text-sm font-medium rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      id="headlessui-menu-button-undefined"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="dark:hidden w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="hidden dark:inline w-6 h-6"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 xl:hidden dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span class="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
            </button>
            <div class="ml-2 -my-1 xl:hidden">
              <button
                type="button"
                class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span class="sr-only">Navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
