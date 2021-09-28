document.addEventListener("DOMContentLoaded", function () {
$("#search").click(function (e) {
    const settings = {
        async: true,
        crossDomain: true,
        url: "https://nufi.azure-api.net/ficharoja/v2/consultar",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "NUFI-API-KEY": "40fb302751d74a6d8122afe2b5cb8b1a",
        },
        processData: false,
        data: "{\"nombre\":\"TATIANA\", \"apellidos\": \"IVANENKO\", \"sexo\": \"\"}",
        };

        $.ajax(settings).done(function (response) {
        console.log(response.json());
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

// $.ajax({
//     async: true,
//     crossDomain: true,
//     type: "POST",
//     url: "https://nufi.azure-api.net/enriquecimientoinformacion/v1/busqueda",
//     headers: {
//         'Ocp-Apim-Subscription-Key': '40fb302751d74a6d8122afe2b5cb8b1a',
//         //'strict-origin-when-cross-origin': 'http://127.0.0.1:5500/index.html'
//         'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/index.html'
//     },
//     data: JSON.stringify({
//         "telefono": $('#nombre').val(),
//     }),
//     contentType: "application/json",
//     dataType: "json",
//     success: function (data) {
//         $('.response').text(data);
//     }
// });
