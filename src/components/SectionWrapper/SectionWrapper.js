import './SectionWrapper.css';


const SectionWrapper = (props) => {
  return (
    <div className="most-popular">
        {props.children}
    </div>
  )
}

export default SectionWrapper