
const LINKS = ['Privacy', 'Terms', 'Security', 'Status', 'Contact'];

function Footer() {
  return (
    <footer className="sp-footer">
      <span className="sp-footer-brand">
        <span className="sp-logo-mark" style={{ width: 30, height: 30 }}>
          <img src="/brand/sparrow-gradient.png" alt="" />
        </span>
        <span><span className="word">SPARROWTV</span><span className="ai">.AI</span></span>
      </span>
      <div className="sp-footer-links">
        {LINKS.map((link) => (
          <a key={link} href="#">{link}</a>
        ))}
      </div>
      <span className="sp-footer-copy">© 2026 SparrowTV.AI · Made for broadcast</span>
    </footer>
  );
}

export default Footer;
