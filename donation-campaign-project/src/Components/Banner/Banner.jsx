import React, { useState } from "react";

function Banner({ setCategoryName }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setCategoryName(searchInput);
    setSearchInput("");
  };

  return (
    <>
      <div
        className="min-h-[74vh] hero"
        style={{
          backgroundImage: "url('./Resources/overlay_img.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-[#ffffffed]"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl font-bold text-black md:text-3xl lg:text-5xl">
              I Grow By Helping People In Need
            </h1>
            <div>
              <div className="mb-3">
                <div className="relative flex flex-wrap items-stretch lg:w-[440px] mx-auto mb-4">
                  <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search here...."
                    aria-label="Search"
                    aria-describedby="button-addon1"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />

                  {/* Search button */}
                  <button
                    className="relative bg-[#FF444A] z-[2] flex items-center rounded-r  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
