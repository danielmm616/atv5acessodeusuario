import "./styles.css";

function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <div>
      {isLoggedIn ? (
        <div className="boxParent">
          <h1>Bem-vindo {user}!</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div className="boxParent">
          <h1>Você não pode acessar essa página!</h1>
          <button onClick={Login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default RestrictedPage;
