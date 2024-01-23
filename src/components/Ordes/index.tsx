import React from "react";

import { Text } from "components";

type OrdesProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Ordes: React.FC<OrdesProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex relative w-[24%]">
          <div className="bg-gray-900_04 h-5 my-auto w-[33%]"></div>
          <Text
            className="ml-[-10px] my-auto text-red-400 text-xs z-[1]"
            size="txtRobotoRegular12Red400"
          >
            0.00001248
          </Text>
        </div>
        <Text
          className="ml-[105px] mt-[3px] text-right text-white-A700 text-xs"
          size="txtRobotoRegular12WhiteA700"
        >
          1,048.89
        </Text>
        <Text
          className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
          size="txtRobotoRegular12WhiteA700"
        >
          0.01309014
        </Text>
      </div>
    </>
  );
};

Ordes.defaultProps = {};

export default Ordes;
