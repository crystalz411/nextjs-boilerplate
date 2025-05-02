import CarouselNav from "../components/CarouselNav";

export default function Page() {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center md:p-8">
    <div className=" max-w-7xl w-full mx-auto rounded-xl bg-[#111111] backdrop-blur-sm border border-black shadow-xl p-6 md:p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Question 1</h2>
          <div className="h-1 w-16 bg-purple-500 rounded-full"></div>
        </div>

        <section className="space-y-6 leading-relaxed text-gray-200">
          <p className="text-lg">Hi Christy,</p>

          <p className="text-gray-300">
            Thanks for reaching out! That's a great question. The difference between React and Next.js is key for
            hitting Core Web Vitals, SEO, and conversion goals.
          </p>

          <div className="my-8 p-5 border-l-4 border-purple-500 bg-gray-900/50 rounded-r-lg">
            <p className="text-xl font-medium text-purple-400">
              Think of React as premium car parts like the engine or the wheel. 
              <br/>
              Next.js is the whole car assembled, tuned, and ready to drive.

            </p>
          </div>

          <div className="mb-5">
          <p className="text-gray-300">
          <span className="font-extrabold">React</span> is like having all the essential car parts laid out in front of you, 
          the engine, the wheels, the doors, the dashboard. 
          Each part is powerful and well-built. On a website, 
          that translates to everything users see and interact with: text,
           images, buttons, and layout components. But just like car parts can't drive themselves, 
           React alone doesn’t give you a ready-to-go experience. You still need to assemble everything and decide how it all fits together.
          </p>
          </div>
          
          <div>
            <p>
            <span className="font-extrabold">Next.js</span> takes those parts and puts them together into a fully built, road-ready car.
             It includes the structure, the wiring, the performance tuning, everything you need to start driving right away. 
            For your website, that means built-in speed, SEO-friendly architecture, and tools that help your pages load fast, 
            get discovered on Google, and convert visitors into customers.
            </p>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-white text-lg mb-3">Why Next.js is great for marketing pages:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Faster load times:</strong>{" "}
                  <span className="text-gray-300">
                    {/* <span className="font-stretch-expanded">server-side rendering & code splitting</span><br/> */}
                    Pages show up instantly for users because Next.js loads just what’s needed and prepares pages ahead of time.</span>
                  </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Better SEO:</strong>{" "}
                  <span className="text-gray-300">
                  {/* <span className="font-stretch-expanded">pre-rendering and easy metadata control</span><br/> */}
                    Your content is ready for Google to index the moment the page loads, no extra setup required.</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Higher conversion potential:</strong>{" "}
                  <span className="text-gray-300">
                  {/* <span className="font-stretch-expanded">better UX & built-in form handling</span><br/> */}
                  A faster, smoother site keeps visitors engaged and improves things like sign-ups, purchases, or form completions.
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <p className="text-gray-300 mt-6">
            If helpful, here's a{" "}
            <a
              href="https://nextjs.org/learn/react-foundations"
              className="text-purple-400 font-medium hover:text-purple-300 underline decoration-2 decoration-purple-500/30 underline-offset-2 transition-colors"
            >
              deep dive with examples
            </a>{" "}
            explaining the technical bits and benefits in more detail.
            <br/>
            Let me know if you have any furthur questions!
          </p>

          <div className="pt-4 mt-6 border-t border-gray-700">
            <p className="text-gray-300">Best regards,</p>
            <p className="font-semibold text-white">Crystal</p>
          </div>
        </section>
      </div>
    </div>
    
  
  </div>
  <div className="w-full fixed bottom-0 flex justify-center">
      <CarouselNav current={1} />
    </div>
  </div>
  );
}