"use client";

export default function ContractAddress() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between group hover:bg-gray-200 transition-colors">
      <code className="font-mono text-gray-700 break-all">
        VaxZxmFXV8tmsd72hUn22ex6GFzZ5uq9DVJ5wA5pump
      </code>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            "VaxZxmFXV8tmsd72hUn22ex6GFzZ5uq9DVJ5wA5pump"
          );
        }}
        className="ml-4 p-2 rounded-md hover:bg-gray-300 transition-colors"
        title="Copy to clipboard"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  );
}
