import React, { useContext, useState } from 'react'
import '../styles/projectCard.css'
import { Link } from 'react-router-dom';
import { AppContext } from '../Components/context/AppContext.jsx';

export default function ProjectCard({ projectName, priority, dueDate, companyName, width, id }) {

    const { setSelectedTaskId, selectedTaskId, projects,setProjects } = useContext(AppContext);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setSelectedTaskId(id);
        setMenuVisible(!menuVisible);
    };

    function deleteProject(id) {
        console.log(id);
        let filterProjects = projects.filter((data) => {
            return data.id != id
        })
        setProjects(filterProjects)

    }
    return (
        <div className='projectCard' style={{ width: width }}>
            <div className="projectCardHead">
                <Link to={`/project-detail?id=${id}`} className="projectName">
                    <p  >{projectName}</p>
                    <p >{companyName ? companyName : 'Unknown'}</p>
                </Link>
                <i onClick={toggleMenu} className="fa-solid fa-ellipsis" style={{ fontSize: '14px', cursor: 'pointer' }}></i>
            </div>
            <div className="projectStatus">
                <p style={{ margin: '0' }}>In Progress</p>
                <p style={{ margin: '0' }}><span></span>{priority}</p>
            </div>
            <div className="projectTask">
                <p><span>Task Done:</span>3/5</p>
                <input type="range" defaultValue={80} />
            </div>
            <div className="projectDueDate">
                <p>Due Date: {dueDate}</p>
            </div>
            {/* <div className="addTaskBtn">
                <p><i className="fa-solid fa-plus" style={{ marginRight: '10px' }} ></i>ADD TASK</p>
            </div> */}
            <div className="cardMenu" style={{ display: menuVisible ? 'flex' : 'none' }}>
                <button style={{ color: 'blue' }} className="cardMenuEdit">View</button>
                <button style={{ color: 'red' }} className="cardMenuDel" onClick={() => { deleteProject(id) }}>Delete</button>
            </div>
        </div>
    )
}
