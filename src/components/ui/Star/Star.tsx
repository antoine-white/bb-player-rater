import "./Star.css";

const filledColor = "grey";
const emptyColor = "yellow";

export type StarFilledType = "filled" | "half-filled" | "empty";

const Star = ({ type }: { type: StarFilledType }) => {
  const fillString =
    type === "empty"
      ? filledColor
      : type === "filled"
      ? emptyColor
      : "url(#grad)";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256px"
      height="256px"
      viewBox="0 0 32 32"
      className="star"
    >
      <defs>
        <linearGradient id="grad">
          <stop offset="50%" stop-color="yellow" />
          <stop offset="50%" stop-color="grey" />
        </linearGradient>
      </defs>
      <path
        fill={fillString}
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
      l11.547-1.2L16.026,0.6L20.388,10.918z"
      />
    </svg>
  );
};

export default Star;
