document.addEventListener("DOMContentLoaded", function () {
$("#search").click(function (e) {
    $.ajax({
        async: true,
        crossDomain: true,
        type: "POST",
        url: "https://nufi.azure-api.net/ficharoja/v2/consultar",
        headers: {
            'NUFI-API-KEY': '40fb302751d74a6d8122afe2b5cb8b1a',
            'Access-Control-Allow-Origin': '*'
        },
        data: JSON.stringify({
            "nombre": $('#nombre').val(),
            "apellidos": $('#apellidos').val(),
            "sexo": $('#sexo').val()
        }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            $('.response').text(data);
        }
    });
});
});

// $('#search').click(function (e) {
//     const settings = {
//       async: true,
//       crossDomain: true,
//       url: "https://nufi.azure-api.net/ficharoja/v2/consultar",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "NUFI-API-KEY": "40fb302751d74a6d8122afe2b5cb8b1a",
//       },
//       processData: false,
//       data: "{\"nombre\":\"TATIANA\", \"apellidos\": \"IVANENKO\", \"sexo\": \"\"}",
//     };
    
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//     });
//     });
// });
