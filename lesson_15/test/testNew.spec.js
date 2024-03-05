import { expect } from 'chai';
import { greet} from "../testData.js";

describe('Second our new test', function () {

    before(async () => {
        console.log('Before Second')
    })

    after(async () => {
        console.log('After Second')
    })

    beforeEach(async () => {
        console.log('Before Each Second')
    })

    afterEach(async () => {
        console.log('After Each Second')
    })

    it('should 10 equal 10 Second', async () => {
        expect(10).to.equal(10)
        console.log('first test')
    })

    it('should return "Hello Dasha!" if attribute not pass in function Second', async () => {
        const result = greet();
        expect(result).to.equal("Hello Dasha!")
    })

    it('should return "Hello Igor!" Second', async () => {
        const result = greet('Igor');
        expect(result).to.equal("Hello Igor!")
    })
})