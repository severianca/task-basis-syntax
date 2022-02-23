export function romanToInteger(str) {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = str.length - 1; ~i; i--) {
        let num = roman[str.charAt(i)];
        if (4 * num < result) result -= num;
        else result += num;
    }
    return result;
}
