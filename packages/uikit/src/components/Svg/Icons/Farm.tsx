import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M499.205,244.677L449.117,233.6v-18.901c0-10.422,7.1-19.303,17.265-21.599c8.792-1.985,14.308-10.721,12.324-19.513
			c-1.985-8.792-10.723-14.31-19.513-12.324c-25.15,5.679-42.715,27.652-42.715,53.436v11.682l-85.862-18.989L301.788,73.034h0.541
			c9.012,0,16.319-7.307,16.319-16.319c0-9.012-7.307-16.319-16.319-16.319H80.674c-9.012,0-16.319,7.307-16.319,16.319
			c0,8.573,6.615,15.588,15.017,16.254V205.04c-16.392,7.415-31.307,17.821-44.068,30.871c-6.301,6.444-6.186,16.776,0.258,23.077
			c0.9,0.879,1.88,1.62,2.909,2.25c-9.029,12.211-15.922,26.091-20.122,41.087c-0.667-0.083-1.341-0.139-2.03-0.139
			C7.307,302.185,0,309.492,0,318.504v37.466c0,9.012,7.307,16.319,16.319,16.319c0.829,0,1.638-0.082,2.434-0.201
			c2.686,9.179,6.384,17.928,10.964,26.121c-4.229,6.34-3.549,14.985,2.046,20.579l26.492,26.492
			c3.187,3.187,7.363,4.78,11.539,4.78c3.156,0,6.311-0.914,9.041-2.734c8.45,4.724,17.486,8.515,26.98,11.221
			c1.512,7.449,8.096,13.056,15.991,13.056h37.465c7.895,0,14.48-5.607,15.991-13.057c9.492-2.705,18.53-6.497,26.978-11.22
			c2.729,1.82,5.884,2.734,9.041,2.734c4.177,0,8.353-1.593,11.539-4.78l26.492-26.492c5.595-5.595,6.275-14.239,2.046-20.579
			c2.766-4.948,5.216-10.094,7.309-15.419h82.836c0.005,44.436,36.158,80.587,80.596,80.587c44.442,0,80.597-36.155,80.597-80.597
			c0-0.528-0.029-1.048-0.04-1.572c5.519-2.618,9.344-8.223,9.344-14.737v-105.86C512,252.957,506.68,246.33,499.205,244.677z
			 M112.01,73.035h21.241c-0.214,1.054-0.327,2.145-0.327,3.264v115.839c-6.963,0.342-13.948,1.189-20.913,2.537V73.035z
			 M140.538,430.739c-51.961,0-94.232-42.273-94.232-94.233c0-51.961,42.271-94.233,94.232-94.233
			c51.961,0,94.233,42.273,94.233,94.233C234.771,388.467,192.497,430.739,140.538,430.739z M211.28,209.634v0.001
			c-0.578,0-1.149,0.033-1.711,0.09c-13.882-7.569-28.715-12.771-44.009-15.504V76.298c0-1.117-0.113-2.208-0.327-3.264h103.177
			l23.621,110.095l-33.83-24.308l4.402-6.31c5.156-7.391,3.343-17.565-4.048-22.72c-7.391-5.156-17.565-3.343-22.721,4.048
			l-27.274,39.1c-5.156,7.391-3.343,17.565,4.048,22.72c2.844,1.984,6.099,2.936,9.323,2.936c5.154,0,10.225-2.437,13.398-6.984
			l4.198-6.018l33.459,24.041H211.28z M285.557,350.152c1.101-13.482,0.318-27.051-2.365-40.509
			c-5.055-25.353-16.448-48.395-32.992-67.37h50.341v107.879H285.557z M422.098,430.739c-26.444,0-47.958-21.514-47.958-47.959
			s21.514-47.959,47.958-47.959c26.445,0,47.959,21.514,47.959,47.959S448.543,430.739,422.098,430.739z M422.098,302.184
			c-32.829,0-61.119,19.742-73.67,47.968h-15.25V241.386l146.183,32.329v52.415C464.744,311.356,444.474,302.184,422.098,302.184z"
      />
    </Svg>
  );
};

export default Icon;
