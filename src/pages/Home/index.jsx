import React from "react";
import { Nav } from "../../components/Nav";
// import { globalStore } from "../../services";
import { ColorPalet } from "../../components/colorPalet";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router";
import { Router } from "../../constants/ROUTE";
export const HomePage = () => {

const navigate=useNavigate();

  const allPalettes = useSelector((state) => state.colorsRedux.allPalettes)

console.log(allPalettes);
  // const { allPalettes } = globalStore();

  function copyItemCode(code) {
    // console.log(code);
    navigator.clipboard.writeText(code);
    toast.success("Copied to Clipboard: " + code);
  }

  return (
    <div>
      <ToastContainer />
      <Nav />
      <p className="text-warning fs-3 fw-normal m-4">
        You can copy the color code by touching the color card
      </p>

      {allPalettes?.length ? (
        <div className=" w-100 d-flex flex-wrap container mt-4 gap-4">
          {allPalettes?.map((colorPalet, index) => (
            <div className=" mb-5  justify-content-center" style={ {cursor:"pointer"}} key={index + colorPalet.paletGroupName}  onClick={()=>navigate("detail/palet="+index)}>
              <p className=" text-secondary fs-5 mb-3 fw-bold">
                Group Name: {colorPalet.paletGroupName}{" "}
              </p>
              <div>
                <ColorPalet
                  onClick={copyItemCode}
                  paletArray={colorPalet.paletColors}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-danger fs-1 text-center p-5 fw-normal m-5">
          There are no data
        </p>
      )}
    </div>
  );
};
