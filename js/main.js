class AgendaApp {
    api;
    agenda;

    constructor() {
        this.api = new API();
        let result = this.api.getData().then(result => {
        this.agenda = new Agenda(result);
        });
    }
}




class API {
    dataFromAPI = [];

    async getData() {
        await fetch("../data/data.json").then(response => {
            return response.json();
        }).then(data => {
            this.dataFromAPI = data.months;
        })
        return this.dataFromAPI;
    }
}




class Agenda {
    renderer;
    header;
    month;
    htmlElement;

    constructor(data) {
        this.htmlElement = document.createElement("article");
        this.data = data;
        console.log(data);
        this.renderer = new Renderer();
        this.header = new Header(data.name);
        this.month = new Month(this, data.days);
    }
}


class Renderer {
}


class Header {
    nameOfMonth;
    htmlElement;


    constructor(nameOfMonth){
        this.htmlElement = dcument.createElement("header");
        this.nameOfMonth = nameOfMonth;
    }
}




class Month {
    days = [];
    agenda;
    numberOfDays;
    htmlElement;
    constructor(agenda,numberOfDays) {
        this.htmlElement = document.createElement("ul");
        this.numberOfDays = numberOfDays;
        console.log(numberOfDays);
        this.agenda = agenda;
        for (let i = 0; i < numberOfDays; i++) {
            this.days.push(new Day(this));
        }
       
    }
}




class Day {
    month;
    htmlElement;


    constructor(month) {
        this.htmlElement = document.createElement("li");
        this.month = month;
    }

}




const AliAgenda = new AgendaApp();


