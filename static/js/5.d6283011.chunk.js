(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[5],{45:function(e,t,n){"use strict";var a=n(10),i=n(1),o=n.n(i),c=n(13),r=n.n(c),l=n(46),s=n.n(l);t.a=function(e){var t,n=e.children,i=e.align,c=e.pageSection,l=e.reverseOnMobile,m=e.mobileHorizontal,p=e.verticalBottom;return o.a.createElement("div",{className:r()(s.a.row,s.a[i],(t={},Object(a.a)(t,s.a.pageSection,c),Object(a.a)(t,s.a.reverseOnMobile,l),Object(a.a)(t,s.a.mobileHorizontal,m),Object(a.a)(t,s.a.verticalBottom,p),t))},n)}},46:function(e,t,n){e.exports={row:"style_row__UvJQ4",pageSection:"style_pageSection__2hgSI",left:"style_left__3EQI2",center:"style_center__2wr_L",right:"style_right__l50ch",reverseOnMobile:"style_reverseOnMobile__orj4M",mobileHorizontal:"style_mobileHorizontal__1qzI-",verticalBottom:"style_verticalBottom__2Gc7l"}},47:function(e,t,n){"use strict";var a=n(1),i=n.n(a),o=n(13),c=n.n(o),r=n(48),l=n.n(r);t.a=function(e){var t=e.children,n=e.size;return i.a.createElement("div",{className:c()(l.a.col,l.a["col-".concat(n)])},t)}},48:function(e,t,n){e.exports={col:"style_col__2lEgA","col-12":"style_col-12__1BPno","col-1":"style_col-1__1l7fW","col-2":"style_col-2__3njDo","col-3":"style_col-3__3GMgu","col-4":"style_col-4__1DL8Z","col-5":"style_col-5__3xNoO","col-6":"style_col-6__2wrbc","col-7":"style_col-7__1SkBt","col-8":"style_col-8__2bVq7","col-9":"style_col-9__23k5c","col-10":"style_col-10__1OLqI","col-11":"style_col-11__5D5gt"}},54:function(e,t,n){e.exports={card:"style_card__2d9uP",image:"style_image__2WBN9",grow:"style_grow__3nYTK",header:"style_header__3Nh3X",body:"style_body__2b3g1",children:"style_children__3dbL4"}},55:function(e,t,n){e.exports={gallery:"style_gallery__1AZ83",imageContainer:"style_imageContainer__2IYh5",closeButton:"style_closeButton__1aubp",nextButton:"style_nextButton__34aUX",prevButton:"style_prevButton__3Drdn",loadedImage:"style_loadedImage__eqKsJ",unloadedImage:"style_unloadedImage__34Qx2"}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(1),i=n.n(a),o=n(23),c=n(45),r=n(47),l=n(19),s=n(54),m=n.n(s),p=n(15),b=n(11),g=n(55),h=n.n(g),u=n(26),_=function(e){var t=e.images,n=e.handleClose,o=Object(a.useState)(0),c=Object(l.a)(o,2),r=c[0],s=c[1],m=Object(a.useState)(!1),g=Object(l.a)(m,2),_=g[0],d=g[1];return Object(a.useEffect)((function(){d(!1)}),[r]),Object(a.useEffect)((function(){return document.body.style.overflowY="hidden",function(){document.body.style.overflowY="scroll"}}),[]),i.a.createElement("div",{className:h.a.gallery},i.a.createElement("div",{className:h.a.closeButton},i.a.createElement(b.a,{onClick:function(){return n()},color:"light",variant:"transparent",size:"l",icon:!0},i.a.createElement(p.h,null))),i.a.createElement("div",{className:h.a.prevButton},r>0&&i.a.createElement(b.a,{onClick:function(){return s(r-1)},color:"light",variant:"transparent",size:"l",icon:!0},i.a.createElement(p.a,null))),i.a.createElement("a",{href:t[r],className:h.a.imageContainer},i.a.createElement("img",{src:t[r],alt:"Preview of ".concat(r+1),onLoad:function(){return d(!0)},className:_?h.a.loadedImage:h.a.unloadedImage}),!_&&i.a.createElement(u.a,null)),i.a.createElement("div",{className:h.a.nextButton},r<t.length-1&&i.a.createElement(b.a,{onClick:function(){return s(r+1)},color:"light",variant:"transparent",size:"l",icon:!0},i.a.createElement(p.b,null))))},d=function(e){var t=e.title,n=e.children,o=e.imagesURL,c=e.withImage,r=Object(a.useState)(!1),s=Object(l.a)(r,2),p=s[0],b=s[1];return i.a.createElement("div",{className:m.a.card},c&&i.a.createElement("button",{className:m.a.image,onClick:function(){return b(!0)}},i.a.createElement("img",{src:o[0]||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXf39+zs7OwsLDIyMji4uLY2Ni7u7vV1dW+vr7MzMy1tbXe3t64uLjPz8/S0tLCwsK7aJHvAAABeUlEQVR4nO3ZwXKCMBRA0RgSFaT6/39bgdIWOgwLF9Q356wc3HAHE5KYEgAAAAAAAAAAAAAAAAAAAAAAAAAAwEHKrqPv8EX3U95xvh19jy+55dOe/Hjrp1j3C0/nAIXbP9EghY9mUx+iMF+259FrkMLhU6k1/UkJVFja7jno2nVLnMLSTDNOs4qJUzi/FvPq7R6msHzMhe3y6ziF7Vy4+pnGKbzMhffl12EKU+qnwm68WO5tnaoCFdZu+NDV4dpzYs25HyMDFabUXq/NOJN+TTvPbVN7C1X4vdetP/umfI2yLl1cGofk701VsMLyGOK6pss5ZuE0CHMtpTbzg4xVeJtWNkNTKZdHvMLSL5JKOQcrnAbh6Wf5HeptkYa1zDgIfw/LYIXjHmqx+A5WuBqE46UghXU6dZrehBFPoubz0u+1Wrzz0h0K/7l+76+nnD+OvscXtdtH+pP7ez/CtP8X6dH3BwAAAAAAAAAAAAAAAAAAAAAAAAAAbPkEIJMLx9P6xscAAAAASUVORK5CYII=",alt:t||"Card"})),i.a.createElement("div",{className:m.a.body},t&&i.a.createElement("div",{className:m.a.header},t),i.a.createElement("div",{className:m.a.children},n)),o[0]&&p&&i.a.createElement(_,{images:o,handleClose:function(){return b(!1)}}))};function A(){var e=[{title:"Web-based Warta NTB Rundown Information Management System",githubLink:"https://github.com/alifsabrani/simarund-siaran",demoLink:"https://simarund-warta-ntb.herokuapp.com/#/login",imagesURL:["https://i.ibb.co/71Cscj7/image24.png","https://i.ibb.co/3rXFs0s/image2.png","https://i.ibb.co/mXpgp7F/image1.png","https://i.ibb.co/sCLxTnV/image3.png","https://i.ibb.co/2d0F6Jw/image4.png","https://i.ibb.co/cNJ0Fd8/image5.png","https://i.ibb.co/2F0FwtC/image6.png","https://i.ibb.co/qWWd288/image7.png","https://i.ibb.co/LJmY8Bx/image8.png","https://i.ibb.co/TMnr3t6/image9.png","https://i.ibb.co/m63mcYS/image10.png","https://i.ibb.co/6ZGdm17/image11.png","https://i.ibb.co/KWqN7yJ/image12.png","https://i.ibb.co/VvMP5qN/image13.png","https://i.ibb.co/237n32M/image14.png","https://i.ibb.co/MfyRwZk/image15.png","https://i.ibb.co/mhjGwCn/image23.png","https://i.ibb.co/Srg4qLp/image25.png","https://i.ibb.co/PxxT1yp/image27.png","https://i.ibb.co/yhND9hS/image26.png","https://i.ibb.co/8mGkHq9/image28.png","https://i.ibb.co/cLcxRgg/image29.png","https://i.ibb.co/92t4YJs/image30.png","https://i.ibb.co/2YX4CXY/image31.png","https://i.ibb.co/MZq5jnF/image32.png","https://i.ibb.co/qB0kCCb/image33.png","https://i.ibb.co/7g8CVjT/image34.png","https://i.ibb.co/9wBXDPm/image35.png"]},{title:"Web-based Lombok Utara Education Management Information System",link:"http://simdik.lombokutarakab.go.id",imagesURL:["https://i.ibb.co/M24F6hy/image16.png","https://i.ibb.co/LrdQnhz/image17.png","https://i.ibb.co/WKgvxKG/image18.png","https://i.ibb.co/BqqwHWY/image19.png","https://i.ibb.co/vDKxkJX/image21.png","https://i.ibb.co/105GbNR/image20.png","https://i.ibb.co/2YszWQ8/image22.png"]},{title:"Machine Learning Research About How N-Grams Feature affects Text Classification Performance",pubLink:"http://jtika.if.unram.ac.id/index.php/JTIKA/article/view/87"},{title:"Bukapintu",link:"https://bukapintu.id/",imagesURL:["https://i.ibb.co/SsgXMKR/Screenshot-from-2020-08-25-13-36-08.png","https://i.ibb.co/gvyKsqM/Screenshot-from-2020-08-25-13-36-20.png","https://i.ibb.co/pxvF6ML/Screenshot-from-2020-08-25-13-36-26.png","https://i.ibb.co/QXknpd9/Screenshot-from-2020-08-25-13-36-30.png","https://i.ibb.co/XyhQngX/Screenshot-from-2020-08-25-13-36-34.png","https://i.ibb.co/Sx6hcWV/Screenshot-from-2020-08-25-13-36-41.png","https://i.ibb.co/cXR5WQG/Screenshot-from-2020-08-25-13-36-46.png"]},{title:"Market web app templates",usedBy:["https://ngelink.id/","http://damasco.id/"],imagesURL:["https://i.ibb.co/7bH528k/Screenshot-from-2020-08-25-13-40-56.png","https://i.ibb.co/CPz5yVN/Screenshot-from-2020-08-25-13-41-01.png","https://i.ibb.co/GpVPCCR/Screenshot-from-2020-08-25-13-41-04.png","https://i.ibb.co/hgf3j6Z/Screenshot-from-2020-08-25-13-41-17.png","https://i.ibb.co/yp0bZCC/Screenshot-from-2020-08-25-13-41-22.png","https://i.ibb.co/KGXYvw1/Screenshot-from-2020-08-25-13-41-32.png","https://i.ibb.co/HDKVFLR/Screenshot-from-2020-08-25-13-41-58.png","https://i.ibb.co/rpB8MLL/Screenshot-from-2020-08-25-13-42-03.png","https://i.ibb.co/svTNn4t/Screenshot-from-2020-08-25-13-42-09.png","https://i.ibb.co/mGBQNGB/Screenshot-from-2020-08-25-13-42-11.png"]},{title:"Advanced Search Component",demoLink:"https://pensive-volhard-7fe814.netlify.app/",imagesURL:["https://i.ibb.co/CvyTjmz/Screenshot-from-2020-08-25-13-46-32.png"]}];return i.a.createElement(o.a,null,i.a.createElement(c.a,{align:"center"},i.a.createElement(r.a,{size:12},i.a.createElement("h1",{className:"text-center"},"PORTOFOLIO"),i.a.createElement("p",{className:"text-center"},"PROJECTS I'VE WORKED ON"))),i.a.createElement(c.a,{align:e.length>4?"left":"center"},e.map((function(e){return i.a.createElement(r.a,{size:3},i.a.createElement(d,{withImage:!0,imagesURL:e.imagesURL||[""],title:e.title},e.usedBy&&i.a.createElement("div",null,i.a.createElement("p",null,"As seen on:"),e.usedBy.map((function(e){return i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement("a",{href:e},e)))}))),e.demoLink&&i.a.createElement("p",null,i.a.createElement("a",{href:e.demoLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(b.a,{variant:"fill",size:"m",color:"primary",onClick:function(){return!0}},"Demo"))),e.pubLink&&i.a.createElement("p",null,i.a.createElement("a",{href:e.pubLink,target:"_blank",rel:"noopener noreferrer"},"View Paper")),e.link&&i.a.createElement("p",null,i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Open App")),e.githubLink&&i.a.createElement("p",null,i.a.createElement("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(b.a,{variant:"transparent",size:"m",color:"dark",onClick:function(){return!0},icon:!0},i.a.createElement(p.e,null))))))}))))}}}]);
//# sourceMappingURL=5.d6283011.chunk.js.map