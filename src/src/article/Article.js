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
        </section>
        <ArticleRate/>
      </div>
    );
}

export default Article;
