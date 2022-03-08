import Link from "next/link";
import Banner from "./banner";
import Sider from "./sider";
import Content from "./content";
// import { Layout } from 'next/Layout'

export default function Home() {
  return (
    <div className="h-full">
      <nav className="h-10">
        <ul className="nav-ul">
          <li>
            <Link href="/">首页</Link>
          </li>
          <li>
            <Link href="/banner">banner</Link>
          </li>
          <li>
            <Link href="/sider">sider</Link>
          </li>
          <li>
            <Link href="/content">content</Link>
          </li>
        </ul>
      </nav>
      <section className="main-section">
        <Banner />
        <Content />
        <Sider />
      </section>
    </div>
  );
}
