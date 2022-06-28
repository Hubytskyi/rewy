const styles = {
  content: {
    display: "flex",
    // justifyContent: "center",
    flexBasis: "49%",
    borderRadius: 1,
    backgroundColor: "#ffffff",
    height: "100%",
    flexDirection: "column",
    padding: "80px 20px",
    overflowY: "auto"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    marginBottom: 5,
    textTransform: "uppercase",
    fontWeight: 700,
    fontFamily: "Nunito"
  },
  section: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  sectionTitle: {
    marginBottom: 2,
    flexBasis: "100%",
    fontFamily: "Nunito",
    fontWeight: 700
  },
  inputWrapper: {
    flexBasis: "49%"
  },
  inputWrapperFull: {
    flexBasis: "100%"
  },
  input: {
    width: "100%",
    marginBottom: 2
  },
  fileWrapper: {
    width: "100%",
    marginBottom: 2,
    position: "relative"
  },
  fileInput: {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
    width: "100%",
    height: "100%"
  },
  fileWrapper2: {
    position: "relative",
    height: "125px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    marginBottom: 2,
    cursor: "pointer"
  }
}

export default styles