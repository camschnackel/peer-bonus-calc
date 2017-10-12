class Company {
    constructor(name) {
        this.name = name;
        this.employeeList = [];
    }

    addEmployee(param) {
        this.employeeList.push(param);
    }

    employeeBonus(rating, tenure, income) {
        var bonus = 0;
        if (rating <= 2) {
            bonus = 0;
        } else if (rating <= 3) {
            bonus += .04;
        } else if (rating <= 4) {
            bonus += .06;
        } else if (rating <= 5) {
            bonus += .1;
        }

        if (tenure > 365 && rating >= 2) {
            bonus += .05;
        }

        if (income > 65000) {
            bonus -= .01;
        }

        if (bonus > .13) {
            bonus = .13;
        } else if (bonus < 0) {
            bonus = 0;
        }

        bonus *= income;
        this.bonus = bonus
    }
}

module.exports = Company;