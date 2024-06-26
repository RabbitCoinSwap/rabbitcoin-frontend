import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <circle cx="10" cy="10" r="48" fill="#0000" />
      <path
        fill="#8246e4"
        d="M37.5-.5h20c19.228 5.561 31.895 17.895 38 37v22c-6 18.667-18.333 31-37 37h-22c-19.079-6.08-31.412-18.746-37-38v-20c5.667-19.667 18.333-32.333 38-38z"
        opacity={0.999}
      />
      <path
        fill="#f6f3f9"
        d="M31.5 21.5c6.868 1.517 13.035 4.517 18.5 9 1.68 4.881.18 8.214-4.5 10-1.335-7.84-6.002-11.673-14-11.5a28.409 28.409 0 00-7.5 4.5c-2.845 9.462.322 15.462 9.5 18a498.543 498.543 0 0026-14.5c1.333-.667 2.667-.667 4 0A332.02 332.02 0 0178 46.5c.667 6 .667 12 0 18a56.877 56.877 0 01-16.5 9 56.877 56.877 0 01-16.5-9c-1.68-4.881-.18-8.214 4.5-10a26.706 26.706 0 011.5 7c7.29 6.814 14.29 6.48 21-1 .76-3.725.593-7.392-.5-11a45.926 45.926 0 00-10-6l-28 15a139.563 139.563 0 01-16.5-10c-.667-6-.667-12 0-18 4.981-2.9 9.815-5.9 14.5-9z"
      />
    </Svg>
  );
};

export default Icon;
