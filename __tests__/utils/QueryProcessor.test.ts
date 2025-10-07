import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return correct name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("GitHub Copilot");
    });

    test('should correctly add numbers', () => {
        const testCases = [
            ["What is 36 plus 50?", "86"],
            ["What is 64 plus 35?", "99"],
            ["What is 39 plus 85?", "124"],
            ["What is 93 plus 20?", "113"],
            ["What is 44 plus 58?", "102"],
            ["What is 51 plus 5?", "56"],
            ["What is 98 plus 63?", "161"]
        ];

        testCases.forEach(([query, expected]) => {
            const response = QueryProcessor(query);
            expect(response).toBe(expected);
        });
    });

    test('should find the largest number', () => {
        const testCases = [
            ["Which of the following numbers is the largest: 25, 87, 67?", "87"],
            ["Which of the following numbers is the largest: 3, 80, 24?", "80"],
            ["Which of the following numbers is the largest: 24, 15, 19?", "24"],
            ["Which of the following numbers is the largest: 73, 32, 7?", "73"],
            ["Which of the following numbers is the largest: 53, 30, 94?", "94"]
        ];

        testCases.forEach(([query, expected]) => {
            const response = QueryProcessor(query);
            expect(response).toBe(expected);
        });
    });
});