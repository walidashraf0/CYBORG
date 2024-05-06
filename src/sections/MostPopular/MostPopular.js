import './MostPopular.css';
import { Card, SectionHeader, SectionWrapper } from '../../components/index';
import MostPopularData from '../../Data/MostPopularData';



const MostPopular = () => {

  

  const cards = MostPopularData.map((card) => {
    return <Card key={card.id} image={card.image} title={card.title} subTitle={card.subTitle} rate={card.rate} download={card.download} />
  })





  return (
    <>
    <SectionWrapper>
      <SectionHeader title="Most Popular" right="Right Now"/>
      {/* <div className="popular-text">
        <span className="most-title">Most Popular</span>
        <em className="most-right">Right Now</em>
      </div> */}
      <div className='most-popular-items'>
        {cards}
        {/* <Card image={popular_01} title="Fortnite" subTitle="Sandbox" rate="4.8" download="2.3M" />
        <Card image={popular_02} title="PubG" subTitle="Battle S" rate="4.8" download="2.3M" />
        <Card image={popular_03} title="Dota2" subTitle="Steam-X" rate="4.8" download="2.3M" />
        <Card image={popular_04} title="CS-Go" subTitle="Legendary" rate="4.8" download="2.3M" />
        <Card image={popular_04} title="CS-Go" subTitle="Legendary" rate="4.8" download="2.3M" />
        <Card image={popular_04} title="CS-Go" subTitle="Legendary" rate="4.8" download="2.3M" />
        <Card image={popular_04} title="CS-Go" subTitle="Legendary" rate="4.8" download="2.3M" />
        <Card image={popular_04} title="CS-Go" subTitle="Legendary" rate="4.8" download="2.3M" /> */}
      </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopular