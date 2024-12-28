interface ButtonProps {
    bgStyle: string
    width: string
    textSize: string
    buttonText: string
}

export const Button: React.FC<ButtonProps> = ({ bgStyle, width, textSize, buttonText}) => {
    return(
        <div className={`bg-${bgStyle} w-${width}`}>
            <button className={`font-bold text-${textSize} text-white py-2`}>{buttonText}</button>
        </div>
    )
}