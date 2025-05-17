export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border-l-4 border-blue-400 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Detalhes do produto</h2>
        {children}
      </div>
    </div>
  );
}
