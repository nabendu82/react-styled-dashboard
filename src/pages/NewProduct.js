import React, { useState } from 'react'
import { TheList } from "../styles/styled-elements"
import styled from "styled-components";

const NewProductContainer = styled.div`
    display: flex;
`
const ProductLeft = styled.div`
    flex: 1;
`
const ImageContainer = styled.div`
    flex: 3;
`
const ProductForm = styled.form`
    margin-top: 10px;
`
const ProductItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    label {
        color: gray;
        font-weight: 600;
        margin-bottom: 10px;
    }
    input, select {
        padding: 10px;
    }
`
const ProductButton = styled.button`
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: #1876F2;
    color: white;
    font-weight: 600;
    cursor: pointer;
`
const Preview = styled.div`
    margin-top: 50px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    img{
        max-width: 100%;
        max-height: 320px;
        object-fit: cover;
    }
    button{
        cursor: pointer;
        padding: 15px;
        background-color:red;
        color: white;
        border: none;
        font-weight: 600;
    }
`

const NewProduct = () => {
    const [selectedImage, setSelectedImage] = useState();
const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
const removeSelectedImage = () => {
        setSelectedImage();
    };
return (
        <TheList>
            <NewProductContainer>
            <ProductLeft>
                <h1>New Product</h1>
                <ProductForm>
                    <ProductItem>
                        <label>Image</label>
                        <input type="file" id="file" accept="image/*" onChange={imageChange} />
                    </ProductItem>
                    <ProductItem>
                        <label>Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                    </ProductItem>
                    <ProductItem>
                        <label>Stock</label>
                        <input type="text" placeholder="123" />
                    </ProductItem>
                    <ProductItem>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </ProductItem>
                    <ProductButton>Create</ProductButton>
                </ProductForm>
            </ProductLeft>
            <ImageContainer>
                {selectedImage && (
                    <Preview>
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="preview"
                        />
                        <button onClick={removeSelectedImage}>
                            Remove This Image
                        </button>
                    </Preview>
                )}
            </ImageContainer>
            </NewProductContainer>
        </TheList>
    )
}
export default NewProduct
