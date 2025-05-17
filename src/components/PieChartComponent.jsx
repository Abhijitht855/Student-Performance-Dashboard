// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
// import { gradeDistribution } from '../data';

// const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

// const PieChartComponent = () => {
//     return (
//         <div className="bg-white p-4 ">
//             <h2 className="text-lg font-bold text-gray-800 mb-2">📀 Grade Distribution</h2>
//             <p className="text-sm text-gray-500 mb-4">Breakdown of student grades</p>

//             <div className="h-[300px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                         <Pie
//                             data={gradeDistribution}
//                             dataKey="value"
//                             nameKey="grade"
//                             cx="50%"
//                             cy="50%"
//                             outerRadius={90}
//                             innerRadius={60}
//                             labelLine={true}
//                             label={({ grade, percent }) => `${grade}: ${(percent * 100).toFixed(0)}%`}
//                         >
//                             {gradeDistribution.map((entry, index) => (
//                                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                         </Pie>
//                         <Tooltip
//                             formatter={(value, name) => [`${value} students`, name]}
//                             contentStyle={{
//                                 backgroundColor: '#ffffff',
//                                 border: '1px solid #e5e7eb',
//                                 borderRadius: '6px',
//                             }}
//                         />
//                         <Legend
//                             layout="horizontal"
//                             verticalAlign="bottom"
//                             align="center"
//                             wrapperStyle={{ paddingTop: '20px' }}
//                         />
//                     </PieChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// };

// export default PieChartComponent;

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { gradeDistribution } from '../data';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const PieChartComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-white  w-full p-2">
      <h2 className="text-lg font-bold text-gray-800 mb-2">📀 Grade Distribution</h2>
      <p className="text-sm text-gray-500 mb-4">Breakdown of student grades</p>

      <div className="h-[300px] mx-auto max-w-xs sm:max-w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={gradeDistribution}
              dataKey="value"
              nameKey="grade"
              cx="50%"
              cy="50%"
              outerRadius={isMobile ? 60 : 90}
              innerRadius={isMobile ? 40 : 60}
              labelLine={false}
              label={({ grade, percent }) => `${grade}: ${(percent * 100).toFixed(0)}%`}
            >
              {gradeDistribution.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value} students`, name]}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
              }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: '10px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
