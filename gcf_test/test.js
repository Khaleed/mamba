/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.test = (req, res) => {
    let message = req.query.message || req.body.message || 'Test again!';
    res.status(200).send(message);
};