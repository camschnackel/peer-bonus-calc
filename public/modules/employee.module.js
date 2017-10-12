class Employee {
    constructor(name, startDate, salary, rating){
        this.name = name;
        this.startDate = startDate;
        this.salary = salary;
        this.rating = rating;
    }

    tenure() {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(this.startDate);
        var secondDate = new Date();

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

        console.log(diffDays);
        this.tenure = parseInt(diffDays);
    }
}

module.exports = Employee;