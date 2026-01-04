import { StoreProvider } from "@/store/StoreContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import { routesWebsite } from "./routes/RoutesWebsite";
import PageNotFound from "./components/pages/website/partials/PageNotFound";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<PageNotFound />} />

              {/* ROUTESWEBSITE USER ROUTE */}
              {routesWebsite.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}
            </Routes>
          </Router>
        </StoreProvider>{" "}
      </QueryClientProvider>{" "}
    </>
  );
};

export default App;
