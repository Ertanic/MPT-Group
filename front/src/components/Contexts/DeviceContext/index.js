import {createContext, useCallback, useContext, useEffect, useState} from "react";

const breakpoints = {
    BigDesktop: {
        size: 1920,
        name: 'bd'
    },
    Desktop: {
        size: 1200,
        name: 'd'
    },
    TabletLandscape: {
        size: 900,
        name: 'tl'
    },
    Tablet: {
        size: 600,
        name: 't'
    },
    Mobile: {
        size: 300,
        name: 'm'
    }
}

function isMobileDevice(device) {
    return device.name == 'm'
}

function isTabletDevice(device) {
    return device.name == 't'
}

function isTabletLandscapeDevice(device) {
    return device.name == 't'
}

function isMobileOrTabletDevice(device) {
    return device.name == 'm' || device.name == 't'
}

function isDesktopDevice(device) {
    return device.name == 'd'
}

function isBigDesktopDevice(device) {
    return device.name == 'bd'
}

function isBigDesktopOrDesktopDevice(device) {
    return device.name == 'd' || device.name == 'bd'
}

const isTabletLandscapeOrGreaterDevice = ({name}) => ['tl', 'd', 'bd'].includes(name)

const state = {
    device: {
        size: 0,
        name: null
    }
}

const DeviceContext = createContext();

function DeviceProvider(props) {
    const getDeviceType = (size) => {
        if ((breakpoints.Mobile.size <= size) && (size < breakpoints.Tablet.size))
            return breakpoints.Mobile

        if ((breakpoints.Tablet.size <= size) && (size < breakpoints.TabletLandscape.size))
            return breakpoints.Tablet
            
        if ((breakpoints.TabletLandscape.size <= size) && (size < breakpoints.Desktop.size))
            return breakpoints.TabletLandscape
            
        if ((breakpoints.Desktop.size <= size) && (size < breakpoints.BigDesktop.size))
            return breakpoints.Desktop
            
        if (breakpoints.Tablet.size <= size)
            return breakpoints.BigDesktop

        return breakpoints.BigDesktop
    }

    const [device, setDevice] = useState(getDeviceType(window.screen.width))

    const getDeviceContextValue = useCallback(
        () => ({
            ...device
        }),
        [device, setDevice]
    )

    const subscribeHandler = () => {
        const device = getDeviceType(window.screen.width)
        setDevice(device)
    }
    
    const onSubscribe = () => window.addEventListener('resize', subscribeHandler);
    const offSubscribe = () => window.removeEventListener('resize', subscribeHandler)

    useEffect(() => {
        onSubscribe()

        return () => {
            console.warn('DeviceContext перестал отслеживать размеры экрана, что приведёт к потери адаптации приложения')
            offSubscribe()
        }
    }, [])

    return <DeviceContext.Provider value={getDeviceContextValue()} {...props} />
}

function useDeviceType() {
    const context = useContext(DeviceContext)
    if (!context) {
        throw new Error(`useDeviceType должен находиться внутри DeviceProvider`)
    }
    
    return context
}

const defaultDeviceClasses = {
    m: 'mobile',
    t: 'tablet',
    tl: 'tablet_landscape',
    d: 'desktop',
    bd: 'big_desktop'
}

function concatClasses(classes, device, devicesClasses = defaultDeviceClasses) {
    for (const dev in devicesClasses) {
        if (Object.hasOwnProperty.call(devicesClasses, dev)) {
            if (device.name == dev) {
                return `${classes} ${devicesClasses[dev]}`;
            }
        }
    }

    return classes
}

export {DeviceContext, DeviceProvider, useDeviceType, breakpoints, isDesktopDevice, isMobileDevice, isBigDesktopOrDesktopDevice, isMobileOrTabletDevice, isTabletDevice, isTabletLandscapeDevice, isBigDesktopDevice, isTabletLandscapeOrGreaterDevice, concatClasses}