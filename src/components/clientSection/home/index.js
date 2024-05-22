"use client";
import { motion } from "framer-motion";
import { AnnimationWrapper } from "../annimationWrapper";
import { useMemo } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export default function ClientHomeSection({ homeData }) {
  console.log(homeData, "ClientHomeSection");
  const setVariants = useMemo(() => variants, []);
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnnimationWrapper>
        <motion.div
          className={
            "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          }
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {homeData && homeData.length
                ? homeData[0]?.heading
                    .split(" ")
                    .map((items, index) => (
                      <span
                        className={`${
                          index === 2 || index == 3
                            ? "text-green-main"
                            : "text-[#000]"
                        }`}
                      >
                        {items}{" "}
                      </span>
                    ))
                : null}
            </h1>
            <p className="mt4 text-[#000]  mb-8 font-bold">
              {homeData && homeData.length ? homeData[0]?.summary : null}
            </p>
            <motion.div className="flex gap-3">
              <FaFacebookF
                color="rgba(13,186,96,1"
                className="w-[40px] h-[40] "
              />
              <FaLinkedinIn
                color="rgba(13,186,96,1"
                className="w-[40] h-[40] "
              />
              <FaGithub color="rgba(13,186,96,1" className="w-[40] h-[40] " />
              <FaInstagram
                color="rgba(13,186,96,1"
                className="w-[40] h-[40] "
              />
            </motion.div>
          </div>
        </motion.div>
      </AnnimationWrapper>
    </div>
  );
}
