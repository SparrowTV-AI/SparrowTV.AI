
const FEATURES = [
  {
    icon: 'ti-replace',
    title: 'Server-side ad insertion',
    body: 'Seamless stitching of ads into live and VOD streams server-side — eliminating buffering, ad blockers, and latency spikes across every delivery environment.',
    accent: false,
  },
  {
    icon: 'ti-chart-bar',
    title: 'Real-time reporting',
    body: 'Impression-level data with sub-minute latency. Track delivery, viewability, completion rates, and revenue across every feed, network, and device.',
    accent: true,
  },
  {
    icon: 'ti-broadcast',
    title: 'Linear + CTV unified',
    body: 'One platform for both broadcast linear and connected TV. Manage inventory, trafficking, and reporting from a single interface — across all channels.',
    accent: false,
  },
];

function Features() {
  return (
    <section className="sp-section">
      <div className="sp-section-label">Platform capabilities</div>
      <h2 className="sp-section-title">
        Everything ad ops needs, <em>nothing</em> it doesn't.
      </h2>
      <div className="sp-features-grid">
        {FEATURES.map(({ icon, title, body, accent }) => (
          <div key={title} className={`sp-feat-card${accent ? ' accent' : ''}`}>
            <div className="sp-feat-icon"><i className={`ti ${icon}`}></i></div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
