import './utilities.scss';
import Icon from '../icon/icon';


export function PhoneInfo(){
  return(        
    <div className='info-phone'>
      <Icon type='phone'/>
      <span>(11) 9999-9999</span>
    </div>
  );
}

export function MailInfo(){

  return(
    <div className='info-mail'>
      <Icon type='mail'/>
      <span>lavanderia_laundry@mail.com</span>
    </div>
  );
}


export function SocialMediaInfo(){
  return(
    <div className="info-social-media">
      <Icon type='instagram'/>
      <Icon type='twitter'/>
      <Icon type='facebook'/>
    </div>
  );
}


export function CloseButton({ className, onClick }){
  return(
    <span tabIndex='1' onClick={onClick} className={className}>
      <Icon type='close'/>
    </span>    
  );
}


export function MenuButton({ className, onClick }){
  return (
    <span tabIndex='1' onClick={onClick} className={className}>
      <Icon type='menu'/>
    </span> 
  );
}


export function Logo(){
  return (
    <div className="logo">LAUNDRY</div>
  );
}


export function BackDrop({className, onClick}){
  return (
    <div 
      className={`backdrop ${className ? className : ''}`} 
      onClick = { onClick }  
    ></div>
  );
}

export function SectionHeader({ title, subtitle, highlight }){
  
  let heading = <h2>{ title }</h2>;

  if(highlight){
    const start = title.search(highlight);
    if(start === -1){
      throw Error(highlight + ' not found in title.');
    }
    const end = start + highlight.length;
    const pre = title.slice(0, start);
    const pos = title.slice(end);
    heading = <h2>{pre}<span>{highlight}</span>{pos}</h2>
  }

  return(
    <header className="section-header">
      { heading }
      <div className='subtitle'>{ subtitle }</div>
    </header>
  );
}


export function FeatureCard({icon, title, text}){

  return(
    <div className="feature-card">
      <div className="circle">
        <Icon type={icon}/>
      </div>
      <div className="text">
        <h3>{ title }</h3>
        <p>{ text }</p>
      </div>
    </div>
  );
}


export function SectionCard({type, bgImageClass, paragraphs, cta}){

  if(type !== 'right' && type !== 'left'){
    throw Error('Unknow type: "' + type + '".');
  }

  return(
    <div className={"section-card " + type}>
      <div className={"image " + bgImageClass}>

      </div>
      <div className="text-container">
        {paragraphs.map((paragraph, index)=>{
          return <p key={index}>{paragraph}</p>          
        })}
        <div className="cta-container">
          {cta}
        </div>
      </div>
    </div>
  );
}