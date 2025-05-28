// src/pages/ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Terjadi kesalahan.</p>
      <p className="text-sm text-gray-600">
        {error?.statusText || error?.message}
      </p>
    </div>
  );
}
