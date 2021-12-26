import React from "react";

export default function Accordion(props){

    const [info,setInfo] = React.useState(false)

    function hideAnswer(){
        setInfo(prevInfo=>!prevInfo)
      }
    return (
        <div className="container w-11/12 max-w-lg mx-auto py-3">
                <div class="accordion">

                    <div className="rounded-md accord width-full shadow-md p-7">
                        <div className="flex justify-between mb-2 align-center question">
                        <p className=" mb-2 pb-2 font-light text-lg text-slate-600">{props.title}</p>

                        <button className="ml-auto px-4 py-1 rounded-md bg-green-400" onClick={hideAnswer}>{info? 'Show': 'Hide'}</button>
                        </div>
                         
                        {info?<p className="answer text-slate-500 pt-4 border-blue-300 border-t-4 border-dotted">{props.info}</p>: <p></p>}
                    </div>
                </div>
        </div>
        
    )
}