interface ButtonProps {
    bgStyle: string
    width: string
    textSize: string
    buttonText: string
    color: string
}

export const Button: React.FC<ButtonProps> = ({ bgStyle, width, textSize, buttonText, color }) => {
    return(
        <div className={`bg-${bgStyle} w-${width}`}>
            <button className={`font-bold text-${textSize} text-${color} py-2`}>{buttonText}</button>
        </div>
    )
}