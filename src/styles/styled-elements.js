import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons";

export const TheList = styled.div`
    flex: 4;
`
export const ListItem = styled.div`
    display: flex;
    align-items: center;
`
export const ListImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
export const EditButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: ${props => props.primary ? "DarkMagenta" : "SeaGreen"};
    color: white;
    cursor: pointer;
    margin-right: 20px;
`
export const MyDeleteOutline = styled(DeleteOutline)`
    color: red;
    cursor: pointer;
`

export const ItemContainer = styled.div`
    flex: 4;
    padding: 20px;
`
export const ItemTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ItemAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: indigo;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
`
export const ItemShowImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${props => props.mr ? "20px" : "0px"};
`
export const ItemUploadImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`
export const ItemUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: midnightblue;
    color: white;
    font-weight: 600;
`
export const ItemUpload = styled.div`
    display: flex;
    align-items: center;
`