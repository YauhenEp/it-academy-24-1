const axios = require('axios');
const {Validator} = require('jsonschema');
const postActivitiesJsonSchema = require('../testData/postActivities.v1.json')

const validator = new Validator();
describe.only('API POST tests', function () {
    let result;
    beforeAll(async() => {
        result = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
            "id": 0,
            "title": "string",
            "dueDate": "2024-03-05T18:17:49.544Z",
            "completed": true
        }, {
            headers: {
                "accept": "text/plain; v=1.0",
                "Content-Type": "application/json; v=1.0"
            }
        });
    })

    test('POST /api/v1/Activities should be status 200', async () => {
        console.log(result)
        expect(result.status).toEqual(200)
    })

    test('POST /api/v1/Activities should be valid jsonschema', async () => {
        const validationResult = await validator.validate(result.data, postActivitiesJsonSchema);
        // console.log(validationResult)
        expect(validationResult.valid).toEqual(true)
    })
})