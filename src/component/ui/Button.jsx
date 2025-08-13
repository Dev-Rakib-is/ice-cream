const Button = ({ className, btnText, icon: Icon }) => {
  return (
    <button className={`flex items-center gap-2 ${className}`}>
      {Icon && <Icon size={18} />}
      {btnText}
    </button>
  );
};

export default Button;
