import { useState, useEffect } from 'react';
import validator from 'validator';

function App() {
  const [checkPassword, setcheckPassword] = useState('');

  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setcheckPassword('Strong Password');
    } else {
      setcheckPassword('Weak Password');
    }
  };

  useEffect(() => {
    console.log('Password Strength:', checkPassword);
  }, [checkPassword]);

  return (
    <>
      <div className="bg-blue-400 py-4">
        <h1 className="text-3xl font-bold text-center">Password Validator</h1>
        <div className="flex justify-center items-center mt-9 gap-10">
          <p className="text-center">Enter your password to check its strength</p>
          <input type="text" onChange={(e) => validatePassword(e.target.value)} className='rounded-md'/>
        </div>
      </div>
      <div className="flex justify-center items-center mt-9 gap-10">
        <p className="text-center">Password Strength: {checkPassword}</p>
      </div>
    </>
  );
}

export default App;
