import test from "../../../assets/testimonial1.jpg";
import test2 from "../../../assets/testimonial_2.jpg";
import test3 from "../../../assets/testimonial_3.jpg";
import test4 from "../../../assets/testimonial_4.jpg";

export const Testimonials = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Student About CodeBook
      </h1>
      <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p className="my-4 font-light">
              "Perfect For Learning New Things In My Free Time"
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={test3} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>G Shiva Rama Krishnan</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                IAS Aspirant
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p className="my-4 font-light">
              "Very Easy To Explore New Courses . Would Definitely Recommened"
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={test4} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Vibhor Verma</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                B.Tech Student
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow
            </h3>
            <p className="my-4 font-light">
              "Perfect For Beginners . Very Convenient Order Tracking"
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={test2} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Vaaman Kohli</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Junior Analyst At EY
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Collaborating
            </h3>
            <p className="my-4 font-light">
              Good Website, Very Reliable for safe transactions
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={test} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Kunwar Dhruv Pratap Singh</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                CAT Aspirant
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
