import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4 px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex md:text-5xl gap-2 md:gap-20 justify-center items-center text-3xl">Buy Me A Chai <span><img src="/tea.gif" alt="" width={88} className="invertImg pointer-events-none select-none" /></span> </div>
        <p className="text-center md:text-left">A crowd funding platform for creators to fund their projects.</p>
        <p className="text-center md:text-left">  Showcase your projects and get funded by your fans and followers. Start Now!</p>
        <div >
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More!</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-34 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-25">Your Fans Can Buy You A Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-500 rounded-full p-1 pointer-events-none select-none" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Your fans want to help</p>
            <p className=" text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-500 rounded-full p-1 pointer-events-none select-none" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Your fans want to help</p>
            <p className=" text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-500 rounded-full p-1 pointer-events-none select-none" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Your fans want to help</p>
            <p className=" text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto pb-34 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-25">Learn More About Us</h2>


        <div className="w-[90%] max-w-4xl mx-auto aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/uSUG3UQsxuE?si=xTjg0Tg71rqQmLEu"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
