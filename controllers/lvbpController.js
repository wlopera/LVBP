angular.module('lvbpApp')
    .controller('lvbpController', lvbpController);

lvbpController.$inject = ['lvbpService'];

function lvbpController(lvbpService) {

    var vm = this;

    /**
     * Consultar valores de la cabecera d ela tabla
     */
    vm.headers = lvbpService.getHeaders();

    /**
     * Consultar lista de Equipos
     */
    lvbpService.getData().then(function successCallback(response) {
        console.log("Salida: %o", response.data);
        vm.teams = response.data
    }, function errorCallback(error) {
        console.log("Error: ", error);
    });

}