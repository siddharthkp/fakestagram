let platform

if (typeof navigator === 'undefined') platform = 'server'
else if (navigator.product === 'ReactNative') platform = 'native'
else platform = 'browser'

export default platform
