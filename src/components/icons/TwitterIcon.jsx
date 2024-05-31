const TwitterIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-label="TwitterIcon"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <circle cx="10" cy="10" r="10" fill="black" />
      <path
        d="M13.6631 5H15.3499L11.6649 9.2359L16 15H12.6051L9.94651 11.5041L6.90446 15H5.21671L9.15821 10.4692L5 5H8.48004L10.8832 8.19538L13.6631 5ZM13.0712 13.9846H14.0058L7.9727 5.96205H6.96973L13.0712 13.9846Z"
        fill="white"
      />
    </svg>
  );
};

export default TwitterIcon;
