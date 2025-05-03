import Link from "next/link";
import CarouselNav from "../components/CarouselNav";

export default function Page() {
  return (
    <div>
      <Link
        href={`/`}
        className="flex items-center justify-center w-40 p-2 text-white bg-purple-500 rounded-3xl"
      >
        Home
      </Link>
      <div className="min-h-screen flex flex-col items-center justify-center md:p-8">
        <div className=" min-w-lvh mx-auto rounded-xl bg-[#111111] backdrop-blur-sm border border-black shadow-xl p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Question 4
              </h2>
              <div className="h-1 w-16 bg-purple-500 rounded-full"></div>
            </div>

            <section className="space-y-6 leading-relaxed text-gray-200">
            <h2 className="text-2xl font-semibold pt-4 text-white flex items-center">
              <div className="h-5 w-1.5 bg-purple-500 rounded-full mr-3"></div>
              Why Core Web Vitals Matter: Under Armour Audit
            </h2>

            {/* Video embedded */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded shadow-lg border border-gray-700">
                {/* <iframe
                  src="https://player.vimeo.com/video/1058238826?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title="Cognevo Investor Deck"
                  className="absolute top-0 left-0 w-full h-full"
                /> */}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 flex justify-center">
        <CarouselNav current={4} />
      </div>
    </div>
  );
}
