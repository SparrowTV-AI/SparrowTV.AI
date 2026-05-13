
const AUDIENCES = [
  {
    badge: 'Broadcasters',
    badgeStyle: { background: 'var(--blue-50)', color: 'var(--blue-700)' },
    title: 'Linear TV operators',
    body: 'Replace legacy ad insertion with a DAI system built for the precision and scale broadcast demands.',
    items: ['SCTE-35 + SCTE-104 support', 'Multi-channel trafficking', 'Blackout & override rules'],
  },
  {
    badge: 'Streaming',
    badgeStyle: { background: '#E1F5EE', color: 'var(--teal-600)' },
    title: 'CTV & FAST operators',
    body: 'Monetize streaming inventory with the same rigor as linear — with native CTV audience targeting.',
    items: ['HLS & DASH manifest stitching', 'Device-level targeting', 'IAB standard compliance'],
  },
  {
    badge: 'Agencies & brands',
    badgeStyle: { background: 'var(--blue-800)', color: '#fff' },
    title: 'Advertisers & media buyers',
    body: 'Verified delivery data and campaign performance across linear and streaming in one unified view.',
    items: ['3rd-party verification ready', 'Cross-channel attribution', 'Export to any BI tool'],
  },
];

function Audiences() {
  return (
    <section className="sp-section">
      <div className="sp-section-label">Built for</div>
      <h2 className="sp-section-title" style={{ marginBottom: 40 }}>
        One platform, every team that touches ad delivery.
      </h2>
      <div className="sp-aud-grid">
        {AUDIENCES.map(({ badge, badgeStyle, title, body, items }) => (
          <div key={title} className="sp-aud-card">
            <span className="sp-aud-badge" style={badgeStyle}>{badge}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            <ul className="sp-aud-list">
              {items.map((item) => (
                <li key={item}><i className="ti ti-check"></i>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Audiences;
