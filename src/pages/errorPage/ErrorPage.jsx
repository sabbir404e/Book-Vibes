import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  code: {
    fontSize: "100px",
    margin: "0",
    fontWeight: "bold"
  },
  title: {
    fontSize: "30px",
    margin: "10px 0"
  },
  text: {
    fontSize: "16px",
    marginBottom: "20px"
  },
  button: {
    padding: "10px 20px",
    background: "#fff",
    color: "#333",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold"
  }
};

export default ErrorPage;