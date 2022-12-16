import "./styles.scss";
const Button = ({ href, onClIick, children, type }) => {
  return (
    <>
      {href ? (
        <a href={href}>
          <button className="button" onClick={onClIick} type={type}>
            {children}
          </button>
        </a>
      ) : (
        <button className="button" onClick={onClIick} type={type}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
