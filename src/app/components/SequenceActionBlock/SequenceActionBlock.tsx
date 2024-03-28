const SequenceActionBlock = ({
  title,
  subtitle,
  onNextButtonClick,
  onPreviousButtonClick,
}: {
  title: string;
  subtitle: string;
  onNextButtonClick: () => void;
  onPreviousButtonClick?: () => void;
}) => (
  <div className={"grid grid-cols-2"}>
    <div className={"grid"}>
      <span className={"font-bold"}>{title}</span>
      <span className={"text-gray-500"}>{subtitle}</span>
    </div>

    <div className={"text-right"}>
      <button
        type={"button"}
        className={"border border-gray-200 sm:mr-2 xs: mb-2"}
        onClick={onPreviousButtonClick}
      >
        Previous
      </button>

      <button
        type={"button"}
        className={"text-white border"}
        style={{ backgroundColor: "#6E40D7" }}
        onClick={onNextButtonClick}
      >
        Next
      </button>
    </div>
  </div>
);

export default SequenceActionBlock;
