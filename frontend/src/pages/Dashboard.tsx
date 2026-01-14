import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-3 mb-3">Sistema de Controle de Gastos</h1>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <Link to="/pessoas" className="text-decoration-none">
            <div className="card dashboard-card h-100 text-center shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="display-1 mb-3">👥</div>
                <h5 className="card-title">Pessoas</h5>
                <p className="card-text text-muted">Administre as pessoas cadastradas no sistema</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/categorias" className="text-decoration-none">
            <div className="card dashboard-card h-100 text-center shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="display-1 mb-3">📁</div>
                <h5 className="card-title">Categorias</h5>
                <p className="card-text text-muted">Gerencie as categorias de gastos e receitas</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/transacoes" className="text-decoration-none">
            <div className="card dashboard-card h-100 text-center shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="display-1 mb-3">💰</div>
                <h5 className="card-title">Transações</h5>
                <p className="card-text text-muted">Visualize e administre todas as transações</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
