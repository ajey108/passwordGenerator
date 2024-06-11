import React, { useState } from 'react';


function App() {
  const [password, setPassword] = useState('');

  const length = 12;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "@#$%^&*_()/?|+=;:,.~";

  const allChars = upperCase + lowerCase + number + symbol;

  const createPassword = () => {
    let pwd = "";
    pwd += upperCase[Math.floor(Math.random() * upperCase.length)];
    pwd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pwd += number[Math.floor(Math.random() * number.length)];
    pwd += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > pwd.length) {
      pwd += allChars[Math.floor(Math.random() * allChars.length)];
    }

    setPassword(pwd);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Generate a <br /> <span className="text-blue-500">Random Password</span>
        </h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            id="password"
            value={password}
            placeholder="password"
            readOnly
            className="p-2 border border-gray-300 rounded-l-md w-full"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white p-2 rounded-r-md"

          >
            <i className="ri-file-copy-line w-6 h-6  "  ></i>

          </button>
        </div>
        <button
          onClick={createPassword}
          className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center justify-center w-full"
        >

          <i className="ri-flashlight-fill w-6 h-6 mr-2 "></i>

          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
