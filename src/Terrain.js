import { React, useState, useEffect } from 'react'
import * as d3 from "d3";
import { FastForward, Pages } from '@mui/icons-material';
import { PAGES } from './Content';

export const Terrain = (props) => {
    const distance = 40
    const backVertPos = 2*window.innerHeight*0.8
    const frontVertPos = 2*window.innerHeight*0.9
    const backSpread = distance/2
    const frontSpread = distance
    const mode = " "
    const wl = 6
    const frontAmp = wl*10
    const backAmp = wl*8
    const defaultTransitionTime = 100
    const fastForwardTransitionTime = 10
    const horizontalOffset = 300
    const front = d3.selectAll('[id=front]')
    const back = d3.selectAll('[id=back]')

    const [initNodes, setInitNodes] = useState(100)
    const [pathString, setPathString] = useState(`M0,${backVertPos} ${perlinNoise(backAmp, wl, 100, backSpread, backVertPos,  distance*1000/8, 150)}`)
    const [frontPathString, setFrontPathString] = useState(`M0,${frontVertPos} ${mode+perlinNoise(frontAmp, wl, 100, frontSpread, frontVertPos, distance*1000/4, 150)}`)
    const [landNodes, setLandNodes] = useState(0)
    const [frontLandNodes, setFrontLandNodes] = useState(0)
    const [transitionTime, setTransitionTime] = useState(defaultTransitionTime)


    function perlinNoise(amp, wl, nodes, spread, vertPos, offset, newNodeCount) {
        let str = ""
        var M = 4294967296,
            // a - 1 should be divisible by m's prime factors
            A = 1664525,
            // c and m should be co-prime
            C = 1;
        var Z = Math.floor(Math.random() * M);
        function rand() {
            Z = (A * Z + C) % M;
            return Z / M - 0.5;
        };

        function interpolate(pa, pb, px) {
            var ft = px * Math.PI,
                f = (1 - Math.cos(ft)) * 0.5;
            return pa * (1 - f) + pb * f;
        }
        let h = vertPos
        var x = nodes,
            y = h,
            fq = 1 / wl, //frequency
            a = rand(),
            b = rand();

        while (x < nodes + newNodeCount) {
            if (x % wl === 0) {
                a = b;
                b = rand();
                y = h / 2 + a * amp;
            } else {
                y = h / 2 + interpolate(a, b, (x % wl) / wl) * amp;
            }
            let controlPt = ` ${(x * spread)-offset},${y}`
            str += controlPt
            x += 1;
        }
        return str
    }

    const constructPathString = (vertPos, spread, amp, nodes, setNodes, path) => {
        setNodes(nodes + 1)
        if (nodes % initNodes == 0) {
            console.log(path)
            let str = ''
            str += perlinNoise(amp, wl, nodes, spread, vertPos, 0, initNodes)
            str += ` ${spread * (nodes + initNodes)},${window.innerHeight} ${spread*nodes},${window.innerHeight}Z`
            let remainder = unload(path)
            str = `M${-10000},${frontVertPos+mode+remainder+str}`
            return str
        } else {
            return path
        }
    }

    const unload = (path) => {
        let tokenized = path.split(" ")
        let slice = ""
        slice = tokenized.slice(-initNodes, -3).join(" ")
        return slice
    }

    const moveFront = () => {
        setFrontPathString(constructPathString(frontVertPos, frontSpread, frontAmp, frontLandNodes, setFrontLandNodes, frontPathString))
    }

    const moveBack = (init) => {
        let remainder = unload(pathString)
        setPathString(constructPathString(backVertPos, backSpread, backAmp, landNodes, setLandNodes, pathString))
    }

    const slideTerrain = (obj, fn, endFn) => {
        obj.transition()
            .duration(transitionTime)
            .ease(d3.easeLinear)
            .attrTween("transform", fn).on("end", endFn)
    }


    useEffect(() => {
        if (props.page != PAGES.About) {
            moveFront()
            moveBack(true)
        }
    }, [])

    useEffect(() => {
        if (props.page != PAGES.About) {
            moveFront()
            moveBack(true)
        }
    }, [props.page])

    useEffect(() => {
        if (props.fastForward) {
            setTransitionTime(fastForwardTransitionTime)
        } else {
            setTransitionTime(defaultTransitionTime)
        }
    }, [props.fastForward])

    useEffect(() => {
        if (props.page != PAGES.About) {
            slideTerrain(front, () => {
                let screenArea = frontLandNodes*frontSpread
                return d3.interpolateString(`translateX(${-(screenArea - initNodes*frontSpread)},0)`,`translate(${-(screenArea-((initNodes-1)*frontSpread))},0)`)
            }, () => {
                if (initNodes > 100) {
                    setInitNodes(100)
                }
                moveFront()
            })

        }
    }, [frontLandNodes])

    useEffect(() => {
        if (props.page != PAGES.About) {
            slideTerrain(back, () => {
                let screenArea = landNodes*backSpread
                return d3.interpolateString(`translateX(${-(screenArea - initNodes*backSpread)},0)`, `translate(${-(screenArea-((initNodes-1)*backSpread))},0)`)
            }, moveBack)
        }
    }, [landNodes])

    return (
        <svg id="terrain" width="100%" height="100%" veiwBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
            <path id="back" d={pathString}
                fill="#1A2C65" stroke="#101C40" strokeWidth="3" />
            <path id="front" d={frontPathString}
                fill="#162659" stroke="#101C40" strokeWidth="3" />
        </svg>
    )
}