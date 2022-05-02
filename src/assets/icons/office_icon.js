import React from "react";

const OfficeIcon = ({ size = { height: 24, width: 24 } }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      height={size.height}
      width={size.width}
    >
      <g>
        <rect fill="none" height={size.height} width={size.width} />
      </g>
      <g>
        <path
          fill="currentColor"
          d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z"
        />
      </g>
    </svg>
  );
};

export default OfficeIcon;
