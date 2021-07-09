import React, { useState } from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import CodeEditor from "./components/CodeEditor";
import CreateGistForm from "./components/CreateGistForm";
import UserProfile from "./components/userProfile/UserProfile";
import { Redirect } from "react-router";
import "./App.css";
import AuthForm from "./components/authForm/AuthForm";
import GistUsers from "./components/gistUsers/GistUsers";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token")); 

  const rememberMeHandler = () => {
    const rememberMeTemp = localStorage.getItem("token");
    setToken(rememberMeTemp);
  };
  return (
    <div>
      <Header rememberHandler={rememberMeHandler}/>
      <div className="app-container">
        {token && (
          <main>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <GistUsers />
            </Route>
            <Route path="/create-gist">
              <CreateGistForm />
            </Route>
            <Route path="/code-editor">
              <CodeEditor />
            </Route>
            <Route path="/profile/:id">
              <UserProfile />
            </Route>
          </main>
        )}
        {!token && (
          <main>
            <Route path="/">
              <Redirect to="/auth" />
            </Route>
            <Route path="/auth">
              <AuthForm rememberHandler={rememberMeHandler} />
            </Route>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
