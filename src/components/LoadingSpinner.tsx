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
      <div className="flex justify-center items-center w-full p-50">
        <h2 className="text-4xl">
          ⚠️ Через використання безкоштовного сервера перший запит після
          тривалої бездіяльності може виконуватись із затримкою до 50 секунд.
          Дякуємо за розуміння!
        </h2>
      </div>
    </>
  );
};

export default LoadingSpinner;
