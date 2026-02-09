import { useState, useEffect } from "react";
import logo from "../../img/logo_telainical.png";
import style from "./Register.module.css";
import { FiUser, FiLock, FiMail } from "react-icons/fi";

const Register = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Register component mounted");
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
    if (!formData.email) {
      setError("Email is required");
      return;
    }
    if (!formData.password) {
      setError("Password is required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Register data:", formData);
    //requisição para o backend
  };

  return (
    <div className={style.registerContainer}>
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
          <FiMail className={style.icon} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="EMAIL"
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

        <label>
          <FiLock className={style.icon} />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="CONFIRM PASSWORD"
          />
        </label>

        <button type="submit">REGISTER</button>

        <a href="/login">Already have an account? Login</a>
      </form>
    </div>
  );
};

export default Register;
