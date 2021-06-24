

export default function FeatureCard({iconSrc, title, text}){
  return (
    <div className="feature-card">
      <div className="circle">
        <img src={iconSrc} alt={`icon ${title}`} />
      </div>
      <h3>{title}</h3>
      <div>{text}</div>
    </div>
  );
}