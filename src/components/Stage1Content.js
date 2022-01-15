const customStage1Style = { 
   backgroundColor:"#BBCCBB",
   fontSize:"36px",
   fontFamily:"Arial, Sans Serif"
}

const customElement1AStyle = { 
   left:"10px",
   top:"25px",
   color:"#222299",
   backgroundColor:"#CC8888",
   width:"200px",
   height:"100px",
   fontSize:"0.6em"
}

const customElement1BStyle = {
   left:"400px",
   top:"250px",
   color:"#EFEFEF",
   backgroundColor:"#778888",
   width:"300px",
   height:"150px",
   fontSize:"0.8em"
}

const Stage1Content = () => (
   <div id="stage1-content" class="stage__content" style={customStage1Style}>
      <div id="myCustomElement1A" class="stage__element" style={customElement1AStyle}>Custom Element 1. I go where I want!</div>
      <div id="myCustomElement1B" class="stage__element" style={customElement1BStyle}>Custom Element 2. Get back here!</div>
   </div>
);

export default Stage1Content;