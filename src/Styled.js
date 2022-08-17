import { tabColor, personalInfo } from "./Content"
import { Box, IconButton } from "@mui/material"
import { LinkedIn, GitHub } from "@mui/icons-material"
import { useEffect } from "react"

export const Name = () => {
    return (
        <Box mb={0.5} sx={{ fontFamily: 'Courier New', fontSize: 50, color: tabColor }} display="flex" flexDirection="row" style={{ width: "100%", justifyContent: "left" }}>
            Preston Willis<IconButton onClick={() => window.open(personalInfo.linkedIn)} style={{ marginTop: 2, marginLeft: 10 }} sx={{ color: tabColor }}><LinkedIn fontSize="large"></LinkedIn></IconButton><IconButton onClick={() => window.open(personalInfo.github)} style={{ marginTop: 2, marginLeft: 10 }} sx={{ color: tabColor }}><GitHub fontSize="large"></GitHub></IconButton>
        </Box>
    )
}

export const Delayed = ({ setFastForward, content, isShown, setIsShown, children, waitBeforeShow = 500 }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow, content]);

    return isShown ? children : null;
};
