const {Firestore} = require('@google-cloud/firestore');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.eventById = (req, res) => {
    const firestore = new Firestore();
    const events = [];

    firestore().collection('events').get().then(events => {
        events.forEach(event => {
            events.push(event.data());
        })
        res.status(200).json({events});
    })
};
