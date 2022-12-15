import "./styles.scss";
const Button = ({ href, onClIick, children, type, outlined = false }) => {
  const buttonType = outlined ? type + "Outlined" : type;
  return (
    <>
      {href ? (
        <a href={href}>
          <button className="button" onClick={onClIick}>
            {children}
          </button>
        </a>
      ) : (
        <button className="button" onClick={onClIick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
