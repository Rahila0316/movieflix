import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
  <main>
   <div className="relative h-screen">
   <img
    src="mf.jpg"
    className="absolute w-full h-full object-cover"
    alt="image"
   />
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>


       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-3xl md:text-6xl font-extrabold max-w-3xl leading-tight text-white">
          Unlimited movies, TV shows, and more
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-white">
          Starts at $8.99. Cancel anytime.
        </p>

        <p className="mt-6 text-sm md:text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-5 flex flex-col md:flex-row w-full max-w-2xl gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-3 text-white rounded-t md:rounded-l md:rounded-tr-none outline-none  shadow-[0_0_10px_rgba(0,0,0,0.6),0_2px_20px_rgba(0,0,0,0.8)]"
          />

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold rounded-b md:rounded-r md:rounded-bl-none mt-2 md:mt-0 hover:cursor-pointer">
            Get Started &gt;
          </button>
        </div>
      </div>

    </div>
    <div className="w-full bg-gradient-to-b from-black via-[#050816] to-black py-6 px-35">
      <h2 className="text-white text-2xl font-semibold tracking-wide">
        Trending Now
      </h2>
      <div className="mt-7 grid grid-cols-4">
        <div>
          <Image
          src={"/bo.jpg"}
          alt="image"
          height={500}
          width={200}
          className="w-45 h-70 object-cover rounded-xl"
          
          />
        </div>
        <div>
          <Image
          src={"/biker.jpg"}
          alt="image"
          height={500}
          width={200}
          className="w-45 h-70 object-cover rounded-xl"
          
          />
        </div>
        <div>
          <Image
          src={"/m3.jpg"}
          alt="image"
          height={500}
          width={200}
          className="w-45 h-70 object-cover rounded-xl"
          
          />
        </div>
        <div>
          <Image
          src={"/m4.jpg"}
          alt="image"
          height={500}
          width={200}
          className="w-45 h-70 object-cover rounded-xl"
          
          />
        </div>
      </div>
      <p className="text-white font-bold text-3xl mt-20">
        More Reasons to Join
      </p>
      
      


    </div>
  </main>
    
  );
}
