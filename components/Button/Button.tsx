"use client";

import { ButtonProps } from ".";

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
