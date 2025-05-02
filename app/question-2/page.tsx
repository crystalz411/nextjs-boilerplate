import CarouselNav from "../components/CarouselNav";

export default function Page() {
    return (
      <div>
      <div className="min-h-screen flex flex-col items-center justify-center md:p-8">
      <div className=" max-w-7xl w-full mx-auto rounded-xl bg-[#111111] backdrop-blur-sm border border-black shadow-xl p-6 md:p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Question 2</h2>
            <div className="h-1 w-16 bg-purple-500 rounded-full"></div>
          </div>
  
          <section className="space-y-6 leading-relaxed text-gray-200">
            <p className="text-lg">Hey Trevor,</p>

            <p className="text-gray-300">
            Sure i can give you a quick insight into what "Fluid Compute" is, and why it would be great for you!
            </p>

            <div className="my-6 p-5 border-l-4 border-purple-500 bg-gray-900/50 rounded-r-lg">
              <p className="text-lg text-gray-200">
              Fluid Compute just means you can mix Edge, Serverless, Static, and Client-side rendering in a single Next.js app.
              No need to wire things together manually. You focus on building features and Vercel handles where and how each part runs behind the scenes.

              </p>
              
            </div>

            <h2 className="text-2xl font-semibold pt-4 text-white flex items-center">
              <div className="h-5 w-1.5 bg-purple-500 rounded-full mr-3"></div>
              How's it different from plain Serverless?
            </h2>

            <ul className="space-y-3 pl-1">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Serverless is still part of it</strong>{" "}
                  <span className="text-gray-300">
                    — but now it's one of several compute options, not the only one.
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">No infra glue</strong>{" "}
                  <span className="text-gray-300">
                    — you don't need to set up API gateways, regions, or edge handlers yourself.
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Everything lives in your codebase</strong>{" "}
                  <span className="text-gray-300">— Next.js handles behavior; Vercel deploys it smartly.</span>
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold pt-4 text-white flex items-center">
              <div className="h-5 w-1.5 bg-purple-500 rounded-full mr-3"></div>
              Why it's useful for your GenAI feature
            </h2>

            <ol className="space-y-4 pl-1">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-3 mt-0.5 text-purple-300 text-sm font-medium">
                  1
                </span>
                <span className="text-gray-300">
                  You can kick off a fast response using an Edge Function, handle the heavy GenAI processing in a
                  Serverless Function, and stream or render the result however you want — SSR, CSR, whatever — all in
                  one app.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-3 mt-0.5 text-purple-300 text-sm font-medium">
                  2
                </span>
                <span className="text-gray-300">
                  No juggling cloud providers or spinning up extra infra — the deploy flow stays the same.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-3 mt-0.5 text-purple-300 text-sm font-medium">
                  3
                </span>
                <span className="text-gray-300">
                  It scales with you — edge functions run globally, serverless scales up as needed, and static content
                  is CDN-cached by default.
                </span>
              </li>
            </ol>

            <p className="text-gray-300 mt-6">
            If helpful, here's a great{" "}
            <a
              href="https://vercel.com/blog/introducing-fluid-compute"
              className="text-purple-400 font-medium hover:text-purple-300 underline decoration-2 decoration-purple-500/30 underline-offset-2 transition-colors"
            >
              blog on Fluid Compute
            </a>{" "}
            explaining the technical bits and benefits in more detail.
            <br/>
            Let me know if you have any furthur questions!
          </p>

            <div className="pt-4 mt-6 border-t border-gray-700">
              <p className="font-semibold text-white">Crystal</p>
            </div>
          </section>
        </div>
      </div>
      
    
    </div>
    <div className="w-full fixed bottom-0 flex justify-center">
        <CarouselNav current={2} />
      </div>
    </div>
    );
  }
  