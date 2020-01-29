/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.eventsById = (req, res) => {
    const eventId = req.params.id;

    const event = {
        "id": eventId,
        "name": "Race for life!",
        "date": "29/01/2020",
        "map": {"coordinates": "200, 125"}
    }

    res.status(200).json(event);
};
