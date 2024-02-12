const { fakerES: faker } = require("@faker-js/faker");
const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Vigas frías. VFK-Q",
      brandId: 1,
      description:
        "Viga fría activa de inducción para impulsión de aire en 4 direcciones, marca KOOLAIR, modelo VFK-Q, de longitud (600/1200) mm, ancho 600 mm y altura 200 mm, para instalación en falsos techos modulares o continuos. Incorpora cuatros difusores lineales en los lados de la unidad, con deflectores de aire de material plástico M1 (opcional), para impulsión horizontal con Efecto Coanda del aire de mezcla (primario y secundario). Bandeja frontal abatible para limpieza de batería, con diferentes diseños de perforación para inducción de aire ambiente.",
      features:
        "La unidad integra interiormente plenum con toberas (tipo P/M/G) a ambos lados para impulsión de aire primario, con mecanismo de regulación de las mismas (opcional). Batería interior en posición horizontal de (2/4 tubos) para refrigeración o/y calefacción, tuberías de cobre con conexiones tipo rosca gas de diámetro exterior 12 mm y paquete aleteado de aluminio. Provista de una conexión de aire primario (frontal/lateral) de diámetro 124 mm. Bandeja frontal, envolventes y perfiles fabricados íntegramente en chapa de acero galvanizada. La unidad dispone de soportes para fijación suspendida a forjado. Acabado estándar pintado en RAL 9010 brillo y bajo demanda en RAL a definir. Se pueden suministar equipadas de válvulas de control/equilibrado y detector anticondensación.",
      image: ["VFKQ.jpg"],
      highlight: false,
      document: ["VFKQ_es.pdf"],
    },
    {
      name: "Vigas frías. VFK 600",
      brandId: 1,
      description:
        "Viga fría activa de inducción para impulsión de aire en 4 direcciones, marca KOOLAIR, modelo VFK-Q, de longitud (600/1200) mm, ancho 600 mm y altura 200 mm, para instalación en falsos techos modulares o continuos. Incorpora cuatros difusores lineales en los lados de la unidad, con deflectores de aire de material plástico M1 (opcional), para impulsión horizontal con Efecto Coanda del aire de mezcla (primario y secundario). Bandeja frontal abatible para limpieza de batería, con diferentes diseños de perforación para inducción de aire ambiente.",
      features:
        "La unidad integra interiormente plenum con toberas (tipo P/M/G) a ambos lados para impulsión de aire primario, con mecanismo de regulación de las mismas (opcional). Batería interior en posición horizontal de (2/4 tubos) para refrigeración o/y calefacción, tuberías de cobre con conexiones tipo rosca gas de diámetro exterior 12 mm y paquete aleteado de aluminio. Provista de una conexión de aire primario (frontal/lateral) de diámetro 124 mm. Bandeja frontal, envolventes y perfiles fabricados íntegramente en chapa de acero galvanizada. La unidad dispone de soportes para fijación suspendida a forjado. Acabado estándar pintado en RAL 9010 brillo y bajo demanda en RAL a definir. Se pueden suministar equipadas de válvulas de control/equilibrado y detector anticondensación.",
      image: ["VFK600.jpg"],
      highlight: false,
      document: ["VFK600_es.pdf"],
    },
    {
      name: "Vigas frías. VFK 300",
      brandId: 1,
      description:
        "Viga fría activa de inducción para impulsión de aire en 4 direcciones, marca KOOLAIR, modelo VFK-Q, de longitud (600/1200) mm, ancho 600 mm y altura 200 mm, para instalación en falsos techos modulares o continuos. Incorpora cuatros difusores lineales en los lados de la unidad, con deflectores de aire de material plástico M1 (opcional), para impulsión horizontal con Efecto Coanda del aire de mezcla (primario y secundario). Bandeja frontal abatible para limpieza de batería, con diferentes diseños de perforación para inducción de aire ambiente.",
      features:
        "La unidad integra interiormente plenum con toberas (tipo P/M/G) a ambos lados para impulsión de aire primario, con mecanismo de regulación de las mismas (opcional). Batería interior en posición horizontal de (2/4 tubos) para refrigeración o/y calefacción, tuberías de cobre con conexiones tipo rosca gas de diámetro exterior 12 mm y paquete aleteado de aluminio. Provista de una conexión de aire primario (frontal/lateral) de diámetro 124 mm. Bandeja frontal, envolventes y perfiles fabricados íntegramente en chapa de acero galvanizada. La unidad dispone de soportes para fijación suspendida a forjado. Acabado estándar pintado en RAL 9010 brillo y bajo demanda en RAL a definir. Se pueden suministar equipadas de válvulas de control/equilibrado y detector anticondensación.",
      image: ["VFK300.jpg"],
      highlight: false,
      document: ["VFK300_es.pdf"],
    },
    {
      name: "Actuador rotativo con seguridad. LF230",
      brandId: 2,
      description:
        "Actuador rotativo con función de seguridad para el ajuste de compuertas en servicios técnicos de edificios.",
      features:
        "Modo de funcionamiento: El actuador mueve la compuerta hasta la posición de funcionamiento al mismo tiempo que tensa el muelle de retorno. Cuando se interrumpe la alimentación, la energía del muelle vuelve a colocar la compuerta en la posición de seguridad. Montaje directo y sencillo: Montaje directo y sencillo en el eje de la compuerta con una abrazadera universal, suministrada con un dispositivo antirrotación para impedir que el actuador gire. Ángulo de giro ajustable: Ángulo de giro ajustable mediante topes mecánicos. Alta fiabilidad funcional: El actuador se encuentra protegido contra sobrecargas, no necesita ningún contacto limitador y se detiene automáticamente cuando alcanza el final de carrera.",
      image: ["LF230.jpg"],
      highlight: false,
      document: ["LF230-es.pdf"],
    },
    {
      name: "Actuador rotativo con seguridad. LF24",
      brandId: 2,
      description:
        "Actuador rotativo con función de seguridad para el ajuste de compuertas en servicios técnicos de edificios.",
      features:
        "Modo de funcionamiento: El actuador mueve la compuerta hasta la posición de funcionamiento al mismo tiempo que tensa el muelle de retorno. Cuando se interrumpe la alimentación, la energía del muelle vuelve a colocar la compuerta en la posición de seguridad. Montaje directo y sencillo: Montaje directo y sencillo en el eje de la compuerta con una abrazadera universal, suministrada con un dispositivo antirrotación para impedir que el actuador gire. Ángulo de giro ajustable: Ángulo de giro ajustable mediante topes mecánicos. Alta fiabilidad funcional: El actuador se encuentra protegido contra sobrecargas, no necesita ningún contacto limitador y se detiene automáticamente cuando alcanza el final de carrera.",
      image: ["LF24.jpg"],
      highlight: false,
      document: ["LF24-es.pdf"],
    },
    {
      name: "Unidad de funcionamiento de ambiente. P-22RT-1900D-1",
      brandId: 2,
      description:
        "Actuador rotativo con función de seguridad para el ajuste de compuertas en servicios técnicos de edificios.",
      features:
        "Modo de funcionamiento: El actuador mueve la compuerta hasta la posición de funcionamiento al mismo tiempo que tensa el muelle de retorno. Cuando se interrumpe la alimentación, la energía del muelle vuelve a colocar la compuerta en la posición de seguridad. Montaje directo y sencillo: Montaje directo y sencillo en el eje de la compuerta con una abrazadera universal, suministrada con un dispositivo antirrotación para impedir que el actuador gire. Ángulo de giro ajustable: Ángulo de giro ajustable mediante topes mecánicos. Alta fiabilidad funcional: El actuador se encuentra protegido contra sobrecargas, no necesita ningún contacto limitador y se detiene automáticamente cuando alcanza el final de carrera.",
      image: ["P-22RT-1.jpg"],
      highlight: false,
      document: ["P-22RT-1-es.pdf"],
    },
    {
      name: "Unidad polivalente aire/agua. BRP",
      brandId: 3,
      description:
        "BRP es una unidad polivalente cargada con gas R410A para la producción simultánea e independiente de agua caliente y agua fría. Las polivalentes de 2 tubos están diseñadas para aplicaciones que requieren agua fría/caliente y agua caliente sanitaria durante todo el año. Las polivalentes de 4 tubos están diseñadas para instalaciones en las que se puede demandar simultáneamente agua fría y agua caliente. La máquina está dotada de ventiladores axiales con un bajo nivel de ruido y compresores scroll de alto rendimiento y baja absorción eléctrica. La BRP está dotada de 3 intercambiadores: el intercambiador lado ambiente con paquete de aletas cobre-aluminio y 2 intercambiadores internos de placas. BRP se aplica a ámbitos de tipo residencial, comercial e industrial para servicios de pequeña-media potencia. Además, está disponible en versión estándar, silenciada y de alta eficiencia.",
      features:
        "Campo de funcionamiento Funcionamiento a plena carga hasta 5 °F de temperatura externa en la estación invernal y hasta 114.8 °F en la estación estival. Producción de agua caliente hasta 131 °F (para más detalles, consulte el software de selección y la documentación técnica). Unidad con dos circuitos Las unidades son de dos circuitos, para asegurar la máxima eficiencia, tanto con carga completa como parcial. Control de la temperatura de condensación Dispositivo para el control electrónico de condensación de serie, para funcionamiento incluso con bajas temperaturas, que permite adaptar el caudal de aire a la demanda efectiva de la instalación, beneficiándose con la reducción del consumo.  Opción kit hidrónico integrado Para lograr una solución que también proporcione ahorro energético y que facilite la instalación, estas unidades se pueden configurar con un kit hidrónico integrado del lado aplicación y del lado recuperación. El kit contiene los principales componentes hidráulicos y está disponible en diferentes configuraciones con una sola bomba o con una bomba de reserva para elegir entre diferentes prevalencias útiles.",
      image: ["BRP-60HZ.jpg"],
      highlight: false,
      document: ["BRP.pdf"],
    },
    {
      name: "Unidad de acondicionamiento. TA",
      brandId: 3,
      description:
        "TA es una unidad termoventiladora diseñada para garantizar altas prevalencias, compacta para poder instalarse en horizontal o vertical en ambientes de pequeñas o medias dimensiones. Existen dos versiones dotadas respectivamente de batería de cobre-aluminio de 4-6 rangos de agua caliente o refrigerada, o bien de batería de cobre aluminio de 4 rangos con expansión directa con R410a. La máquina está dotada de ventiladores centrífugos de alta prevalencia, doble aspiración, palas hacia delante y motor eléctrico directamente acoplado de varias velocidades (tres seleccionables). Además, la unidad posee una bandeja para la recogida de la condensación interna y aislada en aleación de aluminio tanto para la configuración horizontal como vertical. Amplia elección de mandos a distancia y accesorios para satisfacer las varias necesidades como batería de post-calentamiento de 1 y 2 rangos, filtro de aire G4, rejilla de aspiración e impulsión, cámara de mezcla, bridas de ventilación con bocas circulares.",
      features:
        "Las unidades de acondicionamiento de la serie TA están destinadas al uso en instalaciones civiles, comerciales y hoteleras para aplicaciones en ambientes de pequeñas y medianas dimensiones. Las unidades de la serie TA se caracterizan por su compactibilidad (requisito indispensable para las típicas aplicaciones de falso techo), baja rumorosidad y la elevada presión estática útil. La amplia disponibilidad de accesorios (como por ejemplo los filtros de bolsa y la cámara de mezcla de 3 persianas) permite satisfacer las más diversas exigencias de instalación •  Estructura realizada con paneles sandwich con un espesor de 15mm y poliuretano interpuesto (densidad 40kg/m3). El panel de aspiración está equipado con una brida para la unión con los posibles canales de aire.  La fijación horizontal o vertical de pared de la unidad se facilita con las abrazaderas apropiadas. •  Filtración del aire realizada por los filtros clase G4 según EN779 (espesor de 50mm) de serie colocados en aspiración. •  Ventiladores centrífugos de doble aspiración de paletas hacia adelante con motor directamente acoplado. El motor monofásico 230V-50Hz es plurivelocidad, de las cuales tres se pueden seleccionar mediante el panel de mando •  Bandeja de recogida de condensación interna aislada con aleación de aluminio. •  Baterías de 4 y 6 rangos que se pueden alimentar con agua caliente o refrigerada, realizadas en tubo de cobre con aletas de aluminio bloqueadas mediante expansión mecánica de los tubos. Se proporcionan los manguitos roscados para las conexiones hidráulicas y el purgador del aire.  Está prevista la posibilidad de girar las baterías en la obra. •  Están disponibles también baterías de 4 rangos de expansión directa, que trabajan con fluido R410A y baterías de post-calentamiento de 1 y 2 rangos realizadas en tubo de cobre con aletas de aluminio, bloqueadas mediante expansión mecánica de los tubos.",
      image: ["TA-60HZ.jpg"],
      highlight: false,
      document: ["TA.pdf"],
    },
    {
      name: "Enfriadora aire-agua. NYB",
      brandId: 3,
      description:
        "Enfriadora aire-agua para instalación en el exterior. Adecuada para el acondicionamiento estival y la producción de agua caliente de servicios de medias-grandes dimensiones en edificios de carácter residencial, comercial e industrial.",
      features:
        "Las unidades de acondicionamiento de la serie TA están destinadas al uso en instalaciones civiles, comerciales y hoteleras para aplicaciones en ambientes de pequeñas y medianas dimensiones. Las unidades de la serie TA se caracterizan por su compactibilidad (requisito indispensable para las típicas aplicaciones de falso techo), baja rumorosidad y la elevada presión estática útil. La amplia disponibilidad de accesorios (como por ejemplo los filtros de bolsa y la cámara de mezcla de 3 persianas) permite satisfacer las más diversas exigencias de instalación •  Estructura realizada con paneles sandwich con un espesor de 15mm y poliuretano interpuesto (densidad 40kg/m3). El panel de aspiración está equipado con una brida para la unión con los posibles canales de aire.  La fijación horizontal o vertical de pared de la unidad se facilita con las abrazaderas apropiadas. •  Filtración del aire realizada por los filtros clase G4 según EN779 (espesor de 50mm) de serie colocados en aspiración. •  Ventiladores centrífugos de doble aspiración de paletas hacia adelante con motor directamente acoplado. El motor monofásico 230V-50Hz es plurivelocidad, de las cuales tres se pueden seleccionar mediante el panel de mando •  Bandeja de recogida de condensación interna aislada con aleación de aluminio. •  Baterías de 4 y 6 rangos que se pueden alimentar con agua caliente o refrigerada, realizadas en tubo de cobre con aletas de aluminio bloqueadas mediante expansión mecánica de los tubos. Se proporcionan los manguitos roscados para las conexiones hidráulicas y el purgador del aire.  Está prevista la posibilidad de girar las baterías en la obra. •  Están disponibles también baterías de 4 rangos de expansión directa, que trabajan con fluido R410A y baterías de post-calentamiento de 1 y 2 rangos realizadas en tubo de cobre con aletas de aluminio, bloqueadas mediante expansión mecánica de los tubos.",
      image: ["NYB-60HZ.jpg"],
      highlight: false,
      document: ["NYB.pdf"],
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
