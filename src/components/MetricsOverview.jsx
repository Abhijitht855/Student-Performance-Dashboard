import React from 'react';

const metricsData = [
    { title: "Avg. Score", value: "81.29", change: "+3.2%", trend: "up" },
    { title: "Top Subject", value: "Computer Science", change: "7.14%", trend: "down" },
    { title: "Attendance", value: "94%", change: "+1.5%", trend: "up" },
    { title: "Improvement", value: "18%", change: "+6.4%", trend: "up" }
];

const MetricsOverview = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {metricsData.map((metric, index) => {
                const isPositive = metric.trend === 'up';
                const trendSymbol = isPositive ? '▲' : '▼';

                return (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                        <div className="mt-1 flex items-center justify-between">
                            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                            {metric.change && (
                                <span
                                    className={`flex items-center text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'
                                        }`}
                                >
                                    <span className="mr-1">{trendSymbol}</span>
                                    {metric.change}
                                </span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MetricsOverview;
