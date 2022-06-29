import React from "react"
import { Box } from "@mui/material"
import styles from './styles'

const Viewer2 = ({
                   pdfFirstName,
                   pdfLastName,
                   pdfEmail,
                   pdfPhone,
                   pdfDescription,
                   image,
                   pdfProfessionalSummary
                 }) => {

  return (
    <Box sx={styles.wrapper}>
      <Box id="divToPrint" className="mt4" style={{
        backgroundColor: "#ffffff",
        padding: 20,
        width: "100%",
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <Box sx={styles.image}>
          <img src={image} alt="image" />
        </Box>
        <table>
          <tr>
            <th>First Name:</th>
            <th>{pdfFirstName}</th>
          </tr>
          <tr>
            <th>Last Name:</th>
            <th>{pdfLastName}</th>
          </tr>
          <tr>
            <th>Email:</th>
            <th>{pdfEmail}</th>
          </tr>
          <tr>
            <th>Phone:</th>
            <th>{pdfPhone}</th>
          </tr>
          <tr>
            <th>About:</th>
            <th>{pdfDescription}</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Professional Summary:</th>
            <th>{pdfProfessionalSummary}</th>
          </tr>
        </table>
      </Box>
    </Box>
  )
}

export default Viewer2