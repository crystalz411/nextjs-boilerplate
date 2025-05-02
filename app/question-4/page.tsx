import CarouselNav from "../components/CarouselNav";


export default function Page () {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Question 4</h2>
          <p className="text-lg">What is your favorite thing to do outside of work?</p>
          <p className="text-md mt-4">My favorite thing to do outside of work is play board games.</p>
        </div>
  
        <CarouselNav current={4} />
      </div>
    )
}