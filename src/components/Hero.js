import { ChevronRightIcon } from "@heroicons/react/solid";
import { PlayIcon } from "@heroicons/react/outline";

function Hero() {
  return (
    <div className="lg:max-w-7xl mx-auto flex">
      <div className="w-full lg:w-1/2 flex flex-col mt-12 px-4 lg:px-0">
        <p className="text-sm font-semibold text-gray-400">Why choose us?</p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-2">
          Pay Less, Do More
        </h1>
        <p className="text-gray-500 my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          velit accusamus a voluptas quod, dolore asperiores debitis reiciendis
          qui soluta provident modi libero. Voluptas molestiae expedita fugiat
          accusantium perferendis qui.
        </p>
        <div className="flex items-center space-x-4 my-5">
          <button className="bg-gray-800 text-white px-3 py-1 rounded-full border border-white focus:outline-none focus:ring focus:ring-gray-500 flex items-center">
            Start Now
            <ChevronRightIcon className="h-6 -mr-1 ml-2" />
          </button>
          <button className="flex items-center text-gray-800 font-medium hover:underline">
            <PlayIcon className="h-6 mr-2" />
            Watch Video
          </button>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <div className="relative">
          <div className="absolute top-20 left-28 bg-purple-500 w-44 h-44 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-20 right-28 bg-yellow-500 w-44 h-44 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-24 left-56 bg-red-500 w-44 h-44 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="w-72 h-40 bg-white border rounded-xl z-10 absolute right-56 top-32 p-3">
            <div className="flex items-center justify-between text-sm font-medium">
              <h3>Credit Card</h3>
              <h3>Bank Name</h3>
            </div>
            <div className="w-10 h-8 my-3 bg-yellow-400 rounded-md" />
            <div className="flex items-center justify-between">
              <h3>1235</h3>
              <h3>4565</h3>
              <h3>7895</h3>
              <h3>1025</h3>
              <h3>XXXX</h3>
            </div>
            <h3 className="my-3">Name Surname</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
