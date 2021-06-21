

export default function Infobar(){

  return (
    <section className='infobar'>
      <div className="items">
        <div className='item'>
          <img src="/assets/icons/icon-material-phone.svg" alt="phone icon"/>
          (11) 9999-9999
        </div>
        <div className='item'>
          <img src="/assets/icons/icon-material-email.svg" alt="email icon"/>
          lavanderia-laudry@mail.com
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com" target='_blank' rel="noreferrer noopener">
          <img src="/assets/icons/icon-awesome-instagram.svg" alt="phone icon"/>
        </a>
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer noopener">
          <img src="/assets/icons/icon-awesome-facebook.svg" alt="phone icon"/>
        </a>
        <a href="https://twitter.com" target='_blank' rel="noreferrer noopener">
          <img src="/assets/icons/icon-awesome-twitter.svg" alt="phone icon"/>
        </a>
      </div>
    </section>
  );
}