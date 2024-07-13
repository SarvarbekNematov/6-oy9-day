
export const Button = ({
  children,
  variant,
  type,
  className,
  id,
  startIcon,
}) => {
  return (
    <button id={id} type={type} className={className + " btn " + variant}>
      {startIcon ? <span>{startIcon}</span> : ""}
      <span>{children}</span>
    </button>
  );
};