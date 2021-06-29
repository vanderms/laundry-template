import { PhoneInfo, MailInfo, SocialMediaInfo } from '../utilities/utilities';

export default function Infobar(){
  return(
    <div className="infobar">
      <div className="info-container">
        <PhoneInfo/>
        <MailInfo/>
      </div>
      <div className="social-media">
        <SocialMediaInfo/>
      </div>
    </div>
  );
}