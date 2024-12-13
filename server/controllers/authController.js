exports.getCurrentUser = (req, res) => {
  if (req.user) {
    res.json({
      id: req.user._id,
      googleId: req.user.googleId,
      displayName: req.user.displayName,
      email: req.user.email,
      avatar: req.user.avatar,
    });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
};

exports.logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Logged out successfully' });
  });
};
