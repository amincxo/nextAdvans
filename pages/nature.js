import Image from 'next/image'
import React from 'react'

function Index() {
  return (
    <div>
        <Image src='/images/1.jpeg' width={1000} height={700} alt='asdf' />
        <Image src='/images/2.jpeg' width={1000} height={700} alt='asdff' />
        <Image src='/images/3.jpeg' width={1000} height={700} alt='asdfsf' />
        <Image src='/images/4.jpeg' width={1000} height={700} alt='asddfff' />
    </div>
  )
}

export default Index