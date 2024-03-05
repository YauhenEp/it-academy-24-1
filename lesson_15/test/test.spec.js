import { expect } from 'chai';
import { greet, pause} from "../testData.js";

describe('our new test', function () {
    before(async () => {
        console.log('Before')
    })

    after(async () => {
        console.log('After')
    })

    beforeEach(async () => {
        console.log('Before Each')
    })

    afterEach(async () => {
        console.log('After Each')
    })

    it('should 10 equal 10', async () => {
        expect(10).to.equal(10)
        console.log('first test')
    })

    it('should return "Hello Dasha!" if attribute not pass in function', async () => {
        const res = await pause()
        const result = greet('Dasha');
        expect(result).to.equal("Hello Dasha!")
    })

    it('should return "Hello Igor!"', async () => {
        const result = greet('Igor');
        expect(result).to.equal("Hello Igor!")
    });


    // ['Dasha', undefined, null, 'Igor'].forEach(testData => {
    //     it(`should return "Hello ${testData}"`, async () => {
    //         const result = greet(testData);
    //         expect(result).to.equal(`Hello ${testData}!`)
    //     })
    // });

    [
        {value: 'Dasha', result: `Hello Dasha!`},
        {value: undefined, result: `Hello Dasha!`},
        {value: null, result: `Hello null!`},
        {value: 'Igor', result: `Hello Igor!`}
    ].forEach(testData => {
        it(`should return ${testData.result}`, async () => {
            const result = greet(testData.value);
            expect(result).to.equal(testData.result)
        })
    })
})
