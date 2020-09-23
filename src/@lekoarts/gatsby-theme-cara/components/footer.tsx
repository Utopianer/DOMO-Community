/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box>
      <button
        sx={{ variant: `buttonbulbs.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
        >
        {isDark ? <img src="https://ipfs.globalupload.io/QmZRhFPawGDMxUp9Nh1gP4aQEhb65EKMEkjmHTmjAUE2FD"></img> : <img src="https://ipfs.globalupload.io/Qmco7EPYPzFbuRdGnHRS3Bh9NV7V3d87rGr5Hpx8U81KJC"></img>}
      </button> 
      </Box> 
  )
}

export default Footer
