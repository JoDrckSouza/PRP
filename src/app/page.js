import Image from 'next/image';
import styles from './page.module.css';
import logo from './img/Vector.png';
import Seglogo from './img/Vector (1).png';
import pesquisa from './img/pesquisa.png';
import perfil from './img/perfil.png';
import notificação from './img/notificação.png';
import lupa from './img/lupa.png';
import capa from './img/capa.jpeg'


export default function Home() {
  return (
      <header className={styles.header}>
        <div className={styles.div1}>
        <div className={styles.div1}>
          <div className={styles.logo}>
            <Image src={logo} alt="imagem logo prp"/>
            <h1>PRP</h1>
          </div>
          <div className={styles.text}>
            <h2 className={styles.h2}>Plataforma de <br/>Registro de Pets
            </h2>
          </div>
        </div>
        <div className={styles.div2}>
          <button className={styles.button}>
            <p className={styles.text}>
              Por que cadastrar meu pet?
            </p>
          </button>
          <button className={styles.button}>
            <p className={styles.text}>
            Quem Somos?
            </p>
          </button>
          <button className={styles.button}>
            <p className={styles.text}>
            Como Funciona?
            </p>
          </button>
        </div>
        <div className={styles.div3}>
          <input className={styles.textImput} 
          placeholder='O que você procura?' type='text'          
          />
          <Image src={pesquisa} alt="imagem logo prp"/>
        </div>
        <button className={styles.loing}>
          <Image src={perfil} alt='segunda logo'/>
        </button>
        </div>
      </header>
  );
}
