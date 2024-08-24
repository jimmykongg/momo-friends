import React, { CSSProperties, ElementType } from "react";

type ShiftByProps = {
  x?: number;
  y?: number;
  children: React.ReactNode;
  as?: ElementType;
  style?: CSSProperties;
  [key: string]: any;
};

function ShiftBy({
  x = 0,
  y = 0,
  children,
  as = "div",
  style = {},
  ...delegated
}: ShiftByProps) {
  const Element = as;

  return (
    <Element style={{ transform: `translate(${x}px, ${y}px)` }} {...delegated}>
      {children}
    </Element>
  );
}

export default ShiftBy;

