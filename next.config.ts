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
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 ESLint 오류를 무시
  },
  webpack: (config) => {
    // JSON 파일을 처리하도록 Webpack 설정 추가
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });

    return config;
  },

  async headers() {
    return [
      {
        source: '/:path*', // 모든 경로에 CORS 적용
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // 모든 도메인 허용
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

export default nextConfig;