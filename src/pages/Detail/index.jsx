import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ColorCard } from '../../components/colors'
import { ToastContainer, toast } from "react-toastify";
import { Nav } from '../../components/Nav';


export const DetailPage = () => {
    const allPalettes = useSelector((state) => state.colorsRedux.allPalettes)

    let currentPalette =allPalettes[useParams().id.split("=")[1]] ;
    // console.log(currentPalette);
    
    function copyItemCode(code) {
        // console.log(code);
        navigator.clipboard.writeText(code);
        toast.success("Copied to Clipboard: " + code);
      }
    return (
        <div>
            <Nav/>
        <div className='container p-4 '>
                  <ToastContainer />
            <h1 className='mb-5 text-center fs-3 fw-bold text-primary'>{currentPalette.paletGroupName}</h1>
            <div className=' d-flex flex-wrap gap-3 justify-content-center'>
            {currentPalette.paletColors.map((color, index) => (<ColorCard onClick={()=>copyItemCode(color.colorcode)}    key={index+color.colorcode} {...color} />))}
            </div>
            
            </div>
            

    </div>
  )
}
