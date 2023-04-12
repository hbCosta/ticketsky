/* eslint-disable @next/next/no-img-element */
import './global-css.css';
import { Login } from "@/pages/Login/login";
import { TopBar } from "@/components/TopBar/topbar";

export default function Home() {
  return (
    <main>  
        <TopBar/>
        <Login/>     
    </main>
  )
}
