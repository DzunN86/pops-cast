import React from "react";

type Props = {};

const BgBlur = (props: Props) => {
  return (
    <div className="flex h-screen justify-center items-center bg-[#1F1E25]">
      <div className="h-[208px] w-[208px] bg-[#F7C904] rounded-full blur-[81.5px]" />
    </div>
  );
};

export default BgBlur;
