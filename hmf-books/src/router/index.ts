import { VueConstructor } from 'vue';
import VueRouter, { RawLocation } from 'vue-router';

import { routes } from './routes';

class HMFRouter extends VueRouter {
  public push(location: RawLocation);
  public push(location: RawLocation, onResolve?, onReject?) {
    if (onResolve || onReject) {
      return super.push.call(this, location, onResolve, onReject);
    }
    return super.push.call(this, location).catch((err) => {
      console.log(err);
      if (HMFRouter.isNavigationFailure(err)) {
        return err;
      }
      return Promise.reject(err);
    });
  }
}

export const router = new HMFRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => {
    window.scrollTo(0, 0);
  },
});

export default function install(vue: VueConstructor): void {
  vue.use(HMFRouter);
}
