
import React, {useState, useEffect} from 'react';
import Stage1Content from './Stage1Content';
import Stage2Content from './Stage2Content';


const FlexStagesLayout = () => {

   const [isResizingHoriz, setIsResizingHoriz] = useState(false);
   const [xMouseLast, setXMouseLast] = useState(-1);
   const [xMouseNew, setXMouseNew] = useState(-1);

   const handleMouseDown = (evt) => {
      setIsResizingHoriz(true);
      setXMouseLast(evt.clientX);
      setXMouseNew(evt.clientX);

      // Here it is ok to add the evt listeners to the entire window since the mouse is already down.
      // If we go much beyond 3 vars, may be better to make them all one object. But this is clear for now.
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
   };


   useEffect( () => {
      if (isResizingHoriz) { 
         
         // Could we set these somewhere else so we don't have to re-retrieve every mouseDown..??
         const leftSide = document.getElementById('stage1');
         const fullLayout = document.getElementById('flex-stages-layout'); 

         let dx = xMouseNew - xMouseLast;   // this.state. 
         let fullWidth = fullLayout.getBoundingClientRect().width;  // or  leftSide.parentNode.
         let leftWidth = leftSide.getBoundingClientRect().width;
         let newLeftWidthPct = ((leftWidth + dx) / fullWidth ) * 100;

         leftSide.style.width = `${newLeftWidthPct}%`;

         setXMouseLast(xMouseNew);
      }
  }, [isResizingHoriz, xMouseNew, xMouseLast]);


   const handleMouseMove = (evt) => {
      setXMouseNew(evt.clientX);
   }

   const handleMouseUp = () => {
      setIsResizingHoriz(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
   }   

   return (
      <flexStagesLayout id="flex-stages-layout" className="container--stage-and-nav--flex">
         <stage1 id="stage1"><Stage1Content /></stage1>
         <columnResizer className="column-resizer" onMouseDown={handleMouseDown}></columnResizer>
         <stage2 id="stage2"><Stage2Content /></stage2>
      </flexStagesLayout>
   );
}

export default FlexStagesLayout;
