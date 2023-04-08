import React from 'react';
import { useScrollSpy } from './UseScrollSpy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';


// The code from above:
function useHeadings() {
    const [headings, setHeadings]:any[] = React.useState([]);
    React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
    .filter((element) => element.id)
    .map((element) => ({
      id: element.id,
      text: element.textContent ?? "",
      level: Number(element.tagName.substring(1))
        }));
      setHeadings(elements);
    }, []);
    return headings;
  }

//   function Heading({ children, id, as: Element, ...props }) {
//     const theId = id ?? getId(children);
//     return <Element id={theId} {...props}>{children}</Element>;
//   }
  
  // Now, the function that renders it all
  export function TableOfContent() {
    const headings = useHeadings();
    const activeId = useScrollSpy(
        headings.map(({ id }) => id),
        { rootMargin: "0% 0% -25% 0%" }
      );

      console.log('DDD',headings);
  return (
    <nav aria-label="secondary mailbox folders">
    <ul>
      {headings.map(heading => (
        <List>
          <ListItem disablePadding key={heading.id} style={{ marginLeft: `${heading.level}em` }}>
            <ListItemButton href={`#${heading.id}`} 
          style={{ 
            fontWeight: activeId === heading.id ? "bold" : "normal" 
          }}>
              {heading.text}
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </ul>
  </nav>
  );
  }