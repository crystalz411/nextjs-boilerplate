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
                Question 5
              </h2>
              <div className="h-1 w-16 bg-purple-500 rounded-full"></div>
            </div>

            <section className="space-y-6 leading-relaxed text-gray-200">
              <h2 className="text-2xl font-semibold pt-4 text-white flex items-center">
                <div className="h-5 w-1.5 bg-purple-500 rounded-full mr-3"></div>
                Feedback on the Familiarization Exercise
              </h2>
              <p>
                I really really enjoyed the format of this exercise. I think i was 
                realistic, and gives a clear sense of what the Customer Success
                Manager role at Vercel might involve. The variety of scenarios
                really allows me to demonstrate both technical understanding and tailored
                communication.
              </p>

              <h2 className="text-xl font-semibold">What i think is great</h2>
              <ul className="list-disc list-inside space-y-2">
                <p>
                  📌 The combination of technical tasks and customer-facing
                  communication reflects the real-world responsibilities of a
                  CSM.
                </p>
                <p>
                  📌 The personas and job titles provided (like Christy - project manager, Trevor - full-stack senior
developer) helped me to tailor the tone and message to suit thier needs.
                </p>
                <p>
                  📌 The flexibility to use either the App Router or Pages
                  Router and the reduced focus on UI/UX design did help me with getting stuck in.
                  Although i cant help but to makes things look pretty 😊.
                </p>
              </ul>

              <h2 className="text-xl font-semibold">
                Suggestions for Improvement
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <div>
                  I think for the video task, providing an example or template
                  could help as a guide on what to do on this task. I took it as a presentation / demo style and hope that is ok.
                </div>
              </ul>

              <p>
                Overall, this was one of the most engaging and well-balanced
                take-home exercises I've completed in a long time! Thank you for the
                opportunity! It gave me insight into your culture and how you
                value communication, curiosity, and clarity.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 flex justify-center">
        <CarouselNav current={5} />
      </div>
    </div>
  );
}
