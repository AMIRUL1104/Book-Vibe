import banner from "../../assets/pngwing 1.png";

function Banner() {
  return (
    <section className="max-w-360 mx-auto  flex max-lg:flex-col items-center justify-evenly max-sm:gap-7">
      {/* left side  */}
      <div className=" max-w-2xl flex flex-col gap-4 items-center lg:items-start ">
        <h1 className=" text-white  max-lg:text-center md:text-5xl xl:text-6xl text-4xl  font-extrabold  capitalize  ">
          <span>Books to freshen up</span> <br />
          <span className="sm:mt-5 inline-block bg-linear-to-r from-green-500 to-[#70fa14] bg-clip-text text-transparent ">
            your bookshelf
          </span>
        </h1>

        {/* action buttons */}
        <div className=" sm:mt-6 py-2 hover:scale-105 transition duration-150">
          <button className="btn btn-soft capitalize">view the list</button>
        </div>
      </div>
      {/* right side  */}

      <div className="hover-3d">
        {/* content */}
        <figure className="max-w-100 rounded-2xl ">
          <img src={banner} alt="3D card" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Banner;
