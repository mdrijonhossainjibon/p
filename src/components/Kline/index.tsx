import React from "react";

import { Img, Line, Text } from "components";

type KlineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Kline: React.FC<KlineProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-[82%] md:w-full">
            <Text
              className="sm:mt-0 mt-1.5 text-gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              Line
            </Text>
            <Text
              className="sm:ml-[0] ml-[25px] sm:mt-0 mt-1.5 text-gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              15min
            </Text>
            <Text
              className="bg-gray-900_01 h-[22px] justify-center ml-4 sm:ml-[0] sm:mt-0 my-1 px-2 py-[3px] rounded-sm text-white-A700 text-xs w-[50px]"
              size="txtRobotoRegular12WhiteA700"
            >
              30min
            </Text>
            <Text
              className="ml-4 sm:ml-[0] sm:mt-0 mt-1.5 text-gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              60min
            </Text>
            <Text
              className="ml-6 sm:ml-[0] sm:mt-0 mt-1.5 text-gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              4h
            </Text>
            <Text
              className="ml-6 sm:ml-[0] sm:mt-0 mt-[7px] text-gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              1day
            </Text>
            <div className="h-[30px] ml-2.5 sm:ml-[0] relative w-[44%] sm:w-full">
              <div className="h-[30px] m-auto w-full">
                <div className="flex m-auto w-full">
                  <div className="flex flex-col items-center justify-start my-auto w-[39%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="bg-gray-900 flex flex-col items-end justify-start pl-[5px] py-[5px] w-[22%]">
                        <Img
                          className="h-3.5 my-[3px] w-3.5"
                          src="images/img_arrowleft_blue_gray_700.svg"
                          alt="arrowleft_Two"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-col items-end justify-end my-1 p-[5px] rounded-sm w-[28%]">
                        <Img
                          className="h-2.5 mt-0.5 w-2.5"
                          src="images/img_frame_gray_500.svg"
                          alt="frame_Three"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 flex flex-row items-start justify-between ml-[-71px] my-auto pr-[3px] py-[3px] w-[93%] z-[1]">
                    <div className="bg-gray-900_01 h-[23px] rounded-sm w-[45%]"></div>
                    <Text
                      className="mt-[5px] text-gray-500 text-right text-xs"
                      size="txtRobotoRegular12"
                    >
                      Depth
                    </Text>
                    <Img
                      className="h-3.5 mr-[13px] mt-[5px] w-3.5"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                  </div>
                </div>
                <Text
                  className="absolute left-[7%] text-gray-500 text-xs top-[20%]"
                  size="txtRobotoRegular12"
                >
                  1week
                </Text>
              </div>
              <Text
                className="absolute bottom-[20%] left-[13%] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                TradingView
              </Text>
            </div>
          </div>
          <Line className="bg-black-900 h-px w-full" />
        </div>
      </div>
    </>
  );
};

Kline.defaultProps = {};

export default Kline;
