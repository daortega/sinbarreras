/**
 * Created by pitah on 6/21/2017.
 */

    function no_postulan(){
    var alumnos1 = document.getElementById("postulan1");
    alumnos1.src = 'assets/alumnos/0.png';
    var alumnos2 = document.getElementById("postulan2");
    alumnos2.src = 'assets/alumnos/0.png';
    var alumnos3 = document.getElementById("postulan3");
    alumnos3.src = 'assets/alumnos/0.png';
    var alumnos4 = document.getElementById("postulan4");
    alumnos4.src = 'assets/alumnos/0.png';
    var alumnos5 = document.getElementById("postulan5");
    alumnos5.src = 'assets/alumnos/0.png';
    var alumnos6 = document.getElementById("postulan6");
    alumnos6.src = 'assets/alumnos/0.png';
    var alumnos7 = document.getElementById("postulan7");
    alumnos7.src = 'assets/alumnos/0.png';
    var alumnos8 = document.getElementById("postulan8");
    alumnos8.src = 'assets/alumnos/0.png';
    var alumnos9 = document.getElementById("postulan9");
    alumnos9.src = 'assets/alumnos/0.png';
    var alumnos10 = document.getElementById("postulan10");
    alumnos10.src = 'assets/alumnos/0.png';
    var alumnos11 = document.getElementById("postulan11");
    alumnos11.src = 'assets/alumnos/0.png';

    // hago aparecer los que hayan desaparecido antes
    var antes1 = document.getElementById("seleccion");
    antes1.src = 'assets/alumnos/4.png';
    var antes2 = document.getElementById("matricula");
    antes2.src = 'assets/alumnos/1.png';
    var antes3 = document.getElementById("psu");
    antes3.src = 'assets/alumnos/0.png';
    // cambio los textos
    var textos1 = document.getElementById("texto_1");
    textos1.innerHTML = "Alumnos no postulan a las universidades";
    var textos2 = document.getElementById("texto_2");
    textos2.innerHTML = "El 2015, 107.807 alumnos no postularon a una universidad luego de recibir sus puntajes PSU";

}
    function no_seleccion(){
        var alumno = document.getElementById("seleccion");
        alumno.src = 'assets/alumnos/0.png';
        var antes1 = document.getElementById("matricula");
        antes1.src = 'assets/alumnos/1.png';
        var antes2 = document.getElementById("psu");
        antes2.src = 'assets/alumnos/0.png';
        var antes3 = document.getElementById("cuarto");
        antes3.src = 'assets/alumnos/0.png';
        var alumnos1 = document.getElementById("postulan1");
        alumnos1.src = 'assets/alumnos/0.png';
        var alumnos2 = document.getElementById("postulan2");
        alumnos2.src = 'assets/alumnos/0.png';
        var alumnos3 = document.getElementById("postulan3");
        alumnos3.src = 'assets/alumnos/0.png';
        var alumnos4 = document.getElementById("postulan4");
        alumnos4.src = 'assets/alumnos/0.png';
        var alumnos5 = document.getElementById("postulan5");
        alumnos5.src = 'assets/alumnos/0.png';
        var alumnos6 = document.getElementById("postulan6");
        alumnos6.src = 'assets/alumnos/0.png';
        var alumnos7 = document.getElementById("postulan7");
        alumnos7.src = 'assets/alumnos/0.png';
        var alumnos8 = document.getElementById("postulan8");
        alumnos8.src = 'assets/alumnos/0.png';
        var alumnos9 = document.getElementById("postulan9");
        alumnos9.src = 'assets/alumnos/0.png';
        var alumnos10 = document.getElementById("postulan10");
        alumnos10.src = 'assets/alumnos/0.png';
        var alumnos11 = document.getElementById("postulan11");
        alumnos11.src = 'assets/alumnos/0.png';
        var textos1 = document.getElementById("texto_1");
        textos1.innerHTML = "Alumnos no son seleccionados";
        var textos2 = document.getElementById("texto_2");
        textos2.innerHTML = "El 2015, 8.438 alumnos no fueron seleccionados en alguna universidad";
    }

    function no_matricula() {
        var alumn = document.getElementById("seleccion");
        alumn.src = 'assets/alumnos/0.png';
        var antes1 = document.getElementById("matricula");
        antes1.src = 'assets/alumnos/0.png';
        var antes2 = document.getElementById("psu");
        antes2.src = 'assets/alumnos/0.png';
        var antes3 = document.getElementById("cuarto");
        antes3.src = 'assets/alumnos/0.png';
        var alumnos1 = document.getElementById("postulan1");
        alumnos1.src = 'assets/alumnos/0.png';
        var alumnos2 = document.getElementById("postulan2");
        alumnos2.src = 'assets/alumnos/0.png';
        var alumnos3 = document.getElementById("postulan3");
        alumnos3.src = 'assets/alumnos/0.png';
        var alumnos4 = document.getElementById("postulan4");
        alumnos4.src = 'assets/alumnos/0.png';
        var alumnos5 = document.getElementById("postulan5");
        alumnos5.src = 'assets/alumnos/0.png';
        var alumnos6 = document.getElementById("postulan6");
        alumnos6.src = 'assets/alumnos/0.png';
        var alumnos7 = document.getElementById("postulan7");
        alumnos7.src = 'assets/alumnos/0.png';
        var alumnos8 = document.getElementById("postulan8");
        alumnos8.src = 'assets/alumnos/0.png';
        var alumnos9 = document.getElementById("postulan9");
        alumnos9.src = 'assets/alumnos/0.png';
        var alumnos10 = document.getElementById("postulan10");
        alumnos10.src = 'assets/alumnos/0.png';
        var alumnos11 = document.getElementById("postulan11");
        alumnos11.src = 'assets/alumnos/0.png';
        var alumno = document.getElementById('matricula');
        alumno.src = 'assets/alumnos/0.png';
        var textos1 = document.getElementById("texto_1");
        textos1.innerHTML = "Alumnos no se matriculan";
        var textos2 = document.getElementById("texto_2");
        textos2.innerHTML = "El 2015, 11.593 alumnos no fueron se matricularon en alguna universidad";
    }

    function no_psu() {
        var alumn = document.getElementById("seleccion");
        alumn.src = 'assets/alumnos/4.png';
        var antes1 = document.getElementById("matricula");
        antes1.src = 'assets/alumnos/1.png';
        var antes2 = document.getElementById("psu");
        antes2.src = 'assets/alumnos/0.png';
        var antes3 = document.getElementById("cuarto");
        antes3.src = 'assets/alumnos/0.png';
        // agrego las imagenes por si estaban ocultas
        var alumnos1 = document.getElementById("postulan1");
        alumnos1.src = 'assets/alumnos/2.png';
        var alumnos2 = document.getElementById("postulan2");
        alumnos2.src = 'assets/alumnos/3.png';
        var alumnos3 = document.getElementById("postulan3");
        alumnos3.src = 'assets/alumnos/4.png';
        var alumnos4 = document.getElementById("postulan4");
        alumnos4.src = 'assets/alumnos/5.png';
        var alumnos5 = document.getElementById("postulan5");
        alumnos5.src = 'assets/alumnos/6.png';
        var alumnos6 = document.getElementById("postulan6");
        alumnos6.src = 'assets/alumnos/8.png';
        var alumnos7 = document.getElementById("postulan7");
        alumnos7.src = 'assets/alumnos/9.png';
        var alumnos8 = document.getElementById("postulan8");
        alumnos8.src = 'assets/alumnos/7.png';
        var alumnos9 = document.getElementById("postulan9");
        alumnos9.src = 'assets/alumnos/6.png';
        var alumnos10 = document.getElementById("postulan10");
        alumnos10.src = 'assets/alumnos/1.png';
        var alumnos11 = document.getElementById("postulan11");
        alumnos11.src = 'assets/alumnos/4.png';
        var textos1 = document.getElementById("texto_1");
        textos1.innerHTML = "Alumnos no rinden la PSU";
        var textos2 = document.getElementById("texto_2");
        textos2.innerHTML = "El 2015, 10.857 alumnos no rindieron la prueba de admisión universitaria";
    }
    
    function no_cuarto() {
        var alumno = document.getElementById('cuarto');
        alumno.src = 'assets/alumnos/0.png';
        var textos1 = document.getElementById("texto_1");
        textos1.innerHTML = "Alumnos desertan 4to medio";
        var textos2 = document.getElementById("texto_2");
        textos2.innerHTML = "El 2015, 7.804 alumnos no terminaron el cuarto año de Educación Media";
        // agrego las imagenes por si estaban ocultas
        var alumnos1 = document.getElementById("postulan1");
        alumnos1.src = 'assets/alumnos/2.png';
        var alumnos2 = document.getElementById("postulan2");
        alumnos2.src = 'assets/alumnos/3.png';
        var alumnos3 = document.getElementById("postulan3");
        alumnos3.src = 'assets/alumnos/4.png';
        var alumnos4 = document.getElementById("postulan4");
        alumnos4.src = 'assets/alumnos/5.png';
        var alumnos5 = document.getElementById("postulan5");
        alumnos5.src = 'assets/alumnos/6.png';
        var alumnos6 = document.getElementById("postulan6");
        alumnos6.src = 'assets/alumnos/8.png';
        var alumnos7 = document.getElementById("postulan7");
        alumnos7.src = 'assets/alumnos/9.png';
        var alumnos8 = document.getElementById("postulan8");
        alumnos8.src = 'assets/alumnos/7.png';
        var alumnos9 = document.getElementById("postulan9");
        alumnos9.src = 'assets/alumnos/6.png';
        var alumnos10 = document.getElementById("postulan10");
        alumnos10.src = 'assets/alumnos/1.png';
        var alumnos11 = document.getElementById("postulan11");
        alumnos11.src = 'assets/alumnos/4.png';
        var antes1 = document.getElementById("seleccion");
        antes1.src = 'assets/alumnos/4.png';
        var antes2 = document.getElementById("matricula");
        antes2.src = 'assets/alumnos/1.png';
        var antes3 = document.getElementById("psu");
        antes3.src = 'assets/alumnos/2.png';

    }

    function reply_click() {
      var arr = document.getElementsByClassName('postulan');
      for (var i = 0; i < arr.length; ++i) {
         var item = arr[i];
         item.setAttribute('hidden', true);
      }
    }
