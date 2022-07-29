const data = (req, res) => {
    res.status(200).send({
      name: 'Tony',
      role: 'Student',
    });
  };

  module.exports = {
    data,
  };
