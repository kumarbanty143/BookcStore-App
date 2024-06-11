import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen mt-16">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Welcome to ReadEase, your digital destination for accessing a wide
            range of books from various genres. At ReadEase, we believe that
            reading should be accessible to everyone, which is why we offer a
            collection of free books that can be accessed without any signup.
            Our platform aims to promote literacy and make reading a convenient
            and enjoyable experience for all.
          </p>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
            Once you sign up, you'll gain access to an even larger selection of
            books, curated to cater to different tastes and preferences. Whether
            you're into fiction, non-fiction, romance, mystery, or any other
            genre, we've got something for you. Our mission is to connect
            readers with engaging content and provide a seamless reading
            experience tailored to their interests.
          </p>
        </div>

        <div className="mt-20">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="max-w-sm mx-auto bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg mb-8 sm:mb-0">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Our Mission
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Our mission is to provide a platform where readers can access
                  a diverse range of books conveniently and free of charge. We
                  aim to foster a love for reading and promote literacy by
                  making engaging content accessible to everyone. Through our
                  curated collection and user-friendly interface, we strive to
                  create an enriching reading experience for all individuals,
                  regardless of their background or circumstances.
                </p>
              </div>
            </div>

            <div className="max-w-sm mx-auto bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Our Vision
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Our vision is to create a vibrant online community where
                  readers can explore, discover, and share their love for books.
                  We aspire to empower authors to showcase their work and
                  connect with their audience directly. By embracing innovation
                  and leveraging technology, we aim to revolutionize the way
                  people engage with literature, making the reading experience
                  more immersive, interactive, and inclusive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
