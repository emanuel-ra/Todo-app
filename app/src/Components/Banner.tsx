function Banner() {
  return (
    <div
      className={`w-full h-[200px] md:h-[300px] 
          transition delay-300 ease-in-out
          bg-mobile-light dark:bg-mobile-dark bg-no-repeat md:bg-desktop-light dark:md:bg-desktop-dark
          flex justify-center items-center  
          animate-fade-down animate-once animate-duration-1000 animate-ease-in-out
        `}
    ></div>
  );
}

export default Banner;
