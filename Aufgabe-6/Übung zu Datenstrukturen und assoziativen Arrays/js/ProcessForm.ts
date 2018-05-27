namespace L06_Interfaces {
    window.addEventListener("load", init);

    let address: string = "https://eia2-nodetest-muenchmi.herokuapp.com";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", searchmatrikel);
    }

    function insert(_event: Event): void {
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studiengang = document.getElementsByTagName("select")[0];
        let savestudiengang = studiengang.value;

        let studi: Studi;
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

        let convertstringifyJSON: string = JSON.stringify(studi);
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?order=insert&data=" + convertstringifyJSON, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }


    function refresh(_event: Event): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?order=refresh", true);
        xhr.addEventListener("readystatechange", handleRefresh);
        xhr.send();
    }

    function handleRefresh(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }

    function searchmatrikel(_event: Event): void {
        let mtrkl: string = inputs[6].value;
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?order=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleSearch);
        xhr.send();
    }
}

function handleSearch(_event: ProgressEvent): void {
    let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
    output.value = "";
    var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        output.value += xhr.response;
    }
}
