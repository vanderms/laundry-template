import ContactInfo from "../utilities/contact_info";

export default function Footer(){
  const year = new Date().getFullYear();   
  let period = year.toString();
  if(year != 2021){
    period = "2021 - " + period;
  }

  return (
    <footer className="footer">
      <div className="logo">LAUNDRY</div>
      <div>
        <ContactInfo/>
      </div>     
      <small>© {period} - vanderms. Todos os direitos reservados.</small>
    </footer>
  );
}