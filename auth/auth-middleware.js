const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'add a .env file to root of project with the JWT_SECRET variable';

module.exports = {
  authenticate,
  generateToken,
  validateLogin,
  validateRegister
};

// authenticate a user is logged in by decoding their web token
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}

//create web token on login
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: '10d',
  };
  const secret = jwtKey;
  return jwt.sign(payload, secret, options)
}

function validateLogin(req, res, next){
  let {username, password} = req.body;
  if(!username || !password){
    return res.status(412).json({ message: 'both username and password are required' })
  }
  next()
}

function validateRegister(req, res, next) {
  let {username, password, facility_id} = req.body;
  if(!username || !password || !facility_id){
    return res.status(412).json({ message: 'all fields are required... username, password, facility id' })
  }
  next()
}