import React,{useState} from 'react';


const Background = () => {

    return (
        <> 
             <section className = 'registration'>
                <div>
                    <img className = 'registration__logo' src = "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Слой_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 154.5 35.5' style='enable-background:new 0 0 154.5 35.5;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FFC617;%7D .st1%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M40,14.1l-0.6,1.4c-0.8,1.8-1.5,3.6-2.1,5.4c-0.3,0.9-0.8,2.4-1.4,4.5c1-0.1,2.3-0.3,3.9-0.6 c1.1-0.2,1.7-0.3,1.9-0.3c0.4,0,0.6,0.2,0.6,0.5c0,0.4-0.2,0.9-0.7,1.6s-1,1.3-1.5,1.8c-0.4,0.4-1,0.6-1.7,0.8s-2,0.2-3.6,0.2 c-1.5,0-2.7,0-3.5-0.1c0,0-0.2-0.1-0.6-0.2c-0.7-0.3-1-0.9-1-1.8c0-0.6,0.2-1.8,0.6-3.5s0.9-3.8,1.6-6.4c1.6-5.7,2.8-9.2,3.6-10.5 c0.3-0.5,0.6-0.8,1-1.1c0.4-0.3,0.9-0.4,1.6-0.6C38.7,5.1,39.5,5,40.3,5c0.8,0,1.4,0.1,1.7,0.3c0.3,0.2,0.5,0.6,0.5,1.1 c0,0.5-0.2,1.4-0.6,2.7S40.8,12.1,40,14.1z'/%3E %3Cpath class='st0' d='M55.5,11.5c1.7,0,2.6,0.2,2.6,0.6c0,0.5-0.4,0.7-1.2,0.8c-0.9,0.1-1.8,0.3-2.7,0.8s-1.5,1.1-2.2,2 c-0.6,0.8-1.1,1.8-1.5,2.8s-0.5,2.1-0.5,3.3c0,1.3,0.3,2.3,0.9,3.1s1.4,1.2,2.3,1.2c0.9,0,1.7-0.5,2.3-1.4s1-2,1-3.2 c0-1-0.2-1.9-0.6-2.8s-1-1.6-1.8-2.2c-0.3-0.3-0.5-0.5-0.5-0.6c0-0.2,0.2-0.4,0.7-0.8c0.5-0.4,1.1-0.7,1.8-0.9s1.2-0.4,1.7-0.4 c0.5,0,1,0.1,1.5,0.4s0.9,0.7,1.3,1.2s0.6,1.1,0.8,1.8s0.3,1.4,0.3,2.1c0,1.2-0.2,2.5-0.7,3.7s-1.1,2.2-1.8,2.9 c-1,0.9-2.2,1.7-3.6,2.3s-2.7,0.9-4,0.9c-1.2,0-2.4-0.2-3.6-0.6s-2.2-1-2.9-1.7c-0.9-0.9-1.4-2.3-1.4-4c0-1.4,0.3-2.7,1-4.1 s1.6-2.6,2.7-3.7s2.4-2,3.8-2.6S54.1,11.5,55.5,11.5z'/%3E %3Cpath class='st0' d='M69.7,25.4l0,1c-0.2,2.3-0.4,4.2-0.6,5.7c-0.3,1.5-0.5,2.4-0.9,2.7c-0.4,0.5-1.1,0.7-2.1,0.7 c-1,0-1.8-0.2-2.2-0.6c-0.2-0.2-0.3-0.4-0.4-0.5c-0.1-0.2-0.1-0.5-0.1-0.9v-0.2v-0.2v-0.2c0-3.3,0.4-6.6,0.9-9.9s1.4-6.4,2.4-9.1 S68.9,9,70,7.4S72.4,5,73.5,5c0.5,0,0.9,0.2,1.2,0.5s0.4,0.9,0.4,1.5c0,1-0.1,2.1-0.3,3.2s-0.5,2-0.8,2.7S73.4,14,73.1,14 c-0.3,0-0.4-0.5-0.4-1.5v-0.3V12c0-1,0-1.6-0.1-1.9s-0.1-0.5-0.3-0.6c-0.1,0.3-0.2,0.6-0.3,0.9c-0.3,1.4-0.5,2.7-0.7,3.8 c-0.2,1.1-0.4,3-0.8,5.5c0,0.1,0,0.3-0.1,0.5s0,0.3-0.1,0.5h0.2c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.5,0c0.4-0.1,0.8-0.1,1.2-0.1 c1.4,0,2.1,0.4,2.1,1.1c0,0.4-0.1,0.8-0.4,1.4c-0.3,0.5-0.6,1-0.9,1.3s-0.8,0.6-1.2,0.8s-1.1,0.3-2,0.3c-0.2,0-0.3,0-0.4,0 C69.9,25.4,69.8,25.4,69.7,25.4z'/%3E %3Cpath class='st0' d='M79.8,12.2l0.1-0.2c0.8-2.2,1.4-3.7,2-4.6c0.3-0.4,0.6-0.8,1.1-1.1c0.9-0.6,1.8-0.9,2.6-0.9 c0.5,0,0.8,0.1,1.1,0.3C86.9,5.9,87,6.2,87,6.6c0,0.3-0.2,0.8-0.5,1.7c-0.6,1.4-1,2.7-1.3,3.9c0.2,0,0.4,0.1,0.6,0.1 c0.7,0.1,1.2,0.2,1.4,0.4s0.3,0.4,0.3,0.7c0,0.6-0.2,1.2-0.5,1.7c-0.3,0.5-0.7,0.9-1.2,1.2c-0.4,0.2-1,0.3-1.9,0.4 c-0.2,0.5-0.3,1.1-0.5,1.9c-0.1,0.7-0.2,1.7-0.3,2.9c-0.1,0.5-0.1,0.9-0.1,1.3c0,1.9,0.9,2.8,2.7,2.8h0.1h0.1c0.2,0,0.3,0,0.3,0.1 c0,0.2-0.2,0.5-0.6,0.9c-0.4,0.4-0.8,0.8-1.3,1.2c-0.5,0.4-1.1,0.6-1.7,0.8s-1.2,0.3-1.7,0.3c-1.2,0-2.2-0.4-3-1.2 c-0.8-0.8-1.2-1.9-1.2-3.3c0-0.6,0.1-1.4,0.3-2.3s0.5-2.2,1-3.8c0.1-0.3,0.1-0.6,0.2-0.9s0.1-0.5,0.1-0.6c-0.5,0-0.8-0.1-1-0.3 S77,15.9,77,15.5c0-0.7,0.3-1.4,0.9-2.1S79.1,12.3,79.8,12.2z'/%3E %3Cpath class='st1' d='M105.7,17.7l-0.2,0.8c-0.1,0.3-0.1,0.5-0.2,0.7c0,0.2-0.1,0.3-0.1,0.5c0,0.1-0.1,0.3-0.1,0.4 c-0.8,3.6-1.5,5.9-2,6.8c-0.2,0.4-0.6,0.8-1.1,1.1c-1.5,1-2.6,1.4-3.5,1.4c-0.6,0-1.1-0.2-1.5-0.6s-0.6-1-0.6-1.6 c0-1.1,0.5-3.3,1.5-6.4c0.3-1,0.6-1.8,0.8-2.6c0.3-0.7,0.6-1.5,0.9-2.5c0.4-0.9,0.8-1.9,1.2-2.9c0.5-1,0.8-1.8,1-2.2 c-1.5,0.2-3,0.3-4.5,0.3c-1.4,0-2.2-0.5-2.2-1.5c0-0.6,0.5-1.5,1.4-2.5c0.6-0.6,1.2-1.1,1.8-1.3s1.2-0.4,2-0.4c0.5,0,1.2,0,2,0 s2,0.1,3.6,0.2l0.5,0l0.5,0.1c1.3,0.1,2.1,0.2,2.5,0.2c0.4,0.1,0.8,0.3,1.1,0.5c0.2,0.3,0.4,0.6,0.4,0.9c0,0.4-0.1,0.8-0.2,1.1 c-0.1,0.4-0.3,0.7-0.5,0.9c-0.3,0.3-1.1,0.6-2.5,0.8c-0.1,0-0.2,0-0.4,0l-0.4,0.1c0.3,0.3,0.4,0.6,0.4,0.9c0,0.3-0.2,1-0.5,2.1 c-0.1,0.3-0.4,1.2-0.8,2.7l-0.3,1.1L105.7,17.7z'/%3E %3Cpath class='st1' d='M120.9,24.1L120.9,24.1L120.9,24.1c-1.2,1.3-2.2,2.3-3.1,3.1s-1.7,1.4-2.5,1.8s-1.5,0.6-2.1,0.6 c-1.3,0-2.4-0.4-3.3-1.3s-1.3-2-1.3-3.3c0-0.8,0.2-1.8,0.6-3s1-2.3,1.7-3.3c1.2-1.8,2.8-3.3,4.6-4.5c1.9-1.3,3.8-1.9,5.6-1.9 c1.5,0,2.7,0.3,3.7,0.9s1.5,1.4,1.5,2.3c0,0.7-0.2,1.4-0.7,2.2c0.6,0,1,0.1,1.2,0.2s0.2,0.4,0.2,0.9c0,0,0,0.2-0.1,0.7 c-0.1,1.2-0.1,2.2-0.1,3.3c0,0.5,0,0.9,0,1.2s0,0.6,0.1,0.9s0.1,0.6,0.1,0.8c0.1,0.6,0.2,1.1,0.5,1.6c-0.7,0.7-1.4,1.2-2,1.5 s-1.3,0.5-2,0.5c-1.8,0-2.7-1.5-2.7-4.5C120.9,24.5,120.9,24.3,120.9,24.1z M122,20l-0.3,0.1c-0.8,0.2-1.5,0.4-1.8,0.4 c-0.5,0-0.7-0.1-0.7-0.4c0-0.1,0.1-0.3,0.3-0.7c0.7-1,1-1.9,1-2.8c0-0.5-0.1-1-0.3-1.4s-0.4-0.6-0.6-0.6c-0.2,0-0.5,0.2-0.9,0.6 c-1.1,1.2-2,2.4-2.6,3.6s-1,2.3-1,3.3c0,0.6,0.1,1.2,0.4,1.6s0.6,0.6,1,0.6c0.3,0,1-0.4,1.9-1.1s2-1.7,3.1-2.9L122,20L122,20z'/%3E %3Cpath class='st1' d='M136.6,25.4l-0.2,0.2c-0.1,0-0.1,0.1-0.3,0.2s-0.2,0.2-0.3,0.3c-1.3,1.2-2.3,2.1-3,2.5s-1.3,0.7-1.8,0.7 c-0.7,0-1.3-0.2-1.7-0.6s-0.7-1-0.7-1.6c0-0.7,0.3-1.4,0.9-2c0.2-0.2,0.6-0.5,1.3-1.1c1.1-0.8,1.8-1.4,2.2-1.8 c0.5-0.5,0.9-0.9,1.3-1.4c-0.5-1-1-2-1.4-2.8c-0.3-0.5-0.6-1-0.9-1.4c-0.4-0.6-0.8-1-1.1-1.4s-0.7-0.7-1.1-0.9 c-0.5-0.3-0.7-0.5-0.7-0.8c0-0.2,0.2-0.4,0.7-0.6s1-0.2,1.7-0.2c1.6,0,2.9,0.4,4,1.2c0.3,0.2,0.6,0.4,0.8,0.6s0.5,0.4,0.8,0.7 s0.7,0.7,1,1c0.9-1.2,1.9-2.2,2.8-2.8s1.7-1,2.4-1c0.5,0,1,0.1,1.4,0.3s0.7,0.4,0.7,0.6c0,0.4-0.2,1-0.6,1.6s-1,1.4-1.9,2.4 c-0.7,0.9-1.1,1.4-1.3,1.6s-0.4,0.6-0.8,1.2l4.2,6.7c0.2,0.4,0.4,0.7,0.4,1c0,0.5-0.4,0.9-1.1,1.3s-1.6,0.6-2.5,0.6 c-1.6,0-2.8-0.6-3.7-1.7C137.7,27.4,137.2,26.5,136.6,25.4z'/%3E %3Cpath class='st1' d='M149.3,29.4c-0.5,0-1-0.3-1.4-0.7c-0.4-0.5-0.7-1-0.9-1.5s-0.3-1.3-0.3-2.1c0-1.9,0.4-4.1,1.1-6.5 s1.5-4.2,2.5-5.3c0.4-0.5,0.9-0.7,1.5-0.7c0.7,0,1.2,0.3,1.6,0.9c0.4,0.6,0.6,1.4,0.6,2.4c0,1.5-0.2,3.2-0.6,5.2 c-0.4,2-1,4.1-1.8,6.2c-0.3,0.9-0.7,1.5-1.1,1.8C150.1,29.3,149.8,29.4,149.3,29.4L149.3,29.4z M151.4,11.7c-1.1,0-1.7-0.7-1.7-2 c0-0.6,0.2-1.4,0.5-2.2s0.7-1.5,1.1-1.9c0.2-0.2,0.4-0.4,0.6-0.5s0.5-0.1,0.8-0.1c0.6,0,1,0.1,1.3,0.4s0.4,0.8,0.4,1.4 c0,0.8-0.1,1.6-0.4,2.4s-0.7,1.3-1.2,1.8S152,11.7,151.4,11.7L151.4,11.7z'/%3E %3C/g%3E %3Cpath class='st0' d='M24.2,12.1c0,6-12.1,17.5-12.1,17.5S0,18.5,0,12.1C0,5.4,5.4,0,12.1,0S24.2,5.4,24.2,12.1z'/%3E %3C/svg%3E" width = '156px' />
                </div>
               
            </section>
        </>
    )
}
export default Background;
