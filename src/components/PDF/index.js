import React from 'react';
import { Page, Text, Document, StyleSheet, View, Image, PDFViewer } from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
  viewer: {
    height: "100%",
    width: "100%",
    border: "none"
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
    padding: 15
  },
  tableRow: {
    display: "flex",
    marginBottom: 10
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #f3f3f3",
    borderRadius: 1,
    width: "240px",
    height: "240px",
    marginBottom: 20
  }
})

const PDF = ({
               pdfFirstName,
               pdfLastName,
               pdfEmail,
               pdfPhone,
               pdfDescription,
               image
             }) => (
  <PDFViewer style={styles.viewer} showToolbar={false}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.image}>
          {image && <Image src={image} />}
        </View>
        <View style={styles.table}>
          <Text style={styles.tableRow}><strong>First Name: </strong>{pdfFirstName}</Text>
          <Text style={styles.tableRow}><strong>Last Name: </strong>{pdfLastName}</Text>
          <Text style={styles.tableRow}><strong>Email: </strong>{pdfEmail}</Text>
          <Text style={styles.tableRow}><strong>Phone: </strong>{pdfPhone}</Text>
          <Text style={styles.tableRow}><strong>About: </strong>{pdfDescription}</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PDF;
