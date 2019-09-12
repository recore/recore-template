import { runApp } from '@recore/fx';
runApp({
  history: {
    mode: 'browser',
    basename: process.env.NODE_ENV === 'production' ? '/' : (window as any).g_config.routerBaseName,
  },
});
