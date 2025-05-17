'use client';

import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="bg-white rounded shadow p-6 border border-blue-200">
      <h1 className="text-2xl font-semibold text-blue-800 mb-2">Produto numero {id}</h1>
      <p className="text-blue-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, officiis? Exercitationem eos deleniti, repellendus laborum quisquam a possimus est enim dolorem dolore voluptate iste nostrum, libero omnis, id at aspernatur.
      </p>
    </div>
  );
}
