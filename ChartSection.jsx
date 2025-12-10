import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie,
} from "recharts";
function ChartSection({ sentiment }){
    const data = [
        { name: 'Positive', value: sentiment.positive },
        { name: 'Neutral', value: sentiment.neutral },
        { name: 'Negative', value: sentiment.negative },
    ];
    return(
        <div className="chart-section">
            <h2>Sentiment Chart</h2>
            <div className="chart-block">
                <h3>Bar Chart</h3>
                <div style={{width:"100%", height:250}}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            </div>
            <div className="chart-block">
                <h3>Pie Chart</h3>
                <div style={{width:"100%", height:250, marginTop:20}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label fill="#8884d8" />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            </div>
        </div>
    );
}

export default ChartSection;