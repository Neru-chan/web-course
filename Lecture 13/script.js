function unique (arr) {
    return Array.from(new Set(arr));
}

let array = [1, 2, 3, 4, 3, 2, 1, 5];

console.log(unique(array));



function aclean(arr) {
    let map = new Map();

    for (i of arr) {
        let word = i.toLowerCase().split('').sort().join('');
        map.set(word, i);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));