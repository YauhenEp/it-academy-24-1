import { expect } from 'chai';
import { greet} from "../testData.js";

describe('Third our new test', function () {

    before(async () => {
        console.log('Before Third')
    })

    after(async () => {
        console.log('After Third')
    })

    beforeEach(async () => {
        console.log('Before Each Third')
    })

    afterEach(async () => {
        console.log('After Each Third')
    })

    it('should 10 equal 10 Third', async () => {
        expect(10).to.equal(10)
        console.log('first test')
    })

    it('should return "Hello Dasha!" if attribute not pass in function Third', async () => {
        const result = greet();
        expect(result).to.equal("Hello Dasha!")
    })

    it('should return "Hello Igor!" Third', async () => {
        const result = greet('Igor');
        expect(result).to.equal("Hello Igor!")
    })
})