type Props = { color: string };

const Building = ({ color }: Props) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <path
          d="M9 22V18H15V22M8 6H8.01M16 6H16.01M12 6H12.01M12 10H12.01M12 14H12.01M16 10H16.01M16 14H16.01M8 10H8.01M8 14H8.01M6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z"
          stroke={color}
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Building;
