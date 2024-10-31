import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
    const students = [
        { id: 1, name: "Student 1", math: 85, chemistry: 50, physics: 22 },
        { id: 2, name: "Student 2", math: 52, chemistry: 75, physics: 58 },
        { id: 3, name: "Student 3", math: 90, chemistry: 11, physics: 55 },
        { id: 4, name: "Student 4", math: 35, chemistry: 52, physics: 70 },
        { id: 5, name: "Student 5", math: 80, chemistry: 55, physics: 18 },
        { id: 6, name: "Student 6", math: 66, chemistry: 39, physics: 87 },
        { id: 7, name: "Student 7", math: 43, chemistry: 32, physics: 95 },
        { id: 8, name: "Student 8", math: 71, chemistry: 53, physics: 39 },
        { id: 9, name: "Student 9", math: 55, chemistry: 60, physics: 22 },
        { id: 10, name: "Student 10", math: 18, chemistry: 56, physics: 74 }
    ];
    
    
    return (
        <div>
            <LChart width={800} height={400} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
        <Line type="monotone" dataKey="math"  stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="physics" stroke="blue" strokeWidth={2} />
      </LChart>
        </div>
    );
};

export default LineChart;