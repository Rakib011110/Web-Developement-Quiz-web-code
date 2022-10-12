import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion className='m-5 container' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is React Router??</Accordion.Header>
                    <Accordion.Body>
                        React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does context api work??</Accordion.Header>
                    <Accordion.Body>
                        the React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier,
                    </Accordion.Body>
                    <Accordion.Header>what is useref in react?</Accordion.Header>
                    <Accordion.Body>
                        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div  , React will set its .current property to the corresponding DOM node whenever that node changes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;