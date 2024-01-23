import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const FrameTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start w-full">
          <Header1 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-black-900 flex flex-col items-center justify-start pt-[25px] w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1200px] mx-auto md:px-5 w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[11px] rounded-lg w-full">
                  <div className="flex flex-col gap-5 items-end justify-start mt-1.5 w-[97%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtRobotoRegular14"
                      >
                        GOLD/USDZ
                      </Text>
                      <Text
                        className="text-sm text-teal-A700"
                        size="txtRobotoRegular14TealA700"
                      >
                        +0.12%
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                      <div className="flex flex-row gap-[21px] items-end justify-start w-[95%] md:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtRobotoRegular22"
                        >
                          2,011.39000000
                        </Text>
                        <Text
                          className="mb-[3px] mt-[7px] text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          $2,010.4531
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          24H Vol 422,469.369500
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright_gray_700_01.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[11px] rounded-lg w-full">
                  <div className="flex flex-col gap-[18px] items-end justify-start mt-1.5 w-[97%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtRobotoRegular14"
                      >
                        OIL/USDZ
                      </Text>
                      <Text
                        className="text-sm text-teal-A700"
                        size="txtRobotoRegular14TealA700"
                      >
                        +1.22%
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-[17px] items-end justify-start w-[76%] md:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtRobotoRegular22"
                        >
                          78.19050000
                        </Text>
                        <Text
                          className="mb-0.5 mt-2 text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          $78.1541
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          24H Vol 4,096,437.09838
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright_gray_700_01.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[11px] rounded-lg w-full">
                  <div className="flex flex-col gap-5 items-end justify-start mt-1.5 w-[97%] md:w-full">
                    <div className="flex flex-row gap-[100px] items-center justify-end w-[89%] md:w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtRobotoRegular14"
                      >
                        AED/TOMAN
                      </Text>
                      <Text
                        className="text-sm text-teal-A700"
                        size="txtRobotoRegular14TealA700"
                      >
                        +0.65%
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                      <div className="flex flex-row gap-[21px] items-end justify-start w-[87%] md:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtRobotoRegular22"
                        >
                          14,758.0586749
                        </Text>
                        <Text
                          className="mb-[3px] mt-[7px] text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          $0.3302
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          24H Vol 5,302,327.82564
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright_gray_700_01.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[11px] rounded-lg w-full">
                  <div className="flex flex-col gap-[18px] items-end justify-start mt-1.5 w-[97%] md:w-full">
                    <div className="flex flex-row gap-[83px] items-center justify-end w-[89%] md:w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtRobotoRegular14"
                      >
                        ZEDXION/USDT
                      </Text>
                      <Text
                        className="text-sm text-teal-A700"
                        size="txtRobotoRegular14TealA700"
                      >
                        +0.77%
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-[13px] items-end justify-start w-[59%] md:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtRobotoRegular22"
                        >
                          0.180252
                        </Text>
                        <Text
                          className="mb-0.5 mt-2 text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          $0.1803
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          24H Vol 61,265,570.420
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright_gray_700_01.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-black-900 flex flex-col items-center justify-start pt-[5px] w-full">
                <div className="bg-gray-900 flex flex-col items-center justify-start p-[31px] sm:px-5 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1200px] mb-[58px] mx-auto md:px-5 w-full">
                    <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                        size="txtRobotoRegular36"
                      >
                        Markets
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[35px] w-full">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[109px] md:mt-0 my-1 rounded"
                          leftIcon={
                            <Img
                              className="h-3.5 mt-[3px] mr-1"
                              src="images/img_frame_1.svg"
                              alt="Frame"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="sm"
                          variant="fill"
                        >
                          <div className="text-left text-sm">Favorites</div>
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[62px] ml-3 md:ml-[0] md:mt-0 my-1 rounded text-center text-sm"
                          shape="round"
                          color="gray_900_05"
                          size="sm"
                          variant="fill"
                        >
                          Spot
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[80px] ml-3 md:ml-[0] md:mt-0 my-1 rounded text-center text-sm"
                          shape="round"
                          color="gray_900_01"
                          size="sm"
                          variant="fill"
                        >
                          Futures
                        </Button>
                        <div className="bg-gray-900_01 border border-gray-900_01 border-solid flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[609px] p-3 rounded-[20px] w-[26%] md:w-full">
                          <Img
                            className="h-4 md:ml-[0] ml-[5px] w-4"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[19px] w-[53%] md:w-full">
                        <Text
                          className="text-sm text-yellow-600"
                          size="txtRobotoRegular14Yellow600"
                        >
                          All Markets
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 ml-4 md:ml-[0] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="ml-4 md:ml-[0] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          ETF
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 md:ml-[0] ml-[13px] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="md:ml-[0] ml-[15px] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          USDT
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 ml-3.5 md:ml-[0] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="md:ml-[0] ml-[15px] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          USDZ
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 ml-3.5 md:ml-[0] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="ml-4 md:ml-[0] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          TOMAN
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 md:ml-[0] ml-[15px] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="md:ml-[0] ml-[15px] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          ZEDXIONC
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 md:ml-[0] ml-[17px] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="md:ml-[0] ml-[15px] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          BTC
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 ml-3.5 md:ml-[0] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="md:ml-[0] ml-[15px] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          ETH
                        </Text>
                        <div className="bg-gray-900_02 h-3.5 ml-3.5 md:ml-[0] md:mt-0 mt-1 w-[1%]"></div>
                        <Text
                          className="md:ml-[0] ml-[15px] text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          USDC
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="md:h-[5181px] sm:h-[671px] h-[987px] relative w-full">
                        <div className="absolute bg-gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto py-[3px] w-full">
                          <div className="flex flex-col justify-start mb-[22px] w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[58px] w-[61%] md:w-full">
                              <Img
                                className="h-2.5 w-2.5"
                                src="images/img_frame_gray_700.svg"
                                alt="frame"
                              />
                              <Img
                                className="h-2.5 md:ml-[0] ml-[189px] w-2.5"
                                src="images/img_frame_gray_700.svg"
                                alt="frame_One"
                              />
                              <Img
                                className="h-2.5 md:ml-[0] ml-[212px] w-2.5"
                                src="images/img_frame_gray_700.svg"
                                alt="frame_Two"
                              />
                              <Img
                                className="h-2.5 md:ml-[0] ml-[117px] w-2.5"
                                src="images/img_frame_gray_700.svg"
                                alt="frame_Three"
                              />
                              <Img
                                className="h-2.5 md:ml-[0] ml-[161px] w-2.5"
                                src="images/img_frame_gray_700.svg"
                                alt="frame_Four"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-4 md:ml-[0] mt-[34px] w-[98%] md:w-full">
                              <Img
                                className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                src="images/img_frame_1.svg"
                                alt="frame_Five"
                              />
                              <Text
                                className="ml-2 md:ml-[0] text-sm text-white-A700"
                                size="txtRobotoRegular14"
                              >
                                ZEDXION/USDT
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[62px] text-sm text-white-A700"
                                size="txtRobotoRegular14"
                              >
                                0.180252
                              </Text>
                              <Text
                                className="text-gray-500 text-sm"
                                size="txtRobotoRegular14Gray500"
                              >
                                /$0.1803
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[117px] text-sm text-teal-A700"
                                size="txtRobotoRegular14TealA700"
                              >
                                +0.77%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                size="txtRobotoRegular14"
                              >
                                0.181746
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[115px] text-sm text-white-A700"
                                size="txtRobotoRegular14"
                              >
                                0.177805
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[115px] text-sm text-white-A700"
                                size="txtRobotoRegular14"
                              >
                                $10.99M
                              </Text>
                              <Text
                                className="ml-48 md:ml-[0] text-center text-sm text-yellow-600"
                                size="txtRobotoRegular14Yellow600"
                              >
                                Trade
                              </Text>
                            </div>
                            <List
                              className="flex flex-col gap-[23px] items-center mt-[25px] pt-4 px-4 w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  ZEDXION/USDZ
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[62px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.180197
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$0.1801
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[119px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +0.73%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.180858
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[116px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.178106
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[115px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $11.19M
                                </Text>
                                <Text
                                  className="ml-48 md:ml-[0] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  SM-TJS/USDZ
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[72px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.09185008
                                </Text>
                                <Text
                                  className="ml-0.5 md:ml-[0] text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$0.0918
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[100px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +0.15%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.09185008
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[100px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.09124042
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[100px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $824.10K
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[187px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  GOLD/USDZ
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[84px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  2,011.39000000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[3px] text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$2,010.4531
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[47px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +0.12%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  2,029.00000000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  2,002.06452798
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $849.31M
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[185px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  AED/USDZ
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[93px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.27229393
                                </Text>
                                <Text
                                  className="ml-0.5 md:ml-[0] text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$0.2722
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[99px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +0.01%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.27229452
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[100px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.27225308
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[100px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $532.07K
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[187px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  AED/TOMAN
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[79px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  14,758.0586749
                                </Text>
                                <Text
                                  className="ml-1 md:ml-[0] text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$0.3302
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +0.65%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  14,838.1307206
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  14,524.9711164
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $1.74M
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[200px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  USDZ/TOMAN
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  54,199.0000000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[3px] text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$1.2126
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[72px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +0.65%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  54,497.0000000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  53,335.6515908
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $2.36M
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[200px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  EURO/TOMAN
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[70px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  56,694.4189502
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[3px] text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$1.2684
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.00%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[79px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  56,694.4189502
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  56,694.4189502
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[73px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $0.0000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[196px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  BZD/USDZ
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[93px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  23.53152864
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$23.5206
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[84px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +0.3%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[79px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  23.70761652
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[92px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  23.31455828
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[92px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $888.20K
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[187px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  RUB/USDZ
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[93px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.01145454
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$0.0114
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[99px] text-red-400 text-sm"
                                  size="txtRobotoRegular14Red400"
                                >
                                  -0.12%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[75px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.01166355
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[100px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.01131418
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[100px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $86.00K
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[195px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  ZEDXION/ZEDXIONC
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[30px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  1.000000
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$0.1250
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[117px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.00%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[79px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  1.000000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[116px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  1.000000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[116px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $1.0291
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[199px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  OIL/USDZ
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[99px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  78.19050000
                                </Text>
                                <Text
                                  className="ml-0.5 md:ml-[0] text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$78.1541
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[86px] text-sm text-teal-A700"
                                  size="txtRobotoRegular14TealA700"
                                >
                                  +1.22%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[71px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  78.40850000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[92px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  76.52500000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[92px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $318.34M
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[185px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  GDC/USDT
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[92px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.328115
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$0.3281
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[119px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.00%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[79px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.328115
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[115px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  0.328115
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[115px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $0.0000
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[196px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-[13px] text-white-A700"
                                  size="txtRobotoRegular13"
                                >
                                  SSV/USDT
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[99px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  33.04
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$33.0400
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[133px] text-red-400 text-sm"
                                  size="txtRobotoRegular14Red400"
                                >
                                  -5.86%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[75px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  36.48
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[139px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  33.01
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[141px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $4.24M
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[200px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                              <Line className="self-center h-px bg-gray-900_02 w-full" />
                              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-3.5 md:mt-0 mt-[3px] w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  GNS/USDT
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[92px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  5.244
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtRobotoRegular14Gray500"
                                >
                                  /$5.2440
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[141px] text-red-400 text-sm"
                                  size="txtRobotoRegular14Red400"
                                >
                                  -1.98%
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[75px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  5.390
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[139px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  5.242
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[139px] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  $682.08K
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[187px] text-center text-sm text-yellow-600"
                                  size="txtRobotoRegular14Yellow600"
                                >
                                  Trade
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                        <Text
                          className="absolute left-[1%] text-gray-700 text-xs top-[0]"
                          size="txtRobotoRegular12Gray700"
                        >
                          Market
                        </Text>
                        <Text
                          className="absolute left-[17%] text-gray-700 text-xs top-[0]"
                          size="txtRobotoRegular12Gray700"
                        >
                          Last Price
                        </Text>
                        <Text
                          className="absolute left-[36%] text-gray-700 text-xs top-[0]"
                          size="txtRobotoRegular12Gray700"
                        >
                          Change
                        </Text>
                        <Text
                          className="absolute left-[46%] text-gray-700 text-xs top-[0]"
                          size="txtRobotoRegular12Gray700"
                        >
                          24H High
                        </Text>
                        <Text
                          className="absolute right-[36%] text-gray-700 text-xs top-[0]"
                          size="txtRobotoRegular12Gray700"
                        >
                          24H Low
                        </Text>
                        <Text
                          className="absolute right-[19%] text-gray-700 text-xs top-[0]"
                          size="txtRobotoRegular12Gray700"
                        >
                          24H Volume
                        </Text>
                        <Text
                          className="absolute right-[1%] text-gray-700 text-xs top-[0]"
                          size="txtRobotoRegular12Gray700"
                        >
                          Action
                        </Text>
                      </div>
                      <Line className="bg-gray-900_02 h-px w-full" />
                      <div className="flex flex-row items-end justify-end md:ml-[0] ml-[914px] mt-[23px] w-[22%] md:w-full">
                        <Img
                          className="h-3 my-2 w-3"
                          src="images/img_arrowleft.svg"
                          alt="arrowleft"
                        />
                        <Button
                          className="!text-white-A700 cursor-pointer h-7 ml-3.5 rounded text-center text-sm w-7"
                          shape="round"
                          color="gray_900_01"
                          size="xs"
                          variant="fill"
                        >
                          1
                        </Button>
                        <Text
                          className="ml-[18px] my-[5px] text-center text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          2
                        </Text>
                        <Text
                          className="ml-7 my-[5px] text-center text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          3
                        </Text>
                        <Text
                          className="ml-7 my-[5px] text-center text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          4
                        </Text>
                        <Text
                          className="mb-[3px] ml-[27px] mt-[9px] text-center text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          ...
                        </Text>
                        <Text
                          className="ml-[23px] my-[5px] text-center text-gray-500 text-sm"
                          size="txtRobotoRegular14Gray500"
                        >
                          21
                        </Text>
                        <Img
                          className="h-3 ml-[22px] my-2 w-3"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-1 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default FrameTwoPage;
