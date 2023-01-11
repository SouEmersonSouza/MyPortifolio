import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiEgyptianBird } from "react-icons/gi";
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDownload } from 'react-icons/bs'
import 'animate.css';

export default function Header() {
    let name = "Emerson Souza"
    teste()
    function teste() {
        name = "12"
    }
    return (
        <div className={styles.container}>
            <header>
                <nav className={styles.navBar}>
                    <div className={styles.firstCol}>
                        <div className={styles.title}>

                            let<p>name</p> = <span>"Emerson Souza"</span>

                            <div>
                                <GiEgyptianBird />
                            </div>

                        </div>
                        <div className={styles.social}>
                            <a href=""><BsFacebook /></a>
                            <a href=""><BsLinkedin /></a>
                            <a href=""><BsGithub /></a>
                            <a className={styles.download} href="">
                                <p>
                                    Download My CV
                                </p>
                                <BsDownload />
                            </a>
                        </div>
                    </div>
                    <div className={styles.secondCol}>
                        <span class='toggle'>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                        <div class='menu'>
                            <div class='menuContent'>
                                <a href="index.html" className={styles.home}>
                                    INÍCIO
                                    <p>Home</p>
                                </a>

                                <a href="index.html" className={styles.about}>
                                    SOBRE
                                    <p>About</p>
                                </a>
                                <a href="index.html" className={styles.portifolio}>
                                    PORTIFÓLIO
                                    <p>Portifolio</p>
                                </a>
                                <a href="index.html" className={styles.projects}>
                                    PROJETOS
                                    <p>Projects</p>
                                </a>
                                <a href="index.html" className={styles.contacts}>
                                    CONTATOS
                                    <p>Contacts</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}