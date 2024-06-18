/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
    let pattern = new Intl.Collator(['ru', 'en'], { caseFirst: 'upper' }).compare;
    let result = []; 
    switch (param) {
        case 'asc': //ASC - сортировка по возрастанию
            {
               //let result = arr.slice().sort((a, b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }));
               result = arr.slice().sort(pattern);
            
                break;
            }
           
        case 'desc': //DESC - сортировка по убыванию
            {
               // let result = arr.slice().sort((a, b) => b.localeCompare(a, ['ru', 'en'], { caseFirst: 'upper' }));
               result = arr.slice().sort(pattern).reverse();
          
               break;
            }
          default:
          
            break;
    }
    return result;
}
