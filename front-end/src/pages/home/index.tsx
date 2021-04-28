import './style.scss'
import NavBar from "../../core/components/navbar";
import ButtonIcon from "../../core/components/button";
import {Link} from 'react-router-dom';

const Home = () => (
    <>
        <div className="content-container">
            <h1 className="title-content">Desafio do Capítulo 3,<br/> Bootcamp DevSuperior</h1>
            <div className="description-content">
                <p className="description-item">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                <p className="description-item">Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
                <p className="description-item">Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="email-content">antforfigma@gmail.com</span></p>
            </div>
            <Link to="/search">
                <ButtonIcon text={"Começar"}/>
            </Link>

        </div>
    </>


)

export default Home;