import style from '../../styles/components/Button.module.sass'

interface Button {
    children?: any
    className?: string
    type?: "button" | "reset" | "submit" | undefined
    onClick?(): any
}

const Button = ({ children, className, type = "button", onClick }: Button) => {

    return (<button type={type} className={`${style.button} ${className}`} onClick={onClick}>
        {children}
    </button>)

}

export default Button