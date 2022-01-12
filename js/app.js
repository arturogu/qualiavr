$("#menu-nav").animatedModal({
  animatedIn:'rotateInDownLeft',
  animatedOut:'rotateOutUpRight',
});
$("#contact-nav, #begin, #team-begin, #sol-begin").animatedModal({
  animatedIn:'rotateInDownLeft',
  animatedOut:'rotateOutUpRight',
});
anime({
  targets: '#visor',
  translateY: 150,
  direction: 'alternate',
  loop: true,
  autoplay: true,
  duration: 5000
});

$("#circle1").hover(
  function() {
    $("#work-p").removeClass("hidden");
    $("#work-p").text("Analizamos información detallada sobre tu negocio, escuchando con atención tus necesidades y estudiando el comportamiento de tu cliente.");
  },
  function() {
    $("#work-p").addClass("hidden");
    $("#work-p").text("");
  }
);

$("#circle2").hover(
  function() {
    $("#work-p").removeClass("hidden");
    $("#work-p").text("Como equipo te proporcionamos soluciones para lograr una experiencia única y que se ajuste a tus necesidades. Creamos una propuesta detallada del proyecto, la calendarización de las etapas del trabajo y la cotización del mismo.  Después de ser aceptada se comienza con el desarrollo.");
  },
  function() {
    $("#work-p").addClass("hidden");
    $("#work-p").text("");
  }
);

$("#circle4").hover(
  function() {
    $("#work-p").removeClass("hidden");
    $("#work-p").html("1. Creación de activos necesarios para el proyecto<br/>"+
    "2. Diseño, programación e integración de los activos<br/>"+
    "3. Testing");
  },
  function() {
    $("#work-p").addClass("hidden");
    $("#work-p").html("");
  }
);

$("#circle3").hover(
  function() {
    $("#work-p").removeClass("hidden");
    $("#work-p").text("Antes de la entrega final se proporciona una versión beta en la que puedes vivir la experiencia de tu proyecto y hacer los últimos ajustes necesarios. Se proporcionan los ejecutables para correr el programa y una capacitación para usar el equipo y programa junto con su manual de uso.");
  },
  function() {
    $("#work-p").addClass("hidden");
    $("#work-p").text("");
  }
);

$("#main-logo").click(function() {
  $("#home").removeClass("hidden");
  $("#top-img").removeClass("hidden");
  $("#what").addClass("hidden");
  $("#team").addClass("hidden");
  $("#equipment").addClass("hidden");
  $("#mosaico").removeClass("hidden");
  $("#details").addClass("hidden");
  $("#nosotros-menu").removeClass("active");
  $("#vr-menu").removeClass("active");
  $("#what-menu").removeClass("active");
});

$("#what-menu, .what-menu").click(function() {
  $("#what").removeClass("hidden");
  $("#top-img").addClass("hidden");
  $("#home").addClass("hidden");
  $("#team").addClass("hidden");
  $("#equipment").addClass("hidden");
  $("#nosotros-menu").removeClass("active");
  $("#vr-menu").removeClass("active");
  $("#what-menu").addClass("active");
});

$("#vr-menu, .vr-menu").click(function() {
  $("#equipment").removeClass("hidden");
  $("#top-img").addClass("hidden");
  $("#home").addClass("hidden");
  $("#what").addClass("hidden");
  $("#team").addClass("hidden");
  $("#nosotros-menu").removeClass("active");
  $("#vr-menu").addClass("active");
  $("#what-menu").removeClass("active");
});

$("#nosotros-menu, .nosotros-menu").click(function() {
  $("#top-img").addClass("hidden");
  $("#team").removeClass("hidden");
  $("#home").addClass("hidden");
  $("#what").addClass("hidden");
  $("#equipment").addClass("hidden");
  $("#nosotros-menu").addClass("active");
  $("#vr-menu").removeClass("active");
  $("#what-menu").removeClass("active");
});

function solutionsDetails(target) {
  switch (target) {
    case 'solution-side1':
      $('#solutions-title').text("Activaciones de marketing");
      $('#solutions-txt').html("Toda empresa se ha visto en la necesidad de darle promoción a su marca de una manera cada vez más innovadora y atractiva para crear una conexión con su mercado, " +
      "es por ello que las activaciones han cobrado cada vez más importancia con el paso del tiempo y sirven para brindar una experiencia al cliente que lo vincule con la marca.<p/>"+
      "Las activaciones en Realidad Virtual ofrecen una solución innovadora que captura todos los sentidos del usuario. " +
      "Que el cliente pruebe cualquier artículo antes de comprarlo, viva el proceso de su elaboración, "+
      "visite la tienda a pesar de que se encuentre en otro país o viva cualquier experiencia que esté relacionada con la marca son sólo algunas de las aplicaciones posibles.<p/>"+
      "Un negocio que optimiza su conexión con su mercado de forma emocional supera sus los competidores en un 85% en el crecimiento de sus ventas.<p/>"+
      "Te ayudamos a ofrecer emociones y a generar experiencias.");
      $("#solution-side1").addClass("hidden");
      $("#solution-side2").removeClass("hidden");
      $("#solution-side3").removeClass("hidden");
      $("#solution-side4").removeClass("hidden");
      break;
    case 'solution-side2':
      $('#solutions-title').text("Experiencias didácticas");
      $('#solutions-txt').html("La innovación educativa ha cobrado fuerza y los expertos buscan romper las barreras del aula y de métodos convencionales de enseñanza. "+
      "Un estudio revela que el 83% de los maestros dice que la Realidad Virtual podría ayudar a mejorar los resultados del aprendizaje en sus alumnos.<p/>"+
      "No se trata solamente de enseñanza didáctica en escuelas pues la conexión emocional que ofrece una experiencia inmersiva en VR aumenta la motivación y aporta un mayor impacto en los procesos de aprendizaje de cualquier tema.<p/>"+
      "Ejemplos de su aplicación son la enseñanza didáctica en escuelas técnicas, de manejo y cursos, capacitación a empleados, infografías en museos y demostración de instrucciones de cualquier tema (experiencias de entretenimiento, manejo de maquinaria, pasos a seguir en caso de emergencia, etc.)<p/>"+
      "Vivir la experiencia es la mejor forma de aprender.");
      $("#solution-side2").addClass("hidden");
      $("#solution-side1").removeClass("hidden");
      $("#solution-side3").removeClass("hidden");
      $("#solution-side4").removeClass("hidden");
      break;
    case 'solution-side3':
      $('#solutions-title').text("Construcción");
      $('#solutions-txt').html("La construcción o compra de una casa, departamento o negocio requiere de una alta inversión, es por ello que los agentes de bienes raíces, "+
      "diseñadores de interiores y arquitectos buscan herramientas que apoyen su proceso de convencimiento con el posible cliente.<p/>"+
      "La Realidad Virtual es una de estas herramientas, puesto que brinda al usuario la posibilidad de vivirlo antes de tenerlo. Ver un artículo de "+
      "decoración para el hogar antes de comprarlo, visitar el hotel antes de que hagas la reservación, ver la casa de tus sueños terminada antes de que "+
      "empiece la construcción, saber cómo lucirían tus próximos muebles antes de hagas el pedido, conocer el negocio terminado antes de invertir, son "+
      "sólo algunas de las aplicaciones de VR en la industria de la construcción y bienes raíces.");
      $("#solution-side3").addClass("hidden");
      $("#solution-side2").removeClass("hidden");
      $("#solution-side1").removeClass("hidden");
      $("#solution-side4").removeClass("hidden");
      break;
    case 'solution-side4':
      $('#solutions-title').text("Turismo");
      $('#solutions-txt').html("Imagínate poder transportar a tus posibles clientes a cualquier parte del mundo en cuestión de segundos. En el sector turístico la Realidad Virtual "+
      "es una herramienta altamente favorable para atraer a un mayor número de turistas a cualquier destino.<p/>"+
      "A través de la virtualización de museos, playas, parques temáticos, reservas naturales o cualquier atracción turística permites que tus usuarios vivan "+
      "una experiencia inmersiva y se dejen sorprender por la magia del lugar.<p/>La empresa “Visit Wales” realizó contenido en Realidad Virtual para animar "+
      "a sus usuarios a viajar a Reino Unido, el 85% de las personas que interactuaron con el material indico que visitarían los destinos que vieron.");
      $("#solution-side4").addClass("hidden");
      $("#solution-side2").removeClass("hidden");
      $("#solution-side3").removeClass("hidden");
      $("#solution-side1").removeClass("hidden");
      break;
    default:
  }
}
$("#solution-side1").click(function(){
  solutionsDetails("solution-side1");
});
$("#solution-side2").click(function(){
  solutionsDetails("solution-side2");
});
$("#solution-side3").click(function(){
  solutionsDetails("solution-side3");
});
$("#solution-side4").click(function() {
  solutionsDetails("solution-side4");
});

$("#mosaico-img-a").click(function(){
  $("#mosaico").addClass("hidden");
  $("#details").removeClass("hidden");
  solutionsDetails("solution-side1")
});

$("#mosaico-img-e").click(function(){
  $("#mosaico").addClass("hidden");
  $("#details").removeClass("hidden");
  solutionsDetails("solution-side2")
});

$("#mosaico-img-c").click(function(){
  $("#mosaico").addClass("hidden");
  $("#details").removeClass("hidden");
  solutionsDetails("solution-side3")
});

$("#mosaico-img-t").click(function(){
  $("#mosaico").addClass("hidden");
  $("#details").removeClass("hidden");
  solutionsDetails("solution-side4")
});

$(".details-left").click(function() {
  $("#mosaico").removeClass("hidden");
  $("#details").addClass("hidden");
});

function addElement(parentId, elementTag, elementId, html) {
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute('id', elementId);
  newElement.innerHTML = html;
  newElement.setAttribute('class', "work-mobile");
  p.appendChild(newElement);
}

 if ($(window).width() <= 1000 ){
     var element = document.getElementById("work-p");
     element.parentNode.removeChild(element);

     var workDescription1 = "Analizamos información detallada sobre tu negocio, escuchando con atención tus necesidades y estudiando el comportamiento de tu cliente.";
     var workDescription2 = "Como equipo te proporcionamos soluciones para lograr una experiencia única y que se ajuste a tus necesidades. Creamos una propuesta detallada del proyecto, la calendarización de las etapas del trabajo y la cotización del mismo.  Después de ser aceptada se comienza con el desarrollo.";
     var workDescription3 = "1. Creación de activos necesarios para el proyecto<br/>2. Diseño, programación e integración de los activos<br/>3. Testing";
     var workDescription4 = "Antes de la entrega final se proporciona una versión beta en la que puedes vivir la experiencia de tu proyecto y hacer los últimos ajustes necesarios. Se proporcionan los ejecutables para correr el programa y una capacitación para usar el equipo y programa junto con su manual de uso.";
     addElement("work-item1", "div", "work-d1", workDescription1);
     addElement("work-item2", "div", "work-d2", workDescription2);
     addElement("work-item3", "div", "work-d3", workDescription3);
     addElement("work-item4", "div", "work-d4", workDescription4);
     $("#circle3").text("3");
     $("#circle4").text("4");
     $("#work-txt3").text("Desarrollo");
     $("#work-txt4").html("Entrega y<br>capacitación");
 }
