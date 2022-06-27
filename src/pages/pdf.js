import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from "../components/PDF"

const PDFPage = () => (
  <PDFViewer style={{height: '100vh', width: '100vw'}}>
    <PDF />
  </PDFViewer>
);

export default PDFPage;