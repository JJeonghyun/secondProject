import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AdminListComp = ({ listUp, list }) => {
  useEffect(() => {
    listUp();
  }, []);
  return (
    <AdminBox>
      <div>
        <div>Admin</div>
        <div>
          <Link to={"/admin"}>Product Management</Link>
        </div>
        <div>
          <Link to={"/adminlist"}>Product List</Link>
        </div>
      </div>
      <div>
        {list.map((item, index) => (
          <>
            <div key={`divBox-${index}`}>
              <img key={`imgBox-${index}`} src={item.path} />
            </div>
            <div key={`nameBox-${index}`}>{item.name}</div>
            <div key={`priceBox-${index}`}>{item.price}</div>
            <div key={`accountBox-${index}`}>{item.account}</div>
            <div key={`colorBox-${index}`}>{item.color}</div>
            <div key={`deleteBox-${index}`}>삭제</div>
          </>
        ))}
      </div>
    </AdminBox>
  );
};
export default AdminListComp;

const AdminBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  & > div:first-child {
    width: 20%;
    padding: 0 10px;
    height: 100%;
    & > div:first-child {
      border-bottom: 1px solid black;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      padding: 10px 0;
    }
    & > div:nth-child(2) > a,
    & > div:nth-child(3) > a {
      padding: 10px 5px;
      border-radius: 10px;
    }
    & > div:nth-child(2):hover > a,
    & > div:nth-child(3):hover > a {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 79%;
    height: 100%;
    flex-wrap: wrap;
    & > div {
      width: calc(100% / 6);
      padding: 15px;
      & > img {
        width: 100%;
      }
    }
  }
`;
