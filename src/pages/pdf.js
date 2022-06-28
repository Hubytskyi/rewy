import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import PdfContent from "../components/PDF/content"
import PdfViewer from "../components/PDF/viewer"

const Pdf = () => {

  const [pdfData, setPdfData] = useState({})
  const [image, setImage] = useState(null)
  const [client, setClient] = useState(false)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const maxAllowedSize = 5 * 1024 * 1024;
      if (event.target.files[0].size > maxAllowedSize) {
        event.target.value = '';
        alert('The maximum file size is 5 MB');
        return;
      }
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  const onInputsChange = (event) => {
    setPdfData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <Box sx={{
      display: "flex",
      padding: 5,
      backgroundColor: "#f3f3f3",
      height: "100vh",
      justifyContent: "space-between"
    }}>
      {client && (
        <>
          <PdfContent {...pdfData} onImageChange={onImageChange} onInputsChange={onInputsChange} />
          <PdfViewer {...pdfData} image={image} />
        </>
      )}
    </Box>
  )
}

export default Pdf