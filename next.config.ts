import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    // styled-components 지원 활성화
    styledComponents: true,
  },
  devIndicators: {
    buildActivity: false, // 빌드 배지 비활성화
    appIsrStatus: false,  // ISR 관련 배지 비활성화
  },
  webpack: (config) => {
    // JSON 파일을 처리하도록 Webpack 설정 추가
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });

    return config;
  },
};

export default nextConfig;