import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid,Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ItemContainer, ItemTitleContainer, ItemAddButton, ItemShowImg, ItemUploadImg, ItemUpdateButton, ItemUpload } from "../styles/styled-elements"
import styled from "styled-components";

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`
const ShowUser = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const UpdateUser = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
`
const ShowUserTop = styled.div`
    display: flex;
    align-items: center;
`
const ShowUserBottom = styled.div`
    margin-top: 20px;
`
const ShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`
const FontWeight = styled.span`
    font-weight: ${props => props.bolder ? "600" : "300"};
`
const UserShowTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`
const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
    .showIcon{
        font-size: 16px !important;
    }
    .showInfoTitle{
        margin-left: 10px;
    }
`
const UpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`
const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    label{
        margin-bottom: 5px;
        font-size: 14px;
    }
    input{
        border: none;
        width: 250px;
        height: 30px;
        border-bottom: 1px solid gray;
    }
`
const UpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MyPublish = styled(Publish)`
    cursor: pointer;
`

const User = () => {
    return (
        <ItemContainer>
            <ItemTitleContainer>
                <h1>Edit User</h1>
                <Link to="/newUser">
                    <ItemAddButton>Create</ItemAddButton>
                </Link>
            </ItemTitleContainer>
            <UserContainer>
                <ShowUser>
                    <ShowUserTop>
                        <ItemShowImg
                            src="https://randomuser.me/api/portraits/women/77.jpg"
                            alt="show-image"
                        />
                        <ShowTopTitle>
                            <FontWeight bolder>Rebecca Parker</FontWeight>
                            <FontWeight>UX Designer</FontWeight>
                        </ShowTopTitle>
                    </ShowUserTop>
                    <ShowUserBottom>
                        <UserShowTitle>Account Details</UserShowTitle>
                        <UserShowInfo>
                            <PermIdentity className="showIcon" />
                            <span className="showInfoTitle">rebecca99</span>
                        </UserShowInfo>
                        <UserShowInfo>
                            <CalendarToday className="showIcon" />
                            <span className="showInfoTitle">22-12-1999</span>
                        </UserShowInfo>
                        <UserShowTitle>Contact Details</UserShowTitle>
                        <UserShowInfo>
                            <PhoneAndroid className="showIcon" />
                            <span className="showInfoTitle">+91 123 456 67</span>
                        </UserShowInfo>
                        <UserShowInfo>
                            <MailOutline className="showIcon" />
                            <span className="showInfoTitle">rebecca99@gmail.com</span>
                        </UserShowInfo>
                        <UserShowInfo>
                            <LocationSearching className="showIcon" />
                            <span className="showInfoTitle">Mumbai | India</span>
                        </UserShowInfo>
                    </ShowUserBottom>
                </ShowUser>
                <UpdateUser>
                    <UpdateTitle>Edit</UpdateTitle>
                    <UpdateForm>
                        <div>
                            <UpdateItem>
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="rebecca99"
                                />
                            </UpdateItem>
                            <UpdateItem>
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Rebecca Parker"
                                />
                            </UpdateItem>
                            <UpdateItem>
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="rebecca99@gmail.com"
                                />
                            </UpdateItem>
                            <UpdateItem>
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="+91 123 456 67"
                                />
                            </UpdateItem>
                            <UpdateItem>
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Mumbai | India"
                                />
                            </UpdateItem>
                        </div>
                        <UpdateRight>
                            <ItemUpload>
                                <ItemUploadImg
                                    src="https://randomuser.me/api/portraits/women/77.jpg"
                                    alt="upload-img"
                                />
                                <label htmlFor="file">
                                    <MyPublish />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </ItemUpload>
                            <ItemUpdateButton>Update</ItemUpdateButton>
                        </UpdateRight>
                    </UpdateForm>
                </UpdateUser>
            </UserContainer>
        </ItemContainer>
    )
}

export default User
