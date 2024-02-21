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

console.log(props.linksTree, flattenTree(props.linksTree))
  return (
    <div className='sidepanel-con'>
      <ul className='sidepanel-list'>
        {flattenTree(props.linksTree).map((link) => {
          return (
            <li
              style={{
                marginLeft: link.depth * 10
              }}
              className={`sidepanel-list-item ${link.url ? "url" : ""}`}
               key={link.url}
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
    </div>
  )
}

export default Sidepanel;
