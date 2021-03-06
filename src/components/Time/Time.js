import React from "react";
import './Time.css'

export default function T(props) {
    // props接受Main父组件传递过来的参数
    const { hours, minutes, seconds }=props
    const [over, setOver] = React.useState(false);
    // time 默认值是一个 object
    const [time, setTime] = React.useState({
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds)
    });
    
    const tick = () => {
        // 已结束
        if (over) return;
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
        setOver(true);
        else if (time.minutes === 0 && time.seconds === 0)
        setTime({
            hours: time.hours - 1,
            minutes: 59,
            seconds: 59
        });
        else if (time.seconds === 0)
        setTime({
            hours: time.hours,
            minutes: time.minutes - 1,
            seconds: 59
        });
        else
        setTime({
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds - 1
        });
    };
    
    
    React.useEffect(() => {
        // 执行定时
        let timerID = setInterval(() => tick(), 1000);
        // 卸载组件时进行清理
        return () => clearInterval(timerID);
    });
    
    return (
        <div style={{display:'inline'}}>
            <span className="first">{`${time.hours
                .toString()
                .padStart(2, "0")}:${time.minutes
                .toString()
                .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</span>
            {/* 当结束的时候就会显示开抢 */}
            <span className="second">{over ? "开抢!" : ""}</span>
        </div>
    );
}
