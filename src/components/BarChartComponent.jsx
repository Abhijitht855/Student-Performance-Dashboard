import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { subjectAverages } from '../data';

const BarChartComponent = () => {
    return (
        <div className="bg-white p-4 rounded-xl">
            <h2 className="text-lg font-bold text-gray-800 mb-2">📊 Subject Averages</h2>
            <p className="text-sm text-gray-500 mb-4">Performance comparison across subjects</p>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={subjectAverages}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="subject" tick={{ fill: '#6b7280' }} axisLine={false} />
                        <YAxis tick={{ fill: '#6b7280' }} axisLine={false} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '6px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        />
                        <Bar dataKey="avg" fill="#6366f1" radius={[4, 4, 0, 0]} label={{ fill: '#374151', fontSize: 12, position: 'top' }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartComponent;