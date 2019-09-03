import Board from 'containers/Board';
import SignIn from 'containers/SignIn';
import NotFound from 'containers/NotFound';

const mainRoutes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    icon: 'home',
    component: Board,
    auth: true,
    permission: 'admin',
  },
  {
    path: '/signin',
    name: 'Sign In',
    icon: 'login',
    component: SignIn,
  },
  {
    path: '',
    name: 'Not Found',
    icon: 'close-circle',
    component: NotFound,
  },
];

export default mainRoutes;
