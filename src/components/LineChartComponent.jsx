import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { studentProgress } from '../data';

const LineChartComponent = () => {
    return (
        <div className="bg-white p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">📈 Progress Over Time</h2>
            <p className="text-sm text-gray-500 mb-4">Student performance trend over key dates</p>

            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={studentProgress} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="lineColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0.2} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="date" tick={{ fill: '#6b7280' }} axisLine={false} />
                        <YAxis tick={{ fill: '#6b7280' }} axisLine={false} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '6px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="url(#lineColor)"
                            strokeWidth={2.5}
                            dot={{ fill: '#10b981', r: 4 }}
                            activeDot={{ r: 6, fill: '#059669' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineChartComponent;
