const validator = require('jsonschema');

expect.extend({
    toBeValidSchema(response, schema) {
        const schemaValidationResult = validator.validate(response.data, schema);
        let errorMessage;
        if (schemaValidationResult.errors.length) {
            errorMessage = schemaValidationResult.errors.reduce(function (accumulator, currentValue) {
                return `${accumulator} ${currentValue.stack}`;
            }, '');
        }
        return schemaValidationResult.valid
            ? {
                pass: true,
                message: () => `The schemes are matched`,
            }
            : {
                pass: false,
                message: () => `JSON schema validation error: ${errorMessage}
      Url: "${response.config.url}"
      Params: "${JSON.stringify(response.config.params)}"\n`,
            };
    },
})