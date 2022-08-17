import { tabColor } from "./Content"
import { Name } from "./Styled"
import { useState } from "react"
import Button from '@mui/material/Button'
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"

const ABOUT = {
    Developer: 0,
    Tutor: 1,
    Student: 2
}

const block = <Box mt={0.2} mr={1} style={{ backgroundColor: tabColor, width: 20, height: "100%" }}></Box>
const Container = (props) => {
    return <Box sx={{ fontFamily: 'Courier New', fontSize: 30 }} mb={2} mt={2} display="flex" flexDirection="row" style={{ height: 30, width: "100%", justifyContent: "left" }}>{block}{props.children}</Box>
}

const devContent = [
    <Container>ADR Services International</Container>,
    <>Developed Mediator Pro Application</>,
    <Container>Blue Streak Technologies</Container>,
    <> Developed BlueBox Suite</>,
    <Container>Zocaux</Container>,
    <>Developed Suite for Topology Backwards-Analysis</>
]

const tutorContent = [
    <Container>Location</Container>,
    <>Dallas, Texas</>,
    <Container>Specialties</Container>,
    <>C++</>,
    <>Python</>,
    <>JavaScript</>
]

const studentContent = [
    <Container>Education</Container>,
    <>Southern Methodist University '25</>,
    <Container>Coursework</Container>,
    <>AP Computer Science Applications</>,
    <>AP Computer Science Principles</>,
    <>Introduction to C++</>,
    <>Engineering Design</>,
    <>Data Structures</>
]

const content = [
    {
        name: "Developer",
        item: ABOUT.Developer
    },
    {
        name: "Tutor",
        item: ABOUT.Tutor
    },
    {
        name: "Student",
        item: ABOUT.Student
    },
]

export const About = (props) => {

    const [contentSelected, setContentSelected] = useState(ABOUT.Developer)

    const renderAboutContent = () => {
        let content = devContent
        if (contentSelected == ABOUT.Tutor) {
            content = tutorContent
        } else if (contentSelected == ABOUT.Student) {
            content = studentContent
        }
        return content.map((value, index) => {
            return (
                <Box display="flex" flexDirection="row" style={{ width: "100%", justifyContent: "left" }}>
                    {value}
                </Box>
            )
        })
    }

    const renderBlock = (item) => {
        if (contentSelected == item) {
            return block
        } else {
            return <></>
        }
    }

    return (
        <foreignObject opacity={0} id="ai" x="35" y="80" height="80%" width="100%">
            <Box display="flex" flexDirection="row">
                <Box sx={{ fontFamily: 'Courier New', fontSize: 50, color: tabColor }} display="flex" width="60%" height="100%" flexDirection={"column"} style={{ justifyContent: "left" }}>
                    <Name/>
                    <Divider width="300" color={tabColor} orientation='horizontal'></Divider>
                    <Box mt={2} display="flex" flexDirection="column" width={200} style={{ alignItems: "left", justifyContent: "left" }}>
                        {content.map((value, index) => {
                            return (
                                <Box mb={1} onClick={() => { setContentSelected(value.item) }} sx={{ fontFamily: 'Courier New', fontSize: contentSelected == value.item ? 30 : 20, color: tabColor }} display="flex" flexDirection="row" style={{ width: "100%", height: contentSelected == value.item ? 30 : 20, justifyContent: "left" }}>
                                    {renderBlock(value.item)}
                                    {value.name}
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <Box mt={8} display="flex" flexDirection="column" style={{ width: "90%", justifyContent: "left", alignItems: "left" }} sx={{ fontFamily: 'Courier New', fontSize: 20, color: tabColor }}>
                    {renderAboutContent()}
                    <Button variant="outlined" style={{ marginTop: 20, height: 50, width: 300 }}>Contact {content[contentSelected].name}</Button>
                </Box>
            </Box>
        </foreignObject>
    )
}