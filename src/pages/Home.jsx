// import Navbar from "../components/SlideTabs.jsx"
import cofe1 from "../assets/cofe1.svg";
import risol from "../assets/risol.jpeg";
import peoplecofee from "../assets/peoplecofee.png";
import cofe from "../assets/cofe.jpeg";
import home from "../assets/home.svg";
import convers from "../assets/convers.svg";
import food3 from "../assets/food3.jpeg";
import kue1 from "../assets/kue1.jpeg";
import drink1 from "../assets/drink1.jpeg";
import drink2 from "../assets/drink2.jpeg";
import drink3 from "../assets/drink3.jpeg";
import kue2 from "../assets/kue2.jpeg";
import cofe_friend from "../assets/cofe_friend.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Comments from "../components/Comments";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect';


function Home() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
  return (
    <div className="homePage pt-20 h-[2000px] bg-[#E4E0E1] scroll-smooth transition-all">
      <div className="mx-auto scroll-smooth">
        {/* Home */}
        <div
          id="home"
          className="hero grid grid-cols-2 items-center gap-20 pt-8 w-full pl-16 "
        >
          <div className="box" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="false" >
            {/* <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 opacity-75">
              Learning and Discussion{" "}
              <span className="font-bold text-[#AB886D] underline">Ngobar</span>{" "}
              is The Place
            </h1> */}
            <h1 className="lg:text-5xl/tight text-2xl font-medium mb-7 opacity-75">
  <Typewriter
    options={{
      strings: [
        'Learning and Discussion',
      ],
      autoStart: true,
      loop: true,
      delay: 75,
    }}
  />
   <span className="font-bold text-[#AB886D] underline">Ngobar</span>{" "}
   is The Place
</h1>

            <p className="text-base/8 mb-7 font-semibold opacity-90">
              Want to chat with friends? or do you want to study while drinking
              coffee? Here, let's go straight to{" "}
              <span className="text-[#AB886D] text-xl font-semibold">
                "Ngobar"
              </span>{" "}
              <br />
              just order from your seat
            </p>
          </div>
          <div className="box mix-blend-multiply z-0" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
            <LazyLoadImage src={home} alt="Cofe" />
          </div>
        </div>
        {/* Product */}
        <div id="product" data-aos="fade-down" data-aos-duration="1500" className="produk flex flex-col items-center mt-14 ">
          <div>
            <h1 className="font-bold text-[#6C4E31] text-3xl text-center font-poppins hover:underline underline-offset-4">
              Product
            </h1>
            <div className="mt-4 flex flex-col items-center">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="false" >
                <h2 className="font-semibold text-[#8D493A] text-center text-2xl">
                  Food
                </h2>
                <div className="grid grid-cols-4  gap-x-8 mt-2">
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                    <picture className="block overflow-hidden">

                    <LazyLoadImage
                      src={risol}
                      alt="Food Risol"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200"
                    />
                    </picture>
                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      Risoles
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      12K
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                    <picture className="block overflow-hidden">

                    <LazyLoadImage
                      src={kue1}
                      alt="Cromboloni"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200"
                    />
                    </picture>
                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      Cromboloni
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      18k
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                    <picture className="block overflow-hidden">

                    <LazyLoadImage
                      src={kue2}
                      alt="Balok Cake"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200 "
                    />
                    </picture>
                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      Balok Cake
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      20k
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                    <picture className="block overflow-hidden">
                    <LazyLoadImage
                      src={food3}
                      alt="Food Risol"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200"
                    />
                    </picture>
                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      French Fries
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      25k
                    </button>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="false">
                <h2 className="font-semibold my-4 text-[#8D493A] text-center text-2xl">
                  Drink
                </h2>
                <div className="grid grid-cols-4  gap-x-8 mt-2">
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                    <picture className="block overflow-hidden">

                    <LazyLoadImage
                      src={cofe}
                      alt="Cofee"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200"
                    />
                    </picture>
                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      Cofee
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      14K
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                  <picture className="block overflow-hidden">

                    <LazyLoadImage
                      src={drink1}
                      alt="Thai Tea"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200"
                    />
                  </picture>

                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      Thai Tea
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      12K
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                  <picture className="block overflow-hidden">

                    <LazyLoadImage
                      src={drink2}
                      alt="Es Tea"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200"
                    />
                  </picture>
                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      Es Tea
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      10K
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3 items-center p-3 bg-white rounded-lg">
                  <picture className="block overflow-hidden">

                    <LazyLoadImage
                      src={drink3}
                      alt="Mojito"
                      className="w-[200px] h-[200px] rounded-lg hover:scale-125 ease-in-out duration-200"
                    />
                  </picture>
                    <h3 className="font-semibold text-xl text-[#8D493A]">
                      Mojito
                    </h3>
                    <button className="py-3 px-9 rounded-md bg-[#74512D] text-white">
                      22K
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div id="about" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="grid grid-cols-2 items-center pl-12 mt-12">
          <div className="pl-16">
            <LazyLoadImage
              src={cofe_friend}
              alt="People Cafee"
              className="w-[400px] h-[400px] rounded-lg "
            />
          </div>
          <div className="flex flex-col pr-4">
            <h2 className="text-6xl font-bold text-[#8D493A]">"Ngobar"</h2>
            <p className="font-medium mt-6">
              Ngobar, short for "Ngopi Bareng," is a cafe designed for quality
              and comfort, offering a perfect spot for friends to hang out and
              unwind. <br /> <span className="mt-3">~ Owner ~</span>
            </p>
            <div className="flex flex-col my-2 w-14 gap-y-1">
              <h3 className="font-semibold">Since</h3>
              <p className="p-2 bg-[#74512D] text-white rounded-lg font-semibold">
                2022
              </p>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-x-3">
              <div className="flex flex-col items-center gap-y-1">
                <h3 className="font-semibold">Instagram</h3>
                <a
                  href="https://www.instagram.com/by_zull__"
                  className="p-2 pb-1 bg- rounded-lg text-2xl bg-[#74512D] text-white"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <h3 className="font-semibold">Whatsapp</h3>
                <a
                  href="https://wa.me/6285828983439"
                  className="p-2 pb-1 bg- rounded-lg text-2xl bg-[#74512D] text-white"
                >
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <h3 className="font-semibold">Tiktok</h3>
                <a
                  href="https://www.tiktok.com/@call_zull?_t=8qwDSOTFv9d&_r=1"
                  className="p-2 pb-1 bg- rounded-lg text-2xl bg-[#74512D] text-white"
                >
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false"
        
          className="mt-12 px-4 bg-[#E4E0E1] py-3 border-t-2 border-slate-300"
        >
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default Home;
