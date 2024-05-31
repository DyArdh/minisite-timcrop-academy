const LinkedInIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-label="LinkedInIcon"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <circle cx="10" cy="10" r="10" fill="#0077B5" />
      <path
        d="M6.96 7.9216C7.49333 7.9216 7.92 7.48791 7.92 6.9608C7.92 6.43369 7.48667 6 6.96 6C6.43333 6 6 6.43369 6 6.9608C6 7.48791 6.43333 7.9216 6.96 7.9216ZM8.83333 8.64887V14H10.4867V11.3578C10.4867 10.6572 10.62 9.98332 11.48 9.98332C12.34 9.98332 12.34 10.784 12.34 11.3978V14H14V11.0642C14 9.62302 13.6933 8.51543 12.0133 8.51543C11.2067 8.51543 10.6667 8.9558 10.4467 9.37615H10.4267V8.6422H8.84L8.83333 8.64887ZM6.13333 8.64887H7.79333V14H6.13333V8.64887Z"
        fill="#F8F8F8"
      />
    </svg>
  );
};

export default LinkedInIcon;
