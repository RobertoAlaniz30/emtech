import "./styles.scss";

const FooterItem = ({ footerOption, index, children }) => {
  return (
    <div key={index} className="footer__option-container">
      <p>{footerOption.title}</p>
      <ul className="footer__options-list">
        {footerOption.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default FooterItem;
