import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
   return (
      <ContentLoader
         speed={2}
         width={310}
         height={550}
         viewBox="0 0 310 550"
         backgroundColor="#242424"
         foregroundColor="#545454"
      >
         <circle cx="585" cy="227" r="8" />
         <circle cx="587" cy="230" r="8" />
         <circle cx="590" cy="224" r="8" />
         <circle cx="148" cy="158" r="135" />
         <rect x="22" y="316" rx="0" ry="0" width="268" height="30" />
         <rect x="23" y="362" rx="0" ry="0" width="268" height="50" />
         <rect x="25" y="476" rx="0" ry="0" width="131" height="28" />
         <circle cx="273" cy="488" r="15" />
      </ContentLoader>
   )
}

export default LoadingBlock
