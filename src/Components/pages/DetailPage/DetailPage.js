import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

Detail.propTypes = {};

function Detail(props) {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:8080" + location.pathname)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      });
  }, []);
  return (
    <div class="container mx-auto mt-2 px-8 py-2 w-full">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 space-y-2">
          <div class="bg-gray-100 dark:bg-slate-800 p-2 rounded-2xl md:flex flex-wrap">
            <div class="relative w-full h-full md:w-1/3 lg:w-1/6">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "136.9047619047619%",
                  }}
                ></span>
                <img
                  alt={movie.name + " - " + movie.origin_name}
                  sizes="(max-width: 480px) 335px, (max-width: 1000px) 252px, 252px"
                  // srcSet="/_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=136&amp;q=75 136w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=160&amp;q=75 160w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=169&amp;q=75 169w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=192&amp;q=75 192w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fimg.ophim.tv%2Fuploads%2Fmovies%2Fco-nang-cua-toi-thumb.jpg&amp;w=684&amp;q=75 684w"
                  src={movie.thumb_url}
                  decoding="async"
                  data-nimg="responsive"
                  class="w-full h-auto rounded-xl"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0",
                    height: "0",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
              <div class="absolute bottom-0 space-x-2 text-center w-full bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-80 py-2 m-0">
                <div class="cursor-pointer hover:bg-opacity-80 bg-violet-500 text-gray-50 dark:text-gray-50 inline-block px-1 py-1 rounded">
                  Xem Phim
                </div>
                <div class="cursor-pointer hover:bg-opacity-80 bg-red-500 text-gray-50 dark:text-gray-50 inline-block px-1 py-1 rounded">
                  Lấy Nguồn
                </div>
                <div class="cursor-pointer hover:bg-opacity-80 bg-blue-500 text-gray-50 dark:text-gray-50 inline-block px-1 py-1 rounded">
                  <a
                    target="_blank"
                    href={"https://ophim1.com/phim/" + movie.slug}
                    title="API Phim Cô Nàng Của Tôi"
                    rel="noopener noreferrer"
                  >
                    API
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-2/3 lg:w-5/6 pl-4 pt-0 mt-2 md:mt-0 text-sm md:text-base">
              <div class="text-center rounded-md">
                <h1 class="uppercase text-lg font-bold text-violet-500">
                  {movie.name}
                </h1>
                <h2 class="italic text-sky-500">{movie.origin_name}</h2>
              </div>
              <div class="overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th class="w-1/4">
                        <div class="sr-only">Class</div>
                      </th>
                      <th class="w-3/4">
                        <div class="sr-only">Properties</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="align-baseline">
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Trạng thái
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.status}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Số tập
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.episode_total}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Thời Lượng
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.time == "" ? "N/A" : movie.time}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Năm Phát Hành
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.year}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Chất Lượng
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.quality}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Ngôn Ngữ
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.lang}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Đạo Diễn
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.director?.map((prop) => {
                          return prop.name;
                        })}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Diễn Viên
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.actor?.map((prop) => {
                          return prop.actor.name + ", ";
                        })}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Thể Loại
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.category?.map((prop) => {
                          return prop.name;
                        })}
                      </td>
                    </tr>
                    <tr class="border-t border-slate-200 dark:border-slate-400/20">
                      <td
                        translate="no"
                        class="py-1 pr-2 leading-5 text-sky-500 whitespace-nowrap dark:text-sky-400"
                      >
                        Quốc Gia
                      </td>
                      <td
                        translate="no"
                        class="py-1 pl-2 leading-5 text-indigo-600 whitespace-normal dark:text-indigo-300"
                      >
                        {movie.country?.map((prop) => {
                          return prop.name;
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="sticky bottom-0 h-px -mt-px bg-slate-200 dark:bg-slate-400/20"></div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full p-2 space-y-2 mx-auto bg-gray-100 dark:bg-slate-800 rounded-2xl">
              <button
                class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sky-900 bg-sky-300 dark:text-sky-400 dark:bg-sky-900 rounded-lg hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
                id="headlessui-disclosure-button-undefined"
                type="button"
                aria-expanded="true"
              >
                <span>Nội dung phim</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="transform rotate-180 w-5 h-5 text-sky-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                class="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-200"
                id="headlessui-disclosure-panel-undefined"
              >
                <article>{movie.content}</article>
              </div>
              <div>
                <div class="mt-4">
                  <button
                    class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sky-900 bg-sky-300 dark:text-sky-400 dark:bg-sky-900 rounded-lg hover:bg-sky-200"
                    id="headlessui-disclosure-button-undefined"
                    type="button"
                    aria-expanded="true"
                  >
                    <span>Xem Phim</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="transform rotate-180 w-5 h-5 text-sky-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-200"
                    id="headlessui-disclosure-panel-undefined"
                  >
                    <div class="w-full px-2 sm:px-0">
                      <div>
                        <div class="py-2 uppercase font-bold">
                          Server:{" "}
                          <span class="text-violet-500">Vietsub #1</span>
                        </div>
                        <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-16 gap-2">
                          <a
                            target="_blank"
                            href={"nothing"}
                            title="Xem phim Cô Nàng Của Tôi Tập 2"
                            rel="noopener noreferrer"
                            class="text-center overflow-hidden overflow-ellipsis whitespace-nowrap px-5 py-1 rounded shadow-md bg-gray-400 text-gray-50 hover:bg-violet-500 dark:bg-slate-600 dark:hover:bg-violet-600"
                          >
                            2
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sky-900 bg-sky-300 dark:text-sky-400 dark:bg-sky-900 rounded-lg hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
                  id="headlessui-disclosure-button-undefined"
                  type="button"
                  aria-expanded="true"
                >
                  <span>Định dạng nguồn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="transform rotate-180 w-5 h-5 text-sky-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  class="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-200"
                  id="headlessui-disclosure-panel-undefined"
                >
                  <div class="">
                    <div class="lg:flex gap-x-2 mb-2">
                      <label class="">Định dạng hiển thị: </label>
                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          name="typeShow"
                          value="1"
                          checked=""
                        />
                        <label
                          class="form-check-label inline-block text-sky-500"
                          for="inlineRadio10"
                        >
                          TậpLink
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          name="typeShow"
                          value="2"
                        />
                        <label
                          class="form-check-label inline-block text-sky-500"
                          for="inlineRadio20"
                        >
                          TậpLink
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          name="typeShow"
                          value="3"
                        />
                        <label
                          class="form-check-label inline-block text-sky-500"
                          for="inlineRadio20"
                        >
                          Link
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          name="typeShow"
                          value="4"
                        />
                        <label
                          class="form-check-label inline-block text-sky-500"
                          for="inlineRadio20"
                        >
                          Tên FileLink
                        </label>
                      </div>
                    </div>
                    <div class="lg:flex gap-x-2 mb-2">
                      <label class="my-auto">Định dạng phân cách: </label>
                      <input
                        type="text"
                        value="|"
                        class="shadow appearance-none border border-gray-400 rounded py-2 px-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="Định dạng phân cách"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <button
                  class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sky-900 bg-sky-300 dark:text-sky-400 dark:bg-sky-900 rounded-lg hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
                  id="headlessui-disclosure-button-undefined"
                  type="button"
                  aria-expanded="true"
                >
                  <span>Nguồn Embed</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="transform rotate-180 w-5 h-5 text-sky-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  class="relative px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-200"
                  id="headlessui-disclosure-panel-undefined"
                >
                  <div class="w-full max-w-3xl px-2 sm:px-0">
                    <div
                      class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <button
                        class="p-2 text-sm leading-5 font-medium text-blue-700 dark:text-blue-500 rounded-lg text-blue-700 hover:bg-white/[0.12] hover:text-white"
                        id="headlessui-tabs-tab-undefined"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Vietsub #1
                      </button>
                    </div>
                    <div class="pt-2"></div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <button
                  class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sky-900 bg-sky-300 dark:text-sky-400 dark:bg-sky-900 rounded-lg hover:bg-sky-200"
                  id="headlessui-disclosure-button-undefined"
                  type="button"
                  aria-expanded="true"
                >
                  <span>Nguồn M3U8</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="transform rotate-180 w-5 h-5 text-sky-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  class="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-200"
                  id="headlessui-disclosure-panel-undefined"
                >
                  <div class="w-full max-w-3xl px-2 sm:px-0">
                    <div
                      class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <button
                        class="p-2 text-sm leading-5 font-medium text-blue-700 dark:text-blue-500 rounded-lg text-blue-700 hover:bg-white/[0.12] hover:text-white"
                        id="headlessui-tabs-tab-undefined"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Vietsub #1
                      </button>
                    </div>
                    <div class="pt-2"></div>
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

export default Detail;
