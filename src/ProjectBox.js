import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import { tabColor } from "./Content"
import { GitHub } from "@mui/icons-material"
import { BottomBar } from "./BottomBar"
import { React, useState, useEffect } from 'react'
import { Button } from "@mui/material"

export const ProjectBox = (props) => {

    const loadMedia = () => {
        return props.content.media.map((value, index) => {
            return <img loading="lazy" style={{ marginRight: 20, maxHeight: 300 }} src={value}></img>
        })
    }

    return (
        <foreignObject id="projectbox" x="35" y="80" height="600" width="100%">
            <Box mb={2} sx={{ fontFamily: 'Courier New', fontSize: 50, color: tabColor }} display="flex" flexDirection="row" style={{ width: "100%", justifyContent: "left" }}>
                {props.content.title}
                <Box ml={2} mt={0.2} display="flex" flexDirection="column" style={{ width: 200 }}>
                    <IconButton onClick={() => window.open(props.content.github)} sx={{ color: tabColor }} style={{ width: 50, height: 50 }} variant="outlined"><GitHub fontSize="large" /></IconButton>
                </Box>
            </Box>
            <Divider width="300" color={tabColor} orientation="horizontal"></Divider>
            <Box sx={{ fontFamily: 'Courier New', fontSize: 20, color: tabColor, fontWeight: "Light" }} display="flex" flexDirection="row" style={{ width: "90%", justifyContent: "left" }}>
                <h4 align="left">{props.content.description}</h4>
            </Box>
            <Box sx={{ fontFamily: 'Courier New', fontSize: 20, color: tabColor, fontWeight: "Light" }} display="flex" flexDirection="row" style={{ width: 800, justifyContent: "left" }}>
             {loadMedia()}
            </Box>
            <Box marginTop={2} display="flex" style={{justifyContent: "left"}}>
                <Button variant="outlined" onClick={() => {props.setListMode(true)}}>Back</Button>
            </Box>
        </foreignObject>
    )
}