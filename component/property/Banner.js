import React from 'react';

const Banner = ({ imageUrl, opacity }) => {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        opacity: opacity,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 35%',
    };

    return (
        <div className="banner" style={{ position: 'relative' }}>
            <div style={backgroundStyle}></div>
            <div className="p-20 banner-content">
                <h1 className="text-4xl font-semibold leading-tight text-blue-900 md:text-5xl lg:text-6xl xl:text-7xl font-montserrat">
                    Amaia Scapes Laguna
                </h1>
                <h2 className="text-xl font-semibold leading-tight tracking-wide text-green-800 md:text-2xl lg:text-3xl xl:text-4xl font-montserrat">
                    PROPERTY LIST
                </h2>
            </div>
        </div>
    );
};

export default Banner;
