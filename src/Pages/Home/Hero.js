import React from "react";
import HeroBg from '../../img/Hero.png'

const Hero = () => {
  return (
    <div>
      <section  class={`bg-[HeroBg]`}>
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Learn Arabic 
              <strong class="font-extrabold text-red-700 sm:block">
                Islamic Shariah
              </strong>
            </h1>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-red-600 px-12 py-3 rounded-full text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
