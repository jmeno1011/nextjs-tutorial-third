export default (req, res) => {
  res.statusCode = 200;
  res.status(200).json({ id: req.query.id });
};
