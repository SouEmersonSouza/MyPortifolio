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
                        <div className={styles.social} class="animate__animated animate__bounce">
                            <a href=""><i><BsFacebook /></i></a>
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
                        <div className={styles.home}>
                            <a href="index.html">
                                INÍCIO
                                <p>Home</p>
                            </a>

                        </div>
                        <div className={styles.about}>
                            <a href="index.html">
                                SOBRE
                                <p>About</p>
                            </a>
                        </div>
                        <div className={styles.portifolio}>
                            <a href="index.html">
                                PORTIFÓLIO
                                <p>Portifolio</p>
                            </a>
                        </div>
                        <div className={styles.projects}>
                            <a href="index.html">
                                PROJETOS
                                <p>Projects</p>
                            </a>

                        </div>
                        <div className={styles.contacts}>
                            <a href="index.html">
                                CONTATOS
                                <p>Contacts</p>
                            </a>

                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}