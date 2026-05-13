
const STEPS = [
  {
    num: '01',
    title: 'Signal detection',
    body: 'Sparrow detects SCTE-35 cue tones and custom markers in both live and file-based streams.',
  },
  {
    num: '02',
    title: 'Ad decisioning',
    body: 'Connects to your ad server or exchanges in real time — evaluating targeting, frequency caps, and competitive separation.',
  },
  {
    num: '03',
    title: 'Server-side stitching',
    body: 'Ads are stitched directly into the manifest — delivering a seamless viewer experience with zero client-side latency.',
  },
  {
    num: '04',
    title: 'Track & report',
    body: 'Every impression, quartile, and completion event is captured and surfaced in real-time dashboards and export-ready reports.',
  },
];

function HowItWorks() {
  return (
    <div className="sp-how-wrap">
      <section className="sp-section">
        <div className="sp-section-label">How it works</div>
        <h2 className="sp-section-title">From signal to insertion, in milliseconds.</h2>
        <div className="sp-steps">
          {STEPS.map(({ num, title, body }) => (
            <div key={num} className="sp-step">
              <div className="sp-step-num">{num}</div>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
