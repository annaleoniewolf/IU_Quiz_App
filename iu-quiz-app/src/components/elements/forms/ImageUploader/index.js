import * as S from './styles'
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const ImageUploader = () => {

    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
      };

    return (
        <S.ImageUploader>
            <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                    }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {/*<S.ImageUploadButton
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <S.Icon>
                                <FontAwesomeIcon icon={faPen} />
                            </S.Icon>
                    </S.ImageUploadButton>*/}
                        &nbsp;
                        {/*<button onClick={onImageRemoveAll}>Remove all images</button>*/}
                        {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                                <S.ImageUploadButton onClick={() => onImageUpdate(index)}>
                                    <S.Icon>
                                        <FontAwesomeIcon icon={faPen} />
                                    </S.Icon>
                                </S.ImageUploadButton>
                                {/*<button onClick={() => onImageRemove(index)}>Remove</button>*/}
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                </ImageUploading>
        </S.ImageUploader>
    )
}

export default ImageUploader