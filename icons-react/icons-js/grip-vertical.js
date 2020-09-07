import * as React from "react";

const IconGripVertical = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-grip-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={9} cy={5} r={1} /><circle cx={9} cy={12} r={1} /><circle cx={9} cy={19} r={1} /><circle cx={15} cy={5} r={1} /><circle cx={15} cy={12} r={1} /><circle cx={15} cy={19} r={1} /></svg>;

export default IconGripVertical;