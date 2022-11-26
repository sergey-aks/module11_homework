import { repeatWord } from "../index.js";

describe("test func repeatWord", () => {
    //Все работает как надо
    it("Все работает как надо", () => {
        const testWord = 'задание';
        const testConunt = 3;
        const result = repeatWord(testWord, testConunt);
        expect(result).toBe('задание1, задание2, задание3');
    });
    //Если число повторений 0 или отрицательное
    it("testConunt <= 0 to result = ''", () => {
        const testWord = 'задание';
        const testConunt = 0;
        const result = repeatWord(testWord, testConunt);
        expect(result).toBe('');
    });
    //Если число повторений бесконечность
    it("Если число повторений бесконечность", () => {
        const testWord = 'задание';
        const testConunt = 1 / 0;
        const result = repeatWord(testWord, testConunt);
        expect(result).toBe('Вы ввели бесконечное число повторений');
    });
    //Повторяется не строка
    it("Повторяется не строка", () => {
        const testWord = ['задание','тест'];
        const testConunt = 5;
        const result = repeatWord(testWord, testConunt);
        expect(result).toBe('Это не строка');
    });
});