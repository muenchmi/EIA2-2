namespace L04_Interfaces {
    window.addEventListener("load", init);

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
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
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

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
    }
    function searchmatrikel(_event: Event): void {
        let search = document.getElementsByTagName("input")[6];
        let savesearch = search.value;
        let student = studiHomoAssoc[savesearch];
        console.log(savesearch);
        if (student == undefined) {
            alert("Matrikelnummer ist flasch.");
        }
        else {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = "Vorname:  " + student.firstname + "\r\n" + "Name:  " + student.name + "\r\n" + "Alter:  " + student.age + "\r\n" + "Studiengang:  " + student.studiengang;


        }
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays          for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition              let studi: Studi = studiHomoAssoc[matrikel];              let line: string = matrikel + ": ";              line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahr   + ", " + studi.studiengang;              line += studi.gender ? "(M)" : "(F)";              output.value += line + "\n";          }

          // zusätzliche Konsolenausgaben zur Demonstrati           console.group("Simple Arra              console.log(studiSimpleArr              console.groupEnd();      //     console.group("Associatives Array (Object              console.log(studiHomoAss              console.groupEn          }
}
}
