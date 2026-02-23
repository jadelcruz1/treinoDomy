import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Olá Dashboard</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
};