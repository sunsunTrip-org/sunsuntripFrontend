import React from 'react';
import styled from 'styled-components';

const Map = () => {
    return (
        <PageWrapper>
            {/*<StyledIframe*/}
            {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615604.3339601385!2d140.3644623678136!3d37.731947276744116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602004816ddcd52f%3A0x341fa6c1d0d6465c!2z7J2867O4IO2bhOy_oOyLnOuniO2YhA!5e0!3m2!1sko!2skr!4v1745813754606!5m2!1sko!2skr"*/}
            {/*    allowFullScreen*/}
            {/*    loading="lazy"*/}
            {/*    referrerPolicy="no-referrer-when-downgrade"*/}
            {/*    title="구글 지도"*/}
            {/*/>*/}
            <StyledIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202727.4766550907!2d140.13543709493433!3d37.446155825121245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60200d991cc0aa93%3A0xb24e911473db36cb!2z7J2867O4IO2bhOy_oOyLnOuniO2YhCDqs6Drpqzslbzrp4jsi5w!5e0!3m2!1sko!2skr!4v1745814782559!5m2!1sko!2skr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="구글 지도"
            />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background: #000;
`;

const StyledIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`;

export default Map;
