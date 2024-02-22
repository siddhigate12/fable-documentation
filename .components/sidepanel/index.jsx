import React from 'react'
import "./index.css"

const flattenTree = (root) => {
  const stack = [{ node: root, depth: 0 }];
  const flattenedNodes = [];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    const flattenedNode = { ...node, depth };
    flattenedNodes.push(flattenedNode);

    // Push children in reverse order so they are processed in the correct order
    for (let i = node.children?.length - 1; i >= 0; i--) {
      if(node.children[i].title !== ".components"){
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
    
  }

  return flattenedNodes;
};


const Sidepanel = (props) => {
  
  return (
    <div className={`sidepanel-con ${props.show === "init" ? "" : props.show ? "show" : "hide" }`}>
      <ul className='sidepanel-list'>
        {flattenTree(props.linksTree).map((link, idx) => {
          return (
            <li
              style={{
                marginLeft: link.depth * 10
              }}
              className={`sidepanel-list-item ${link.url ? "url" : ""}`}
               key={idx}
            >
              <a 
                href={link.url}
                style={{
                  background: 'transparent'
                }}
              >{link.title}</a>
            </li>
          )
        })}
      </ul>
      <button type="button" onClick={props.closeSidepanel} className='close-icon'> 
        <img
          src="https://fable-tour-app-gamma.s3.ap-south-1.amazonaws.com/root/usr/org/217/874242f92619476e85a83a20163a2dc6"
          alt=""
          width={26}
          height={26}
        ></img>
      </button>
    </div>
  )
}

export default Sidepanel;
