const obj = require('../bowling');

describe('function creates frame', () => {
    it('Should give the total score from frame',()=>{
        let num = obj.createFrames(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6);
        expect(num).toStrictEqual({1: [3,6], 2: [3,6], 3: [3,6], 4: [3,6], 5: [3,6], 6: [3,6], 7: [3,6], 8: [3,6], 9: [3,6], 10: [3,6] });
    });
    it('Should give the total score from frame',()=>{
        let num = obj.createFrames(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10);
        expect(num).toStrictEqual({'1': [ 0, 0 ],'2': [ 0, 0 ],'3': [ 0, 0 ], '4': [ 0, 0 ],'5': [ 0, 0 ],'6': [ 0, 0 ],'7': [ 0, 0 ],'8': [ 0, 0 ],'9': [ 0, 0 ],'10': [ 10, 10, 10 ]
          });
    });
    it('Should print Can play more games if the number of frames is less than 10',()=>{
        let num = obj.createFrames(1,2,3);
        expect(num).toBe('Can Play more games!! Bye!');
    });
    // it('Should give the total score from frame',()=>{
    //     let num = obj.createFrames('String of values');
    //     expect(num).toBe('Invalid Input');
    // });
 
});

describe('total score function', () => {
    it('Should give the total score from frame',()=>{
        let num = obj.totalScore(obj.createFrames(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6));
        expect(num).toBe(90);
    });
    it('Should give the total score from frame',()=>{
        let num = obj.totalScore(obj.createFrames(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10));
        expect(num).toBe(30);
    });
    it('Should Not be called',()=>{
        let num = obj.totalScore(obj.createFrames(1,2,3));
        expect(num).toBe('No Score');
    });
    it('Should Not be called',()=>{
        let num = obj.totalScore(obj.createFrames("string of values"));
        expect(num).toBe('No Score');
    });
});
