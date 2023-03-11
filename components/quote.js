/* eslint-disable @next/next/no-img-element */
const quote = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
              Landwind is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div
                data-aos="fade-right"
                data-aos-delay="30"
                data-aos-duration="800"
                className="pr-3 font-medium text-gray-900 dark:text-white"
              >
                Soheib Kiani
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="30"
                data-aos-duration="800"
                className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
              >
                Founder IO-Team
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default quote;
