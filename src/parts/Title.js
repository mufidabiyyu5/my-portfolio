import React from 'react'
import { useParams } from 'react-router-dom'



export default function Title(props){
    const {id} = useParams();
    const project = props.data.find((project) => project._id === id)

    return(
        <section className="title-section container">
        <div className="d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300" data-aos-offset="0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.6 10C7.6 9.33726 8.13726 8.8 8.8 8.8H15.2C15.8627 8.8 16.4 9.33726 16.4 10C16.4 10.6627 15.8627 11.2 15.2 11.2H8.8C8.13726 11.2 7.6 10.6627 7.6 10Z"
                    fill="#FFD369" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.6 14C7.6 13.3373 8.13726 12.8 8.8 12.8H10.8C11.4627 12.8 12 13.3373 12 14C12 14.6627 11.4627 15.2 10.8 15.2H8.8C8.13726 15.2 7.6 14.6627 7.6 14Z"
                    fill="#FFD369" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4.4 4.4V19.6H14.7029L19.6 14.7029V4.4H4.4ZM14.87 20.01V20.8L14.8728 20.0128L14.87 20.01ZM14.8728 20.01L14.8742 19.6L14.87 19.6V20.0072L14.8728 20.01ZM14.8685 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V14.8685"
                    fill="#FFD369" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13.6 14.8C13.6 14.1373 14.1373 13.6 14.8 13.6H20.73C21.3927 13.6 21.93 14.1373 21.93 14.8C21.93 15.4627 21.3927 16 20.73 16H16V20.73C16 21.3927 15.4627 21.93 14.8 21.93C14.1373 21.93 13.6 21.3927 13.6 20.73V14.8Z"
                    fill="#FFD369" />
            </svg>
            <label>Case Study</label>
        </div>
        <div className="title text-center">
            <h1 className="sub-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300" data-aos-offset="0">
                {project.titleName}
            </h1>
            <h1 className="main-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-delay="600" data-aos-offset="0">
                {project.projectName}
            </h1>
        </div>
    </section>
    );
}