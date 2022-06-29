import React from "react"
import { Box, Typography, TextField, Button } from "@mui/material"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import styles from "./styles.js"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { Link } from "gatsby"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const PdfContent = ({
                      pdfFirstName,
                      pdfLastName,
                      pdfEmail,
                      pdfPhone,
                      pdfDescription,
                      onImageChange,
                      onInputsChange,
                      pdfProfessionalSummary
                    }) => {

  const printDocument = () => {
    const input = document.getElementById("divToPrint")
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF()
        const imgProps= pdf.getImageProperties(canvas);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        const randomName = Math.floor(Math.random() * 10000000)
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight)
        pdf.save(`${randomName}.pdf`)
      })
  }

  return (
    <Box sx={styles.content}>
      <Box sx={{mb: 2}}>
        <Link to={'/pdf'} style={{display: 'inline-flex', alignItems: 'center'}}>
          <ChevronLeftIcon />
          <Typography varinat={'caption'}>Back to templates</Typography>
        </Link>
      </Box>
      <Typography sx={styles.title} variant={"h5"}>Generate your PDF</Typography>
      <Box sx={styles.wrapper}>
        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle} variant={"h6"}>Personal Details</Typography>
          <Box sx={styles.inputWrapper}>
            <TextField onChange={onInputsChange} sx={styles.input} name="pdfFirstName"
                       label="First Name" variant="outlined" value={pdfFirstName} />
          </Box>
          <Box sx={styles.inputWrapper}>
            <TextField onChange={onInputsChange} sx={styles.input} name="pdfLastName" label="Last Name"
                       variant="outlined" value={pdfLastName} />
          </Box>
          <Box sx={styles.inputWrapper}>
            <TextField onChange={onInputsChange} sx={styles.input} name="pdfEmail" label="Email"
                       variant="outlined" value={pdfEmail} />
          </Box>
          <Box sx={styles.inputWrapper}>
            <TextField onChange={onInputsChange} sx={styles.input} name="pdfPhone" label="Phone"
                       variant="outlined" value={pdfPhone} />
          </Box>
          <Box sx={styles.inputWrapper}>
            <TextField onChange={onInputsChange} sx={styles.input} name="pdfDescription"
                       label="Description" minRows={4} variant="outlined" multiline maxRows={6}
                       value={pdfDescription} />
          </Box>
          <Box sx={styles.inputWrapper}>
            <Box sx={styles.fileWrapper2}>
              <FileUploadIcon fontSize={"large"} />
              <Typography variant={"caption"}>Max file size: 5mb, accepted: jpg|jpeg|png</Typography>
              <input onChange={onImageChange} type="file" name="image"
                     style={styles.fileInput} accept=".png, .jpg, .jpeg" />
            </Box>
          </Box>
        </Box>

        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle} variant={"h6"}>Professional Summary</Typography>
          <Box sx={styles.inputWrapperFull}>
            <TextField onChange={onInputsChange} sx={styles.input} name="pdfProfessionalSummary"
                       label="Professional Summary" minRows={4} variant="outlined" multiline maxRows={6}
                       value={pdfProfessionalSummary} />
          </Box>
        </Box>

      </Box>

      <Box className="mb5">
        <Button variant="contained" onClick={printDocument}>Print</Button>
      </Box>
    </Box>
  )
}

export default PdfContent