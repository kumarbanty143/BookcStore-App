import React from "react";

const Publish = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Publish Your Book Here!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            We'd love to publish your Book! Please fill out all the details
            below.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">
                title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Title of Your Book"
              />
            </div>
            <div>
              <label htmlFor="author" className="sr-only">
                author
              </label>
              <input
                id="author"
                name="author"
                type="text"
                autoComplete="author"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 mt-4 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Author Of Your Book"
              />
            </div>
            <div>
              <label htmlFor="image" className="sr-only">
                image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                autoComplete="image"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 mt-4 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter the Thubnail image link for your book"
              />
            </div>
            <div>
              <label htmlFor="bookLink" className="sr-only">
                bookLink
              </label>
              <input
                id="bookLink"
                name="bookLink"
                type="text"
                autoComplete="bookLink"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 mt-4 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter Link of your Book"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publish Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
