import React, { useState } from "react"
import { Box, Typography, TextField, Button } from "@mui/material"
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer"
import PDF from "../components/PDF"

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
})

const Pdf = () => {

  const [pdfData, setPdfData] = useState({})
  const [image, setImage] = useState(null)

  const {
    pdfFirstName,
    pdfLastName,
    pdfEmail,
    pdfPhone,
    pdfDescription
  } = pdfData

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  const onInputsChange = (event) => {
    setPdfData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <Box sx={{
      display: "flex",
      padding: 5,
      backgroundColor: "#f3f3f3",
      height: "100vh",
      justifyContent: "space-between"
    }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexBasis: "49%",
        borderRadius: 1,
        backgroundColor: "#ffffff",
        height: "100%",
        flexDirection: "column"
      }}>
        <Typography variant={"h3"}>Generate your PDF</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: 2 }}>
          <Box sx={{ flexBasis: "49%" }}>
            <TextField onChange={onInputsChange} sx={{ width: "100%", margin: 1 }} name="pdfFirstName"
                       label="First Name" variant="outlined" value={pdfFirstName} />
          </Box>
          <Box sx={{ flexBasis: "49%" }}>
            <TextField onChange={onInputsChange} sx={{ width: "100%", margin: 1 }} name="pdfLastName" label="Last Name"
                       variant="outlined" value={pdfLastName} />
          </Box>
          <Box sx={{ flexBasis: "49%" }}>
            <TextField onChange={onInputsChange} sx={{ width: "100%", margin: 1 }} name="pdfEmail" label="Email"
                       variant="outlined" value={pdfEmail} />
          </Box>
          <Box sx={{ flexBasis: "49%" }}>
            <TextField onChange={onInputsChange} sx={{ width: "100%", margin: 1 }} name="pdfPhone" label="Phone"
                       variant="outlined" value={pdfPhone} />
          </Box>
          <Box sx={{ flexBasis: "49%" }}>
            <TextField onChange={onInputsChange} sx={{ width: "100%", margin: 1 }} name="pdfDescription"
                       label="Description" minRows={4} variant="outlined" multiline maxRows={6}
                       value={pdfDescription} />
          </Box>
          <Box sx={{ flexBasis: "49%" }}>
            <Button variant="outlined" sx={{ width: "100%", margin: 1, position: "relative" }}>
              <input onChange={onImageChange} type="file" name="image"
                     style={{ position: "absolute", opacity: 0, cursor: "pointer", width: "100%", height: "100%" }} />
              Download photo
            </Button>
          </Box>
          <Box sx={{ flexBasis: "100%", margin: 1 }}>
          <PDFDownloadLink style={styles.button} document={<PDF /> }>
            <Button variant="outlined">Download PDF</Button>
          </PDFDownloadLink>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexBasis: "49%", borderRadius: 1, backgroundColor: "#ffffff", height: "100%" }}>
        <PDF {...pdfData} image={image} />
      </Box>
    </Box>
  )
}

export default Pdf