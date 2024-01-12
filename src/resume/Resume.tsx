import React from "react";
import "./Resume.css";
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function Resume() {

    return (
        <>
            <object data="resume.pdf" type="application/pdf" width="100%" height="100%">
            </object>
        </>
    );
}

export default Resume;
