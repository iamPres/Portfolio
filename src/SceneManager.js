import { React, useState, useEffect } from "react"
import AppBar from '@mui/material/AppBar'
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Terrain } from "./Terrain"
import * as d3 from "d3";
import './App.css';
import { PAGES, tabColor, projects, web_projects } from "./Content"
import { About } from './About';
import { InfoBox } from './InfoBox';
import { ProjectBox } from './ProjectBox'
import { ProjectList } from "./ProjectList"
import { SendBox } from "./SendBox"

export const SceneManager = (props) => {
    const [tabVal, setTabVal] = useState(0)
    const [page, setPage] = useState(PAGES.Landing)
    const [fastForward, setFastForward] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)
    const [web_projectIndex, setWebProjectIndex] = useState(0)
    const [listMode, setListMode] = useState(true)
    const uis = ['ui', 'ai', 'projectbox', 'si', 'projectbox']

    const generateConstellations = () => {
        var dataset = []
        for (var i = 0; i < 200; i++) {
            var x = d3.randomUniform(0, 1500)();
            var y = d3.randomUniform(0, 1000)();
            dataset.push({ "x": x, "y": y });
        }

        d3.select("[id*=constellation]").selectAll("dots")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("r", 1)
            .attr("fill", "#FFFFFF")
            .attr("cx", function (d) { return d.x })
            .attr("cy", function (d) { return d.y })
    }

    useEffect(() => {
        generateConstellations()
    }, [])

    const startSpeedTransition = (destination) => {
        d3.selectAll("[id=" + uis[page] + "]")
            .transition()
            .duration(500)
            .style("opacity", 0)
            .attrTween("transform", function () {
                return d3.interpolateString("translateX(0,0)", "translate(-100,0)")
            }).on("end", () => {
                setPage(destination)
                setTabVal(destination)
                setFastForward(true)
                setListMode(true)
            })
    }

    const endSpeedTransition = () => {
        d3.selectAll("[id=" + uis[page] + "]").style("opacity", 0)
        d3.selectAll("[id=" + uis[page] + "")
            .transition()
            .duration(500)
            .style("opacity", 1)
            .attrTween("transform", function () {
                return d3.interpolateString("translateX(100,0)", "translate(0,0)")
            }).on("end", () => {
                setFastForward(false)
            })
    }

    const renderTabs = () => {
        return (
            <foreignObject id="appbar" x="35" y="20" height="80" width="60%">
                <AppBar style={{ opacity: "80%", backgroundColor: "#000E39" }}>
                    <Tabs value={tabVal}>
                        <Tab value={0} onClick={() => {
                            startSpeedTransition(PAGES.Landing)
                        }} label={<span style={{ color: tabColor }}>Landing</span>} />
                        <Tab value={2} onClick={() => {
                            startSpeedTransition(PAGES.ML)                          
                        }} label={<span style={{ color: tabColor }}>Machine Learning</span>} />
                        <Tab value={4} onClick={() => {
                            startSpeedTransition(PAGES.Web)
                        }} label={<span style={{ color: tabColor }}>Web Development</span>} />
                        <Tab value={5} onClick={() => { 
                            setPage(PAGES.Landing) 
                            }} label={<span style={{ color: tabColor }}>Research</span>} />
                        <Tab value={1} onClick={() => {
                            startSpeedTransition(PAGES.About)
                        }} label={<span style={{ color: tabColor }}>About</span>} />
                        <Tab value={3} onClick={() => {
                            startSpeedTransition(PAGES.Send)
                        }} label={<span style={{ color: tabColor }}>Contact</span>} />
                    </Tabs>
                </AppBar>
            </foreignObject>
        )

    }

    useEffect(() => {
        endSpeedTransition()
    }, [page])

    const renderUi = () => {
        switch (page) {
            case (PAGES.Landing):
                return <InfoBox startSpeedTransition={startSpeedTransition} setTabVal={setTabVal} setPage={setPage} setFastForward={setFastForward} />
            case (PAGES.About):
                return <About tabVal={tabVal} setPage={setPage} />
            case (PAGES.ML):
                if (!listMode) {
                    return <ProjectBox setListMode={setListMode} setFastForward={setFastForward} projectIndex={projectIndex} setProjectIndex={setProjectIndex} content={projects[projectIndex]} />
                } else {
                    return <ProjectList setProjectIndex={setProjectIndex} setListMode={setListMode} content={projects} />
                }
            case (PAGES.Send):
                return <SendBox setPage={setPage} setFastForward={setFastForward} />
            case (PAGES.Web):
                if (!listMode) {
                    return <ProjectBox setListMode={setListMode} setFastForward={setFastForward} projectIndex={web_projectIndex} setProjectIndex={setWebProjectIndex} content={web_projects[web_projectIndex]} />
                } else {
                    return <ProjectList setProjectIndex={setWebProjectIndex} setListMode={setListMode} content={web_projects} />
                }
        }
    }

    return (
        <svg id="backdrop" height="100%" width="100%" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} preserveAspectRatio="none">
            <defs>
                <filter id="landing-blur" x="0" y="0">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                </filter>
                <linearGradient id="SkyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="30%" stopColor="#233F96" stopOpacity="85%" />
                    <stop offset="95%" stopColor="#000E39" stopOpacity="75%" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="#000E39"></rect>
            <svg id="constellation"></svg>
            <rect width="100%" height="100%" fill="url(#SkyGradient)" />
            <Terrain page={page} fastForward={fastForward} setFastForward={setFastForward} />
            {renderTabs()}
            {renderUi()}
        </svg>
    );
}