import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
	const [budgetMode, setBudgetMode] = useState(false);

	const toggleBudgetMode = () => {
		setBudgetMode(!budgetMode);
	};

	const value = { budgetMode, setBudgetMode };

	return (
		<BudgetContext.provider value={{ budgetMode, setBudgetMode }}>
			{children}
		</BudgetContext.provider>
	);
};

const useBudget = () => {
	const context = useContext(BudgetContext);
	return context;
};

export { BudgetProvider, useBudget };
