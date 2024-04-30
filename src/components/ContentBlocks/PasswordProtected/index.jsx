import { useState } from "react";

const PasswordProtection = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const correctUsername = "client"; // Replace 'your_username' with the actual username
  const correctPassword = "letmeinplease123"; // Replace 'your_password' with the actual password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      // Set the state to indicate that the username and password are correct
      setIsPasswordCorrect(true);
    } else {
      // Set the state to indicate that the username or password is incorrect
      setIsPasswordCorrect(false);
      // Optionally, you can show an error message or redirect to an error page
      alert("Incorrect username or password");
    }
  };

  // Render the content based on whether the password is correct
  return isPasswordCorrect ? (
    <div>{children}</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-[2px] border-black"
          autoFocus
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-[2px] border-black"
        />
      </label>
      <button
        className="ml-[20px] border-[2px] border-black p-2 text-[15px]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default PasswordProtection;
