import './Buttons.css';

const PrimaryButton = (props) => {
  return (
    <div className='button primary-btn'>
        <a href='/#'>{props.children}</a>
    </div>
  )
}

const SecondaryButton = (props) => {
  return (
    <div className='button secondry-btn'>
        <a href='/#'>{props.children}</a>
    </div>
    
  )
}

export default PrimaryButton;
export { SecondaryButton }