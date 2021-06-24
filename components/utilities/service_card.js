

export default function ServiceCard({imgSrc, title, text}){
  return (
    <div className="service-card">
      <div className="img-container" style={ {backgroundImage: `url(${imgSrc})`}}>       
      </div>
      <h3>{title}</h3>
      <div>{text}</div>
    </div>
  );
}