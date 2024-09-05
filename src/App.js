import React from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import { Server } from 'miragejs';
import "./App.css";

new Server({
    routes() {
      this.namespace = "api";
      this.get("/users/", () => {
        return [
          { user: "User1@example1.com", password: "123" },
          { user: "User2@example2.com", password: "234" },
          { user: "User3@example3.com", password: "345" }
        ];
      });
    }
});

function App() {
    return (
        <div className="app">
            <AuthForm/>
        </div>
    );
}

export default App;
