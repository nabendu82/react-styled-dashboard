import React, { useState } from 'react'
import { TheList, ListItem, ListImage, EditButton, MyDeleteOutline } from "../styles/styled-elements";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
            { field: "id", headerName: "ID", width: 90 },
            {
                field: "product",
                headerName: "Product",
                width: 200,
                renderCell: (params) => {
                    return (
                        <ListItem>
                            <ListImage src={params.row.img} alt="image" />
                            {params.row.name}
                        </ListItem>
                    );
                },
            },
            { field: "stock", headerName: "Stock", width: 200 },
            {
                field: "status",
                headerName: "Status",
                width: 120,
            },
            {
                field: "price",
                headerName: "Price",
                width: 160,
            },
            {
                field: "action",
                headerName: "Action",
                width: 150,
                renderCell: (params) => {
                    return (
                        <>
                            <Link to={"/product/" + params.row.id}>
                                <EditButton>Edit</EditButton>
                            </Link>
                            <MyDeleteOutline
                                onClick={() => handleDelete(params.row.id)}
                            />
                        </>
                    );
                },
            },
        ];

    return (
        <TheList>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </TheList>
    )
}

export default ProductList
