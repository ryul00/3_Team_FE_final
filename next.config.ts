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
        source: '/api/:path*', // API 라우트에 대해 CORS 헤더를 추가
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // 모든 도메인 허용 (필요에 따라 변경)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS', // 허용할 HTTP 메서드
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization', // 필요한 헤더 명시
          },
        ],
      },
    ];
  },
};

export default nextConfig;