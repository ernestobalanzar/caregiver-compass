import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { TextField } from "../components/Fields";

export default function Login() {
  const navigateTo = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target.elements.email.value); // from elements property
    if (
      (event.target.elements.email.value === "tom@compass.com") &
      (event.target.elements.password.value === "admin123")
    ) {
      navigateTo("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Button type="submit" color="cyan" className="mt-8 w-full">
          Sign in to account
        </Button>
      </form>
    </>
  );
}
