import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="md:ml-[0] ml-[143px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Market
        </Text>
        <Img
          className="h-2 mb-6 md:ml-[0] ml-[5px] md:mt-0 mt-7 w-2"
          src="images/img_favorite.svg"
          alt="favorite"
        />
        <Text
          className="ml-5 md:ml-[0] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Trade
        </Text>
        <Img
          className="h-2 mb-6 ml-1 md:ml-[0] md:mt-0 mt-7 w-2"
          src="images/img_favorite.svg"
          alt="favorite_One"
        />
        <Text
          className="ml-5 md:ml-[0] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Futures
        </Text>
        <Img
          className="h-2 mb-6 md:ml-[0] ml-[5px] md:mt-0 mt-7 w-2"
          src="images/img_favorite.svg"
          alt="favorite_Two"
        />
        <Text
          className="md:ml-[0] ml-[52px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Fiat
        </Text>
        <Img
          className="h-2 mb-6 ml-1 md:ml-[0] md:mt-0 mt-7 w-2"
          src="images/img_favorite.svg"
          alt="favorite_Three"
        />
        <Text
          className="md:ml-[0] ml-[52px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Broker
        </Text>
        <Img
          className="h-2 mb-6 md:ml-[0] ml-[5px] md:mt-0 mt-7 w-2"
          src="images/img_favorite.svg"
          alt="favorite_Four"
        />
        <Text
          className="md:ml-[0] ml-[52px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Support
        </Text>
        <Img
          className="h-2 mb-6 ml-1.5 md:ml-[0] md:mt-0 mt-7 w-2"
          src="images/img_favorite.svg"
          alt="favorite_Five"
        />
        <Text
          className="ml-5 md:ml-[0] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          More
        </Text>
        <Img
          className="h-2 mb-6 ml-1 md:ml-[0] md:mt-0 mt-7 w-2"
          src="images/img_favorite.svg"
          alt="favorite_Six"
        />
        <Text
          className="md:ml-[0] ml-[197px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Balances
        </Text>
        <Text
          className="md:ml-[0] ml-[19px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Order
        </Text>
        <Text
          className="md:ml-[0] ml-[22px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Download
        </Text>
        <Img
          className="h-[18px] md:ml-[0] ml-[22px] md:mt-0 my-[21px] w-[18px]"
          src="images/img_brightness.svg"
          alt="brightness"
        />
        <Img
          className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[21px] w-[18px]"
          src="images/img_group.svg"
          alt="group"
        />
        <Img
          className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[21px] w-[18px]"
          src="images/img_lock.svg"
          alt="lock"
        />
        <Text
          className="ml-5 md:ml-[0] mr-[23px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          English | USD
        </Text>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
