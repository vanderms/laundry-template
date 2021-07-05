import { SectionHeader, SectionCard } from "../utilities/utilities";


export default function BaixeOApp(){
  return(
      <section className="baixe-o-app-section section">
        <SectionHeader
          title='A LAUNDRY NA PALMA DA SUA MÃO'
          subtitle='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
          highlight='LAUNDRY'
        />
        <SectionCard
          type='left'
          paragraphs={[
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
          ]}   
          bgImageClass='baixe-o-app-background-image'     
          cta={<span className='cta'>BAIXE O APP</span>}
        />
      </section>
  );
}