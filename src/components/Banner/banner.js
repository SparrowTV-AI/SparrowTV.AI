
function Nav() {
  return (
    <nav className="sp-nav">
      <a className="sp-logo" href="#">
        <span className="sp-logo-mark">
          <img src="/brand/sparrow-gradient.png" alt="SparrowTV.AI" />
        </span>
        <span className="sp-logo-text">SPARROWTV<span className="ai">.AI</span></span>
      </a>
      <div className="sp-nav-links">
        <a href="#">Platform</a>
        <a href="#">Solutions</a>
        <a href="#">Reporting</a>
        <a href="#">Pricing</a>
        <a href="#">Docs</a>
      </div>
      <div className="sp-nav-right">
        {/* <button className="sp-nav-signin">Sign in</button> */}
        <button className="sp-nav-cta">Speak to sales</button>
      </div>
    </nav>
  );
}

export default Nav;
