import React from "react";

import { Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
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
          className="md:ml-[0] ml-[242px] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Log In
        </Text>
        <Text
          className="bg-yellow-600 h-[19px] justify-center md:ml-[0] ml-[26px] md:mt-0 my-5 px-4 rounded text-black-900 text-center text-sm w-[81px]"
          size="txtRobotoRegular14Black900"
        >
          Sign Up
        </Text>
        <Text
          className="ml-5 md:ml-[0] md:mt-0 my-[21px] text-sm text-white-A700"
          size="txtRobotoRegular14"
        >
          Download
        </Text>
        <Img
          className="h-[18px] md:ml-[0] ml-[22px] md:mt-0 my-[21px] w-[18px]"
          src="images/img_brightness.svg"
          alt="brightness"
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

Header1.defaultProps = {};

export default Header1;
