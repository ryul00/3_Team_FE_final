import { redirect } from 'next/navigation';

export default function Home() {
  // '/' 경로에 접근 시 '/loginpage'로 리다이렉트
  redirect('/loginpage');
}