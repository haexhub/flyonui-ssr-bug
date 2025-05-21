import 'flyonui/flyonui';

import { type IStaticMethods } from 'flyonui/flyonui';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  router.afterEach(async () => {
    nextTick(() => window.HSStaticMethods.autoInit());
  });
});
