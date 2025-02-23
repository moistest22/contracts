import ContractAddress from "./components/ContractAddress";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Contract Address
        </h1>
        <ContractAddress />
      </div>
    </div>
  );
}
