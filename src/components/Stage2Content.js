const customStage2Style = { 
   backgroundColor: "#CCAABB",
   fontSize: "24px",
   fontFamily: "Georgia, Serif"
}

const customElement2AStyle = {
   left:"-150px",
   top:"150px",
   color:"#FFFF00"
}

const customElement2BStyle = {
   left:"150px",
   top:"500px",
   color:"#FF0000"
}

const Stage2Content = () => (
   <div id="stage2-content" class="stage__content" style={customStage2Style}> 
      <div id="myCustomElement2A" class="stage__element" style={customElement2AStyle}>Custom Element 3. You can place me anywhere.</div>
      <div id="myCustomElement2B" class="stage__element" style={customElement2BStyle}>Custom Element 4. Me Too!</div>
   </div>
);

export default Stage2Content;