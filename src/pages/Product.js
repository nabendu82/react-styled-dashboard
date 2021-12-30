import React from 'react'
import { Link } from "react-router-dom";
import Chart from "../components/Chart"
import { productData } from "../dummyData"
import { Publish } from "@material-ui/icons";
import { ItemContainer, ItemTitleContainer, ItemAddButton, ItemShowImg, ItemUploadImg, ItemUpdateButton, ItemUpload } from "../styles/styled-elements"
import styled from "styled-components";

const ProductTopContainer = styled.div`
    display: flex;
`
const TopLeftContainer = styled.div`
    flex: 1;
`
const TopRightContainer = styled(TopLeftContainer)`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const InfoTopContainer = styled.div`
    display: flex;
    align-items: center;
    .productName {
        font-weight: 600;
    }
`
const InfoBottomContainer = styled.div`
    margin-top: 10px;
`
const InfoItemContainer = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    .productInfoValue {
        font-weight: 300;
    }
`
const ProductBottomContainer = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`
const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 10px;
        color: gray;
    }
    input {
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        border-bottom: 1px solid gray;
    }
    select{
        margin-bottom: 10px;
    }
`
const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Product = () => {
    return (
        <ItemContainer>
            <ItemTitleContainer>
                <h1>Edit Product</h1>
                <Link to="/newproduct">
                    <ItemAddButton>Create</ItemAddButton>
                </Link>
            </ItemTitleContainer>
            <ProductTopContainer>
                <TopLeftContainer>
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </TopLeftContainer>
                <TopRightContainer>
                    <InfoTopContainer>
                        <ItemShowImg mr src="https://picsum.photos/200/300/?random=1" alt="show-image" />
                        <span className="productName">Mac Mini M1</span>
                    </InfoTopContainer>
                    <InfoBottomContainer>
                        <InfoItemContainer>
                            <span>id:</span>
                            <span className="productInfoValue">123</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>sales:</span>
                            <span className="productInfoValue">5123</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>active:</span>
                            <span className="productInfoValue">yes</span>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <span>in stock:</span>
                            <span className="productInfoValue">no</span>
                        </InfoItemContainer>
                    </InfoBottomContainer>
                </TopRightContainer>
            </ProductTopContainer>
            <ProductBottomContainer>
                <ProductForm>
                    <FormLeft>
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </FormLeft>
                    <FormRight>
                        <ItemUpload>
                            <ItemUploadImg src="https://picsum.photos/200/300/?random=1" alt="upload-img" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </ItemUpload>
                        <ItemUpdateButton>Update</ItemUpdateButton>
                    </FormRight>
                </ProductForm>
            </ProductBottomContainer>
        </ItemContainer>
    )
}
export default Product
