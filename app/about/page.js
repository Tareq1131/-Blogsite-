/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center w-full mb-8 md:w-1/3 md:mb-0 ">
              <div className="relative w-48 h-48 overflow-hidden rounded-full">
                <img
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full md:w-2/3 ">
              <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
                About Me
              </h1>
              <p className="mb-4 text-lg text-gray-600 dark:text-gray-50">
                Hello! I am Tareq, a passionate software developer and tech
                enthusiast. I created this blog to share my experiences, tips,
                and tutorials on various programming languages and technologies.
                I believe that learning should be a continuous journey, and I am
                here to help others on their path to mastering the art of
                coding.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-50">
                Whether you are just starting out or looking to sharpen your
                skills, you wll find a variety of resources and insights here.
                Let explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Tareq Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here is how Tareq
              navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <img
                  src="/3.jpg"
                  alt="Tareq as a beginner"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pl-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Tareq s coding journey began in high school when he stumbled
                  upon his first programming language— Python. What started as a
                  simple curiosity quickly turned into a passion, as Tareq spent
                  countless hours experimenting with code, building small
                  projects, and learning the fundamentals of software
                  development.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="md:w-1/3">
                <img
                  src="/2.jpg"
                  alt="Tareq learning new skills"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pr-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, Tareq s thirst for knowledge grew.
                  He began exploring more complex topics such as data
                  structures, algorithms, and web development. Enrolling in
                  online courses and attending coding boot-camps, Tareq quickly
                  expanded his skill set, taking on freelance projects to apply
                  his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <img
                  src="/1.jpg"
                  alt="Tareq working on a big project"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pl-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With several years of experience under his belt, Tareq began
                  tackling more significant challenges. From contributing to
                  open-source projects to developing his own applications, Tareq
                  continued to push his limits, always looking for opportunities
                  to learn and grow. His journey was not without its setbacks,
                  but each obstacle was a stepping stone to becoming the skilled
                  developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="md:w-1/3">
                <img
                  src="/4.jpg"
                  alt="Tareq mentoring others"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pr-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Giving Back
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Tareq is not only a proficient coder but also a mentor
                  to others. He regularly contributes to the programming
                  community by writing tutorials, giving talks, and helping new
                  coders find their footing in the world of software
                  development. For Tareq, coding is more than just a profession—
                  it is a lifelong journey of learning and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
