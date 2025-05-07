import React from "react";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";
import { NavbarMainByAnima } from "./sections/NavbarMainByAnima";

export const Assignemnt = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbff] flex flex-row justify-center w-full">
      <div className="bg-[#fbfbff] w-full max-w-[1440px] relative">
        <div className="w-full">
          <FrameByAnima />
          <NavbarMainByAnima />
        </div>

        <FrameWrapperByAnima />
        <DivWrapperByAnima />
      </div>
    </div>
  );
};
