angular.module('lvbpApp')
    .service('lvbpService', lvbpService);

lvbpService.$inject = ['$http'];

function lvbpService($http) {

    // Lista de valores de cabecera
    var headers =[
       'Equipo',
       'Ciudad',
       'Estadio',
       'Fundación',
       'Títulos de Liga',
       'Títulos del Caribe'
    ];

    /**
     * Consulta de valores de cabecera
     */
    this.getHeaders = function () {
        return headers;
    };

    /**
     * Consulta de equipos
     */
    this.getData = function () {

        return $http({
            method: 'GET',
            url: 'app/teams.json'
        });

    };

}