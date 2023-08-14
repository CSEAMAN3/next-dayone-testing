import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>App Creation for Notes</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/pets">Pets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
