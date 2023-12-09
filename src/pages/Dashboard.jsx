import { useState } from "react";

const Dashboard = () =>{
    const [value, setValue] = useState({

    });

    
    return(
        <>
            <div className="dashboard-main">
                <div className="Dashboard-heading">
                    <p>Employee Productiivity Dashboard</p>
                </div>
                <div className="dashboard-content">
                    <div className="dashboard-single-container">
                        <div className="dashboard-inner-container">
                            <label htmlFor="points">Productivity on Monday</label>
                            <input type="range" defaultValue={4} name="points" min="0" max="100" disabled ></input>
                        </div>
                        <div className="range-percent">
                            <p>4%</p>
                        </div>
                    </div>
                    <div className="dashboard-single-container">
                        <div className="dashboard-inner-container">
                            <label htmlFor="points">Productivity on Tuesday</label>
                            <input type="range" defaultValue={92} name="points" min="0" max="100" disabled></input>
                        </div>
                        <div className="range-percent">
                            <p>92%</p>
                        </div>
                    </div>
                    <div className="dashboard-single-container">
                        <div className="dashboard-inner-container">
                            <label htmlFor="points">Productivity on Wednesday</label>
                            <input type="range" defaultValue={122} name="points" min="0" max="100" disabled></input>
                        </div>
                        <div className="range-percent">
                            <p>122%</p>
                        </div>
                    </div>
                    <div className="dashboard-single-container">
                        <div className="dashboard-inner-container">
                            <label htmlFor="points">Productivity on Thursday</label>
                            <input type="range" defaultValue={93} name="points" min="0" max="100" disabled></input>
                        </div>
                        <div className="range-percent">
                            <p>93%</p>
                        </div>
                    </div>
                    <div className="dashboard-single-container">
                        <div className="dashboard-inner-container">
                            <label htmlFor="points">Productivity on Friday</label>
                            <input type="range" defaultValue={89} name="points" min="0" max="100" disabled></input>
                        </div>
                        <div className="range-percent">
                            <p>89%</p>
                        </div>
                    </div>
                    <div className="dashboard-single-container">
                        <div className="dashboard-inner-container">
                            <label htmlFor="points">Productivity on Saturday</label>
                            <input type="range" defaultValue={98} name="points" min="0" max="100" disabled></input>
                        </div>
                        <div className="range-percent">
                            <p>98%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;