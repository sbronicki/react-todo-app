const Button = ({text, btnType, onClick}) => {
    let attachedClasses = ["Button"]
    if(btnType) attachedClasses = [...attachedClasses, btnType]
    return (
    <button 
        className={attachedClasses.join(' ')} 
        onClick={onClick} 
        text={text} 
    >
        {text}
    </button>
)}

export default Button 