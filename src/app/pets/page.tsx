import Link from "next/link";

export default function PetsPage() {
  return (
    <main>
      <h2>Welcome to the pets page</h2>
      <p>Learn all about the pets inside the palace home to the fresh prince of Norfolk</p>
      <Link href="/pets/elephant">Elephant Page</Link>
    </main>
  );
}
