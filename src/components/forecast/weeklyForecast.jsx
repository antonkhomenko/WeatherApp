import {LineChart, AreaChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Area} from 'recharts';
import classes from './forecast.module.css';
const WeeklyForecast = ({foreCastData}) => {

    return (
        <ResponsiveContainer width='95%' height='85%' className={classes.rsp}>
            <LineChart width={700} height={300} data={foreCastData} margin={{top: 20}}>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8"/>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" dy={5}/>
                <YAxis dx={-5}/>
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default WeeklyForecast;
