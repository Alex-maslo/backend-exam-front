import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full p-20">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
      <div className="flex justify-center items-center w-full p-20">
        <h1 className="text-4xl">
          Your free instance will spin down with inactivity, which can delay
          requests by 50 seconds or more.
        </h1>
      </div>
    </>
  );
};

export default LoadingSpinner;
