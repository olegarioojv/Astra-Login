import { useState, useEffect } from "react";
import logo from "../../img/logo_telainical.png";
import style from "./Login.module.css";
import { FiUser, FiLock } from "react-icons/fi";

const Login = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Login component mounted");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.displayName) {
      setError("Username is required");
      return;
    }
    if (!formData.password) {
      setError("Password is required");
      return;
    }

    console.log("Login data:", formData);
    // requisição para o backend
  };

  return (
    <div className={style.loginContainer}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" />

        {error && <div className={style.errorMessage}>{error}</div>}

        <label>
          <FiUser className={style.icon} />
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
            placeholder="USERNAME"
          />
        </label>

        <label>
          <FiLock className={style.icon} />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="PASSWORD"
          />
        </label>

        <button type="submit">LOGIN</button>

        <a href="#">Forgot password?</a>
      </form>
    </div>
  );
};

export default Login;
