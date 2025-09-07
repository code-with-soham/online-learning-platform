import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="m-2 h-48 rounded-lg flex flex-col justify-center items-center space-y-2 
                    bg-blue-200 text-gray-900 
                    dark:bg-blue-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold">
        Welcome to Online Learning Platform
      </h1>
      <h2 className="text-lg font-semibold">
        Learn · Create · Explore
      </h2>
    </div>
  );
};

export default WelcomeBanner;
