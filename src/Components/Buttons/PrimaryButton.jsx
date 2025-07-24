const PrimaryButton = ({
  text,
  onclickFn,
  classname,
  variant = "light",
  size = "normal",
  ...rest
}) => {
  return (
    <button
      onClick={onclickFn}
      {...rest}
      className={` border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ${classname}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
