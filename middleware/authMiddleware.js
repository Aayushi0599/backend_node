import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token not provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.Access_Token);
    req.user = decoded; // Attach user information to the request object
    next();
    console.log(decoded);
  } catch (error) {

    if (error) {
      // Access token is expired, try to refresh using the refresh token
      try {
        const decodedRefresh = jwt.verify(token, process.env.refresh_token);
        // Set the new token in the response header or however your client expects it
        req.user = decodedRefresh; // Attach user information to the request object
        next();
      } catch (refreshError) {
        res.status(403).json({ error: 'Failed to refresh token.' });
      }
    } else {
      // Other errors, handle accordingly
      res.status(403).json({ error: 'Invalid token.' });
    }
  }
};

export default authenticateUser;

