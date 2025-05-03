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
        <div className=" max-w-7xl w-full mx-auto rounded-xl bg-[#111111] backdrop-blur-sm border border-black shadow-xl p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Question 3
              </h2>
              <div className="h-1 w-16 bg-purple-500 rounded-full"></div>
            </div>

            <section className="space-y-6 leading-relaxed text-gray-200">
              <p className="text-lg">Hi Alex,</p>

              <p className="text-gray-300">
                I hope you and the team are doing well! I noticed, via our
                monitoring dashboard, that your Vercel usage and build activity
                for your marketing pages has dropped by about 50 percent quarter
                over quarter. I also heard Tanner has moved on from the team,
                wishing him all the best. With these changes, I’d love to catch
                up and see how we can help.
              </p>

              <p className="mt-5">
                With just one developer managing your marketing site, it’s
                completely understandable if priorities have shifted, especially
                with a small team. We want to ensure your $22K Vercel
                subscription is delivering top value!
              </p>

              <div className="mt-8">
                <p className="font-semibold text-white text-lg mb-3">
                  {" "}
                  We can support you with things like:{" "}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                    </span>
                    <span>
                      <span className="text-gray-300">
                        Fixing past build or proxy errors to keep everything
                        running smoothly
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                    </span>
                    <span>
                      <span className="text-gray-300">
                        Ensuring Cloudflare and Vercel are fully optimized
                        together
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                    </span>
                    <span>
                      <span className="text-gray-300">
                        Exploring ways to simplify workflows for you and your
                        team
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <p className="">
                Would you or your VP of Marketing be up for a quick 30-minute
                call next week to catch up and ensure your marketing pages are
                performing brilliantly with your Vercel subscription? <br />
                Just let me know which day / time suits you, and I’m happy to
                work around you. I’d love to connect soon to help set you up for
                success this quarter.
              </p>

              <p> Looking forward to hearing from you!</p>

              <div className="pt-4 mt-6 border-t border-gray-700">
                <p className="text-white">
                  Best regards, <br /> Crystal <br /> Digital Customer Success
                  Manager <br /> Vercel
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 flex justify-center">
        <CarouselNav current={3} />
      </div>
    </div>
  );
}
