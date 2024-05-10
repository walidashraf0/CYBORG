import { SecondaryButton } from '../../components/index';
import './GamingLibraryCards.css';


const GamingLibraryCards = (props) => {





  return (
    <div className='gaming-library-card'>
        <ul>
            <li><img src={props.image} alt={props.title} /></li>
            <li><h4>{props.title}</h4><span>{props.subTitle}</span></li>
            <li><h4>Data Added</h4><span>{props.data_added}</span></li>
            <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.download}</span></li>
            <div className='main-button'>
              <SecondaryButton>Download</SecondaryButton>
            </div>
        </ul>
    </div>
  )
}

export default GamingLibraryCards