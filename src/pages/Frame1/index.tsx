import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";
import Kline from "components/Kline";
import Ordes from "components/Ordes";

const Frame1Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
            <div className="sm:h-[1597px] h-[1601px] md:h-[5085px] md:px-5 relative w-full">
              <div className="absolute sm:h-[1597px] h-[1598px] md:h-[5085px] inset-[0] justify-center m-auto w-full">
                <div className="absolute bg-black-900 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[636px] w-full">
                  <Header1 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                  <div className="bg-black-900 flex flex-col items-center justify-start py-1 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[74%] md:w-full">
                        <div className="bg-gray-900 flex flex-col items-center justify-start px-4 rounded-sm w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtRobotoRegular18"
                              >
                                ADA/BTC
                              </Text>
                              <Text
                                className="mt-[3px] text-gray-500 text-xs"
                                size="txtRobotoRegular12"
                              >
                                ADA
                              </Text>
                            </div>
                            <div className="bg-gray-900 flex md:flex-1 flex-col items-start justify-start ml-10 md:ml-[0] pr-0.5 py-0.5 w-[3%] md:w-full">
                              <Img
                                className="common-pointer h-[18px] my-5 w-[18px]"
                                src="images/img_arrowleft_blue_gray_700.svg"
                                alt="arrowleft"
                                onClick={() => navigate(-1)}
                              />
                            </div>
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[5px] w-[49%] md:w-full">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[97%] md:w-full">
                                <Text
                                  className="text-base text-red-400"
                                  size="txtRobotoRegular16"
                                >
                                  0.00001220
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[42px] sm:mt-0 mt-[3px] text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  24H Change
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[103px] sm:mt-0 mt-[3px] text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  24H High
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[55px] sm:mt-0 mt-0.5 text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  24H Low
                                </Text>
                              </div>
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  $0.5210
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[84px] text-red-400 text-xs"
                                  size="txtRobotoRegular12Red400"
                                >
                                  -1.69461624 -1.37%
                                </Text>
                                <Text
                                  className="ml-16 sm:ml-[0] text-white-A700 text-xs"
                                  size="txtRobotoRegular12WhiteA700"
                                >
                                  0.00001250
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[41px] text-white-A700 text-xs"
                                  size="txtRobotoRegular12WhiteA700"
                                >
                                  0.00001217
                                </Text>
                              </div>
                            </div>
                            <div className="md:h-[62px] h-[63px] md:ml-[0] ml-[21px] relative w-[9%] md:w-full">
                              <div className="absolute bg-gray-900 flex flex-col h-full inset-y-[0] items-start justify-start my-auto pr-0.5 py-0.5 right-[0] w-1/4">
                                <Img
                                  className="h-[18px] my-5 w-[18px]"
                                  src="images/img_arrowleft_blue_gray_700.svg"
                                  alt="arrowleft_One"
                                />
                              </div>
                              <Text
                                className="absolute left-[0] text-gray-500 text-xs top-[24%]"
                                size="txtRobotoRegular12"
                              >
                                24H Vol(ADA)
                              </Text>
                              <Text
                                className="absolute bottom-[24%] left-[0] text-white-A700 text-xs"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                2.37M
                              </Text>
                            </div>
                            <div className="flex md:ml-[0] ml-[15px] relative w-[12%] md:w-full">
                              <div className="h-8 md:h-[15px] my-auto w-[64%]">
                                <Img
                                  className="absolute bottom-1/4 h-3.5 left-[35%] w-3.5"
                                  src="images/img_frame_gray_500_14x14.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="absolute inset-x-[0] mx-auto text-gray-500 text-xs top-[0] w-max"
                                  size="txtRobotoRegular12"
                                >
                                  24H Vol(BTC)
                                </Text>
                                <Text
                                  className="absolute bottom-[0] inset-x-[0] mx-auto text-white-A700 text-xs w-max"
                                  size="txtRobotoRegular12WhiteA700"
                                >
                                  29.39423330
                                </Text>
                              </div>
                              <Text
                                className="ml-[-29.36px] my-auto text-gray-500 text-xs z-[1]"
                                size="txtRobotoRegular12"
                              >
                                Video tutorial
                              </Text>
                            </div>
                            <Img
                              className="h-3.5 ml-5 md:ml-[0]"
                              src="images/img_reply.svg"
                              alt="reply"
                            />
                            <Text
                              className="ml-1 md:ml-[0] text-gray-500 text-xs"
                              size="txtRobotoRegular12"
                            >
                              Guidance
                            </Text>
                            <Img
                              className="h-[18px] md:ml-[0] ml-[23px] w-[18px]"
                              src="images/img_frame_gray_500_18x18.svg"
                              alt="frame_One"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-1 w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[36%] md:w-full">
                            <div className="bg-gray-900 flex flex-col items-center justify-start p-[11px] rounded-sm w-full">
                              <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtRobotoRegular14"
                                  >
                                    Orderbook
                                  </Text>
                                  <Img
                                    className="h-3.5 mt-1 w-3.5"
                                    src="images/img_frame_14x14.svg"
                                    alt="frame_Two"
                                  />
                                </div>
                                <div className="flex flex-row items-center justify-start mt-2 w-full">
                                  <Img
                                    className="h-3.5 w-3.5"
                                    src="images/img_megaphone.svg"
                                    alt="megaphone"
                                  />
                                  <Img
                                    className="h-3.5 ml-2.5 w-3.5"
                                    src="images/img_megaphone_gray_500.svg"
                                    alt="megaphone_One"
                                  />
                                  <Img
                                    className="h-3.5 ml-2.5 w-3.5"
                                    src="images/img_megaphone_gray_500_14x14.svg"
                                    alt="megaphone_Two"
                                  />
                                  <Button
                                    className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[90px] ml-[172px]"
                                    rightIcon={
                                      <Img
                                        className="h-2.5 mt-[3px] mb-px ml-[7px]"
                                        src="images/img_frame_gray_500.svg"
                                        alt="Frame"
                                      />
                                    }
                                    shape="round"
                                    color="gray_900_01"
                                    size="xs"
                                    variant="fill"
                                  >
                                    <div className="!text-white-A700 text-left text-xs">
                                      0.00000001
                                    </div>
                                  </Button>
                                </div>
                                <div className="flex flex-row items-center justify-evenly mt-3 w-full">
                                  <Text
                                    className="border border-solid border-teal-A700 flex h-5 items-center justify-center rounded-sm text-center text-teal-A700 text-xs w-5"
                                    size="txtRobotoRegular12TealA700"
                                  >
                                    B
                                  </Text>
                                  <Text
                                    className="bg-gray-900_03 h-5 justify-center pl-1 sm:pr-5 pr-[35px] py-0.5 text-teal-A700 text-xs w-[147px]"
                                    size="txtRobotoRegular12TealA700"
                                  >
                                    51.93%
                                  </Text>
                                  <Text
                                    className="bg-gray-900_04 h-5 justify-end sm:pl-5 pl-[35px] pr-1 py-0.5 text-red-400 text-right text-xs w-[137px]"
                                    size="txtRobotoRegular12Red400"
                                  >
                                    48.07%
                                  </Text>
                                  <Text
                                    className="border border-red-400 border-solid flex h-5 items-center justify-center rounded-sm text-center text-red-400 text-xs w-5"
                                    size="txtRobotoRegular12Red400"
                                  >
                                    S
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-900 flex flex-col items-center justify-start py-0.5 w-full">
                              <div className="flex flex-col gap-[7px] items-center justify-start mb-0.5 w-full">
                                <div className="flex flex-row items-start justify-between w-[90%] md:w-full">
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    Price (BTC)
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-right text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    Amount (ADA)
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-right text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    Total
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
                                  <List
                                    className="flex flex-col gap-px w-[95%]"
                                    orientation="vertical"
                                  >
                                    <Ordes className="flex flex-row items-start justify-start my-0 w-full" />
                                    <Ordes className="flex flex-row items-start justify-start my-0 w-full" />
                                    <Ordes className="flex flex-row items-start justify-start my-0 w-full" />
                                    <Ordes className="flex flex-row items-start justify-start my-0 w-full" />
                                    <Ordes className="flex flex-row items-start justify-start my-0 w-full" />
                                    <div className="flex flex-row items-start justify-start my-0 w-full">
                                      <Text
                                        className="bg-gray-900_04 h-5 justify-center px-4 py-0.5 text-red-400 text-xs w-[98px]"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001237
                                      </Text>
                                      <Text
                                        className="ml-[86px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        9,909.87
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.12258509
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-start my-0 w-full">
                                      <Text
                                        className="bg-gray-900_04 h-5 justify-center pl-4 sm:pr-5 pr-[35px] py-0.5 text-red-400 text-xs w-[174px]"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001235
                                      </Text>
                                      <Text
                                        className="ml-1 mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        19,278.24
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.23808626
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-start my-0 w-full">
                                      <Text
                                        className="bg-gray-900_04 h-5 justify-center pl-4 sm:pr-5 pr-[35px] py-0.5 text-red-400 text-xs w-[169px]"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001234
                                      </Text>
                                      <Text
                                        className="ml-[9px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        18,644.52
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.23007337
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-between my-0 w-full">
                                      <Text
                                        className="bg-gray-900_04 h-5 justify-center pl-4 sm:pr-5 pr-[35px] py-0.5 text-red-400 text-xs w-[134px]"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001232
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        14,316.09
                                      </Text>
                                      <Text
                                        className="mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.17637422
                                      </Text>
                                    </div>
                                    <div className="h-5 my-0 relative w-full">
                                      <div className="absolute bg-gray-900_04 flex flex-row gap-[98px] h-full inset-[0] items-start justify-center m-auto w-full">
                                        <Text
                                          className="ml-3.5 text-red-400 text-xs"
                                          size="txtRobotoRegular12Red400"
                                        >
                                          0.00001230
                                        </Text>
                                        <Text
                                          className="text-right text-white-A700 text-xs"
                                          size="txtRobotoRegular12WhiteA700"
                                        >
                                          39,039.03
                                        </Text>
                                      </div>
                                      <Text
                                        className="absolute h-max inset-y-[0] my-auto right-[0] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.48018006
                                      </Text>
                                    </div>
                                    <Ordes className="flex flex-row items-start justify-start my-0 w-full" />
                                    <div className="flex flex-row items-center justify-between my-0 w-full">
                                      <div className="flex relative w-[69%]">
                                        <div className="bg-gray-900_04 flex flex-col items-start justify-start my-auto p-0.5">
                                          <Text
                                            className="md:ml-[0] ml-[13px] text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001228
                                          </Text>
                                        </div>
                                        <Text
                                          className="ml-[-0.56px] mt-auto text-right text-white-A700 text-xs z-[1]"
                                          size="txtRobotoRegular12WhiteA700"
                                        >
                                          19,838.76
                                        </Text>
                                      </div>
                                      <Text
                                        className="text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.24361997
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-between my-0 w-full">
                                      <div className="h-5 md:h-[19px] relative w-[69%]">
                                        <div className="absolute bg-gray-900_04 flex flex-col h-full inset-[0] items-start justify-center m-auto p-0.5">
                                          <Text
                                            className="md:ml-[0] ml-[13px] text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001227
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute bottom-[0] right-[0] text-right text-white-A700 text-xs"
                                          size="txtRobotoRegular12WhiteA700"
                                        >
                                          26,091.30
                                        </Text>
                                      </div>
                                      <Text
                                        className="text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.32014025
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[22px] items-center justify-between my-0 w-full">
                                      <div className="bg-gray-900_04 flex flex-row items-start justify-between w-3/4">
                                        <Text
                                          className="ml-3.5 text-red-400 text-xs"
                                          size="txtRobotoRegular12Red400"
                                        >
                                          0.00001225
                                        </Text>
                                        <Text
                                          className="mr-4 text-right text-white-A700 text-xs"
                                          size="txtRobotoRegular12WhiteA700"
                                        >
                                          28,555.95
                                        </Text>
                                      </div>
                                      <Text
                                        className="text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.34981038
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-between my-0 w-full">
                                      <div className="h-5 md:h-[19px] relative w-[69%]">
                                        <div className="absolute bg-gray-900_04 flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-0.5">
                                          <Text
                                            className="md:ml-[0] ml-[13px] text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001223
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute bottom-[0] right-[0] text-right text-white-A700 text-xs"
                                          size="txtRobotoRegular12WhiteA700"
                                        >
                                          25,086.09
                                        </Text>
                                      </div>
                                      <Text
                                        className="text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.30680288
                                      </Text>
                                    </div>
                                  </List>
                                  <Ordes className="flex flex-row items-start justify-start w-[95%] md:w-full" />
                                  <div className="bg-gray-900 flex flex-row gap-3 items-start justify-start p-2.5 w-full">
                                    <Text
                                      className="mb-[7px] ml-1 text-base text-white-A700"
                                      size="txtRobotoRegular16WhiteA700"
                                    >
                                      0.00001220
                                    </Text>
                                    <Text
                                      className="mt-0.5 text-gray-500 text-sm"
                                      size="txtRobotoRegular14Gray500"
                                    >
                                      ≈ $0.5210
                                    </Text>
                                  </div>
                                  <List
                                    className="flex flex-col gap-px items-center pt-[220px] w-full"
                                    orientation="vertical"
                                  >
                                    <div className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <div className="bg-gray-900_03 flex flex-col items-start justify-start p-0.5">
                                        <Text
                                          className="md:ml-[0] ml-[13px] text-teal-A700 text-xs"
                                          size="txtRobotoRegular12TealA700"
                                        >
                                          0.00001202
                                        </Text>
                                      </div>
                                      <Text
                                        className="ml-[51px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        13,428.12
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.16140600
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <Text
                                        className="bg-gray-900_03 h-5 justify-center pl-4 py-0.5 text-teal-A700 text-xs w-[82px]"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001204
                                      </Text>
                                      <Text
                                        className="ml-[102px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        7,864.17
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.09468460
                                      </Text>
                                    </div>
                                    <Ordes className="flex md:flex-1 flex-row items-start justify-start mr-[21px] my-0 w-[94%] md:w-full" />
                                    <div className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <div className="bg-gray-900_03 flex flex-col items-start justify-start p-0.5">
                                        <Text
                                          className="md:ml-[0] ml-[13px] text-teal-A700 text-xs"
                                          size="txtRobotoRegular12TealA700"
                                        >
                                          0.00001207
                                        </Text>
                                      </div>
                                      <Text
                                        className="ml-[3px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        19,433.22
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.23455896
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <Text
                                        className="bg-gray-900_03 h-5 justify-center pl-4 pr-1 py-0.5 text-teal-A700 text-xs w-[84px]"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001209
                                      </Text>
                                      <Text
                                        className="ml-[100px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        8,146.02
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.09848538
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <Text
                                        className="bg-gray-900_03 h-5 justify-center pl-4 sm:pr-5 pr-[35px] py-0.5 text-teal-A700 text-xs w-[175px]"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001210
                                      </Text>
                                      <Text
                                        className="ml-[3px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        19,399.23
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.23473068
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <Text
                                        className="bg-gray-900_03 h-5 justify-center pl-4 sm:pr-5 pr-[35px] py-0.5 text-teal-A700 text-xs w-[122px]"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001212
                                      </Text>
                                      <Text
                                        className="ml-14 mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        12,832.29
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.15552735
                                      </Text>
                                    </div>
                                    <div className="bg-gray-900_03 flex flex-1 flex-row items-start justify-start my-0 w-full">
                                      <Text
                                        className="ml-3.5 text-teal-A700 text-xs"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001214
                                      </Text>
                                      <Text
                                        className="ml-[97px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        43,937.25
                                      </Text>
                                      <Text
                                        className="ml-10 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.53339821
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <Text
                                        className="bg-gray-900_03 h-5 justify-center pl-4 sm:pr-5 pr-[35px] py-0.5 text-teal-A700 text-xs w-[125px]"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001215
                                      </Text>
                                      <Text
                                        className="ml-[53px] mt-[3px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        13,243.32
                                      </Text>
                                      <Text
                                        className="ml-10 mt-0.5 text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.16090633
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 flex-row gap-10 items-center justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <div className="flex relative w-[69%]">
                                        <div className="bg-gray-900_03 flex flex-col items-start justify-start my-auto p-0.5">
                                          <Text
                                            className="md:ml-[0] ml-[13px] text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001216
                                          </Text>
                                        </div>
                                        <Text
                                          className="ml-[-17.01px] mt-auto text-right text-white-A700 text-xs z-[1]"
                                          size="txtRobotoRegular12WhiteA700"
                                        >
                                          21,875.76
                                        </Text>
                                      </div>
                                      <Text
                                        className="text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.26600924
                                      </Text>
                                    </div>
                                    <div className="flex md:flex-1 flex-row gap-[29px] items-center justify-start mr-5 my-0 w-[95%] md:w-full">
                                      <div className="bg-gray-900_03 flex flex-row items-start justify-between w-[73%]">
                                        <Text
                                          className="ml-3.5 text-teal-A700 text-xs"
                                          size="txtRobotoRegular12TealA700"
                                        >
                                          0.00001217
                                        </Text>
                                        <Text
                                          className="mr-[9px] text-right text-white-A700 text-xs"
                                          size="txtRobotoRegular12WhiteA700"
                                        >
                                          27,681.96
                                        </Text>
                                      </div>
                                      <Text
                                        className="text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.33688945
                                      </Text>
                                    </div>
                                    <div className="bg-gray-900_03 flex md:flex-1 flex-row items-start justify-end mr-[5px] my-0 w-[99%] md:w-full">
                                      <Text
                                        className="text-teal-A700 text-xs"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001219
                                      </Text>
                                      <Text
                                        className="ml-[97px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        41,183.49
                                      </Text>
                                      <Text
                                        className="ml-10 mr-[13px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        0.50202674
                                      </Text>
                                    </div>
                                    <Ordes className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full" />
                                    <Ordes className="flex md:flex-1 flex-row items-center justify-start mr-5 my-0 w-[95%] md:w-full" />
                                    <Ordes className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full" />
                                    <Ordes className="flex md:flex-1 flex-row items-start justify-start mr-5 my-0 w-[95%] md:w-full" />
                                  </List>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[65%] md:w-full">
                            <Kline className="bg-gray-900 flex flex-col items-center justify-start pb-[429px] w-full" />
                            <div className="bg-gray-900 flex flex-col items-center justify-start mt-1 py-3.5 w-full">
                              <div className="flex flex-col items-start justify-start mb-2.5 w-full">
                                <div className="flex flex-col gap-2.5 items-center justify-start ml-4 md:ml-[0] w-[30px] md:w-full">
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtRobotoRegular14"
                                  >
                                    Spot
                                  </Text>
                                  <div className="bg-yellow-600 h-1 w-4/5"></div>
                                </div>
                                <Line className="bg-gray-900_02 h-px w-full" />
                                <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] mt-[15px] w-[96%] md:w-full">
                                  <div className="flex flex-row items-start justify-start w-[47%] md:w-full">
                                    <Text
                                      className="bg-gray-900_01 h-6 justify-center pb-[5px] px-4 rounded text-sm text-white-A700 w-16"
                                      size="txtRobotoRegular14"
                                    >
                                      Limit
                                    </Text>
                                    <Text
                                      className="ml-7 text-gray-500 text-sm"
                                      size="txtRobotoRegular14Gray500"
                                    >
                                      Market
                                    </Text>
                                    <Text
                                      className="ml-[46px] mt-0.5 text-gray-500 text-sm"
                                      size="txtRobotoRegular14Gray500"
                                    >
                                      Stop Limit
                                    </Text>
                                    <Img
                                      className="h-3 ml-[27px] mt-1.5 w-3"
                                      src="images/img_inbox.svg"
                                      alt="inbox"
                                    />
                                  </div>
                                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[18px] w-full">
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      Buy ADA
                                    </Text>
                                    <Img
                                      className="h-3.5 md:ml-[0] ml-[183px] w-3.5"
                                      src="images/img_frame_3.svg"
                                      alt="frame_Four"
                                    />
                                    <Text
                                      className="ml-2 md:ml-[0] text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      -- BTC
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[37px] text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      Sell ADA
                                    </Text>
                                    <Img
                                      className="h-3.5 md:ml-[0] ml-[181px] w-3.5"
                                      src="images/img_frame_3.svg"
                                      alt="frame_Five"
                                    />
                                    <Text
                                      className="ml-2 md:ml-[0] text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      -- ADA
                                    </Text>
                                  </div>
                                  <div className="sm:gap-5 gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[11px] w-full">
                                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-row items-start justify-between p-2 rounded w-full">
                                      <Text
                                        className="mb-[5px] ml-1 text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        Price
                                      </Text>
                                      <Text
                                        className="mb-[5px] mr-1 text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        BTC
                                      </Text>
                                    </div>
                                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-row items-start justify-between p-2 rounded w-full">
                                      <Text
                                        className="mb-[5px] ml-1 text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        Price
                                      </Text>
                                      <Text
                                        className="mb-[5px] mr-1 text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        BTC
                                      </Text>
                                    </div>
                                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-row items-start justify-between p-2 rounded w-full">
                                      <Text
                                        className="mb-[5px] ml-1 text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        Amount
                                      </Text>
                                      <Text
                                        className="mb-[5px] mr-[5px] text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        ADA
                                      </Text>
                                    </div>
                                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-row items-start justify-between p-2 rounded w-full">
                                      <Text
                                        className="mb-[5px] ml-1 text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        Amount
                                      </Text>
                                      <Text
                                        className="mb-[5px] mr-[5px] text-gray-500 text-sm"
                                        size="txtRobotoRegular14Gray500"
                                      >
                                        ADA
                                      </Text>
                                    </div>
                                  </div>
                                  <List
                                    className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 grid-cols-2 justify-center mt-4 w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="h-3.5 relative w-full">
                                      <Line className="absolute bg-gray-900_02 h-1 inset-[0] justify-center m-auto w-[97%]" />
                                      <div className="absolute bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 inset-y-[0] left-[0] my-auto rounded-[50%] w-2.5"></div>
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[52%]">
                                        <div className="bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 rounded-[50%] w-2.5"></div>
                                        <div className="bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 ml-[59px] rounded-[50%] w-2.5"></div>
                                        <div className="bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 ml-[58px] rounded-[50%] w-2.5"></div>
                                      </div>
                                      <div className="absolute bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 inset-y-[0] my-auto right-[0] rounded-[50%] w-2.5"></div>
                                      <div className="absolute bg-gray-900 border-2 border-gray-700 border-solid h-3.5 inset-y-[0] left-[0] my-auto w-3.5"></div>
                                    </div>
                                    <div className="h-3.5 relative w-full">
                                      <Line className="absolute bg-gray-900_02 h-1 inset-[0] justify-center m-auto w-[97%]" />
                                      <div className="absolute bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 inset-y-[0] left-[0] my-auto rounded-[50%] w-2.5"></div>
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[52%]">
                                        <div className="bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 rounded-[50%] w-2.5"></div>
                                        <div className="bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 ml-[59px] rounded-[50%] w-2.5"></div>
                                        <div className="bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 ml-[58px] rounded-[50%] w-2.5"></div>
                                      </div>
                                      <div className="absolute bg-gray-900_02 border-2 border-gray-900 border-solid h-2.5 inset-y-[0] my-auto right-[0] rounded-[50%] w-2.5"></div>
                                      <div className="absolute bg-gray-900 border-2 border-gray-700 border-solid h-3.5 inset-y-[0] left-[0] my-auto w-3.5"></div>
                                    </div>
                                  </List>
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3.5 w-[66%] md:w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Max Buy
                                    </Text>
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      -- ADA
                                    </Text>
                                    <Text
                                      className="sm:ml-[0] ml-[239px] text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Max Sell
                                    </Text>
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      -- BTC
                                    </Text>
                                  </div>
                                  <div className="flex sm:flex-col flex-row gap-8 items-center justify-between mt-[15px] w-full">
                                    <div className="bg-gray-900_01 flex sm:flex-1 flex-row items-center justify-center p-2.5 rounded-sm w-[48%] sm:w-full">
                                      <a
                                        href="javascript:"
                                        className="ml-[78px] text-center text-sm text-yellow-600"
                                      >
                                        <Text size="txtRobotoRegular14Yellow600">
                                          Log In
                                        </Text>
                                      </a>
                                      <Text
                                        className="ml-[3px] text-center text-sm text-white-A700"
                                        size="txtRobotoRegular14"
                                      >
                                        or
                                      </Text>
                                      <a
                                        href="javascript:"
                                        className="ml-[5px] mr-[78px] text-center text-sm text-yellow-600"
                                      >
                                        <Text size="txtRobotoRegular14Yellow600">
                                          Sign Up
                                        </Text>
                                      </a>
                                    </div>
                                    <div className="bg-gray-900_01 flex sm:flex-1 flex-row items-center justify-center p-2.5 rounded-sm w-[48%] sm:w-full">
                                      <a
                                        href="javascript:"
                                        className="ml-[78px] text-center text-sm text-yellow-600"
                                      >
                                        <Text size="txtRobotoRegular14Yellow600">
                                          Log In
                                        </Text>
                                      </a>
                                      <Text
                                        className="ml-[3px] text-center text-sm text-white-A700"
                                        size="txtRobotoRegular14"
                                      >
                                        or
                                      </Text>
                                      <a
                                        href="javascript:"
                                        className="ml-[5px] mr-[78px] text-center text-sm text-yellow-600"
                                      >
                                        <Text size="txtRobotoRegular14Yellow600">
                                          Sign Up
                                        </Text>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[27%] md:w-full">
                        <div className="bg-gray-900 flex flex-col items-center justify-start py-4 rounded-sm w-full">
                          <div className="flex flex-col gap-2 items-center justify-start mb-[22px] w-full">
                            <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                              <div className="bg-gray-900_01 border border-gray-900_01 border-solid flex flex-col items-start justify-start p-2 rounded-[16px] w-full">
                                <Img
                                  className="h-4 md:ml-[0] ml-[9px] w-4"
                                  src="images/img_search.svg"
                                  alt="search"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-between mt-[18px] w-[98%] md:w-full">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  Favorites
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  Margin
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  ETF
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  USDT
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  USDZ
                                </Text>
                                <Img
                                  className="h-3 mt-[3px] w-3"
                                  src="images/img_arrowright.svg"
                                  alt="arrowright"
                                />
                              </div>
                              <div className="flex flex-row items-start justify-start mt-[13px] w-full">
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  Markets
                                </Text>
                                <Img
                                  className="h-2.5 mt-[3px] w-2.5"
                                  src="images/img_frame_gray_700.svg"
                                  alt="frame_Six"
                                />
                                <Text
                                  className="ml-2 text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  24H Vol
                                </Text>
                                <Img
                                  className="h-2.5 mt-[3px] w-2.5"
                                  src="images/img_frame_gray_700.svg"
                                  alt="frame_Seven"
                                />
                                <Text
                                  className="ml-[81px] text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  Price
                                </Text>
                                <Img
                                  className="h-2.5 mt-[3px] w-2.5"
                                  src="images/img_frame_gray_700.svg"
                                  alt="frame_Eight"
                                />
                                <Text
                                  className="ml-9 text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  Change
                                </Text>
                                <Img
                                  className="h-2.5 mt-[3px] w-2.5"
                                  src="images/img_frame_gray_700.svg"
                                  alt="frame_Nine"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[7px] w-full">
                              <div className="flex flex-row items-center justify-start w-[94%] md:w-full">
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Ten"
                                />
                                <div className="flex flex-col items-start justify-start ml-2">
                                  <Text
                                    className="text-[11px] text-white-A700"
                                    size="txtRobotoRegular11"
                                  >
                                    ADA/BTC
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    2.37M ADA
                                  </Text>
                                </div>
                                <Text
                                  className="ml-[88px] text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  0.00001220
                                </Text>
                                <Text
                                  className="ml-[51px] text-red-400 text-xs"
                                  size="txtRobotoRegular12Red400"
                                >
                                  -1.37%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start w-[92%] md:w-full">
                              <div className="flex flex-col gap-8 items-center justify-start w-[5%]">
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Eleven"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Twelve"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Thirteen"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Fourteen"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Fifteen"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Sixteen"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Seventeen"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Eighteen"
                                />
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_frame_1.svg"
                                  alt="frame_Nineteen"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start ml-2">
                                <Text
                                  className="text-white-A700 text-xs"
                                  size="txtRobotoRegular12WhiteA700"
                                >
                                  BNB/BTC
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  30.26K BNB
                                </Text>
                                <Text
                                  className="mt-[15px] text-white-A700 text-xs"
                                  size="txtRobotoRegular12WhiteA700"
                                >
                                  DOGE/BTC
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  14.07M DOGE
                                </Text>
                                <Text
                                  className="mt-4 text-[11px] text-white-A700"
                                  size="txtRobotoRegular11"
                                >
                                  DOT/BTC
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  174.84K DOT
                                </Text>
                                <Text
                                  className="mt-4 text-[11px] text-white-A700"
                                  size="txtRobotoRegular11"
                                >
                                  ETC/BTC
                                </Text>
                                <Text
                                  className="mt-0.5 text-[11px] text-gray-500"
                                  size="txtRobotoRegular11Gray500"
                                >
                                  25.82K ETC
                                </Text>
                                <Text
                                  className="mt-[17px] text-[11px] text-white-A700"
                                  size="txtRobotoRegular11"
                                >
                                  LTC/BTC
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  25.80K LTC
                                </Text>
                                <Text
                                  className="mt-4 text-[11px] text-white-A700"
                                  size="txtRobotoRegular11"
                                >
                                  MATIC/BTC
                                </Text>
                                <Text
                                  className="mt-0.5 text-[11px] text-gray-500"
                                  size="txtRobotoRegular11Gray500"
                                >
                                  2.35M MATIC
                                </Text>
                                <Text
                                  className="mt-[17px] text-[11px] text-white-A700"
                                  size="txtRobotoRegular11"
                                >
                                  XRP/BTC
                                </Text>
                                <Text
                                  className="mt-0.5 text-[11px] text-gray-500"
                                  size="txtRobotoRegular11Gray500"
                                >
                                  10.44M XRP
                                </Text>
                                <Text
                                  className="mt-[17px] text-[11px] text-white-A700"
                                  size="txtRobotoRegular11"
                                >
                                  ETH/BTC
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  3.20K ETH
                                </Text>
                                <Text
                                  className="mt-4 text-[11px] text-white-A700"
                                  size="txtRobotoRegular11"
                                >
                                  TRX/BTC
                                </Text>
                                <Text
                                  className="text-gray-500 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  10.96M TRX
                                </Text>
                              </div>
                              <div className="flex flex-col gap-8 items-end justify-start ml-[59px] w-[52%]">
                                <div className="flex flex-row gap-[51px] items-center justify-end w-[83%] md:w-full">
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    0.007324
                                  </Text>
                                  <Text
                                    className="text-red-400 text-xs"
                                    size="txtRobotoRegular12Red400"
                                  >
                                    -0.28%
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[31px] items-start justify-start w-[92%] md:w-full">
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      0.00000188
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      0.00%
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[7px] w-[94%] md:w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      0.0001700
                                    </Text>
                                    <Text
                                      className="text-red-400 text-xs"
                                      size="txtRobotoRegular12Red400"
                                    >
                                      -1.62%
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[51px] items-center justify-end md:ml-[0] ml-[13px] w-[90%] md:w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      0.000598
                                    </Text>
                                    <Text
                                      className="text-red-400 text-xs"
                                      size="txtRobotoRegular12Red400"
                                    >
                                      -3.39%
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                                    <Text
                                      className="text-teal-A700 text-xs"
                                      size="txtRobotoRegular12TealA700"
                                    >
                                      0.00163194
                                    </Text>
                                    <Text
                                      className="text-[11px] text-teal-A700"
                                      size="txtRobotoRegular11TealA700"
                                    >
                                      +0.95%
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      0.00001902
                                    </Text>
                                    <Text
                                      className="text-red-400 text-xs"
                                      size="txtRobotoRegular12Red400"
                                    >
                                      -3.3%
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      0.00001324
                                    </Text>
                                    <Text
                                      className="text-red-400 text-xs"
                                      size="txtRobotoRegular12Red400"
                                    >
                                      -1.04%
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[51px] items-center justify-end ml-5 md:ml-[0] w-[85%] md:w-full">
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      0.05934
                                    </Text>
                                    <Text
                                      className="text-red-400 text-xs"
                                      size="txtRobotoRegular12Red400"
                                    >
                                      -0.71%
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between mr-[3px] w-[99%] md:w-full">
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    0.0000025640
                                  </Text>
                                  <Text
                                    className="text-[11px] text-teal-A700"
                                    size="txtRobotoRegular11TealA700"
                                  >
                                    +0.74%
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:h-[261px] h-[279px] mt-1 relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="bg-gray-900 flex flex-col items-start justify-start p-[11px] w-full">
                                <Text
                                  className="mb-1.5 ml-1 md:ml-[0] text-sm text-white-A700"
                                  size="txtRobotoRegular14"
                                >
                                  Market Trades
                                </Text>
                              </div>
                              <div className="bg-gray-900 flex flex-col gap-2 justify-start pl-1.5 w-full">
                                <Text
                                  className="ml-2.5 md:ml-[0] text-[11px] text-gray-500"
                                  size="txtRobotoRegular11Gray500"
                                >
                                  Price (BTC)
                                </Text>
                                <div className="flex flex-col relative w-full">
                                  <div className="bg-gray-900_02 flex flex-row items-center justify-start mx-auto p-0.5 w-full">
                                    <Text
                                      className="ml-[7px] text-teal-A700 text-xs"
                                      size="txtRobotoRegular12TealA700"
                                    >
                                      0.00001220
                                    </Text>
                                    <Text
                                      className="ml-[129px] text-[11px] text-right text-white-A700"
                                      size="txtRobotoRegular11"
                                    >
                                      0.77
                                    </Text>
                                    <Text
                                      className="ml-[57px] text-right text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      16:40:14
                                    </Text>
                                  </div>
                                  <div className="md:h-[191px] h-[211px] mb-auto ml-auto mt-[-20px] w-[2%] z-[1]">
                                    <Line className="bg-gray-900_02 h-[211px] m-auto rounded-sm w-1" />
                                    <Line className="absolute bg-blue_gray-900 h-[42px] inset-x-[0] mx-auto rounded-sm top-[0] w-1" />
                                  </div>
                                  <div className="flex flex-col items-center justify-start mb-[13px] mt-[-NaNpx] mx-auto w-[92%] z-[1]">
                                    <div className="flex flex-row items-start justify-start w-full">
                                      <Text
                                        className="text-red-400 text-xs"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[129px] text-[11px] text-right text-white-A700"
                                        size="txtRobotoRegular11"
                                      >
                                        0.87
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:40:04
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-red-400 text-xs"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[123px] text-[11px] text-right text-white-A700"
                                        size="txtRobotoRegular11"
                                      >
                                        96.95
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:39:54
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-teal-A700 text-xs"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001221
                                      </Text>
                                      <Text
                                        className="ml-[115px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        147.36
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:39:44
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-teal-A700 text-xs"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[114px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        453.11
                                      </Text>
                                      <Text
                                        className="ml-[59px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:39:33
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-teal-A700 text-xs"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[114px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        865.65
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:39:13
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-teal-A700 text-xs"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[114px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        540.48
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:38:43
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-red-400 text-xs"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[129px] text-[11px] text-right text-white-A700"
                                        size="txtRobotoRegular11"
                                      >
                                        1.04
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:38:23
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-red-400 text-xs"
                                        size="txtRobotoRegular12Red400"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[114px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        130.38
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:37:53
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-start mt-[5px] w-full">
                                      <Text
                                        className="text-teal-A700 text-xs"
                                        size="txtRobotoRegular12TealA700"
                                      >
                                        0.00001220
                                      </Text>
                                      <Text
                                        className="ml-[114px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        147.26
                                      </Text>
                                      <Text
                                        className="ml-[57px] text-right text-white-A700 text-xs"
                                        size="txtRobotoRegular12WhiteA700"
                                      >
                                        16:37:43
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-row items-start justify-between right-[6%] top-[16%] w-[51%]">
                            <Text
                              className="text-gray-500 text-right text-xs"
                              size="txtRobotoRegular12"
                            >
                              Volume (ADA)
                            </Text>
                            <Text
                              className="text-gray-500 text-right text-xs"
                              size="txtRobotoRegular12"
                            >
                              Date
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="absolute bg-gray-900 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
                  <div className="flex flex-col items-center justify-center mt-[7px] w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                        <div className="flex flex-col gap-2.5 justify-start md:mt-0 mt-[5px] w-[27%] md:w-full">
                          <ul className="flex flex-row items-start justify-between w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-sm text-white-A700"
                              >
                                <Text size="txtRobotoRegular14">
                                  Open Orders
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-sm"
                              >
                                <Text size="txtRobotoRegular14Gray500">
                                  Order History
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-sm"
                              >
                                <Text size="txtRobotoRegular14Gray500">
                                  Trade History
                                </Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-gray-500 text-sm"
                              >
                                <Text size="txtRobotoRegular14Gray500">
                                  Funds
                                </Text>
                              </a>
                            </li>
                          </ul>
                          <div className="bg-yellow-600 h-1 md:ml-[0] ml-[30px] mr-[303px] w-[7%]"></div>
                        </div>
                        <div className="flex flex-col items-center justify-start mb-0.5 md:ml-[0] ml-[649px]">
                          <Text
                            className="text-red-400 text-xs"
                            size="txtRobotoRegular12Red400"
                          >
                            0.00001221
                          </Text>
                          <Text
                            className="mt-[5px] text-teal-A700 text-xs"
                            size="txtRobotoRegular12TealA700"
                          >
                            0.00001220
                          </Text>
                        </div>
                        <div className="md:h-3.5 h-[33px] md:ml-[0] ml-[129px] relative w-[3%] md:w-full">
                          <Img
                            className="absolute h-3.5 right-[0] top-[21%] w-3.5"
                            src="images/img_frame_2.svg"
                            alt="frame_Twenty"
                          />
                          <Text
                            className="absolute left-[0] text-[11px] text-right text-white-A700 top-[0]"
                            size="txtRobotoRegular11"
                          >
                            0.94
                          </Text>
                          <Text
                            className="absolute bottom-[0] left-[0] text-[11px] text-right text-white-A700"
                            size="txtRobotoRegular11"
                          >
                            0.41
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start mb-0.5 ml-2 md:ml-[0] w-[7%] md:w-full">
                          <div className="h-5 md:h-[15px] relative w-full">
                            <Text
                              className="absolute right-[0] text-right text-white-A700 text-xs top-[0]"
                              size="txtRobotoRegular12WhiteA700"
                            >
                              16:37:02
                            </Text>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-500 text-xs w-max"
                              size="txtRobotoRegular12"
                            >
                              Hide Other Pairs
                            </Text>
                          </div>
                          <Text
                            className="text-right text-white-A700 text-xs"
                            size="txtRobotoRegular12WhiteA700"
                          >
                            16:36:12
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Line className="bg-gray-900_02 h-px w-full" />
                        <div className="h-[588px] relative w-full">
                          <Text
                            className="mb-[-0.23px] ml-auto mr-[276px] text-teal-A700 text-xs z-[1]"
                            size="txtRobotoRegular12TealA700"
                          >
                            0.00001220
                          </Text>
                          <Text
                            className="mb-[undefinedpx] ml-auto mr-[125px] text-[11px] text-right text-white-A700 z-[1]"
                            size="txtRobotoRegular11"
                          >
                            0.23
                          </Text>
                          <Text
                            className="mb-[-0.23px] ml-auto mr-[21px] text-right text-white-A700 text-xs z-[1]"
                            size="txtRobotoRegular12WhiteA700"
                          >
                            16:36:02
                          </Text>
                          <div className="bg-gray-900 flex flex-col items-end justify-start m-auto p-[5px] w-full">
                            <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-end mb-2 mr-[15px] w-[56%] md:w-full common-column-list">
                              <li>
                                <a
                                  href="javascript:"
                                  className="text-center text-sm text-yellow-600"
                                >
                                  <Text size="txtRobotoRegular14Yellow600">
                                    Log In
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="md:ml-[0] ml-[3px] text-center text-sm text-white-A700"
                                >
                                  <Text size="txtRobotoRegular14">or</Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="ml-1 md:ml-[0] text-center text-sm text-yellow-600"
                                >
                                  <Text size="txtRobotoRegular14Yellow600">
                                    Sign Up
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="ml-1.5 md:ml-[0] text-center text-sm text-white-A700"
                                >
                                  <Text size="txtRobotoRegular14">
                                    to operation
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
                                  <ul className="flex flex-col items-center justify-start md:ml-[0] ml-[246px] md:w-full common-column-list">
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001220
                                          </Text>
                                          <Text
                                            className="ml-[123px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            56.56
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:35:42
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001220
                                          </Text>
                                          <Text
                                            className="ml-[123px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            69.61
                                          </Text>
                                          <Text
                                            className="ml-[59px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:35:32
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001220
                                          </Text>
                                          <Text
                                            className="ml-[129px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.80
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:35:11
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[125px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            58.51
                                          </Text>
                                          <Text
                                            className="ml-[59px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:35:01
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-center justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001220
                                          </Text>
                                          <Text
                                            className="ml-[114px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            110.72
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:34:41
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001220
                                          </Text>
                                          <Text
                                            className="ml-[129px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            2.06
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:34:31
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[131px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.12
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:34:11
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[131px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.79
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:33:11
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[124px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            29.72
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:32:51
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[131px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            3.99
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:32:40
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[131px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            7.01
                                          </Text>
                                          <Text
                                            className="ml-[59px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:32:30
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[131px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.30
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:32:10
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-center justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[114px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            239.02
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:31:50
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[129px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.55
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:30:20
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[129px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.54
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:30:09
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-center justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[114px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            151.29
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:29:49
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[123px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            71.94
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:29:39
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-center justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[115px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            184.28
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:29:29
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[129px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.63
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:28:28
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[129px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            7.68
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:27:28
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001223
                                          </Text>
                                          <Text
                                            className="ml-[104px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            2,184.12
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:26:58
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-1">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001223
                                          </Text>
                                          <Text
                                            className="ml-[105px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            1,861.92
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:26:48
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-1">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[104px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            4,292.28
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:26:38
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-center justify-start mt-1">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[114px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            362.67
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:26:17
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-red-400 text-xs"
                                            size="txtRobotoRegular12Red400"
                                          >
                                            0.00001222
                                          </Text>
                                          <Text
                                            className="ml-[105px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            1,135.14
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:26:07
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-center justify-start mt-1">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[115px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            224.81
                                          </Text>
                                          <Text
                                            className="ml-[59px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:25:57
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-center justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[115px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            140.50
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:25:17
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:">
                                        <div className="flex flex-row items-start justify-start mt-[5px]">
                                          <Text
                                            className="text-teal-A700 text-xs"
                                            size="txtRobotoRegular12TealA700"
                                          >
                                            0.00001221
                                          </Text>
                                          <Text
                                            className="ml-[131px] text-[11px] text-right text-white-A700"
                                            size="txtRobotoRegular11"
                                          >
                                            0.99
                                          </Text>
                                          <Text
                                            className="ml-[57px] text-right text-white-A700 text-xs"
                                            size="txtRobotoRegular12WhiteA700"
                                          >
                                            16:25:07
                                          </Text>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
              <Text
                className="absolute right-[0] text-gray-500 text-xs top-[8%]"
                size="txtRobotoRegular12"
              >
                TOMAN
              </Text>
              <div className="absolute bottom-[40%] flex flex-row items-center justify-start right-[2%] w-[24%]">
                <Text
                  className="text-teal-A700 text-xs"
                  size="txtRobotoRegular12TealA700"
                >
                  0.00001220
                </Text>
                <Text
                  className="ml-[114px] text-right text-white-A700 text-xs"
                  size="txtRobotoRegular12WhiteA700"
                >
                  236.84
                </Text>
                <Text
                  className="ml-[57px] text-right text-white-A700 text-xs"
                  size="txtRobotoRegular12WhiteA700"
                >
                  16:37:22
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] right-[21%] text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="absolute bottom-[0] right-[9%] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                133.41
              </Text>
              <Text
                className="absolute bottom-[0] right-[2%] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:24:57
              </Text>
            </div>
            <div className="md:ml-[0] ml-[101px] md:mt-0 mt-32 overflow-x-auto w-[3%]">
              <div className="h-[22px] md:px-5 relative w-full">
                <div className="absolute h-[22px] inset-[0] justify-center m-auto w-full"></div>
                <div className="absolute bg-gray-900_01 h-[22px] inset-[0] justify-center m-auto rounded-sm w-full"></div>
                <Text
                  className="absolute inset-x-[0] mx-auto text-[11px] text-white-A700 top-[14%] w-max"
                  size="txtRobotoRegular11"
                >
                  BTC
                </Text>
              </div>
            </div>
            <Text
              className="ml-4 md:ml-[0] md:mt-0 mt-[131px] text-gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              ETH
            </Text>
            <Text
              className="ml-6 md:ml-[0] md:mt-0 mt-[131px] text-gray-500 text-xs"
              size="txtRobotoRegular12"
            >
              USDC
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[1022px] mr-[25px] mt-1 md:px-5 w-[24%] md:w-full">
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                165.27
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:24:47
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                294.72
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:24:16
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                550.14
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:24:06
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                614.59
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:23:56
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                24.88
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:23:26
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                2,352.72
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:22:56
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                2,176.67
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:22:46
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                3,057.73
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:22:15
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                19.38
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:21:55
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                20.72
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:21:45
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                21.44
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:21:35
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.22
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:21:25
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                1.00
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:21:15
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.76
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:21:05
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                127.02
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:20:44
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                192.80
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:20:24
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.19
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:20:14
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                167.81
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:19:54
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                107.04
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:19:44
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                5.96
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:19:34
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.74
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:19:14
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.08
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:19:03
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                424.94
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:18:53
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                492.45
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:18:43
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.29
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:18:03
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                123.01
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:17:43
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                133.78
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:17:33
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001221
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                150.64
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:15:52
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001221
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                78.69
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:15:32
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.96
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:14:52
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.32
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:14:11
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                125.58
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:14:01
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                18.97
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:13:51
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                16.97
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:13:21
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.18
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:13:11
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.84
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:12:31
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.88
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:12:21
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                745.68
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:11:40
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                587.33
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:10:40
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001219
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                463.99
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:10:20
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                96.82
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:09:40
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.33
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:09:29
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                60.00
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:07:59
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-[121px] text-[11px] text-right text-white-A700 w-[10%] sm:w-full"
                size="txtRobotoRegular11"
              >
                31.60
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:07:18
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.98
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:07:08
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                758.73
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:06:58
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                612.01
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:06:38
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                441.24
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:06:28
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="sm:flex-1 leading-[20.00px] ml-32 text-[11px] text-right text-white-A700 w-[8%] sm:w-full"
                size="txtRobotoRegular11"
              >
                0.12
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:06:08
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                3,160.31
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:05:38
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                2,117.10
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:05:28
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                2,055.74
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:05:18
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                5,580.94
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:05:07
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                568.74
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:04:57
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001219
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                510.41
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:04:47
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                1,006.24
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:04:37
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-teal-A700 text-xs"
                size="txtRobotoRegular12TealA700"
              >
                0.00001219
              </Text>
              <Text
                className="ml-[114px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                495.83
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:04:27
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <Text
                className="text-red-400 text-xs"
                size="txtRobotoRegular12Red400"
              >
                0.00001220
              </Text>
              <Text
                className="ml-[104px] text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                1,248.25
              </Text>
              <Text
                className="ml-14 text-right text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                16:04:17
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame1Page;
