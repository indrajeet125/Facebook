import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";
import { useState } from "react";

export default function Login() {
  const [visivle, setVisible] = useState(true);
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm setVisible={setVisible} />
        {visivle && <RegisterForm setVisible={setVisible} />}
        <Footer />
      </div>
    </div>
  );
}
