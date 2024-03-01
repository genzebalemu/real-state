const CreateSecretToken = (payload) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: '1hr' });
  };
  
  export default CreateSecretToken;