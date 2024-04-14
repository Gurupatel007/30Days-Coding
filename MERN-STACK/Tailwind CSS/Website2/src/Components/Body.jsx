import React from "react";

const Body = () => {
    return (
        <div className=" space-y-4 lg:flex">
            <div className="flex items-center justify-center md:mb-20 lg:flex-1 lg:order-2 lg:justify-end">
                <img
                    src="./assets/blueshape.svg"
                    alt="1st"
                    className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px] "
                />
                <img
                    src="./assets/pinkshape.svg"
                    alt="1st"
                    className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
                />
                <img
                    src="./assets/purpleshape.svg"
                    alt="1st"
                    className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
                />
                <img
                    src="./assets/heroModel.png"
                    alt="1st"
                    className="absolute h-64 md:h-72 lg:h-[400px]"
                />
            </div>
            <div className="lg:flex-1 lg:order-1">
                <h1 className="text-5xl font-bold font-playfair leading-tight md:text-6xl ">
                    Host your website in less than 5 minutes
                </h1>
                <p className="font-lato text-gray-400 mt-2 md:text-xl md:mt-3 ">
                    With Hoster , get your website up and running in no less than 5
                    minutes with the most competitive pricing packages available online.
                </p>
                <form
                    action=""
                    className="flex flex-col gap-4 mt-4 md:flex-row md:m-4 "
                >
                    <input
                        className="rounded-md px-4 py-3 placeholder:text-gray-400 "
                        type="email"
                        placeholder="Enter email address"
                    />
                    <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white ">
                        Join Waitlist
                    </button>
                </form>
                <div className="flex gap-2 ">
                    <img src="./assets/checkmark.svg" alt="check" />
                    <p className="font-lato text-gray-400 ">
                        No spam ,ever . Unsubscribe anytime{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Body;
