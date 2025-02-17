const CheckIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-label="CheckIcon"
      className={className}
      viewBox="0 0 16 16"
      {...props}>
      <path
        fill="currentColor"
        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353l4.493-6.74a.75.75 0 0 1 1.04-.207"></path>
    </svg>
  );
};

export default CheckIcon;
