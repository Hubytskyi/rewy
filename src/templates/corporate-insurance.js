import React from "react"

const CorporateInsurance = ({ pageContext }) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{__html: pageContext.html}}
      />
    </div>
  )
}

export default CorporateInsurance