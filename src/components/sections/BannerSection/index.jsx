import { username } from "../../../data/user"
import bannerImg from "../../../assets/banner-img.png";
import styles from "./style.module.css"

export const BannerSection = () => {
	
	return (

		<section className={styles.sectionbanner}>
			<div className="container">
				<div className={styles.containerText}>
					<span className="label">{username}</span>
					<h1 className="title1">Bem vindo ao meu portfólio</h1>
					<p className="paragraph">Um entusiasta da tecnologia e desenvolvimento web, buscando crescimento contínuo como Administrador e Desenvolvedor Fullstack</p>
					<button className="btn" >Saiba mais</button>
				</div>
			<img src={bannerImg} alt="Banner" />
			</div>
		</section>
		
	)
	
}