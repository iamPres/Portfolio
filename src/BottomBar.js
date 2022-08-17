import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { tabColor } from "./Content"
import { Apps, ArrowBackIos, ArrowForwardIos, Rectangle } from "@mui/icons-material"
import * as d3 from "d3"

export const BottomBar = (props) => {

    const handlePrevious = () => {
        props.setIsShown(false)
        d3.selectAll("[id=projectbox]")
            .transition()
            .duration(500)
            .style("opacity", 0)
            .attrTween("transform", function () {
                return d3.interpolateString("translateX(0,0)", "translate(100,0)")
            }).on("end", () => {
                props.setProjectIndex(props.projectIndex - 1)
                d3.selectAll("[id=projectbox]")
                    .transition()
                    .duration(500)
                    .style("opacity", 1)
                    .attrTween("transform", function () {
                        return d3.interpolateString("translateX(-100,0)", "translate(0,0)")
                    })
            })
    }

    const handleNext = () => {
        props.setIsShown(false)
        d3.selectAll("[id=projectbox]")
            .transition()
            .duration(500)
            .style("opacity", 0)
            .attrTween("transform", function () {
                return d3.interpolateString("translateX(0,0)", "translate(-100,0)")
            }).on("end", () => {
                props.setProjectIndex(props.projectIndex + 1)
                d3.selectAll("[id=projectbox]")
                    .transition()
                    .duration(500)
                    .style("opacity", 1)
                    .attrTween("transform", function () {
                        return d3.interpolateString("translateX(100,0)", "translate(0,0)")
                    })
            })
    }

    return (
        <Box display="flex" flexDirection="row" style={{height: 50}}>
            <IconButton onClick={handlePrevious} sx={{ color: tabColor }} style={{ marginRight: 0, width: 50 }} ><ArrowBackIos /></IconButton>
            <IconButton onClick={handlePrevious} sx={{ color: tabColor }} style={{ marginRight: 5, width: 50 }} ><Apps/></IconButton>
            <IconButton onClick={handlePrevious} sx={{ color: tabColor }} style={{ marginRight: 8, width: 50 }} ><Rectangle /></IconButton>
            <IconButton onClick={handleNext} sx={{ color: tabColor }} style={{ width: 50 }} ><ArrowForwardIos /></IconButton>
        </Box>
    )
}