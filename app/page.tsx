import Button from "@/components/Button";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, Medal, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen ">
        <div className="h-full w-full bg-secondary/40 absolute"/>
        <Image src="/home-bg.jpeg" alt="bg" width={2000} height={2000} className="h-screen w-full"/>
        <div className="w-full h-screen absolute top-[25%] left-0 font-semibold px-36 grid grid-cols-1 grid-rows-3 gap-4">
          <div className="col-span-1">
            <h1 className="text-white text-8xl max-w-3xl font-bold">Meeting Future Demand In A Sustainable Way</h1>
            <p className="text-gray-300 text-3xl font-normal py-7 max-w-4xl">We're doing our part in that regard with greener practices that don't harm the environment.</p>
            <Button className="">

              <span className="pr-4">- Discover more</span>
              <MoveRight size={20}/>
            </Button>
          </div>
          <div className="col-span-3 row-start-3">
             <Separator orientation="horizontal"/>
          <div className="flex items-center gap-56 text-xl font-semibold mt-auto  py-4">
            <a href="#" className="flex items-center gap-2">
                <span className="w-7 h-7 bg-primary rounded-full flex items-center justify-center"><ChevronRight size={20}/></span>
                <span className="text-white">CCUS Technology</span>
            </a>
            <a href="#" className="flex items-center gap-2">
                <span className="w-7 h-7 bg-primary rounded-full flex items-center justify-center"><ChevronRight size={20}/></span>
                <span className="text-white">Sustainability</span>
            </a>
            <a href="#" className="flex items-center gap-2">
                <span className="w-7 h-7 bg-primary rounded-full flex items-center justify-center"><ChevronRight size={20}/></span>
                <span className="text-white">Energy Transition</span>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="px-34 py-18">
        <div className="flex gap-36 items-center">
          <span>
            <h1 className="font-bold text-3xl">Trusted by 30,000 world-class <br /> brands and organizations of all sizes</h1>
            <div className="h-1 w-30 bg-primary my-3"/>
          </span>
          <div>
            <Image src="/partners.png" width={800} height={400} alt="patners logo"/>
          </div>
        </div>
        <div className="w-full py-20 flex">
          <div className="bg-gray-100  px-10 py-10 w-1/2">
            <h1 className="font-bold capitalize pb-2">Who we are</h1>
            <h1 className="font-bold text-5xl max-w-xl capitalize pb-6">Providing affordable and reliable energy</h1>
            <p className="text-2xl text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus. luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex gap-5 py-10">
              <div className="bg-white w-46 h-38 shadow px-5 py-4 ">
                <div className="bg-primary h-16 w-16 flex justify-center items-center mb-2 "><Medal size={42}/></div>
                <span className=" text-lg font-semibold ">We're No.1 Oil & <br /> Gas Company</span>
              </div>
              <div className="flex flex-col justify-between">
                <span className="flex gap-1 items-center"><Check size={20} className="text-green-500"/>Clean energy for a bright future</span>
                <span className="flex gap-1 items-center"><Check size={20} className="text-green-500"/>Sustainable development</span>
                <span className="flex gap-1 items-center"><Check size={20} className="text-green-500"/>Improving access to energy</span>
                <Button className="mt-2">Read More</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 -ml-12 w-1/2 relative">
            <div className="absolute right-0 bg-primary h-24 w-24 flex items-center justify-center border-l-10 border-b-10 border-white">
              <svg width="28px" height="28px" viewBox="-0.5 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#1001]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-427.000000, -3765.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="play-[#1001]" points="371 3605 371 3613 378 3609"> </polygon> </g> </g> </g> </g></svg>
            </div>
            <Image src="/img1.jpeg" alt="" width={700} height={700} className="w-full"/>
          </div>
        </div>
       
      </div>

    </div>
  );
}
