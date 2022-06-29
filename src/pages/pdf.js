import React from "react"
import { Box, Typography } from "@mui/material"
import { Link } from "gatsby"
import pdfTemplates from '../constants/pdf-templates.const'

const Pdf = () => (
  <Box sx={{
    display: "flex",
    padding: 5,
    backgroundColor: "#f3f3f3",
    height: "100vh",
    justifyContent: "space-between"
  }}>
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      flexBasis: "49%",
      borderRadius: 1,
      backgroundColor: "#ffffff",
      height: "100%",
      flexDirection: "column",
      padding: "80px 20px",
      overflowY: "auto"
    }}>
      <Typography variant={"h5"}>Hey! Choose a template</Typography>
    </Box>
    <Box sx={{
      display: "flex",
      flexBasis: "49%",
      borderRadius: 1,
      backgroundColor: "#ffffff",
      height: "100%",
      padding: "20px",
      overflowY: "auto"
    }}>
      {pdfTemplates.map(pdf => (
        <Link key={pdf.name} style={{width: '200px', margin: 10, height: 'max-content', display: 'flex'}} to={pdf.link}>
          <img src={pdf.poster} alt="pdf" style={{width: '100%', border: '1px solid #f1f1f1'}}/>
        </Link>
      ))}
    </Box>
  </Box>
)

export default Pdf