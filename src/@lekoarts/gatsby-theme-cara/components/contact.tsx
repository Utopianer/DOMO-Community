/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `40vh` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
        <a href="https://twitter.com/bigmouthmeta" target="_blank"><img sx={{ variant: `social`}} src="https://upload.wikimedia.org/wikipedia/de/thumb/e/e4/Twitter_Logo_Blue.svg/2298px-Twitter_Logo_Blue.svg.png"></img></a>
        <a href="https://discord.gg/45hAWVAm8f" target="_blank"><img sx={{ variant: `social`}} src="https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg" ></img></a>
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Contact
