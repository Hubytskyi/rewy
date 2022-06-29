import React from "react"
import { Page, Text, Document, View, Image, PDFViewer } from "@react-pdf/renderer"
import { Box } from "@mui/material"
import { styles, pdfStyles } from "./styles"

const PdfViewer = ({
                     pdfFirstName,
                     pdfLastName,
                     pdfEmail,
                     pdfPhone,
                     pdfDescription,
                     image,
                     pdfProfessionalSummary
                   }) => (
  <Box sx={styles.wrapper}>
    <PDFViewer style={pdfStyles.viewer} showToolbar={false}>
      <Document>
        <Page size="A4" style={pdfStyles.page}>
          <View style={pdfStyles.image}>
            {image && <Image src={image} />}
          </View>
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.tableRow}><Box>First Name: </Box>{pdfFirstName}</Text>
            <Text style={pdfStyles.tableRow}><Box>Last Name: </Box>{pdfLastName}</Text>
            <Text style={pdfStyles.tableRow}><Box>Email: </Box>{pdfEmail}</Text>
            <Text style={pdfStyles.tableRow}><Box>Phone: </Box>{pdfPhone}</Text>
            <Text style={pdfStyles.tableRow}><Box>About: </Box>{pdfDescription}</Text>
          </View>
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.tableRow}><Box>Professional Summary: </Box>{pdfProfessionalSummary}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  </Box>
)

export default PdfViewer
