/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.profile = (req, res) => {

    const profile = {
        "name": "Joe Bloggs",
        "medals": "Gold",
        "memberSince": "01/01/2018"
    };

    res.status(200).json(profile);
};
