import Image from 'next/image';
import React from 'react';
import { PODCASTS } from '../constants';
import BgBlur from './BgBlur';

type Props = {};

const Hero = (props: Props) => {
  return (
      <div className="bg-secondary font-josefin">
        <div className="mx-auto flex w-full flex-col items-center justify-between px-6 py-[12px] md:flex-row md:px-[50px] lg:max-w-[1440px]">
          <div className="relative flex w-full flex-col py-14 md:w-1/2">
            <img
              src="/assets/icons/blink-1.svg"
              className="absolute right-0 top-0 w-[50px]"
              alt=""
            />
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[90px] font-semibold leading-[100px] tracking-tighter text-white">
                Start Listen Your Favorite Podcast
              </h1>
              <p className="text-[18px] tracking-tight text-[#B3B3B3]">
                Popscast is an easy and powerful way to create, promote and
                monetize your podcast. Everything you need for a successful
                podcast.
              </p>
              <button className="flex w-[160px] items-center justify-center gap-[8px] rounded-full bg-primary py-[14px] transition duration-500 ease-in-out hover:shadow-s1">
                <p className="text-[16px] font-medium text-secondary">
                  Listen Now
                </p>
                <Image
                  src="/assets/icons/icon-play-dark.svg"
                  alt="arrow"
                  width={28}
                  height={28}
                />
              </button>
            </div>
            <div className="mt-[85px] flex items-center gap-[12px]">
              <div className="flex">
                <div className="my-[0px] -mx-[7px] flex-none flex-grow-0">
                  <Image
                    src="/assets/images/user-1.png"
                    alt="User"
                    width={54}
                    height={54}
                  />
                </div>
                <div className="order-1 my-[0px] -mx-[7px] flex-none flex-grow-0">
                  <Image
                    className="my-[0px] -mx-[7px]"
                    src="/assets/images/user-2.png"
                    alt="User"
                    width={54}
                    height={54}
                  />
                </div>
                <div className="order-2 my-[0px] -mx-[7px] flex-none flex-grow-0">
                  <Image
                    className="my-[0px] -mx-[7px]"
                    src="/assets/images/user-3.png"
                    alt="User"
                    width={54}
                    height={54}
                  />
                </div>
                <div className="z-10 order-3 flex-grow-0">
                  <div className="flex h-[54px] w-[54px] items-center pt-1 justify-center rounded-full border-[2px] border-[#1F1E25] bg-[#444653] text-[15px] text-white">
                    321k+
                  </div>
                </div>
              </div>
              <p className="text-[16px] text-[#B3B3B3]">
                More people listening PopCast~
              </p>
            </div>
          </div>
          <div className="relative flex w-full md:w-1/2">
            {/* <Image
              src="/assets/images/image-hero.png"
              alt="Hero"
              width={698}
              height={664.72}
            /> */}
            <img src="/assets/icons/icon-frame.svg" alt="" className='absolute top-[8%] w-[24px] right-[20%] ' />
            <div className="absolute left-16">
              <BgBlur />
            </div>
            <div className="absolute top-16 right-[22%] h-screen">
              <div className="relative h-[589px] w-[360px] bg-[#10B6D1]"></div>
            </div>
            <img
              src="/assets/images/image-hero.png"
              alt="Hero"
              className="relative w-[700px]"
            />
          </div>
        </div>
        <div className="mx-auto flex w-full flex-col px-6 md:flex-row md:px-[50px] lg:max-w-[1440px]">
          <div className="flex w-full flex-col gap-[24px] md:border-t-2 md:border-r-2 border-white/[6%] py-[34px] md:w-[40%]">
            <h3 className="text-[16px] font-semibold text-white">Support By</h3>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-[24px] opacity-50">
              <img src="/assets/images/support-tiktok.png" alt="" />
              <img src="/assets/images/support-youtube.png" alt="" />
              <img src="/assets/images/support-disney.png" alt="" />
              <img src="/assets/images/support-netflix.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center md:border-t-2 border-white/[6%] md:pl-32">
            <div className="md:-mb-16 flex md:-translate-y-24 flex-col gap-[20px]">
              <h3 className="text-[24px] font-bold text-white">
                Top Podcast of The Week
              </h3>
              <div className="flex flex-col rounded-[24px] bg-[#444653] px-[24px] pt-[23px]">
                <div
                  id="scroll-podcast"
                  className="flex max-h-[164px] flex-col gap-[18px] overflow-auto pr-[45px]"
                >
                  {PODCASTS.map((item) => (
                    <div
                      className="w-4xl flex items-center justify-between"
                      key={item.id}
                    >
                      <div className="flex items-center gap-[17px]">
                        <h1 className="text-[32px] font-semibold text-white">
                          {item.id}
                        </h1>
                        <img src={item.image} alt={item.title} />
                        <div>
                          <h3 className="text-[16px] font-medium text-white">
                            {item.title}
                          </h3>
                          <p className="text-[16px] font-medium text-primary">
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <img src="/assets/icons/icon-play-light.svg" alt="" className='border-[2px] rounded-full border-white/20' />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
