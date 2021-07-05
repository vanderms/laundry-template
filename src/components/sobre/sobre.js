import { SectionHeader, SectionCard } from "../utilities/utilities";


export default function Sobre({handleOpenContactModal}){



  return(
    <section className="sobre-section section">
    <SectionHeader
      title='QUEM SOMOS'
      subtitle='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
      highlight='QUEM'
    />
    <SectionCard
      type='right'
      paragraphs={[
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .',
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
      ]}
      bgImageClass='quem-somos-background-image'     
      cta={<span onClick={handleOpenContactModal} className='cta'>CONTATO</span>}
    />
  </section>

  )


}