import './GamingLibrary.css';
import { GamingLibraryCards, SectionHeader, SectionWrapper } from '../../components/index';
import GamingLibraryData from '../../Data/GamingLibraryData';


const GamingLibrary = () => {


    const cards = GamingLibraryData.map((card) => {
        return <GamingLibraryCards key={card.id} image={card.image} title={card.title} subTitle={card.subTitle} data_added={card.date_added} hours_played={card.hours_played} download={card.download} />
      })


  return (
      <>
    <SectionWrapper>
      <SectionHeader title="Your Gaming" right="Library"/>
      <div className='gaming-library-cards'>
        {cards}
      </div>
    </SectionWrapper>
    </>
  )
}

export default GamingLibrary