import React, { useEffect, useState } from "react";
export default function App() {
  const product = {
    title: "Futbolka",
    price: 20,
    images: [
      "https://www.google.com/imgres?q=futbolka&imgurl=https%3A%2F%2Fmercedes-benz-uzbekistan.uz%2Fwp-content%2Fuploads%2F2022%2F02%2Fpeople_4_manshortfull_front_white_500.jpg&imgrefurl=https%3A%2F%2Fmercedes-benz-uzbekistan.uz%2Fuz%2Fmuzhskaya-futbolka-3d-purpurnyj%2F&docid=3a8Bwz1nnsl-wM&tbnid=5RHFUk6vZ7UIWM&vet=12ahUKEwjer-OI1Z6QAxWj9QIHHWDFFK0QM3oECCwQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjer-OI1Z6QAxWj9QIHHWDFFK0QM3oECCwQAA",
      "www.google.com/imgres?q=futbolka&imgurl=https%3A%2F%2Fnesipetsin.com%3A7070%2Fimages%2Fproduct%2F2022%2F01%2F29%2F23%2F369573ca-6e56-417c-a8b2-0ed8a3214e18.jpg&imgrefurl=https%3A%2F%2Fnesipetsin.com%2Fproduct%2Fdetail%2F123290477%3Fsrsltid%3DAfmBOopyLN6S9QdOsJg6afZ8gGpT1qJ9lMk6EdoN-VH4obTd4ZcZlShK&docid=zlK9p2XDVqdBkM&tbnid=z4r-APU6BCzBnM&vet=12ahUKEwjer-OI1Z6QAxWj9QIHHWDFFK0QM3oECDcQAA..i&w=1200&h=1800&hcb=2&ved=2ahUKEwjer-OI1Z6QAxWj9QIHHWDFFK0QM3oECDcQAA",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop",
    ],
  };


  const [count, setCount] = useState(1);
  const [img, setImg] = useState(0);

  const up = () => setCount((q) => q + 1);
  const down = () => setCount((q) => Math.max(1, q - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((i) => (i + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  const total = (product.price * count).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Xarid savatchasi</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="col-span-1">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img
              src={product.images[img]}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded">
              {img + 1}/{product.images.length}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-sm text-gray-600">Narx: ${product.price.toFixed(2)}</p>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={down}
                  aria-label="down"
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                >
                  −
                </button>

                <div className="w-12 text-center">{count}</div>

                <button
                  onClick={up}
                  aria-label="up"
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>

                <div className="ml-4 text-sm text-gray-500">(Minimal miqdor: 1)</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-gray-600">Umumiy narx</div>
              <div className="text-2xl font-semibold">${total}</div>
            </div>

            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                Savatga qo'shish
              </button>
              <button className="px-4 py-2 rounded border border-gray-300">Sotib olish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
