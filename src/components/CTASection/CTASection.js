function CTASection() {
  return (
    <section className="sp-cta-section">
      <div className="sp-cta-inner">
        <img className="sp-cta-bird" src="/brand/sparrow-gradient.png" alt="" />
        <h2>Ready to <span className="grad">modernize</span> your ad infrastructure?</h2>
        <p>Join broadcasters and streaming operators already using SparrowTV.AI to deliver, track, and optimize ad inventory at scale.</p>
        <div className="sp-cta-actions">
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
      </div>
    </section>
  );
}

export default CTASection;
