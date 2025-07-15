
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path></svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">PoliCheck</h2>
        </div>
        <div className="flex items-center gap-9">
          <Link href="/home" className="text-[#111418] text-sm font-medium leading-normal">Home</Link>
          <Link href="/about" className="text-[#111418] text-sm font-medium leading-normal">About</Link>
          <Link href="/analisis" className="text-[#111418] text-sm font-medium leading-normal">Analysis</Link>
          <Link href="/perfil" className="text-[#111418] text-sm font-medium leading-normal">Profile</Link>
          <Link href="/model_ia_analitical" className="text-[#111418] text-sm font-medium leading-normal">AI Model</Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div
              className="text-[#637588] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-lg border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637588] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              defaultValue=""
            />
          </div>
        </label>
        <div className="flex gap-2">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#197fe5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Analyze</span>
          </button>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#111418]" data-icon="User" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVjRH-PetQb0e4I3EdU1GHPYo3GCHE991i5HQ81EGDY3jO7w0kAZWTm6eUKmPKjZoA-SC5Fi1otwrGs22WRdg3751ClktkDp6ypduY2_j9HWB624e4xgLQ4yl7WXypwJkGjbhht-h4bkMCFaftM_Q10woYpY95FiU1d6fQmg4JILEaZB7ivRHeimjP1qyNKG97dcLP_msACChUCXp5THfP_54s2whrveyk3qNYbjN_XRkph7XN4NJpFbwbUh4UTrZqgEN8wJRPRuzs")'}}
        ></div>
      </div>
    </header>
  );
};

export default Header;
