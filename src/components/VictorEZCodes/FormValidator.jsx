import { useState } from "react";
import styles from "./FormValidator.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Author from "../../Author";

export default function FormValidator() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.length < 3 ? "Username must be at least 3 characters" : "";
      case "email":
        return !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : "";
      case "password":
        return !PASSWORD_REGEX.test(value)
          ? "Password must be 8+ characters with at least one letter and one number"
          : "";
      case "confirmPassword":
        return value !== formData.password ? "Passwords do not match" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.values(newErrors).every(error => !error)) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.description}>Form Validator</h2>
      <p className={styles.description}>
        Real-time form validation with detailed feedback
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.username && (errors.username ? styles.error : styles.valid)}
          />
          {touched.username && errors.username && (
            <span className={styles.errorMessage}>{errors.username}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.password && (errors.password ? styles.error : styles.valid)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {touched.password && errors.password && (
            <span className={styles.errorMessage}>{errors.password}</span>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      <Author name="Victor Ezeanyika" githubLink="https://github.com/VictorEZCodes" />
    </section>
  );
}