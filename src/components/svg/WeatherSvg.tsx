const WeatherSvg = ({ dimension }: { dimension: string | number }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 64 64"
    >
      <g transform="translate(5.796 8.927)">
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="-1714.548"
          y1="1855.346"
          x2="-1650.548"
          y2="1855.346"
          gradientTransform="rotate(-90 -1744.309 84.834)"
        >
          <stop offset="0" stop-color="#0bd1ff" />
          <stop offset="1" stop-color="#1587ff" />
        </linearGradient>
        <path
          d="M58.204 40.073v-34c0-8.284-6.716-15-15-15h-34c-8.284 0-15 6.716-15 15v34c0 8.284 6.716 15 15 15h34c8.284 0 15-6.716 15-15z"
          fill="url(#a)"
        />
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="-925.303"
          y1="1069.467"
          x2="-925.303"
          y2="1089.969"
          gradientTransform="matrix(.7906 0 0 -.7906 747.858 868.585)"
        >
          <stop offset="0" stop-color="#ffef3f" />
          <stop offset="1" stop-color="#ffc001" />
        </linearGradient>
        <path
          d="M24.622 19.119a8.301 8.301 0 1 1-8.301-8.301 8.301 8.301 0 0 1 8.301 8.301z"
          fill="url(#b)"
        />
        <g opacity=".95" transform="matrix(.7906 0 0 .7906 -2.258 -780.06)">
          <linearGradient
            id="c"
            gradientUnits="userSpaceOnUse"
            x1="-1149.195"
            y1="2328.906"
            x2="-1149.195"
            y2="2348.648"
            gradientTransform="matrix(.7906 0 0 -.7906 946.545 2865.39)"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stop-opacity=".755" />
          </linearGradient>
          <path
            d="M35 1004.362c-6.628 0-12 5.372-12 12v.156c-3.418.699-6 3.719-6 7.345a7.5 7.5 0 0 0 7.5 7.499c.166 0 .337-.021.5-.031v.031h24v-.031c5.562-.266 9.999-4.841 9.999-10.47 0-5.798-4.7-10.5-10.499-10.5-.996 0-1.962.147-2.874.406A12.019 12.019 0 0 0 35 1004.362z"
            fill="url(#c)"
          />
        </g>
      </g>
    </svg>
  );
};

export default WeatherSvg;
