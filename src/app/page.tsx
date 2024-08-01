"use client";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Carousel from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section8 from "@/components/Section8";
import Section7 from "@/components/Section7";
import React from "react";
import { Section9 } from "@/components/Section9";
export default function Home() {
  return (
    <>
      <div className="" >
        <Section1/>
      </div>
      <div className="" >
        <Section2/>
      </div>
      <div>
        <Section3/>
      </div>
      <div className="">
        <Section4/>
      </div>
      <div className=" flex items-center justify-center bg-gray-100">
        <Carousel/>
      </div>
      {/* <div>
        <Section6/>
      </div> */}
      <div className="space-y-20" >
        <Section7/>
        <Section8/>
      </div>
      <div>
        <Section9/>
      </div>
      
    </>
  );
}
