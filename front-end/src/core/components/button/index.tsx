import './style.scss'


type Props = {
    text: string
}

const ButtonIcon = ({text}: Props) => (
    <button className="btn"><h1 className="text-button">{text}</h1></button>
)
export default ButtonIcon;