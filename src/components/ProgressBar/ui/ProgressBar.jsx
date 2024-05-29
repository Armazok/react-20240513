import {useEffect, useState} from 'react';

export const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(scrollPercentage);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])


    return (
        <div
            id="progress-container"
            style={{
                height: '4px',
                width: '100%',
                backgroundColor: 'red',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0'
            }}>
            <div
                className="progress-fill"
                style={{
                    height: '100%',
                    backgroundColor: 'blue',
                    width: `${scrollPercentage}%`,
                }}
            />
        </div>
    );
};
