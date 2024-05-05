import React, { useRef, useState } from "react";
import { Nav } from "../../components/Nav";
import { ColorCard } from "../../components/colors";
import { Button } from "../../components/buttons";
import { globalStore } from "../../services";
import { upperCase } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import ColorPicker from "react-pick-color";
import { useNavigate } from "react-router";
import { Router } from "../../constants/ROUTE";
import { useSelector, useDispatch } from 'react-redux'
import { setAllPalettes } from '../../store/colorRedux'

const initialColorValue = { colorname: "", colorcode: "" };

const initialGroupNameValue = "Unknown";

export const SettingsPage = () => {

  const dispatch = useDispatch()

const navigate=useNavigate()

  const [color, setColor] = useState("");

  const colorGroupRef = useRef();

  // let {  allPalettes, setAllPalettes } = globalStore();

  const [colorData, setColorData] = useState(initialColorValue);

  const [allColors, setAllColors] = useState([]);

  const [colorGroupName, setColorGroupName] = useState(initialGroupNameValue);

  function handleColorDatas(e) {
    const name = e.target.name;
    const value = e.target.value;

    setColorData({ ...colorData, [name]: value });

  
  }

  function setColorsFunc() {
    if (allColors.length > 5) {
      toast.error("You can only have 6 colors");
      setColorData(initialColorValue);
      return;
    }
    setAllColors([...allColors, colorData]);
    setColorData(initialColorValue);
    return;
  }

  function setGroupNameFunc() {
    let value = colorGroupRef.current.value;
    setColorGroupName(upperCase(value));
    colorGroupRef.current.value = "";
  }

  function setColorBtnDisable() {
    let disable =
      colorData.colorcode == "" || colorData.colorname == "" ? true : false;
    return disable;
  }

  function saveBtnDisable() {
    let disable =
      allColors.length === 6 && colorGroupName !== "Unknown" ? false : true;
    return disable;
  }

  function saveBtnFunc() {
    let colorPalet = {
      paletColors: allColors,
      paletGroupName: colorGroupName,
    };


    colorGroupRef.current.value = "";

    setAllColors([]);

    toast.success("Your palette has been saved");

    // setAllPalettes((prevPalettes) => [...prevPalettes, colorPalet]);
    dispatch(setAllPalettes(colorPalet))

setTimeout(() => {
navigate(Router.home)
}, 1000);

  }
  function colorCardDelete(index) {
    setAllColors(allColors.filter((color, i) => i !== index));
  }

  // console.log(colorGroupName);

  // console.log(allColors);

  // console.log(colorData);

  // console.log(allPalettes);

  // console.log(color);

  return (
    <>
      <ToastContainer />
      <Nav />
      <h1 className="h1 fw-bold text-secondary m-3">Setting Page</h1>
      <p className=" text-warning fw-normal fs-5 m-3">
        You can delete the color card by touching on it{" "}
      </p>
      <div className="w-100 container p-5 ">
        <div className=" d-flex w-100 container p-0 gap-3">
          <div className=" d-flex flex-column gap-3 w-25 ">
            <input
              onChange={handleColorDatas}
              value={colorData.colorname}
              name="colorname"
              placeholder="Color Name "
              type="text"
              className=" form-control"
            />
            <input
              value={colorData.colorcode}
              onChange={handleColorDatas}
              name="colorcode"
              placeholder="Color Code"
              type="text"
              className=" form-control"
            />

            <ColorPicker
              color={color}
              onChange={(color) => {
                setColor(color.hex);
                setColorData((prev) => ({
                  ...prev,
                  colorcode: color.hex,
                }));
              }}
            />

            <Button
              onClick={setColorsFunc}
              disabled={setColorBtnDisable()}
              className="w-100"
            >
              Set Color
            </Button>
          </div>
          <div className=" d-flex flex-column w-75">
            <p className="text-info h5">Group Name: {colorGroupName}</p>
            <div className=" p-3 d-flex flex-wrap gap-3">
              {allColors.map((color, index) => (
                <ColorCard
                  onClick={() => colorCardDelete(index)}
                  key={index + color.colorcode}
                  {...color}
                />
              ))}
            </div>
            <Button
              onClick={saveBtnFunc}
              disabled={saveBtnDisable()}
              className="w-100"
            >
              Save
            </Button>
          </div>
        </div>

        <div className="w-25 d-flex flex-column gap-3 mt-4">
          <input
            ref={colorGroupRef}
            placeholder="Group Name"
            className=" form-control"
            type="text"
          />
          <Button onClick={setGroupNameFunc}>Set Group Name</Button>
        </div>
      </div>
    </>
  );
};
