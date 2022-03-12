"use strict"

let group = {

    title: "our group",
    students: ["John", "Pete", "Alice"],

    showList() {

        this.students.forEach(
            student => console.log(this.title + ':' + student)
        );

    }


};

group.showList();

