import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
	const [budgetMode, setBudgetMode] = useState(false);

	const toggleBudgetMode = () => {
		setBudgetMode(!budgetMode);
	};

	const value = { budgetMode, setBudgetMode };

	return (
		<BudgetContext.Provider value={{ budgetMode, toggleBudgetMode }}>
			{children}
		</BudgetContext.Provider>
	);
};

const useBudget = () => {
	const context = useContext(BudgetContext);
	return context;
};

export { BudgetProvider, useBudget };
