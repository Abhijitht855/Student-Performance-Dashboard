import React from 'react';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';
import PieChartComponent from './components/PieChartComponent';
import MetricsOverview from './components/MetricsOverview';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 py-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Academic Dashboard</h1>
              <p className="mt-0.5 text-xs text-gray-500">2023-24 Performance Metrics</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                Live Data
              </span>
              <button className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 py-4 sm:px-4 lg:px-6">
        <MetricsOverview />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm">
            <LineChartComponent />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <PieChartComponent />
          </div>
          <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm">
            <BarChartComponent />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-6">
        <div className="max-w-7xl mx-auto px-2 py-3 sm:px-4 lg:px-6 text-center text-sm text-gray-500">
          Data updated every 15 minutes • Last refresh: {new Date().toLocaleString()}
        </div>
      </footer>
    </div>
  );
};

export default App;
