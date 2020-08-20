import React from 'react'

const Uploadlist = props => {
   const { files } = props 
   debugger
   return <div>
      <div>总计上传{files.length}个文件</div>
      <div>
      {files.map(file => <div>{file.name}</div>)}</div>
      </div>
   
}
export default Uploadlist