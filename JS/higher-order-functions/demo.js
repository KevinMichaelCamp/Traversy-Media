const companies = [{
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    },
    {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    },
    {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// Higher-Order Functions (Arrays)


// -------------------forEach------------------
// Log each company
// companies.forEach(function (company) {
//     console.log(company);
// })

// companies.forEach(company => console.log(company));


// ----------------filter-------------------

// Filter ages over 21 
// const canDrink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     }
// })

// Filter retail companies
// const retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// });


// filter w/ arrow function

// Filter ages over 21 
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// Filter retail companies
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.table(retailCompanies);

// Filter companies started in the eighties
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.table(eightiesCompanies);

// Filter companies that lasted at least 10 years
// const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);
// console.table(lastedTenYears);


// --------------------map-----------------------
// Create array of company names
// Long way
// const companyNames = companies.map(function (company) {
//     return company.name;
// })
// Arrow function
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// Array of company names and start-end dates
// const testMap = companies.map(function (company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// })
// Arrow function
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.table(testMap);
// Square ages & then square root (Chaining methods) - age remains the same
// const agesSquare = ages
//     .map(age => Math.pow(age, 2))
//     .map(age => Math.sqrt(age));
// console.log(agesSquare);


// ---------------sort--------------
// Sort companies by start date
// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// Arrow function with sort
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.table(sortedCompanies);

// Sort ages
// ascending
// const sortAgesAsc = ages.sort((a, b) => a - b);
// console.log(sortAgesAsc);
// const sortAgesDesc = ages.sort((a, b) => b - a);
// console.log(sortAgesDesc);


// ----------------reduce---------------
// Add all ages together
// const ageSum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0);

// arrow function
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
// const totalYears = companies.reduce(function (total, company) {
//     return total + (company.end - company.start);
// }, 0);
// Arrow Function
// const totalYears = companies.reduce((total, company) => (total + (company.end - company.start)), 0);
// console.log(totalYears);


// Combine methods

// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);


// console.log(combined);

// Make new company array adding total years
const durations = companies.map(company => company.end - company.start);
console.log(durations);

companies.forEach((company, index) => company.duration = durations[index]);
console.table(companies);