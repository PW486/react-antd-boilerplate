import Board from "containers/Board";
import SignIn from "containers/SignIn";
import NotFound from "components/NotFound";

const routes = [
  {
    exact: true,
    path: "/",
    name: 'Home',
    Icon: 'home',
    component: Board,
    auth: true,
    permission: 'admin',
  },
  {
    path: "/signin",
    name: 'Sign In',
    Icon: 'login',
    component: SignIn,
  },
  {
    path: "",
    name: 'Not Found',
    Icon: 'close-circle',
    component: NotFound,
  }
];

export default routes;
