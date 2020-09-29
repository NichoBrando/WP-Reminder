const _ = require('lodash');
const Boom = require('boom');
const Mongoose = require('mongoose');

const createId = Mongoose.Types.ObjectId;

const fromMongoose = data => {
    if (Array.isArray(data)) {
        return data.map(fromMongoose);
    } else {
        const object = data && data.toJSON ? data.toJSON() : data;
        const isObject = 'object' === typeof object;
        const isNull = null === object;
        const isMongooseId = object instanceof Mongoose.Types.ObjectId;
        const isDate = object instanceof Date;
        if (isObject && !isNull && !isMongooseId && !isDate) {
            for (const key in object) {
                object[key] = fromMongoose(object[key]);
            }
            return { ...(object._id ? { id: object._id.toString() } : {}), ..._.omit(object, ['_id', '__v']) };
        } else {
            if (isMongooseId) {
                return object.toString();
            } else {
                return object;
            }
        }
    }
};

const toMongoose = data => {
    if (data.id) {
        try {
            createId(data.id);
        } catch (error) {
            throw Boom.badRequest(`Wrong id format: "${data.id}"`);
        }
    }
    if (Array.isArray(data)) {
        return data.map(toMongoose);
    } else {
        return { _id: createId(data.id), ..._.omit(data, ['id']) };
    }
};

module.exports = {
    fromMongoose,
    toMongoose,
    createId
};
