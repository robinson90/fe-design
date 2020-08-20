import React, { Component } from 'react' 
import Uploadlist from './uploadlist'
import propTypes from 'prop-types'
class Upload extends Component { 
   state = {
      accept: propTypes.string,
      length: 0,
      files:[]

   }

   onChange = (e, filelist) => {
      
      const files = e.target.files 
      const len = files.length
      // files.forEach(file => {
      //    const { size, name, type } = file
         
         
      // });
      this.setState({files,len})
   }

   render() { 
      const { files,len} = this.state 
      return <div className='fe-uploader'>
         <div className='btn'><input type='file' onChange={this.onChange} /><span>上传文件</span></div>
         
         <div> <Uploadlist files={files}/> </div>
      </div>
   }
   
}
export default Upload