import { Route, NavigationGuardNext, RouteConfig } from 'vue-router';

const authGuard = (
  _: Route,
  __: Route,
  next: NavigationGuardNext<Vue>
): void => {
  if (true) {
    next();
  } else {
    next({ path: '/signout' });
  }
};

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    beforeEnter: authGuard,
    component: () => import('../views/Hello.vue'),
  },
];
