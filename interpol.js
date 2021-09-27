// document.addEventListener('DOMContentLoaded', function () {
//     $.ajax({
//         type: "POST",
//         url: "https://nufi.azure-api.net/ficharoja/v2/consultar",
//         headers: {
//             'NUFI-API-KEY': '40fb302751d74a6d8122afe2b5cb8b1a'
//         },
//         data: JSON.stringify({
//             'nombre': 'Diana',
//             'apellido': 'Parra Sierra',
//             'sexo': 'F'
//         }),
//         contentType: "application/json",
//         dataType: "json",
//         success: function (response) {
//             console.log(response);
//         }
//     });
// });

$.ajax({
    type: "POST",
    url: "https://nufi.azure-api.net/ficharoja/v2/consultar",
    headers: {
        'NUFI-API-KEY': '40fb302751d74a6d8122afe2b5cb8b1a'
    },
    data: JSON.stringify({
        'nombre': 'Diana',
        'apellido': 'Parra Sierra',
        'sexo': 'F'
    }),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
        console.log(response);
    }
});