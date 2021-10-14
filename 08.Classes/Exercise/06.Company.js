class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name && salary && position && department && salary >= 0) {
            if (this.departments[department] == undefined) {
                this.departments[department] = [];
            }

            this.departments[department].push({ name, salary, position });

            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
        else {
            throw new Error('Invalid input!');
        }
    }

    bestDepartment() {
        let bestAverageSalary = 0;
        let result = '';
        let bestDepartment;

        for (let department of Object.entries(this.departments)) {
            const temp = department[1].reduce((acc, curr) => acc + curr.salary / department[1].length, 0);

            if (bestAverageSalary < temp) {
                bestAverageSalary = temp;
                bestDepartment = department;
            }
        }

        result += `Best Department is: ${bestDepartment[0]}` + '\n';
        result += `Average salary: ${bestAverageSalary.toFixed(2)}` + '\n';

        for (const employee of bestDepartment[1].sort((a, b) => b.salary != a.salary ? b.salary - a.salary : a.name.localeCompare(b.name))) {
            result += `${employee.name} ${employee.salary} ${employee.position}` + '\n';
        }

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
