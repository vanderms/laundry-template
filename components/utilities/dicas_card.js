import Link from 'next/link';

export default function DicasCard({imgSrc, title, text, href, side}){

  return(
    <div className={"card " + side}>
      <div className="bg-img"style={ {backgroundImage: `url(${imgSrc})`}}></div>  
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
        <div className="link-placeholder"></div>
        <Link href={'/dicas/' + href}>
            <a>LEIA MAIS</a>
        </Link>   
      </div>
    </div>
  );
}