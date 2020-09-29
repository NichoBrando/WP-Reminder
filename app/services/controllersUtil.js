'use strict';

const _ = require('lodash');

const toResponse = data => {
    const internalProps = ['status'];
    if (Array.isArray(data)) {
        return data.map(toResponse);
    } else {
        return _.omit(data, internalProps);
    }
};

module.exports = {
    toResponse
};
