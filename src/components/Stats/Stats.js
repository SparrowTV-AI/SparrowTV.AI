
const STATS = [
  { num: <>99.<em>9</em><span className="u">%</span></>, desc: 'Platform uptime SLA across all delivery environments' },
  { num: <>&lt;<em>15</em><span className="u">ms</span></>, desc: 'Ad decision latency for live linear streams' },
  { num: <><em>100</em>B<span className="u">+</span></>, desc: 'Impressions tracked annually across the platform' },
  { num: <><em>40</em><span className="u">+</span></>, desc: 'Integrations with major ad servers, SSPs, and DSPs' },
];

function Stats() {
  return (
    <section className="sp-stats">
      <div className="sp-stats-inner">
        <h2>Performance that moves the <span className="grad">business needle.</span></h2>
        <p className="sp-stats-sub">Aggregate platform performance across all SparrowTV.AI customers, year-to-date.</p>
        <div className="sp-stats-grid">
          {STATS.map(({ num, desc }, i) => (
            <div key={i} className="sp-stat-cell">
              <div className="sp-stat-num">{num}</div>
              <div className="sp-stat-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
