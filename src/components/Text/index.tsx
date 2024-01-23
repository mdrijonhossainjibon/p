import React from "react";

const sizeClasses = {
  txtRobotoRegular14Red400: "font-normal font-roboto",
  txtRobotoRegular11TealA700: "font-normal font-roboto",
  txtRobotoRegular14Yellow600: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14TealA700: "font-normal font-roboto",
  txtRobotoRegular13: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular36: "font-normal font-roboto",
  txtRobotoRegular14Black900: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular12Red400: "font-normal font-roboto",
  txtRobotoRegular17: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoRegular14Gray500: "font-normal font-roboto",
  txtRobotoRegular11Gray500: "font-normal font-roboto",
  txtRobotoRegular16WhiteA700: "font-normal font-roboto",
  txtRobotoRegular12Yellow800: "font-normal font-roboto",
  txtRobotoRegular12Gray700: "font-normal font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoRegular12WhiteA700: "font-normal font-roboto",
  txtRobotoRegular12TealA700: "font-normal font-roboto",
  txtRobotoRegular11: "font-normal font-roboto",
  txtRobotoRegular22: "font-normal font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
