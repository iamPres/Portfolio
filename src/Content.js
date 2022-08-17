import autogen from "./autogen2.gif"
import ballnav from "./ballnav.png"

export const PAGES = {
    Landing: 0,
    About: 1,
    ML: 2,
    Send: 3,
    Web: 4,
}

export const tabColor = "#42a5f5"

export const personalInfo = {
    github: "",
    linkedIn: ""
}

export const projects = [
    {
        title: "Neuro-Evolution Course Runner - C#",
        description: "Machine Learning Course runner algorithm implemented in Unity.",
        github: "https://github.com/iamPres/NeuroEvolutionBot",
        media: [autogen]
    },
    {
        title: "Mountain-Car DQN-I2A - Python",
        description: "Basic reinforcement learning implimentations for Gym MountainCar-v0 using value function approximators for action choice (DQN) and future state prediction (I2A).",
        github: "https://github.com/iamPres/mountain-car-RL",
        media: ["https://user-images.githubusercontent.com/8510097/31701297-3ebf291c-b384-11e7-8289-24f1d392fb48.PNG", "https://raw.githubusercontent.com/iamPres/mountain-car-RL/DQN-I2A-Learning/Figure_3.png"]
    },
    {
        title: "BallNav Neuro-Evolution - Python",
        description: "Navigation of a ball to certain coordinates by adjusting the X and Y slope of the plane on which it travels with neuro-evolution.",
        github: "https://github.com/iamPres/BallNav",
        media: [ballnav]
    },
    {
        title: "Saltie Neuro-Evolution - Python",
        description: "Basic reinforcement learning implimentations for Gym MountainCar-v0\nAlgorithms\n\nMonte Carlo - 100% success rate ( 1000 frame limit instead of 200 )\nQ-Learning ( Temporal Difference ) - 80% success rate\nDQN-I2A-Learning - Agent successfully predicts future environment state",
        github: "",
        media: []
    },
    {
        title: "Mario Neuro-Evolution - Python",
        description: "Basic reinforcement learning implimentations for Gym MountainCar-v0\nAlgorithms\n\nMonte Carlo - 100% success rate ( 1000 frame limit instead of 200 )\nQ-Learning ( Temporal Difference ) - 80% success rate\nDQN-I2A-Learning - Agent successfully predicts future environment state",
        github: "",
        media: []
    },

]

export const web_projects = [
    {
        title: "React Date-Range Picker - JavaScript",
        description: "react-daterange-picker can be used to pick a date range in react and specify a data refresh interval.",
        github: "https://github.com/iamPres/react-daterange-picker",
        media: []
    },
]