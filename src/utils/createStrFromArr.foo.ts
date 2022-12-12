export function createStrFromArr(residents: string[],number:number=41) {
    let a: string[] = [];
    for (const arrElement of residents) {
        let b = arrElement.slice(number).replaceAll('/', '');
        a.push(b)
    }
    if(a.length===1)a.push('2990');
    return a.join(',');
}