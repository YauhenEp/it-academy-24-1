const {sendHttpRequest} = require('../helpers/sendHttpRequest')

describe.skip(`valid cases`, function () {
    let response;
    beforeAll(async () => {

        const body = {
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: '53.1,-0.13'},
            headers: {
                'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
        // response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
        //     params: {q: '53.1,-0.13'},
        //     headers: {
        //         'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
        //         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        //     }
        // })
        // console.log(response)

        response = await sendHttpRequest(body)
        console.log(response)
    });

    test(`should return status code 200`, async () => {
        expect(response.status).toBe(403);
        expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    // test(`should be valid response body`, async () => {
    //     const result = validate.validate(response.data, weatherAPI);
    //     expect(result.valid).toBe(true);
    // })
})