exports.sigin = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email) {
      res.status(404).json({ message: "user exist" });
    }
    const user = new User(email, password);
    const doc = user.save();
    res.status(202).json(doc);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};
