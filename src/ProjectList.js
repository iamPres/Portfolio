import { Box, Grid } from "@mui/material"
import { useState } from "react"
import { tabColor } from "./Content"
import { Delayed } from "./Styled"

export const ProjectList = (props) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <foreignObject id="projectbox" x="35" y="80" height="100%" width="100%">
            <Box mt={2} width="100%" height="100%" display="flex" flexDirection="row" style={{ alignItems: "center", justifyContent: "center" }}>
                <Grid container spacing={2}>
                    {props.content.map((value, index) => {
                        return (
                            <Grid item xs={4}>
                                <Box onClick={() => {
                                    props.setListMode(false)
                                    props.setProjectIndex(index)
                                }} sx={{ fontFamily: 'Courier New', fontSize: 20, color: tabColor, fontWeight: "Light" }} display="flex" flexDirection="column" style={{ width: 400, height: 400 }}>
                                    <Delayed setFastForward={props.setFastForward} content={props.content} isShown={isShown} setIsShown={setIsShown}>
                                        <img loading="lazy" style={{ maxHeight: 250 }} src={value.media[0]}></img>
                                    </Delayed>
                                    <Box mt={2}>
                                        {value.title}
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </foreignObject >
    )
}