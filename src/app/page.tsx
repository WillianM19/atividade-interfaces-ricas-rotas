import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Página Inicial</h1>
      <nav className="space-x-4">
        <Link
          href="/about"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition block mb-5"
        >
          Sobre
        </Link>
        <Link
          href="/product/1"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Produto 1
        </Link>
        <Link
          href="/product/2"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Produto 2
        </Link>
        <Link
          href="/product/3"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Produto 3
        </Link>
      </nav>
    </main>
  );
}
