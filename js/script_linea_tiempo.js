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

}

    function reply_click() {
      var arr = document.getElementsByClassName('postulan');
      for (var i = 0; i < arr.length; ++i) {
         var item = arr[i];
         item.setAttribute('hidden', true);
      }
    }
