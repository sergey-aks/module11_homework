export function repeatWord(word, count) {
    if(!isFinite(count)) return 'Вы ввели бесконечное число повторений';
    if (typeof word !== 'string') return 'Это не строка';
    let string = '';
    let delimiter = ', ';
    for (let i = 0; i < count; i++) {
        if (i === count - 1) delimiter = '';
        string += word + (i + 1) + delimiter;
    };
    return string;
}