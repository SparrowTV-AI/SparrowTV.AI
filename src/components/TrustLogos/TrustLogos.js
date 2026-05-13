
const LOGOS = [
  'Broadcast networks',
  'FAST channels',
  'vMVPDs',
  'Streaming platforms',
  'Sports rights holders',
  'Political & advocacy',
];

function TrustLogos() {
  return (
    <div className="sp-logos">
      <div className="sp-logos-label">Trusted by operators across linear, CTV, and FAST</div>
      <div className="sp-logos-row">
        {LOGOS.map((label) => (
          <span key={label} className="sp-logo-pill">{label}</span>
        ))}
      </div>
    </div>
  );
}

export default TrustLogos;
