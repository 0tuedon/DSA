import { ChangeEvent, useState } from "react"

const FileUploader = () => {
    const [currentFile, setCurrentFile] = useState<File | null>(null)
    // Uploader
    const handleUpload = (e: ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files ? e.target.files[0] : null;
        if(file){
             setCurrentFile(file)
        }
    }
  return (
    <div>
        <input type="file" onChange={handleUpload}  />

        {currentFile && <img src={URL.createObjectURL(currentFile)} />}
    </div>
  )
}

export default FileUploader