import React from 'react';
import {XAxis, YAxis, CartesianGrid, Tooltip, Area, Bar, ComposedChart} from 'recharts';

const Stat = ({users}) => {
    console.log(users)
    return (
        <div className="mx-auto w-50 mt-5">
            <ComposedChart  width={730} height={500} data={users}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="50%" stopColor="#82ca9d" stopOpacity={1.0}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.3}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="displayName" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Time" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  <Bar dataKey="Time" barSize={10} fill="#413ea0" />
</ComposedChart>
            
        </div>
    );
};

export default Stat;