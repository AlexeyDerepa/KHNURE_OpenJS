const student = require('../exam1/alexey.derepa');

describe('Exam 1', () => {
    it(`Exam1 of ${student.firstName} ${student.secondName}`, () => {
        const { task: func } = student;

        /* Correct input */
        expect(func(1, 1)).toEqual([]);
        expect(func(220, 220)).toEqual([]);
        expect(func(500, 2200)).toEqual([[1184 , 1210]]);
        expect(func(1, 300)).toEqual([[220, 284]]);
        expect(func(2000, 3000)).toEqual([[2620 , 2924]]);
        expect(func(5000, 6000)).toEqual([[5020 , 5564]]);
        expect(func(284, 500)).toEqual([]);
        expect(func(1, 1300)).toEqual([[220, 284], [1184, 1210]]);

        /* Not correct input */
         expect(func(-1, 300)).toBe(false);
         expect(func(300, 1)).toBe(false);
         expect(func('1', '300')).toBe(false);
    });
});

