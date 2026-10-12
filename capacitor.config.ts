import type { CapacitorConfig } from '@capacitor/cli';

// 当前文件：Folia Android Capacitor 容器的构建与 WebView 配置。

const config: CapacitorConfig = {
  appId: 'top.izuna.foliamajor',
  appName: '天府',
  webDir: 'dist',
  loggingBehavior: 'debug',
  backgroundColor: '#09090b',
  server: {
    androidScheme: 'https',
    hostname: 'localhost',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 900,
      backgroundColor: '#09090b',
      showSpinner: false,
    },
    StatusBar: {
      overlaysWebView: true,
      style: 'LIGHT',
      backgroundColor: '#09090b',
    },
  },
  android: {
    allowMixedContent: true,
  },
};

export default config;
