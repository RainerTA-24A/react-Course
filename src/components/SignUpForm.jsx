import { useForm } from 'react-hook-form'
import { useState } from "react";

export default function SignupForm() {
    const {register, handleSubmit, formState: {errors} } = useForm();

  function onSubmit(data) {
    alert(`Submitted with email:  ${data.email} and password: ${data.password}`);
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                minLength: {
                    value: 7,
                    message: "Email must be atleast 7 chars",
                },
                maxLength: {
                    value: 25,
                    message: "Email can not be longer than 25 letters",
                },
                })} />
          </label>

          {errors.email && (
            <p style={{ color: "crimson"}}>{errors.email.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required", 
                minLength: {
                    value: 4,
                    message: "Password must be atleast 4 chars",
                },
                maxLength: {
                    value: 25,
                    message: "Password cant be longer than 25 letters",
                },
            })}
            />
          </label>
          {errors.password && (
            <p style={{color: 'violets'}}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Create account</button>
      </form>
    </div>
  );
}