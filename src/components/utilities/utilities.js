import './utilities.scss';


export function PhoneInfo(){
  return(        
    <div className='info-phone'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path id="icon-material-phone" d="M7.718,11.424a13.465,13.465,0,0,0,5.858,5.858l1.956-1.956a.884.884,0,0,1,.907-.213,10.139,10.139,0,0,0,3.173.507.891.891,0,0,1,.889.889v3.1a.891.891,0,0,1-.889.889A15.11,15.11,0,0,1,4.5,5.389.892.892,0,0,1,5.389,4.5H8.5a.892.892,0,0,1,.889.889A10.1,10.1,0,0,0,9.9,8.562a.892.892,0,0,1-.222.907L7.718,11.424Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
      </svg>
      <span>(11) 9999-9999</span>
    </div>
  );
}

export function MailInfo(){

  return(
    <div className='info-mail'>
      <svg xmlns="http://www.w3.org/2000/svg" width="22.348" height="16" viewBox="0 0 22.348 16">
        <path id="Icon_material-email" data-name="Icon material-email" d="M23.113,6H5.235A2.123,2.123,0,0,0,3.011,8L3,20a2.133,2.133,0,0,0,2.235,2H23.113a2.133,2.133,0,0,0,2.235-2V8A2.133,2.133,0,0,0,23.113,6Zm0,4-8.939,5L5.235,10V8l8.939,5,8.939-5Z" transform="translate(-3 -6)" fill="#fff"/>
      </svg>

      <span>lavanderia_laundry@mail.com</span>
    </div>
  );
}


export function SocialMediaInfo(){
  return(
    <div className="info-social-media">
    <svg xmlns="http://www.w3.org/2000/svg" width="20.004" height="20" viewBox="0 0 20.004 20">
      <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M10,7.11a5.128,5.128,0,1,0,5.128,5.128A5.12,5.12,0,0,0,10,7.11Zm0,8.461a3.334,3.334,0,1,1,3.334-3.334A3.34,3.34,0,0,1,10,15.571ZM16.533,6.9a1.2,1.2,0,1,1-1.2-1.2A1.193,1.193,0,0,1,16.533,6.9Zm3.4,1.214a5.919,5.919,0,0,0-1.616-4.191,5.958,5.958,0,0,0-4.191-1.616c-1.651-.094-6.6-.094-8.252,0A5.949,5.949,0,0,0,1.681,3.919,5.938,5.938,0,0,0,.065,8.11c-.094,1.651-.094,6.6,0,8.252a5.919,5.919,0,0,0,1.616,4.191,5.965,5.965,0,0,0,4.191,1.616c1.651.094,6.6.094,8.252,0a5.919,5.919,0,0,0,4.191-1.616,5.958,5.958,0,0,0,1.616-4.191C20.023,14.71,20.023,9.765,19.929,8.114ZM17.8,18.133a3.375,3.375,0,0,1-1.9,1.9c-1.317.522-4.44.4-5.9.4s-4.583.116-5.9-.4a3.375,3.375,0,0,1-1.9-1.9c-.522-1.317-.4-4.44-.4-5.9s-.116-4.583.4-5.9a3.375,3.375,0,0,1,1.9-1.9c1.317-.522,4.44-.4,5.9-.4s4.583-.116,5.9.4a3.375,3.375,0,0,1,1.9,1.9c.522,1.317.4,4.44.4,5.9S18.318,16.821,17.8,18.133Z" transform="translate(0.005 -2.238)" fill="#fff"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="19.391" height="20" viewBox="0 0 19.391 20">
      <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M17.314,2.25H2.078A2.111,2.111,0,0,0,0,4.393V20.107A2.111,2.111,0,0,0,2.078,22.25H8.018v-6.8H5.291v-3.2H8.018V9.811c0-2.775,1.6-4.307,4.054-4.307a16.033,16.033,0,0,1,2.4.216V8.443H13.122a1.577,1.577,0,0,0-1.75,1.729V12.25H14.35l-.476,3.2h-2.5v6.8h5.941a2.111,2.111,0,0,0,2.078-2.143V4.393A2.111,2.111,0,0,0,17.314,2.25Z" transform="translate(0 -2.25)" fill="#fff"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path id="Icon_awesome-twitter-square" data-name="Icon awesome-twitter-square" d="M17.857,2.25H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V4.393A2.143,2.143,0,0,0,17.857,2.25ZM15.674,9.339c.009.125.009.254.009.379a8.274,8.274,0,0,1-8.33,8.33,8.292,8.292,0,0,1-4.5-1.313,6.169,6.169,0,0,0,.705.036A5.87,5.87,0,0,0,7.2,15.522,2.932,2.932,0,0,1,4.46,13.491a3.156,3.156,0,0,0,1.321-.054,2.928,2.928,0,0,1-2.344-2.875v-.036a2.926,2.926,0,0,0,1.321.371,2.922,2.922,0,0,1-1.3-2.438,2.891,2.891,0,0,1,.4-1.478,8.314,8.314,0,0,0,6.036,3.063,2.934,2.934,0,0,1,5-2.674,5.737,5.737,0,0,0,1.857-.705,2.92,2.92,0,0,1-1.286,1.612,5.827,5.827,0,0,0,1.687-.455A6.163,6.163,0,0,1,15.674,9.339Z" transform="translate(0 -2.25)" fill="#f5f5f5"/>
    </svg>
    </div>
  );
}


export function CloseIcon({ className, onClick }){
  return(
    <svg onClick={onClick} tabIndex='1' className={className ? className : ''} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path id="Icon_material-close" data-name="Icon material-close" d="M27.5,9.514,25.486,7.5,17.5,15.486,9.514,7.5,7.5,9.514,15.486,17.5,7.5,25.486,9.514,27.5,17.5,19.514,25.486,27.5,27.5,25.486,19.514,17.5Z" transform="translate(-7.5 -7.5)" fill="#fff"/>
    </svg>
  );
}


export function MenuIcon({ className, onClick }){
  return (
    <svg onClick={onClick} tabIndex='1' className= {className ? className : ''} xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20">
      <path id="Icon_material-menu" data-name="Icon material-menu" d="M4.5,29h30V25.667H4.5Zm0-8.333h30V17.333H4.5ZM4.5,9v3.333h30V9Z" transform="translate(-4.5 -9)" fill="#fff"/>
    </svg>
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
   
  }

  return(
    <header className="section-header">
      { heading }
      <div className='subtitle'>{ subtitle }</div>
    </header>
  );
}

export function TruckIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="62.5" height="50" viewBox="0 0 62.5 50">
      <path id="Icon_awesome-truck" data-name="Icon awesome-truck" d="M60.938,34.375H59.375V23.818A4.688,4.688,0,0,0,58,20.508l-9.756-9.756a4.688,4.688,0,0,0-3.311-1.377H40.625V4.688A4.689,4.689,0,0,0,35.938,0H4.688A4.689,4.689,0,0,0,0,4.688v31.25a4.689,4.689,0,0,0,4.688,4.687H6.25a9.375,9.375,0,1,0,18.75,0H37.5a9.375,9.375,0,0,0,18.75,0h4.688A1.567,1.567,0,0,0,62.5,39.063V35.938A1.567,1.567,0,0,0,60.938,34.375ZM15.625,45.313a4.687,4.687,0,1,1,4.687-4.687A4.689,4.689,0,0,1,15.625,45.313Zm31.25,0a4.687,4.687,0,1,1,4.688-4.687A4.689,4.689,0,0,1,46.875,45.313ZM54.688,25H40.625V14.063h4.307l9.756,9.756Z" fill="#fff"/>
    </svg>
  )
}


export function CheckIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
      <path id="Icon_awesome-check-square" data-name="Icon awesome-check-square" d="M44.643,52.25H5.357A5.357,5.357,0,0,1,0,46.893V7.607A5.357,5.357,0,0,1,5.357,2.25H44.643A5.357,5.357,0,0,1,50,7.607V46.893A5.357,5.357,0,0,1,44.643,52.25ZM21.8,41.306,42.334,20.77a1.786,1.786,0,0,0,0-2.525L39.809,15.72a1.786,1.786,0,0,0-2.525,0L20.536,32.467l-7.819-7.819a1.786,1.786,0,0,0-2.525,0L7.666,27.173a1.786,1.786,0,0,0,0,2.525L19.273,41.306A1.786,1.786,0,0,0,21.8,41.306Z" transform="translate(0 -2.25)" fill="#fff"/>
    </svg>
  );
}


export function CreditCardIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64.286" height="50" viewBox="0 0 64.286 50">
      <path id="Icon_awesome-credit-card" data-name="Icon awesome-credit-card" d="M0,46.893A5.359,5.359,0,0,0,5.357,52.25H58.929a5.359,5.359,0,0,0,5.357-5.357V27.25H0ZM21.429,39.3a1.343,1.343,0,0,1,1.339-1.339H37.946A1.343,1.343,0,0,1,39.286,39.3v4.464a1.343,1.343,0,0,1-1.339,1.339H22.768a1.343,1.343,0,0,1-1.339-1.339Zm-14.286,0a1.343,1.343,0,0,1,1.339-1.339h8.036A1.343,1.343,0,0,1,17.857,39.3v4.464a1.343,1.343,0,0,1-1.339,1.339H8.482a1.343,1.343,0,0,1-1.339-1.339Zm57.143-31.7v5.357H0V7.607A5.359,5.359,0,0,1,5.357,2.25H58.929A5.359,5.359,0,0,1,64.286,7.607Z" transform="translate(0 -2.25)" fill="#fff"/>
    </svg>
  );
}

export function SearchIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19.997" height="20" viewBox="0 0 19.997 20">
      <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M19.725,17.291,15.83,13.4a.937.937,0,0,0-.664-.273H14.53a8.12,8.12,0,1,0-1.406,1.406v.637a.937.937,0,0,0,.273.664l3.894,3.894a.934.934,0,0,0,1.324,0l1.105-1.105A.942.942,0,0,0,19.725,17.291Zm-11.6-4.168a5,5,0,1,1,5-5A5,5,0,0,1,8.124,13.124Z" fill="#fff"/>
    </svg>
  );
}




export function FeatureCard({Icon, title, text}){

  return(
    <div className="feature-card">
      <div className="circle">
        <Icon/>
      </div>
      <div className="text">
        <h3>{ title }</h3>
        <p>{ text }</p>
      </div>
    </div>
  );
}