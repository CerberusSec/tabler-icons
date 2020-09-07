import * as React from "react";

const IconGlass = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-glass" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={8} y1={21} x2={16} y2={21} /><line x1={12} y1={15} x2={12} y2={21} /><path d="M16 4l1 6a5 5 0 0 1 -10 0l1 -6z" /></svg>;

export default IconGlass;