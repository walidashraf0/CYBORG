import './SectionHeader.css';



const SectionHeader = (props) => {
  return (
    <div className="popular-text">
        <span className="most-title">{props.title}</span>
        <em className="most-right">{props.right}</em>
    </div>
  )
}

export default SectionHeader