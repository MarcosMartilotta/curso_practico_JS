const salarysArg = argentina.map(
    function(person){
        return person.salary;
    }
);

function salarysSorted(salarysArg){
    const salarysSort = salarysArg.sort(
        function(salaryA, salaryB){
            return salaryA - salaryB;
        }
    );
    return salarysSort;
};

function esPar(number){
    return (number % 2 === 0);
}

function medianaSalarys(list){
    const salaryList = salarysSorted(list);
    const midle = parseInt(salaryList.length / 2);
    if (esPar(salaryList.length)){
        const midlePerson1 = salaryList[midle - 1];;
        const midlePerson2 = salaryList[midle];
        return (midlePerson1 + midlePerson2) / 2;
    } else {
        const mediana = salaryList[midle];
    }
}

function top10percentSalarys(list){
    const salaryList = salarysSorted(list);
    const spliceStart = salaryList.length * 0.9;
    const spliceEnd = salaryList.length - spliceStart;

    const salaryTop10 = salaryList.splice(spliceStart, spliceEnd)

    return salaryTop10;
}

const medianaGeneral = medianaSalarys(salarysArg);
const medianaTop10 = medianaSalarys(top10percentSalarys(salarysArg));
console.log({
    medianaGeneral,
    medianaTop10
});