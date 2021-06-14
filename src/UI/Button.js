const Button = ({text, className, onClick, chevron}) => {
    let attachedClasses = ["Button", className]
    return (
    <button 
        className={attachedClasses.join(' ')} 
        onClick={onClick} 
        text={text} 
    >
        {text} {chevron && chevron}
    </button>
)}

export default Button 