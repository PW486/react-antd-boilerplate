import Board from "containers/Board";
import SignIn from "containers/SignIn";
import NotFound from "components/NotFound";

const routes = [
  {
    exact: true,
    path: "/",
    component: Board,
    auth: true,
    permission: 'admin',
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "",
    component: NotFound,
  }
];

export default routes;
