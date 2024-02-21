import React from 'react'
import TOC from './toc'
import Sidepanel from './sidepanel'
import "./index.css"

export default function Content(props) {
  return (
    <div className='content-con'>
      <Sidepanel toc={props.toc} />
      <div className='content'>
        {props.children}
      </div>
      <TOC toc={props.toc} />
    </div>
  )
}
