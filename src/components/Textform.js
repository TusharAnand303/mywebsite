import React,{useState, useSyncExternalStore} from 'react'



export default function Textform(props) {

    const [Text, setText] = useState("");

    const uppercase = (event)=> {
        
    let a = Text.toUpperCase();
    setText(a);
    props.showalert("Text converted to Uppercase !", "success" );
    
    }
    const lowercase = (event)=> {
        
        let b = Text.toLowerCase();
        setText(b);
        props.showalert("Text converted to lowercase !", "success" );
     }
    
    const handelonchange = (event)=> {
        console.log("On Change");
        setText(event.target.value);
    }

    const select = (event)=> {
       event.target.select();
    }

    const extraspace = ()=>{
      let newtext = Text.split(/[ ]+/);
      setText(newtext.join(" "));
      console.log(newtext);
      props.showalert("Extra space has been removed !", "success" );
    }

    const copytext = () =>{
      var text = document.getElementById('mybox');
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showalert("Text copied to clipboard !", "success" );

    }

     const [mystyle, setMystyle] = useState(
      {
        color: '#2b2929',
        backgroundColor:'white'
      }
    )
    const [btntext, setbtntext] = useState("enable dark mode")
    const switchit = ()=> {

      if(mystyle.color == "white")
      {
        setMystyle({
          color : '#2b2929',
          backgroundColor : 'white'
        })
        setbtntext("Enable dark mode");
      }
      else
      {
        setMystyle({
          color:'white',
          backgroundColor : '#2b2929'
        })
        setbtntext("Enable light mode");

      }

    }
   



// setText("new Text");
  return (
    <>
    <h3 className="my-3 ">{props.heading} </h3>
    <div className="input-group">
    
        <textarea onClick={select} onChange={handelonchange} value = {Text} id="mybox" className="form-control" style={{backgroundColor : props.mode === 'dark'?'#2b2929':'white',color: props.mode === 'dark'?'white':'black'}} 
         placeholder="Enter the text" rows="8"></textarea>
        
    </div>
   
    <div className="btn-group my-5" >
      <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Choose To change Text
  </button>
    <ul className="dropdown-menu" >
        <li><a onClick={uppercase} className="dropdown-item" href="#">UpperCase </a></li>
        <li><a onClick={lowercase}className="dropdown-item" href="#">LowerCase </a></li>
        <li><a onClick={copytext}className="dropdown-item" href="#">Copy all text </a></li>
        <li><a onClick={extraspace}className="dropdown-item" href="#">Remove extra space </a></li>
        
    </ul>
    </div>
    <div className="container">
      <h1>Your Text sumarry</h1>
      <p>total {Text.split(" ").length} words and {Text.length} characters</p>
      <p>Average human takes {0.008 * Text.split(" ").length} minutes to read the word !</p>
    </div>
    </>
  )
}
