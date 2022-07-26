import React from 'react'
import Contents from '../layout/Contents'
import TextCont from '../includes/TextCont'
import Footer from '../layout/Footer'

function Text() {
  return (
    <>
    <Contents>
      <TextCont />
    </Contents>
      <Footer skill={["section", "nexon", "gray"]} />
    </>
  )
}

export default Text