var L06_Interfaces;
(function (L06_Interfaces) {
    window.addEventListener("load", init);
    let address = "https://eia2-nodetest-muenchmi.herokuapp.com";
    let inputs = document.getElementsByTagName("input");
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", searchmatrikel);
    }
    function insert(_event) {
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studiengang = document.getElementsByTagName("select")[0];
        let savestudiengang = studiengang.value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: savestudiengang
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        let convertstringifyJSON = JSON.stringify(studi);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?order=insert&data=" + convertstringifyJSON, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?order=refresh", true);
        xhr.addEventListener("readystatechange", handleRefresh);
        xhr.send();
    }
    function handleRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function searchmatrikel(_event) {
        let mtrkl = inputs[6].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?order=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleSearch);
        xhr.send();
    }
})(L06_Interfaces || (L06_Interfaces = {}));
function handleSearch(_event) {
    let output = document.getElementsByTagName("textarea")[1];
    output.value = "";
    var xhr = _event.target;
    if (xhr.readyState == XMLHttpRequest.DONE) {
        output.value += xhr.response;
    }
}
//# sourceMappingURL=ProcessForm.js.map