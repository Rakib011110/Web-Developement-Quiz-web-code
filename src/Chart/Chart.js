import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const statistics = useLoaderData()
    const data = statistics.data
    console.log(data);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className='container mt-5'>

                <LineChart width={500}
                    height={300} data={data} ><Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                </LineChart>

            </div>
        </ResponsiveContainer>
    );
};

export default Chart;
