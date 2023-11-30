//Tiempo de Inactividad
//window.onload = function () {
//    eliminar_sesion();
//}
//^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$
function eliminar_sesion() {
//setTimeout("window.open('destruye_sesion.php','_top');",900000);// 15 minutos
//setTimeout('confirmar_eliminar_sesion()', 30000); //medio minuto
    setTimeout('confirmar_eliminar_sesion()', 300000); //5 minutos
}

function confirmar_eliminar_sesion() {
    if (confirm("Su sesión ha caducado ¿Desea continuar?")) {
        eliminar_sesion();
    } else {
        window.open('../../index.php', '_top');
    }
}


//Para la ventana de login
var isDraggable = !('ontouchstart' in document.documentElement);
if (!isDraggable) {
    $("#work-process,#cta2,#cta").css({"background-attachment": "scroll"});
}

function detailclicked(element) {
    //event.preventDefault();				
    var vhref = $(element).attr('rel');
    var $detaildiv = $(element).parent().parent();
    var loading = $('<div class="loading"></div>');
    $.ajax({
        url: vhref,
        beforeSend: function () {
            $detaildiv.prepend(loading.html('<p><i class="fa fa-spinner fa-spin"></i>cargando...</p>').fadeIn());
        }
    }).done(function (data) {
        $detaildiv.delay(1000).fadeIn().html(data);
    });
    return false;
}
;