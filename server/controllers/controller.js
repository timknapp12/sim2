module.exports = {
    register: (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;
    const db = req.app.get('db');

    // db.create_user([ username, password])
    // .then((response) => {
    //     session.user = {username, id:response.id}
    //     res.status(200).send(user)})
    // .catch(() => res.status(500).send());
    db.create_user([ username, password ])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
    }
}