import React from 'react';
import ArticleTitle from './articleTitle/ArticleTitle'
import ArticleTimeDuration from './articleTimeDuration/ArticleTimeDuration'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import ArticleRate from './articleRate/ArticleRate'
import './Article.css';

const Article = () => {
    return (
      <div className="Article">
      <div className="Article-title-wrapper">
        <ArticleTitle />
      </div>
        <Breadcrumb />
        <ArticleTimeDuration />
        <section className="Article-intro">
            <h3>¿Qué es el feminismo?</h3>
            <p>
                El feminismo como movimiento filosófico empezó en  el siglo XVII y ha tenido varias transformaciones, sabores e interpretaciones a lo largo de la historia. Este movimiento cuestiona la situación de las mujeres en la sociedad, como han sido pensadas y como su sexo ha sido conceptualizado. El artículo <a href="http://www.mujeresenred.net/spip.php?article1397">Feminismo: historia y corrientes</a> describe las transformaciones por las que el movimiento ha pasado desde sus inicios hasta ahora.
            </p>
            <p>
                A pesar de que las mujeres fueron parte de los grandes acontecimientos históricos, esta presencia fue más subordinada hacia objetivos más globales, relegándolas al ámbito privado de la familia y el hogar, dejando el espacio público exclusivamente para los hombres. Es a partir de la Revolución Francesa, ligada a la ideología de la racionalidad e igualdad, junto con la lucha por nuevas -y mejores- condiciones de trabajo generadas por la Revolución Industrial, que las mujeres empiezan a realizar una búsqueda más puntual de reivindicación de sus derechos, en el plano civil, político, educativo y laboral.
            </p>
            <p>
            <em>[ ...En el s. XIX, Flora Tristán vincula las reivindicaciones de la mujer con las luchas obreras. Publica en 1842 La Unión Obrera, donde presenta el primer proyecto de una Internacional de trabajadores, y expresa “la mujer es la proletaria del proletariado [...] hasta el más oprimido de los hombres quiere oprimir a otro ser: su mujer”. ]</em>
            </p>
            <p>Es importante notar que éste no es un movimiento homogéneo, sino que se ha nutrido (y se nutre) de diferentes ideologías transversales en la sociedad, pero en resumen es un movimiento integral político que refleja la lucha de las mujeres contra cualquier tipo de discriminación.  
Una de las discusiones alrededor del movimiento es:  si el feminismo busca la igualdad, <a href="http://porquetulodigas.tumblr.com/post/97974251633/si-el-feminismo-busca-la-igualdad-por-qu%C3%A9-se">¿por qué se llama feminismo y no igualitarismo?</a>
            </p>
            <h3>Actualidad</h3>
            <p>
             En la actualidad se apunta mucho a los logros obtenidos por las mujeres y la mayor representatividad que existe de las mismas. Las mujeres <b>pueden en efecto estudiar</b>, <a href="http://www.unwomen.org/es/what-we-do/ending-violence-against-women/facts-and-figures#note">[En el entorno escolar, las pruebas señalan que las niñas están en situación de mayor riesgo de sufrir violencia sexual, acoso y explotación..]</a>, <b>tienen derechos civiles</b>,  
             <a href="http://www.ohchr.org/EN/Issues/Women/WRGS/Pages/WRGSIndex.aspx">[Aún millones de mujeres experimentan discriminación en la aplicación de sus derechos]</a>, <b>pueden acceder a cargos políticos y de liderazgo </b>
             <a href="http://www.unwomen.org/es/what-we-do/leadership-and-political-participation/facts-and-figures">[Alrededor del mundo, sólo un 22% de parlamentarios nacionales son mujeres] </a>, 
             <b>tienen libertad sobre sus cuerpos </b><a href="http://www.unwomen.org/es/what-we-do/ending-violence-against-women/facts-and-figures#note">[..Se estima que 200 millones de niñas y mujeres han sufrido algún tipo de mutilación/ablación genital femenina en 30 países..].</a> 
             </p>
             <p>
             Sin embargo, a pesar de esta percibida igualdad, aún existe discriminación y estamos lejos de reflejar una presencia igualitaria en diferentes instancias de la sociedad, más aún, la valoración de las mujeres por su físico y no por su capacidad, sigue siendo el común incluso en las sociedades occidentales <a href="http://www.imdb.com/title/tt1784538/?ref_=tt_rec_tt">[ver Miss Representation]</a> y, aunado a esto el problema latente de la violencia contra mujeres y niñas, en sus diferentes formas.
            </p>
            <h3>Datos y debates en torno al feminismo en Chile:</h3>
            <ul>
                <li> <a href="http://www.memoriachilena.cl/602/w3-article-95954.html">Precursoras del Feminismo en Chile</a></li>
                <li> <a href="http://www.minmujeryeg.cl/femicidios/que-es/">Femicidios en Chile al 2017</a></li>
                <li> <a href="http://www.quepasa.cl/articulo/actualidad/2017/06/no-hay-refugio.shtml/">Violencia de Género en Chile. No hay refugio.</a></li>
                <li> <a href="http://www.elmostrador.cl/braga/2017/02/14/ley-de-violencia-intrafamiliar-las-razones-de-por-que-se-dejo-fuera-el-pololeo/">Violencia en el pololeo. Un tema pendiente.</a></li>
                <li> <a href="http://www.bcn.cl/observatorio/americas/noticias/leyes-integrales-de-violencia-contra-las-mujeres-en-america-latina-el-caso-de-uruguay">Leyes integrales de violencia contra las mujeres en América Latina: el caso de Uruguay</a></li>
                <li> <a href="https://www.leychile.cl/Consulta/listado_n_sel?_grupo_aporte=&sub=828&agr=2&comp=">Mujer, normas desde 1990</a></li>
            </ul>
            <h3>Datos y debates en torno al feminismo en Ecuador:</h3>
            <ul>
                <li> <a href="http://www.bbc.com/mundo/noticias-america-latina-37828573">Mapa de femicidios por país</a></li>
                <li> <a href="http://www.eluniverso.com/noticias/2017/01/24/nota/6014020/casos-femicidos-ecuador-se-han-duplicado-2017-segun-dinased">Casos de femicidio en Ecuador</a></li>
                <li> <a href=" http://www.andes.info.ec/es/noticias/mujeres-luchan-equidad-laboral-ecuador.html">Equidad laboral</a></li>
                <li>El acoso sigue siendo pan de cada día en la sociedad ecuatoriana: #PrimerAcoso #NoCallamosMás - Grupo secreto en Facebook que tiene más de 27.000 miembros</li>
                <li> <a href="http://elecciones2017.gkillcity.com/2017/02/03/leyes-machistas-en-ecuador/">Un link interesante acerca de las leyes machistas que han existido éstos últimos años en Ecuador</a></li>
            </ul>
            <h3>El rol de los hombres en la lucha</h3>
            <p>
                Uno de los debates dentro de esta lucha, fue entender qué papel ocupan los hombres en la liberación de las mujeres y la lucha contra el sistema patriarcal en general. En ese sentido han existido debates muy interesantes acerca de si <a href="http://www.tribunafeminista.org/2017/01/el-papel-de-los-hombres-en-la-lucha-feminista/">el rol de hombre rol en la lucha feminista es el de acompañamiento, solidaridad, apoyo y complicidad </a> o si en realidad <a href="https://horizontal.mx/hombres-feministas-y-el-problema-del-privilegio-masculino/">el hombre si puede ser considerado como feminista (a pesar de que la sociedad le atribuya privilegios).</a>
            </p>
            <p>
                <em>[“Debemos evitar apropiarnos de la lucha relativa a las cuestiones de género. Siempre debemos ser conscientes de ello. La tentación existe debido a la tendencia dominante de los hombres. Debemos mantenernos vigilantes y recordar que ésta es una lucha que tienen que liderar las mujeres”. Mbuyiselo Botha, Foro de hombres sudafricanos]</em>
            </p>
        </section>
        <ArticleRate/>
      </div>
    );
}

export default Article;
