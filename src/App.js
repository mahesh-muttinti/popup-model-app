import React, {useState} from 'react'
import Model from './Model'
export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const BUTTON_WRAPER_STYLE = {
    positon: "relative",
    zIndex: 1,
  }
  // const OTHER_CONTENT_STYLE = {
  //   position: "relative",
  //   zIndex: 2,
  //   padding: "12px",
  //   backgroundColor: "red"
  // }
  return (
    <div style={BUTTON_WRAPER_STYLE} onClick={() => console.log("clicked")}>
      <button onClick={() => setIsOpen(true)}>Open Model</button>
      <Model open={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Model Heading</h1>
        <p>Model Paragraph. You can enter anything here!</p>
      </Model>
      {/* <p style={OTHER_CONTENT_STYLE}>Other Content</p> */}
    </div>
  );
}

