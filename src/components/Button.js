import styled from "styled-components";
import plus from "../assets/add-plus.svg";
import dropDown from "../assets/dropdown.svg";

const Button = (props) => {
  const {
    className,
    disabled = false,
    title,
    type,
    size = "medium", // small medium or large
    onClick,
    style,
    isLoading,
    backgroundColor,
    textColor,
    isExport = false,
    isPlus = false,
    isDropDown = false,
  } = props;
  return (
    <ButtonComponent
      size={size}
      style={style}
      onClick={onClick}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      textColor={textColor}
      backgroundColor={backgroundColor}
      className={className}
      type={type}
    >
      {isPlus && <img src={plus} alt="right-arrow" loading="lazy" />}
      {isExport && (
        <img
          src="https://img.icons8.com/ios/50/000000/export.png"
          alt="export"
          className="pr-3 w-10 h-3"
          loading="lazy"
        />
      )}
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>{title}</>
        // <p>text</p>
      )}
      {isDropDown && (
        <img src={dropDown} alt="drop-down" loading="lazy" className="pl-2" />
      )}
    </ButtonComponent>
  );
};

export default Button;

const ButtonComponent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor || "#0A74DC"};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  height: ${(props) =>
    props.size === "medium"
      ? "48px"
      : props.size === "small"
      ? "36px"
      : "56px"};
  /* for the text */
  color: ${(props) => props.textColor || "#ffffff"};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;
