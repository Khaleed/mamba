/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.events = (req, res) => {
    const events = {
        "events": [
            {
                "name": "Race for life!",
                "date": "29/01/2020"
            },
            {
                "name": "Cook for life!",
                "date": "02/02/2020"
            }
        ]
    }

    res.status(200).json(events);
};
