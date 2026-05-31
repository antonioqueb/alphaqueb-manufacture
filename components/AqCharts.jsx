export function LineChart({ data, color = "var(--aq-lime)", height = 160, width = 600, fill = true }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const pad = 8;
  const inner = height - pad * 2;
  const points = data.map((v, i) => [i * stepX, pad + inner - ((v - min) / range) * inner]);
  const path = points.map((p, i) => i === 0 ? `M ${p[0].toFixed(1)} ${p[1].toFixed(1)}` : `L ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const areaPath = `${path} L ${width} ${height - pad} L 0 ${height - pad} Z`;
  const gradId = `aqg${String(color).replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((p, i) => <line key={i} x1="0" x2={width} y1={pad + inner * p} y2={pad + inner * p} stroke="var(--aq-line-soft)" strokeWidth="1" strokeDasharray="2 4" />)}
      {fill && <path d={areaPath} fill={`url(#${gradId})`} />}
      <path d={path} stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r="3" fill={color} />
      <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r="6" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function DualLineChart({ a, b, height = 110, width = 380 }) {
  const max = Math.max(...a, ...b);
  const min = Math.min(...a, ...b);
  const range = max - min || 1;
  const pad = 6;
  const inner = height - pad * 2;
  const stepX = width / (a.length - 1);
  const toPath = (arr) => arr.map((v, i) => {
    const x = i * stepX;
    const y = pad + inner - ((v - min) / range) * inner;
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ width: "100%", height }} aria-hidden="true">
      <path d={toPath(b)} stroke="var(--aq-purple-bright)" strokeWidth="1.6" fill="none" strokeLinejoin="round" opacity="0.85" />
      <path d={toPath(a)} stroke="var(--aq-lime)" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function Donut({ value = 68, color = "var(--aq-lime)", size = 64 }) {
  const R = (size - 8) / 2;
  const C = 2 * Math.PI * R;
  const off = C * (1 - value / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size/2} cy={size/2} r={R} fill="none" stroke="var(--aq-line-soft)" strokeWidth="4" />
      <circle cx={size/2} cy={size/2} r={R} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={off} transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" style={{ fontFamily: "var(--aq-font-tech)", fontSize: size * 0.26, fontWeight: 600, fill: color }}>{value}%</text>
    </svg>
  );
}

export function Spark({ data, color = "var(--aq-lime)", height = 26, width = 70 }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const path = data.map((v, i) => {
    const x = i * stepX;
    const y = 2 + (height - 4) - ((v - min) / range) * (height - 4);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  return <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} aria-hidden="true"><path d={path} stroke={color} strokeWidth="1.4" fill="none" /></svg>;
}
