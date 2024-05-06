import './Header.css';



const Header = (props) => {
    return (
        <>
        <h1 style={{color: props.color}}>{props.text}</h1>
        </>
    )
}

export default Header