import "./Footer.css";

const Footer = () => {
  const year = new Date().toDateString();
  return (
    <div className="footer">
      <span>
        @ Mbote-Joseph
        {year}
      </span>
    </div>
  );
};

export default Footer;
