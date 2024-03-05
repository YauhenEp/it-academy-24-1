const { greet, pause} = require("../testData.js");

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

    test('should 10 equal 10', async () => {
        expect(10).toEqual(10)
        console.log('first test')
    })

    test('should return "Hello Dasha!" if attribute not pass in function', async () => {
        const res = await pause()
        const result = greet('Dasha');
        expect(result).toEqual("Hello Dasha!")
    })

    test('should return "Hello Igor!"', async () => {
        const result = greet('Igor');
        expect(result).toEqual("Hello Igor!")
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
            expect(result).toEqual(testData.result)
        })
    })

    test.each(
        [
            {value: 'Dasha', result: `Hello Dasha!`},
            {value: undefined, result: `Hello Dasha!`},
            {value: null, result: `Hello null!`},
            {value: 'Igor', result: `Hello Igor!`}
        ]
    )(`should return $result`, async ({value, result}) => {
        const res = greet(value);
        expect(res).toEqual(result)
    })
})
