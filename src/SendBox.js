import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import TextField from "@mui/material/TextField"
import { tabColor, PAGES } from "./Content"
import * as d3 from "d3";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export const SendBox = (props) => {

    return (
        <foreignObject opacity={0} id="si" x="35" y="80" height="900" width="60%">
            <Box mb={2} sx={{ fontFamily: 'Courier New', fontSize: 50, color: tabColor }} display="flex" flexDirection="row" style={{ width: 800, justifyContent: "left" }}>
                Message Me
            </Box>
            <Divider width="300" color={tabColor} orientation="horizontal"></Divider>
            <Box sx={{ fontFamily: 'Courier New', fontSize: 20, color: tabColor, fontWeight: "Light" }} display="flex" flexDirection="row" style={{ marginTop: 20, width: 800, justifyContent: "left" }}>
                <TextField
                    autoFocus
                    sx={{ input: { color: tabColor } }}
                    style={{ textAlign: 'left', color: tabColor, width: "100%" }}
                    hintText="Message Field"
                    floatingLabelText="MultiLine and FloatingLabel"
                    multiline
                    rows={2}
                />
            </Box>
            <Box display="flex" flexDirection="row" style={{ width: "50%" }}>
                <Button sx={{ fontFamily: 'Courier New', fontSize: 40, color: tabColor, fontWeight: "Light" }} endIcon={<DoubleArrowIcon />} style={{ marginTop: 10, height: 60, width: 150 }} >Send</Button>
            </Box>
        </foreignObject>
    )
}