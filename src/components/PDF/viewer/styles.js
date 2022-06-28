import { Font, StyleSheet } from "@react-pdf/renderer"

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

export const styles = {
  wrapper: {
    flexBasis: "49%",
    borderRadius: 1,
    backgroundColor: "#ffffff",
    height: "100%"
  },
}

export const pdfStyles = StyleSheet.create({
  viewer: {
    height: "100%",
    width: "100%",
    border: "none",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
    padding: 15
  },
  section: {
    paddingBottom: 10,
    marginBottom: 20,
    borderBottom: '1px solid #cdcdcd'
  },
  tableRow: {
    display: "flex",
    marginBottom: 10,
    fontWeight: 400,
    fontFamily: 'Oswald',
    fontSize: '16px',
    color: '#111111',
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #cdcdcd",
    borderRadius: 1,
    width: "240px",
    height: "240px",
    marginBottom: 40,
  }
})