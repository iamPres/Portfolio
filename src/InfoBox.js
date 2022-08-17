import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { tabColor, PAGES } from "./Content"
import { Name } from "./Styled"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export const InfoBox = (props) => {
    return (
        <foreignObject opacity={0} id="ui" x="35" y="80" height="80%" width="100%">
            <Name/>
            <Box mb={2} sx={{ fontFamily: 'Courier New', fontSize: 20, color: tabColor }} display="flex" flexDirection="row" style={{ width: "100%", justifyContent: "left" }}>
                [Developer / Tutor / Student]
            </Box>
            <Divider width="300" color={tabColor} orientation="horizontal"></Divider>
            <Box sx={{ fontFamily: 'Courier New', fontSize: 20, color: tabColor, fontWeight: "Light" }} display="flex" flexDirection="row" style={{ width: 800, justifyContent: "left" }}>
                <h4 align="left">Welcome to my portolio! I have knowledge in machine learning, cloud computing, front-end, and back end development. Additionally, I am an AWS Certified Cloud Practitioner. Feel free to browse my relevant fields of study.</h4>
            </Box>
            <Box display="flex" flexDirection="row" style={{ width: 600 }}>
                <Button onClick={() => {props.startSpeedTransition(PAGES.About)}} style={{ width: 200, height: 50 }} variant="outlined">About</Button>
                <Button onClick={() => {props.startSpeedTransition(PAGES.Send)}} style={{ marginLeft: 20, width: 200, height: 50 }} variant="outlined">Contact</Button>
                <Button onClick={() => {props.startSpeedTransition(PAGES.ML)}} sx={{ fontFamily: 'Courier New', fontSize: 40, color: tabColor, fontWeight: "Light" }} endIcon={<DoubleArrowIcon />} style={{ marginTop: -17.5, marginLeft: 20, width: 300 }} >Explore</Button>
            </Box>
        </foreignObject>
    )
}