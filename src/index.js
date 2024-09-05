import React from 'react';
import ReactDOM from 'react-dom/client';
import { Server } from 'miragejs';
import './index.css';
import App from './App';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

