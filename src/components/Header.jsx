import React from "react";
import { NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

const Header = () => {
	const { budgetMode, toggleBudgetMode } = useBudget();

	return (
		<header>
			<div className="container-fluid py-3">
				<div className="row">
					<div className="col-12">
						<div className="d-flex justify-content-between">
							<ul className="list-unstyled d-flex align-item-center">
								<li className="me-3">
									<NavLink to="/">Homepage</NavLink>
								</li>
								<li className="me-3">
									<NavLink to="/aboutus">Chi siamo</NavLink>
								</li>
								<li className="me-3">
									<NavLink to="/products">Prodotti</NavLink>
								</li>
							</ul>
							<button className="btn btn-primary" onClick={toggleBudgetMode}>
								{budgetMode
									? "Disattiva modalità budget"
									: "Attiva modalità budget"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
