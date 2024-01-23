import React from "react";

import { Button, Img, Input, Line, Text } from "components";

type DepoibodyProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "deposit"
  | "one"
  | "two"
  | "three"
  | "four"
  | "copyaddress"
  | "initiateawithdrone"
  | "networkconfirmaone"
  | "depositsuccessfone"
  | "choosethecryptoone"
  | "initiateawithdrthree"
  | "waitfortheblockone"
  | "afterthenetworkone"
  | "coins"
  | "chainname"
  | "balances"
  | "balancevalue"
  | "available"
  | "availablevalue"
  | "freeze"
  | "freezevalue"
  | "description"
  | "erctwenty"
  | "trctwenty"
  | "beptwenty"
  | "depositaddress"
  | "usdtdepositaddrone"
  | "recent"
  | "all"
  | "coin"
  | "time"
  | "amount"
  | "depositaddress1"
  | "processingtime"
  | "status"
  | "nodata"
  | "confirmationtimone"
  | "blockchaintransone"
> &
  Partial<{
    deposit: string;
    one: string;
    two: string;
    three: string;
    four: string;
    copyaddress: string;
    initiateawithdrone: string;
    networkconfirmaone: string;
    depositsuccessfone: string;
    choosethecryptoone: string;
    initiateawithdrthree: string;
    waitfortheblockone: string;
    afterthenetworkone: string;
    coins: string;
    chainname: string;
    balances: string;
    balancevalue: string;
    available: string;
    availablevalue: string;
    freeze: string;
    freezevalue: string;
    description: string;
    erctwenty: string;
    trctwenty: string;
    beptwenty: string;
    depositaddress: string;
    usdtdepositaddrone: string;
    recent: string;
    all: string;
    coin: string;
    time: string;
    amount: string;
    depositaddress1: string;
    processingtime: string;
    status: string;
    nodata: string;
    confirmationtimone: string;
    blockchaintransone: string;
  }>;

const Depoibody: React.FC<DepoibodyProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col justify-start w-[92%] md:w-full">
          <div className="flex flex-row gap-4 items-start justify-start w-[9%] md:w-full">
            <Img
              className="h-5 mt-1 w-5"
              src="images/img_frame.svg"
              alt="frame"
            />
            <Text className="text-white-A700 text-xl" size="txtRobotoRegular20">
              {props?.deposit}
            </Text>
          </div>
          <div className="bg-gray-900_01 flex flex-col justify-start mt-10 mx-auto p-6 sm:px-5 rounded-lg w-[94%] md:w-full">
            <Img
              className="h-3 md:ml-[0] ml-[1056px] w-3"
              src="images/img_close.svg"
              alt="close"
            />
            <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] mr-[46px] my-[3px] w-[95%] md:w-full">
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-[81%] md:w-full">
                <Button
                  className="cursor-pointer font-roboto h-6 text-center text-sm w-6"
                  shape="square"
                  color="yellow_600"
                  size="xs"
                  variant="fill"
                >
                  {props?.one}
                </Button>
                <Line className="bg-yellow-600 h-px md:mt-0 my-[11px] w-1/4" />
                <Button
                  className="cursor-pointer font-roboto h-6 text-center text-sm w-6"
                  shape="square"
                  color="yellow_600"
                  size="xs"
                  variant="fill"
                >
                  {props?.two}
                </Button>
                <Line className="bg-yellow-600 h-px md:mt-0 my-[11px] w-1/4" />
                <Button
                  className="cursor-pointer font-roboto h-6 text-center text-sm w-6"
                  shape="square"
                  color="yellow_600"
                  size="xs"
                  variant="fill"
                >
                  {props?.three}
                </Button>
                <Line className="bg-yellow-600 h-px md:mt-0 my-[11px] w-1/4" />
                <Button
                  className="cursor-pointer font-roboto h-6 text-center text-sm w-6"
                  shape="square"
                  color="yellow_600"
                  size="xs"
                  variant="fill"
                >
                  {props?.four}
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[17px] w-[91%] md:w-full">
                <Text
                  className="text-sm text-white-A700"
                  size="txtRobotoRegular14"
                >
                  {props?.copyaddress}
                </Text>
                <Text
                  className="md:ml-[0] ml-[178px] text-sm text-white-A700"
                  size="txtRobotoRegular14"
                >
                  {props?.initiateawithdrone}
                </Text>
                <Text
                  className="md:ml-[0] ml-[139px] text-sm text-white-A700"
                  size="txtRobotoRegular14"
                >
                  {props?.networkconfirmaone}
                </Text>
                <Text
                  className="md:ml-[0] ml-[129px] text-sm text-white-A700"
                  size="txtRobotoRegular14"
                >
                  {props?.depositsuccessfone}
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2 w-full">
                <Text
                  className="leading-[17.00px] text-gray-500 text-xs"
                  size="txtRobotoRegular12"
                >
                  {props?.choosethecryptoone}
                </Text>
                <Text
                  className="leading-[17.00px] text-gray-500 text-xs"
                  size="txtRobotoRegular12"
                >
                  {props?.initiateawithdrthree}
                </Text>
                <Text
                  className="leading-[17.00px] text-gray-500 text-xs"
                  size="txtRobotoRegular12"
                >
                  {props?.waitfortheblockone}
                </Text>
                <Text
                  className="leading-[17.00px] text-gray-500 text-xs"
                  size="txtRobotoRegular12"
                >
                  {props?.afterthenetworkone}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between ml-10 md:ml-[0] mt-[7px] w-[48%] md:w-full">
            <Text
              className="mt-0.5 text-gray-500 text-sm"
              size="txtRobotoRegular14Gray500"
            >
              {props?.coins}
            </Text>
            <Text
              className="mb-0.5 text-gray-500 text-sm"
              size="txtRobotoRegular14Gray500"
            >
              {props?.chainname}
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-10 md:ml-[0] mt-1 w-[94%] md:w-full">
            <div className="flex flex-col items-center justify-start md:mt-0 mt-1 w-[31%] md:w-full">
              <Input
                name="groupNine"
                placeholder="USDT"
                className="font-roboto p-0 placeholder:text-white-A700 text-left text-sm w-full"
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
                  {props?.balances}
                </Text>
                <Text
                  className="text-right text-white-A700 text-xs"
                  size="txtRobotoRegular12WhiteA700"
                >
                  {props?.balancevalue}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-4 w-full">
                <Text
                  className="text-white-A700 text-xs"
                  size="txtRobotoRegular12WhiteA700"
                >
                  {props?.available}
                </Text>
                <Text
                  className="text-right text-white-A700 text-xs"
                  size="txtRobotoRegular12WhiteA700"
                >
                  {props?.availablevalue}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-4 w-full">
                <Text
                  className="text-white-A700 text-xs"
                  size="txtRobotoRegular12WhiteA700"
                >
                  {props?.freeze}
                </Text>
                <Text
                  className="text-right text-white-A700 text-xs"
                  size="txtRobotoRegular12WhiteA700"
                >
                  {props?.freezevalue}
                </Text>
              </div>
              <div className="h-12 md:h-20 mt-8 relative w-[98%]">
                <Img
                  className="h-3 mt-[3px] w-3"
                  src="images/img_videocamera.svg"
                  alt="videocamera"
                />
                <Text
                  className="absolute h-full inset-[0] justify-center leading-[16.00px] m-auto text-xs text-yellow-800 w-full"
                  size="txtRobotoRegular12Yellow800"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
            <Line className="bg-gray-900_02 h-[268px] md:h-px ml-20 md:ml-[0] md:mt-0 mt-[7px] md:w-full w-px" />
            <div className="flex flex-col items-start justify-start ml-20 md:ml-[0] md:mt-0 mt-0.5 w-[31%] md:w-full">
              <div className="flex flex-row gap-3 items-center justify-start w-[66%] md:w-full">
                <Button
                  className="cursor-pointer font-roboto min-w-[66px] rounded text-center text-sm"
                  shape="round"
                  color="yellow_600"
                  size="sm"
                  variant="fill"
                >
                  {props?.erctwenty}
                </Button>
                <Button
                  className="cursor-pointer font-roboto min-w-[66px] rounded text-center text-sm"
                  shape="round"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  {props?.trctwenty}
                </Button>
                <Button
                  className="cursor-pointer font-roboto min-w-[66px] rounded text-center text-sm"
                  shape="round"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  {props?.beptwenty}
                </Button>
              </div>
              <Text
                className="mt-[29px] text-gray-500 text-xs"
                size="txtRobotoRegular12"
              >
                {props?.depositaddress}
              </Text>
              <Input
                name="groupFour"
                placeholder="0xe133cfd5cdc36b261a7c48...590b"
                className="font-roboto p-0 placeholder:text-white-A700 text-left text-sm w-full"
                wrapClassName="flex mt-[9px] w-full"
                suffix={
                  <Img
                    className="mt-1 mb-auto h-3.5 ml-[35px]"
                    src="images/img_close_gray_500.svg"
                    alt="close"
                  />
                }
                shape="round"
                color="gray_900_01"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[113px] w-[15%] md:w-full">
              <Text
                className="text-white-A700 text-xs"
                size="txtRobotoRegular12WhiteA700"
              >
                {props?.usdtdepositaddrone}
              </Text>
              <div className="border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-[7px] w-full">
                <div className="bg-blue_gray-100 h-[152px] mb-0.5 w-[152px]"></div>
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
                  {props?.recent}
                </Text>
                <Text
                  className="h-[17px] text-center text-sm text-yellow-600"
                  size="txtRobotoRegular14Yellow600"
                >
                  {props?.all}
                </Text>
              </div>
              <div className="bg-yellow-600 h-1 mt-[13px] w-[2%]"></div>
              <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                <Line className="bg-gray-900_02 h-px w-full" />
                <div className="md:h-[312px] h-[461px] sm:h-[633px] relative w-full">
                  <div className="absolute bg-gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[5px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[187px] items-center justify-start mb-[231px] w-[99%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          {props?.coin}
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[135px] text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          {props?.time}
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          {props?.amount}
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[226px] text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          {props?.depositaddress1}
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[109px] text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          {props?.processingtime}
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[276px] text-gray-700 text-xs"
                          size="txtRobotoRegular12Gray700"
                        >
                          {props?.status}
                        </Text>
                      </div>
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtRobotoRegular12"
                      >
                        {props?.nodata}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute leading-[14.00px] left-[39%] text-gray-700 text-xs top-[0] w-[7%] sm:w-full"
                    size="txtRobotoRegular12Gray700"
                  >
                    {props?.confirmationtimone}
                  </Text>
                  <Text
                    className="absolute leading-[14.00px] right-[14%] text-gray-700 text-xs top-[0] w-[11%] sm:w-full"
                    size="txtRobotoRegular12Gray700"
                  >
                    {props?.blockchaintransone}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Depoibody.defaultProps = {
  deposit: "Deposit",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  copyaddress: "Copy address",
  initiateawithdrone: "Initiate a withdrawal",
  networkconfirmaone: "Network confirmation",
  depositsuccessfone: "Deposit successful",
  choosethecryptoone:
    "Choose the crypto and its network on this page, and copy the deposit address.",
  initiateawithdrthree: "Initiate a withdrawal on the withdrawal platform.",
  waitfortheblockone:
    "Wait for the blockchain network to confirm your transfer.",
  afterthenetworkone:
    "After the network confirmation, We will credit the crypto for you.",
  coins: "Coins",
  chainname: "Chain name",
  balances: "Balances",
  balancevalue: "0.00",
  available: "Available",
  availablevalue: "--",
  freeze: "Freeze",
  freezevalue: "0.00",
  description:
    "Do not deposit any of the above-mentioned addresses in non-local currency assets, otherwise the assets will not be retrievable.",
  erctwenty: "ERC20",
  trctwenty: "TRC20",
  beptwenty: "BEP20",
  depositaddress: "Deposit Address",
  usdtdepositaddrone: "USDT Deposit Address",
  recent: "Recent",
  all: "All",
  coin: "Coin",
  time: "Time",
  amount: "Amount",
  depositaddress1: "Deposit Address",
  processingtime: "Processing Time",
  status: "Status",
  nodata: "No Data",
  confirmationtimone: "Confirmation Times",
  blockchaintransone: "Blockchain Transaction ID",
};

export default Depoibody;
