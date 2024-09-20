import "../styles/utility.css";
import "../styles/home.css";
import "../styles/header.css";
import "../styles/buttons.css";
import "../styles/main.css";
import "../styles/sobre.css";
import "../styles/noticias.css";
import HeroRectangleOne from "../assets/img/rectangleOne.png";
import HeroRectangleTwo from "../assets/img/RectangleTwo.png";
import "../styles/hero.css";
import Close from '../assets/img/close.svg';
import Menu from '../assets/img/Menu.svg';
import Logo from "../assets/img/logo_moto.png";
import Gato from '../assets/img/concerto.jpg'; 
import Vacina from '../assets/img/motoconcertando.jpeg'
import Tech from '../assets/img/corrida_moto.jpg'
import { useState } from "react";
import Button from "../components/Button";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

   

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo PowerMotos Party" width={250} height={150} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solutions">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contato</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg link" href="#login">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solutions">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contato</a></li>
                                        <li><a className="reverse-color" href="#login">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retângulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retângulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>Acelere com confiança: Encontre as melhores peças para sua moto!</h1>
                    <p>Para quem vive a paixão pelas duas rodas, oferecemos peças de alta qualidade para sua moto. Acelere com segurança e performance em cada curva!</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <div className="new">
                <h2>Notícias</h2>
                <section className="news container py-md">
                    <div className="card">
                        <img src={Vacina} alt="Vacinação de pets" />
                        <div className="card-content">
                            <h3>Como Manter Sua Moto Sempre Pronta para a Estrada</h3>
                            <p>Confira nossas dicas de manutenção e saiba quais peças são essenciais para garantir que sua moto esteja sempre pronta para rodar com segurança.</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Gato} alt="Novas Tendências em Peças de Alto Desempenho" />
                        <div className="card-content">
                            <h3>Novas Tendências em Peças de Alto Desempenho</h3>
                            <p>Descubra as últimas novidades em peças de alta performance para melhorar o desempenho da sua moto. Produtos com tecnologia de ponta para pilotos exigentes!</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Tech} alt="Novo Serviço de Odontologia" />
                        <div className="card-content">
                            <h3>Desempenho Máximo nas Pistas: Peças para Pilotos de Alta Velocidade!</h3>
                            <p>Para vencer nas pistas, sua moto precisa estar equipada com as melhores peças. Descubra nossa linha especial de componentes projetados para maximizar potência e durabilidade, e esteja pronto para acelerar com tudo na próxima corrida!</p>
                            <a href="#">Leia mais</a>
                        </div>
                    </div>
                </section>
            </div>

            <section id="about" className="container py-md">
                <h2>Sobre a PowerMoto Parts</h2>
                <p>
                A PowerMoto Parts é uma empresa especializada em fornecer peças e acessórios de alta qualidade para motocicletas, atendendo tanto entusiastas quanto profissionais do setor. Com um compromisso com a excelência, nossa missão é garantir que cada cliente tenha acesso às melhores soluções para suas necessidades de manutenção e personalização.

Fundada por apaixonados por motos, a PowerMoto Parts entende a importância de cada detalhe na performance e estética de uma motocicleta. Por isso, trabalhamos com os principais fabricantes do mercado, oferecendo uma ampla gama de produtos que vão desde peças de reposição até acessórios inovadores.

Nossa equipe é composta por especialistas prontos para ajudar nossos clientes a encontrar exatamente o que precisam, seja para uma simples manutenção ou para um projeto de customização completo. Além disso, garantimos entrega rápida e um atendimento ao cliente excepcional, porque sabemos que cada minuto conta para quem vive a paixão pelas duas rodas.

Na PowerMoto Parts, não vendemos apenas peças; oferecemos um compromisso com a qualidade e a satisfação do cliente. Venha conferir nossas novidades e faça parte da nossa comunidade de motociclistas!
                </p>
            </section>

            <section id="contact" className="container py-md">
                <h2>Contato</h2>
                <p>
                Se tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco! Estamos aqui para ajudar!
                </p>
                <p>
                    <strong>Telefone:</strong> (45) 9 9816-6820 <br />
                    <strong>Email:</strong> contato@powermotoparts.com.br <br />
                    <strong>Endereço:</strong> Av Brasil, 1577, Cascavel, PR
                </p>
            </section>
        </>
    );
}
