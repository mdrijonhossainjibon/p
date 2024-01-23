import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Frame2Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start w-full">
          <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-gray-900 flex flex-col items-center justify-start mt-1 pt-[26px] sm:px-5 px-[26px] w-full">
            <div className="flex flex-col justify-start max-w-[1200px] mx-auto md:px-5 w-full">
              <div className="flex flex-row gap-4 items-end justify-start w-[10%] md:w-full">
                <Img
                  className="h-5 mt-1.5 w-5"
                  src="images/img_frame.svg"
                  alt="frame"
                />
                <Text
                  className="mb-0.5 text-white-A700 text-xl"
                  size="txtRobotoRegular20"
                >
                  Withdraw
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-col justify-start mt-10 mx-auto p-6 sm:px-5 rounded-lg w-[94%] md:w-full">
                <Img
                  className="h-3 md:ml-[0] ml-[1056px] w-3"
                  src="images/img_close.svg"
                  alt="close"
                />
                <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] mr-[55px] my-[3px] w-[94%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                    <Button
                      className="cursor-pointer h-6 text-center text-sm w-6"
                      shape="square"
                      color="yellow_600"
                      size="xs"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Line className="bg-yellow-600 h-px md:mt-0 my-[11px] w-1/4" />
                    <Button
                      className="cursor-pointer h-6 text-center text-sm w-6"
                      shape="square"
                      color="yellow_600"
                      size="xs"
                      variant="fill"
                    >
                      2
                    </Button>
                    <Line className="bg-yellow-600 h-px md:mt-0 my-[11px] w-1/4" />
                    <Button
                      className="cursor-pointer h-6 text-center text-sm w-6"
                      shape="square"
                      color="yellow_600"
                      size="xs"
                      variant="fill"
                    >
                      3
                    </Button>
                    <Line className="bg-yellow-600 h-px md:mt-0 my-[11px] w-1/4" />
                    <Button
                      className="cursor-pointer h-6 text-center text-sm w-6"
                      shape="square"
                      color="yellow_600"
                      size="xs"
                      variant="fill"
                    >
                      4
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[17px] w-[93%] md:w-full">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtRobotoRegular14"
                    >
                      Initiate a withdrawal
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[139px] text-sm text-white-A700"
                      size="txtRobotoRegular14"
                    >
                      Get address
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[188px] text-sm text-white-A700"
                      size="txtRobotoRegular14"
                    >
                      Network confirmation
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[129px] text-sm text-white-A700"
                      size="txtRobotoRegular14"
                    >
                      Withdraw successful
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[9px] w-full">
                    <Text
                      className="sm:mt-0 mt-0.5 text-gray-500 text-xs"
                      size="txtRobotoRegular12"
                    >
                      Start a withdrawal request
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[17.00px] sm:ml-[0] ml-[124px] text-gray-500 text-xs w-[24%] sm:w-full"
                      size="txtRobotoRegular12"
                    >
                      Copy and paste the deposit address of the receiver
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[17.00px] ml-7 sm:ml-[0] text-gray-500 text-xs w-[24%] sm:w-full"
                      size="txtRobotoRegular12"
                    >
                      Wait for the blockchain network to confirm your transfer.
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[17.00px] sm:ml-[0] ml-[26px] text-gray-500 text-xs w-[21%] sm:w-full"
                      size="txtRobotoRegular12"
                    >
                      <>Deposit successfully sent to receiver&#39;s address</>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between ml-10 md:ml-[0] mt-[35px] w-[48%] md:w-full">
                <Text
                  className="mt-0.5 text-gray-500 text-sm"
                  size="txtRobotoRegular14Gray500"
                >
                  Coins
                </Text>
                <Text
                  className="mb-0.5 text-gray-500 text-sm"
                  size="txtRobotoRegular14Gray500"
                >
                  Chain name
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start ml-10 md:ml-[0] mt-[7px] w-[74%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5 w-[39%] md:w-full">
                  <Input
                    name="group1426"
                    placeholder="USDT"
                    className="p-0 placeholder:text-white-A700 text-left text-sm w-full"
                    wrapClassName="border border-gray-900_01 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-[5px] mb-px h-2.5 ml-[35px]"
                        src="images/img_frame_gray_500.svg"
                        alt="Frame"
                      />
                    }
                    shape="round"
                    color="gray_900_01"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row items-center justify-between mt-5 w-full">
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      Balances
                    </Text>
                    <Text
                      className="text-right text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      0.00 USDT
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-4 w-full">
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      Available
                    </Text>
                    <Text
                      className="text-right text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      -- USDT
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[17px] w-full">
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      Freeze
                    </Text>
                    <Text
                      className="text-right text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      0.00 USDT
                    </Text>
                  </div>
                  <Text
                    className="mt-[27px] text-[11px] text-white-A700"
                    size="txtRobotoRegular11"
                  >
                    Tips
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[11px] w-full">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtRobotoRegular12"
                    >
                      Withdrawable
                    </Text>
                    <Text
                      className="text-right text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      5000.00 USDT
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[11px] w-full">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtRobotoRegular12"
                    >
                      24h Withdrawal Limit
                    </Text>
                    <Text
                      className="text-right text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      5000.00/5000.00 USDT
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[11px] w-full">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtRobotoRegular12"
                    >
                      Min Limit
                    </Text>
                    <Text
                      className="text-right text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      36.00 USDT
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-3 w-full">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtRobotoRegular12"
                    >
                      Max Limit
                    </Text>
                    <Text
                      className="text-right text-white-A700 text-xs"
                      size="txtRobotoRegular12WhiteA700"
                    >
                      30000000.00 USDT
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-900_02 h-[336px] md:h-px md:mt-0 mt-[5px] md:w-full w-px" />
                <div className="flex flex-col items-start justify-start w-[44%] md:w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-[59%] md:w-full">
                    <Button
                      className="cursor-pointer min-w-[66px] rounded text-center text-sm"
                      shape="round"
                      color="yellow_600"
                      size="sm"
                      variant="fill"
                    >
                      ERC20
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[66px] rounded text-center text-sm"
                      shape="round"
                      color="gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      TRC20
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[66px] rounded text-center text-sm"
                      shape="round"
                      color="gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      BEP20
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[25px] w-full">
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Withdraw Address
                    </Text>
                    <Text
                      className="text-center text-sm text-yellow-600"
                      size="txtRobotoRegular14Yellow600"
                    >
                      Address List
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border border-gray-900_01 border-solid h-11 mt-[9px] rounded w-full"></div>
                  <Text
                    className="mt-[25px] text-gray-500 text-sm"
                    size="txtRobotoRegular14Gray500"
                  >
                    Amount
                  </Text>
                  <div className="bg-gray-900_01 border border-gray-900_01 border-solid flex flex-row items-start justify-center mt-[9px] p-[11px] rounded w-full">
                    <Text
                      className="mb-[3px] ml-[273px] text-sm text-white-A700"
                      size="txtRobotoRegular14"
                    >
                      USDT
                    </Text>
                    <Line className="bg-gray-900_02 h-4 ml-2 my-0.5 w-px" />
                    <Text
                      className="ml-[7px] my-0.5 text-center text-sm text-yellow-600"
                      size="txtRobotoRegular14Yellow600"
                    >
                      Max
                    </Text>
                  </div>
                  <Text
                    className="mt-2 text-gray-500 text-xs"
                    size="txtRobotoRegular12"
                  >
                    Fee : 30 USDT
                  </Text>
                  <div className="md:h-16 h-[19px] mt-[45px] relative w-full">
                    <div className="absolute bg-gray-800 h-[19px] inset-[0] justify-center m-auto rounded w-full"></div>
                    <Text
                      className="absolute inset-x-[0] mx-auto text-center text-gray-500 text-sm top-[0] w-max"
                      size="txtRobotoRegular14Gray500"
                    >
                      Withdraw
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 flex flex-col items-center justify-start mt-[50px] py-[18px] rounded-lg w-full">
                <div className="flex flex-col items-center justify-start mb-[31px] w-full">
                  <div className="flex flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                    <Text
                      className="mt-[3px] text-base text-white-A700"
                      size="txtRobotoRegular16WhiteA700"
                    >
                      Recent
                    </Text>
                    <Text
                      className="h-[17px] text-center text-sm text-yellow-600"
                      size="txtRobotoRegular14Yellow600"
                    >
                      All
                    </Text>
                  </div>
                  <div className="bg-yellow-600 h-1 mt-[13px] w-[2%]"></div>
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <Line className="bg-gray-900_02 h-px w-full" />
                    <div className="md:h-[445px] h-[447px] relative w-full">
                      <div className="absolute bg-gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[194px] md:px-10 sm:px-5 w-full">
                        <Text
                          className="mb-[42px] text-gray-500 text-xs"
                          size="txtRobotoRegular12"
                        >
                          No Data
                        </Text>
                      </div>
                      <Text
                        className="absolute left-[1%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Coin
                      </Text>
                      <Text
                        className="absolute left-[12%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Time
                      </Text>
                      <Text
                        className="absolute left-[22%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Amount
                      </Text>
                      <Text
                        className="absolute left-[29%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Fee
                      </Text>
                      <Text
                        className="absolute left-[36%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Withdraw Address
                      </Text>
                      <Text
                        className="absolute right-[47%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Notes
                      </Text>
                      <Text
                        className="absolute right-[35%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Processing Time
                      </Text>
                      <Text
                        className="absolute right-[21%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Blockchain Transaction ID
                      </Text>
                      <Text
                        className="absolute right-[15%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Status
                      </Text>
                      <Text
                        className="absolute right-[2%] text-gray-700 text-xs top-[0]"
                        size="txtRobotoRegular12Gray700"
                      >
                        Operation
                      </Text>
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

export default Frame2Page;
