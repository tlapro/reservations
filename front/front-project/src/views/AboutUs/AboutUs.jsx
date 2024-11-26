import styles from "./AboutUs.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>

        <h1>Sobre Nosotros</h1>

      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <h1>La Perla Caribeña</h1>
            <hr className="w-100"/>
            <p>
              En 1974, en una pequeña isla caribeña de aguas cristalinas y
              arenas doradas, nació un sueño que cambiaría la vida de sus
              habitantes y cautivaría a miles de turistas. Un grupo de
              pescadores locales, profundamente enamorados del mar y su cultura,
              decidió transformar su pasión por la pesca y la gastronomía en un
              restaurante familiar. Así nació Frente al Mar, un lugar humilde
              pero lleno de esencia, que con el tiempo se convertiría en un
              ícono de la gastronomía caribeña.
            </p>
          </div>
          <div className="col">
            <video className={styles.videoCard} autoPlay muted loop playsInline>
              <source
                src="https://cdn.pixabay.com/video/2024/11/22/242786_large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <img className="mt-5"
              src="https://img.freepik.com/fotos-premium/decoracion-nautica-restaurante-redes-pesca-rusticas-boyas-que-mejoran-experiencia-comer_641503-86195.jpg"
              alt=""
            />
          </div>
          <div className="col">
            <h1 className="text-center">Los Primeros Años</h1>
            <hr className="w-100"/>
            <p>
              El primer capítulo de Frente al Mar comenzó en 1974, cuando un
              pequeño grupo de pescadores se unió para ofrecer lo mejor de su
              pesca diaria en un restaurante muy modesto. Situado en la costa,
              sin lujos ni pretensiones, el local consistía en un pequeño bar en el cual
              no existía un menú formal, sino que los pescadores ofrecían a
              sus visitantes los mariscos y pescados más frescos, capturados ese
              mismo día. La especialidad del lugar eran los pescados asados al
              estilo tradicional caribeño, acompañados de arroz con coco y
              plátanos fritos, todo preparado con ingredientes locales. Los
              pocos turistas que llegaban a la isla pronto descubrían este
              rincón escondido y se convertían en clientes habituales, atraídos
              por la frescura de los platos y el ambiente relajado y familiar
              del restaurante. Frente al Mar no solo ofrecía comida, sino
              también una experiencia única: comer con los pies en la arena
              mientras se disfruta de una vista incomparable del océano.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <h1>Expansión y Evolución</h1>
            <hr className="w-100"/>
            <p>
              Durante los años 80, el Caribe vivió un auge en el turismo, y con
              ello, la popularidad de Frente al Mar comenzó a crecer. La fama de
              su comida se extendió más allá de los habitantes de la isla,
              llegando a turistas de diferentes partes del mundo, quienes,
              atraídos por las recomendaciones de boca a boca, no querían
              perderse la oportunidad de probar los mariscos frescos y las
              recetas caribeñas auténticas. A mediados de los 80, el restaurante
              sufrió su primera expansión significativa. Se añadió una terraza
              que ofrecía una vista panorámica al mar, convirtiendo cada comida
              en una experiencia memorable. Los chefs, aunque aún con métodos
              tradicionales, comenzaron a introducir platos más elaborados, como
              el ceviche de camarones y las langostas a la parrilla. Durante
              estos años, Frente al Mar consolidó su reputación como uno de los
              mejores lugares de la isla para disfrutar de los sabores frescos
              del océano. El restaurante no solo se destacó por la calidad de
              sus platos, sino también por el ambiente relajado y acogedor que
              ofrecía a los visitantes. Las mesas de madera, las velas sobre la
              mesa, la brisa marina y la música caribeña en vivo creaban una
              atmósfera única, perfecta para pasar una tarde o noche en buena
              compañía.
            </p>
          </div>
          <div className="col">
            <img className="w-75"
              src="https://media.revistaad.es/photos/60c73a6f71e311d46c28ddf8/master/w_1600,c_limit/296857.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <img
              className="w-75"
              src="https://media.revistaad.es/photos/60c73a6d589517c2edfd02d7/master/w_1600,c_limit/296855.jpg"
              alt=""
            />
          </div>
          <div className="col">
            <h1>Modernización sin Perder la Esencia</h1>
            <hr className="w-100"/>
            <p>
              Ya en los años 90, Frente al Mar se había establecido como un
              destino obligado para los turistas que llegaban a la isla, pero
              los propietarios nunca quisieron perder de vista su esencia: la
              conexión con el mar y la tradición pesquera local. A medida que el
              restaurante se modernizaba, los métodos tradicionales de pesca,
              que habían sido la base de su éxito, continuaron siendo un pilar
              fundamental. En esta época, Frente al Mar decidió seguir apostando
              por la sostenibilidad, trabajando directamente con los pescadores
              locales para asegurar la frescura y calidad de cada ingrediente.
              Se introdujeron innovaciones en la cocina, sin perder la
              autenticidad de los sabores caribeños. Entre los nuevos platos que
              se incorporaron al menú, destacaban las costillas de cerdo con
              salsa de mango y el arroz con mariscos y frutas tropicales. El
              restaurante también se convirtió en un referente en la isla por su
              compromiso con la comunidad. No solo empleaba a los lugareños,
              sino que también apoyaba iniciativas de conservación marina y de
              preservación de la cultura pesquera, convirtiéndose en un modelo a
              seguir en la región.
            </p>
          </div>
        </div>
      </div>


      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
          <h1>El Legado: El Restaurante del Caribe con Sabor Local</h1>
            <hr className="w-100"/>
            <p>
              Hoy, Frente al Mar es mucho más que un restaurante. Es una
              institución, un lugar lleno de historia y tradición. Después de
              más de 40 años de servicio, sigue siendo un destino imperdible
              para quienes buscan una auténtica experiencia gastronómica
              caribeña. El restaurante ha mantenido su esencia de ser un refugio
              frente al mar, donde los sabores locales se encuentran con la
              calidez de la comunidad. Con la modernización de las
              instalaciones, Frente al Mar ha logrado expandir su presencia,
              pero siempre respetando sus orígenes. Se han renovado los espacios
              para brindar una experiencia aún más cómoda, pero siempre
              conservando la atmósfera relajada y única que lo caracteriza. Los
              clientes que llegan al restaurante no solo disfrutan de un buen
              plato, sino también de la historia de una familia y una comunidad
              que, con el paso de los años, ha logrado mantener vivo el espíritu
              de sus primeros días. Con el tiempo, Frente al Mar ha sido
              reconocido con premios internacionales por su cocina, su
              compromiso con la sostenibilidad y su legado cultural. El
              restaurante continúa siendo un símbolo de la identidad del Caribe,
              un lugar donde la frescura del mar se combina con el calor humano
              y la tradición, creando una experiencia única para todo aquel que
              quiera disfrutar del verdadero sabor del Caribe.
            </p>
           
          </div>
          <div className="col">
          <img
              className="w-100"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2a/ee/1d/terrace-area.jpg?w=1100&h=-1&s=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
