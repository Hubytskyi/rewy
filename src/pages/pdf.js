import React, {useState, useEffect} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from '../components/PDF';

const PDFPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>
      {isClient && (
        <PDFViewer style={{height: '100vh', width: '100vw'}}>
          <PDF/>
        </PDFViewer>
      )}
    </div>

  );
};

export default PDFPage;