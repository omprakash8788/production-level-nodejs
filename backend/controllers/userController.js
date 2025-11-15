const getMe = (req, res) => {
  res.status(200).json({
    success: true,
    data: req.user, // user is attached via protectRoute middleware
  });
};
