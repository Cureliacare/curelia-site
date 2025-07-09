
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Curelia - La nuova frontiera della cura</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 p-4">
        <img src="/logo.svg" alt="Curelia Logo" className="w-32 mb-6" />
        <h1 className="text-4xl font-bold text-center">La piattaforma intelligente per la gestione dei pazienti in RSA e a domicilio</h1>
        <p className="mt-6 max-w-xl text-center text-lg">
          Curelia rivoluziona il modo in cui RSA, familiari e medici di famiglia collaborano. Cartelle cliniche digitali, AI Care Planner e molto altro.
        </p>
        <div className="mt-8">
          <a href="mailto:info@curelia.it" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Contattaci
          </a>
        </div>
        <p className="mt-16 text-sm text-gray-500">Coming soon • © 2025 Curelia</p>
      </main>
    </>
  )
}
