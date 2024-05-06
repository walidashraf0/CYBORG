import './Card.css';
import { FaStar, FaDownload } from "react-icons/fa6";


const Card = (props) => {
  return (
    <>
    <div className='most-popular-item'>
          <div className='card-wrapper'>
            <img className='popular-img' src={props.image} alt='popular-01.jpg' />
            <div className='item-content'>
              <h4 className='item-title'>{props.title} <br />
                <span>{props.subTitle}</span> 
              </h4>
              <ul>
                <li>
                    <span style={{"color": "var(--color-star-icon)"}}><FaStar /></span>
                    <span>{props.rate}</span>
                </li>
                <li>
                    <span style={{"color": "var(--color-primary)"}}><FaDownload /></span>
                    <span>{props.download}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card