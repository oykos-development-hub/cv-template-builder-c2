import React from "react";
import {Document, Page, Text, View, BlobProvider, PDFDownloadLink, Font} from '@react-pdf/renderer';
import MVTemplate from "../templates/mv-template";

Font.register({
    family: 'Open Sans',
    fonts: [
        {src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf'},
        {src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600}
    ]
});

export default class PdfTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <PDFDownloadLink
                document={<Document>
                    <Page size="A4">
                        <View
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                fontSize: 16,
                                fontWeight: 600,
                                fontFamily: 'Open Sans',
                                marginTop: 20,
                                backgroundColor: 'red'
                            }}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 600,
                                textAlign: 'center',
                            }}>
                                Template broj {this.props.templateNumber}
                            </Text>
                        </View>
                    </Page>
                </Document>}
                fileName={"test.pdf"}
            >
                {({blob, url, loading, error}) => (loading || !blob ? 'Pripremanje dokumenta...' : 'Preuzmi dokument!')}
            </PDFDownloadLink>
        </div>)
    }
}
