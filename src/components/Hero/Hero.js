
function Hero() {
  return (
    <div className="sp-hero-wrap">
      <section className="sp-hero">
        <div>
          <div className="sp-eyebrow">
            <span className="sp-eyebrow-dot"></span>
            Dynamic Ad Insertion · Built for broadcast
          </div>
          <h1>Ad delivery that <span className="grad">adapts</span><br />in real time.</h1>
          <p className="sp-hero-sub">
            SparrowTV.AI powers Dynamic Ad Insertion for Linear TV and CTV — with
            impression-level tracking, sub-15ms decisioning, and reporting built for
            the complexity of modern broadcast.
          </p>
          <div className="sp-hero-actions">
            <a className="sp-btn-primary" href="mailto:sales@sparrowtv.ai">
              Speak to sales <i className="ti ti-arrow-right"></i>
            </a>
            <a className="sp-btn-secondary" href="https://broadreach.sparrowtv.ai/" target="_blank" rel="noreferrer">
              <i className="ti ti-target"></i> Explore Audience
            </a>
            <a className="sp-btn-secondary" href="https://broadreach.sparrowtv.ai/" target="_blank" rel="noreferrer">
              <i className="ti ti-radar"></i> Open BroadReach
            </a>
          </div>
          <div className="sp-hero-trust">
            <div className="avatars">
              <div className="avatar a1">CB</div>
              <div className="avatar a2">NX</div>
              <div className="avatar a3">FX</div>
              <div className="avatar a4">+</div>
            </div>
            <span>Trusted by 40+ broadcasters, FASTs, and rights holders</span>
          </div>
        </div>

        <div className="sp-hero-visual">
          <div className="sp-vh">
            <span>Live stream timeline · Ad decisioning</span>
            <span className="sp-vh-live"><span className="dot"></span>LIVE</span>
          </div>
          <div className="sp-timeline">
            <div className="sp-tl-row">
              <span className="sp-tl-label">Network A</span>
              <div className="sp-tl-track">
                <div className="sp-tl-bar sp-tl-content" style={{width:'28%'}}>Content</div>
                <div className="sp-tl-bar sp-tl-ad"      style={{width:'14%'}}>DAI ↗</div>
                <div className="sp-tl-bar sp-tl-content" style={{width:'32%'}}>Content</div>
                <div className="sp-tl-bar sp-tl-ad"      style={{width:'14%'}}>DAI ↗</div>
                <div className="sp-tl-bar sp-tl-content" style={{width:'12%'}}></div>
              </div>
            </div>
            <div className="sp-tl-row">
              <span className="sp-tl-label">CTV Feed</span>
              <div className="sp-tl-track">
                <div className="sp-tl-bar sp-tl-content" style={{width:'20%'}}>Content</div>
                <div className="sp-tl-bar sp-tl-ad2"     style={{width:'18%'}}>DAI ↗</div>
                <div className="sp-tl-bar sp-tl-content" style={{width:'38%'}}>Content</div>
                <div className="sp-tl-bar sp-tl-ad2"     style={{width:'18%'}}>DAI ↗</div>
              </div>
            </div>
            <div className="sp-tl-row">
              <span className="sp-tl-label">VOD</span>
              <div className="sp-tl-track">
                <div className="sp-tl-bar sp-tl-ad3"     style={{width:'16%'}}>Pre-roll</div>
                <div className="sp-tl-bar sp-tl-content" style={{width:'45%'}}>Content</div>
                <div className="sp-tl-bar sp-tl-ad3"     style={{width:'16%'}}>Mid-roll</div>
                <div className="sp-tl-bar sp-tl-content" style={{width:'20%'}}></div>
              </div>
            </div>
          </div>
          <div className="sp-metrics">
            <div className="sp-metric-tile">
              <div className="sp-metric-val">98.4<span className="u">%</span></div>
              <div className="sp-metric-label">Fill rate</div>
              <div className="sp-metric-up"><i className="ti ti-trending-up"></i>2.1%</div>
            </div>
            <div className="sp-metric-tile">
              <div className="sp-metric-val">12<span className="u">ms</span></div>
              <div className="sp-metric-label">Decision latency</div>
              <div className="sp-metric-up neutral"><i className="ti ti-trending-down"></i>4ms</div>
            </div>
            <div className="sp-metric-tile">
              <div className="sp-metric-val">4.2<span className="u">M</span></div>
              <div className="sp-metric-label">Impressions today</div>
              <div className="sp-metric-up live"><i className="ti ti-radio"></i>Live</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
