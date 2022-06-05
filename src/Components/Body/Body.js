import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";

Body.propTypes = {};

function Body(props) {
  return (
    <div class="container mx-auto mt-2 py-2 w-full">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-500 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead class="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                    >
                      Tên
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                    >
                      Năm Sản Xuất
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                    >
                      Tình Trạng
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                    >
                      Thể Loại
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                    >
                      Quốc Gia
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                    >
                      Ngày cập nhật
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-gray-600">
                  {props.data?.map((element) => {
                    return (
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-14 w-12">
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "non",
                                  opacity: 1,
                                  border: 0,
                                  margin: 0,
                                  padding: 0,
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    paddingTop: "132.5%",
                                  }}
                                ></span>
                                <img
                                  alt="Tiểu Thư Quạ Đen Và Tiên Sinh Thằn Lằn - Miss Crow With Mr. Lizard (2021)"
                                  src={element.thumb_url}
                                  decoding="async"
                                  data-nimg="responsive"
                                  class="rounded-md"
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: "border-box",
                                    padding: 0,
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: 0,
                                    height: 0,
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                  }}
                                />
                              </span>
                            </div>
                            <div class="ml-4">
                              <a
                                title="Phim Tiểu Thư Quạ Đen Và Tiên Sinh Thằn Lằn - Miss Crow With Mr. Lizard (2021)"
                                href={"movie/" + element.slug}
                              >
                                <h3 class="font-medium max-w-md overflow-hidden overflow-ellipsis whitespace-nowrap text-violet-500 hover:text-sky-500">
                                  {element.name}
                                </h3>
                                <h4 class="text-sm max-w-md overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-200">
                                  {"(" + element.origin_name + ")"}
                                </h4>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900 dark:text-white">
                            {element.year}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-700 dark:bg-slate-900 dark:text-green-400">
                            {element.status}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                          {element.category?.map((prop) => {
                            return prop.name + " ";
                          })}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                          {element.country?.map((prop) => {
                            return prop.name + " ";
                          })}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                          {element.modified.time}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div class=" px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-500 sm:px-6">
                <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p class="text-sm text-black dark:text-white">
                      Trang<span class="font-medium mx-1">1</span>/
                      <span class="font-medium mx-1">366</span>| Tổng
                      <span class="font-medium mx-1">10954</span>Kết quả
                    </p>
                  </div>
                  <div>
                    <nav
                      class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <a
                        href="/"
                        aria-current="page"
                        class="z-10 bg-indigo-50 dark:bg-slate-700/10 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        1
                      </a>
                      <a
                        title="Trang 2"
                        class="bg-white dark:bg-slate-700/10 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        href="/danh-sach/phim-moi?page=2"
                      >
                        2
                      </a>
                      <a
                        title="Trang 3"
                        class="bg-white dark:bg-slate-700/10 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        href="/danh-sach/phim-moi?page=3"
                      >
                        3
                      </a>
                      <a
                        title="Trang 4"
                        class="bg-white dark:bg-slate-700/10 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        href="/danh-sach/phim-moi?page=4"
                      >
                        4
                      </a>
                      <a
                        title="Trang 5"
                        class="bg-white dark:bg-slate-700/10 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-white/60 hover:bg-gray-50 dark:hover:bg-gray-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        href="/danh-sach/phim-moi?page=5"
                      >
                        5
                      </a>
                      <a
                        href="/danh-sach/phim-moi?page=366"
                        title="Trang cuối"
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border bg-white dark:bg-slate-700/10 border-gray-300 text-gray-700 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-900 text-sm font-medium"
                      >
                        <span class="sr-only">Trang Cuối</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="w-5 h-5 inline"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
