const CheckIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-label="CheckIcon"
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      {...props}>
      <circle cx="6" cy="6" r="6" fill="currentColor" />
      <circle cx="6" cy="6" r="5.75" stroke="black" stroke-opacity="0.8" stroke-width="0.5" />
    </svg>
  );
};

export default CheckIcon;
