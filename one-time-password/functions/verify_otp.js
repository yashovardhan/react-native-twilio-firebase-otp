const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!req.body.phone || !req.body.code){
    return res.status(422).send({ error: 'Phone and code must be provided' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '')
  const code = parseInt(code);

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref('users/' + phone);
      ref.on('value', snapshot => {
        const user = snapshot.val();

        if (user.code !== code || !user.codeValid) {
          return res.status(422).send({ error: 'Code not valid' })
        }

        ref.update({ codeValid: false });
      });
    })
    .catch((err) => res.status(422).send({ error: err }))
}
