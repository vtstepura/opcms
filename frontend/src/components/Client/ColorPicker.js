import React from 'react'
import { Button } from 'react-bootstrap'

const ColorPicker = ({
  colors,
  handleChangeColor,
  handleSaveColor,
  colorPickerOpen,
  handleCancel,
  chooseColor
}) => (
  <div style={{ height: 50, width: '100%' }}>
    <div style={{ height: 30, flexDirection: 'row', display: colorPickerOpen ? 'flex' : 'none', justifyContent: 'space-between', alignItems: 'center'}}>
      {colors.map((color, index) => (
          <div
            className={chooseColor === color ? 'colorPicker' : 'none' }
            key={index}
            onClick={() => handleChangeColor(color)}
            style={{ width: '13%', height: 30, backgroundColor: color }}
          />
      ))}
      <Button variant="primary" onClick={() => handleSaveColor()}>Save</Button>
      <Button variant="primary" onClick={() => handleCancel()}>Cancel</Button>
    </div>
  </div>
)

export default ColorPicker
