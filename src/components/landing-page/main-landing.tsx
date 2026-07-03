import "../../css/landin-page/main-landing-page.css"
import imgOffice from "../../assets/images/sofaimage.jpeg"


export default function MainLanding () {
    return (
        <div className="main_landing_container">
            <h2 className="main_landing_title">Acredito no Poder da Escuta</h2>

            <p>
                Escolhi a Psicologia porque acredito que toda pessoa merece ser ouvida com respeito, empatia e verdade.

                Vejo a terapia como um espaço onde cada história tem valor e onde é possível compreender emoções, enfrentar desafios e construir novos caminhos. Minha atuação é guiada pela ética, pelo compromisso com o conhecimento científico e pelo desejo genuíno de contribuir para o bem-estar emocional de cada paciente.

                Inspirado pelos estudos e pelas contribuições da Análise do Comportamento, busco oferecer um atendimento acolhedor, responsável e personalizado, sempre respeitando a individualidade de cada pessoa.

                Mais do que tratar sintomas, meu objetivo é ajudar você a compreender a si mesmo, fortalecer seus recursos internos e viver com mais equilíbrio e qualidade de vida.
            </p>

            <h3>Sua história merece ser ouvida com respeito, compreendida com profundidade e acolhida sem julgamentos.</h3>
            <section className="main_landing_container_image">
                <img
                    className="landing_img"
                    src={imgOffice}
                    alt="Imagem de um consultório de psicólogo"
                />

                <div className="landing_text">
                    <p>Consultório</p>
                </div>
            </section>
        </div>
    )
}