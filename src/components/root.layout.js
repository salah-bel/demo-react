import { Outlet } from "react-router-dom";
import Header from '../components/Header'
function RouteLayout() {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default RouteLayout;
