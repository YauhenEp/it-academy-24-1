import { greet, pause} from "../testData.js";
import { cases } from 'jasmine-parameterized';

describe('our new test', function () {
    beforeAll(async () => {
        console.log('Before')
    })

    afterAll(async () => {
        console.log('After')
    })

    beforeEach(async () => {
        console.log('Before Each')
    })

    afterEach(async () => {
        console.log('After Each')
    })

    it('should 10 equal 10', async () => {
        expect(10).toEqual(10)
        console.log('first test')
    })

    it('should return "Hello Dasha!" if attribute not pass in function', async () => {
        const res = await pause()
        const result = greet('Dasha');
        expect(result).toEqual("Hello Dasha!")
    })

    it('should return "Hello Igor!"', async () => {
        const result = greet('Igor');
        expect(result).toEqual("Hello Igor!!!")
    });


    // ['Dasha', undefined, null, 'Igor'].forEach(testData => {
    //     it(`should return "Hello ${testData}"`, async () => {
    //         const result = greet(testData);jasmine-spec-reporter
    //         expect(result).to.equal(`Hello ${testData}!`)
    //     })
    // });

    cases([
        {value: 'Dasha', result: `Hello Dasha!`},
        {value: undefined, result: `Hello Dasha!`},
        {value: null, result: `Hello null!`},
        {value: 'Igor', result: `Hello Igor!`}
    ]).it(`should return`, async ({value, result}) => {
        const res = greet(value);
        expect(res).toEqual(result)
    })
})
