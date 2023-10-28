import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const MyUpload = () => {
  const [fileList, setFileList] = useState([
    
  ]);
  const onChange = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {/* {fileList.length < 1 && '+ Upload'} */}
        {
          fileList.length < 1 && (
            <div className='rect'>
              <UploadOutlined style={{fontSize:'33px'}}/>
              <div className='upload_cover mt-8'>Upload cover image</div>
              <div className='ratio mt-8'>16:9 ratio is recommended. Max image size 1mb</div>
            </div>
          )
          
        }
      </Upload>
    </ImgCrop>
  );
};
export default MyUpload;