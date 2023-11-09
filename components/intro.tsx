import Image from 'next/image'
import React from 'react'
//---------------------------------------------------imports------------------------------------------------------------
export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image src="https://images.unsplash.com/photo-1699116550661-bea051952f96?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="RP" width="192" height="192" quality="95" priority={true} /> {/*image at the start*/}
            </div>
        </div>
    </section>
  )
}
