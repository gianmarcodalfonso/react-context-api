import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/Aboutus";
import ProductsPage from "./pages/ProductsPage";
import DeafaultLayout from "./layouts/DeafaultLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BudgetProvider } from "./contexts/BudgetContext";

function App() {
	return (
		<BudgetProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<DeafaultLayout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/aboutus" element={<AboutUs />} />
						<Route path="/products">
							<Route index element={<ProductsPage />} />
							<Route path=":id" element={<ProductDetailPage />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</BudgetProvider>
	);
}

export default App;
