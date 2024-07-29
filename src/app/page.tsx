"use client";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Carousel from "@/components/Section5";
import Section6 from "@/components/Section6";
import React from "react";
export default function Home() {
  return (
    <>
      <div className="" >
        <Section1/>
      </div>
      <div className="mt-[-50px]" >
        <Section2/>
      </div>
      <div>
        <Section3/>
      </div>
      <div className="mt-[-50px]">
        <Section4/>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Carousel/>
      </div>
      {/* <div>
        <Section6/>
      </div> */}
    </>
  );
}
