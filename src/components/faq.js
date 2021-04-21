import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "From where are the images fetched",
            content: `The images are fetched from flickr. Flickr API's methods construct an endpoint (an url) which returns data in XML or JSON format. Once that is done, you may decode that data using many programming languages and present that to your users. Every Flickr API method has got several arguments to be passed, Some required and some optional.`,
        },
        {
            title: "What is tawk.to",
            content: "tawk.to is a free live chat app that lets you monitor and chat with visitors on your website or from a free customizable page.",
        },
        {
            title: "Can I become a full stack developer in 6 months?",
            content:
                "After 6 months of training and practice, I can confidently call myself a full-stack web developer. Of Course, I plan to continue learning and growing my skills over the course of my career.",
        },
        
    ],
};

const styles = {
     bgColor: 'white',
     titleTextColor: 'teal',
     rowTitleColor: 'Black',
     rowContentTextSize: '16px',
     rowContentPaddingTop: '10px',
     rowContentPaddingBottom: '10px',
     rowContentPaddingLeft: '50px',
     arrowColor: "teal",
    rowContentColor: 'black',
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function App (){

    return (
        <div id="faq">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}