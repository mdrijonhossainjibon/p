import React from "react";

import { Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-16 ml-[81px] mr-[99px] mt-[74px] w-[87%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-gray-500 text-sm"
              size="txtRobotoRegular14Gray500"
            >
              © 2017-2024 Zedxion
            </Text>
            <ul className="flex md:flex-1 flex-col items-start justify-start md:w-full common-column-list">
              <li>
                <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                  <li>
                    <Text
                      className="mb-0.5 text-lg text-white-A700"
                      size="txtRobotoRegular18"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[187px] text-[17px] text-white-A700"
                      size="txtRobotoRegular17"
                    >
                      Tools
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[220px] text-lg text-white-A700"
                      size="txtRobotoRegular18"
                    >
                      Partner
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[201px] md:mt-0 mt-0.5 text-lg text-white-A700"
                      size="txtRobotoRegular18"
                    >
                      Support
                    </Text>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3 md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      PRIVACY POLICY
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[153px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      API Ducumnet
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[172px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Zedxion BEP20 contract
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[111px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Help center
                    </Text>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[9px] md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      USER AGREEMENT
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[141px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      fee
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[242px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Zedxion TRC20 Contract
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[109px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Tel: +44 1803503004
                    </Text>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-2.5 md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Disclaimer
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[194px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Email white List
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[163px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Zedxion ERC20 contract
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[110px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Tel: +1 240 474 0715
                    </Text>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-3 md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      AML & KYC Policy
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[148px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      White Paper Zedxion
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[133px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Digifinex
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="md:ml-[0] ml-[206px] text-gray-500 text-sm"
                      size="txtRobotoRegular14Gray500"
                    >
                      Support Email
                    </Text>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[9px]">
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtRobotoRegular14Gray500"
                  >
                    REVISION AND TERMINATION OF TERM
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[274px] text-gray-500 text-sm"
                    size="txtRobotoRegular14Gray500"
                  >
                    Dextrade
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[205px] text-gray-500 text-sm"
                    size="txtRobotoRegular14Gray500"
                  >
                    Coin Market cap
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-[9px]">
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtRobotoRegular14Gray500"
                  >
                    USER AGREEMENT
                  </Text>
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtRobotoRegular14Gray500"
                  >
                    Vindax
                  </Text>
                </div>
              </li>
              <li>
                <Text
                  className="md:ml-[0] ml-[523px] mt-2.5 text-gray-500 text-sm"
                  size="txtRobotoRegular14Gray500"
                >
                  Bankcex
                </Text>
              </li>
              <li>
                <Text
                  className="md:ml-[0] ml-[523px] mt-3 text-gray-500 text-sm"
                  size="txtRobotoRegular14Gray500"
                >
                  Panckswap
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
