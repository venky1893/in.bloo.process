cordova.define("in.ebuilders.process.bluetoothSerial", function(require, exports, module) { module.exports = {

    connect: function (macAddress, success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "connect", [macAddress]);
    },

    // Android only - see http://goo.gl/1mFjZY
    connectInsecure: function (macAddress, success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "connectInsecure", [macAddress]);
    },

    disconnect: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "disconnect", []);
    },

    // list bound devices
    list: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "list", []);
    },

    isEnabled: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "isEnabled", []);
    },

    isConnected: function (success, failure) {
        dbg("testing prime process feature");
        cordova.exec(success, failure, "PrimeProcessBluetooth", "isConnected", []);
    },

    isConnectedOld: function (success, failure) {
        dbg("testing btserial process feature");
        cordova.exec(success, failure, "PrimeProcessBluetooth", "isConnected", []);
    },
    // the number of bytes of data available to read is passed to the success function
    available: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "available", []);
    },

    // read all the data in the buffer
    read: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "read", []);
    },

    // reads the data in the buffer up to and including the delimiter
    readUntil: function (delimiter, success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "readUntil", [delimiter]);
    },

    // writes data to the bluetooth serial port
    // data can be an ArrayBuffer, string, integer array, or Uint8Array
    write: function (data, success, failure) {

        // convert to ArrayBuffer
        if (typeof data === 'string') {
            data = stringToArrayBuffer(data);
        } else if (data instanceof Array) {
            // assuming array of interger
            data = new Uint8Array(data).buffer;
        } else if (data instanceof Uint8Array) {
            data = data.buffer;
        }

        cordova.exec(success, failure, "PrimeProcessBluetooth", "write", [data]);
    },

    // calls the success callback when new data is available
    subscribe: function (delimiter, success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "subscribe", [delimiter]);
    },

    // removes data subscription
    unsubscribe: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "unsubscribe", []);
    },

    // calls the success callback when new data is available with an ArrayBuffer
    subscribeRawData: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "subscribeRaw", []);
    },

    // removes data subscription
    unsubscribeRawData: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "unsubscribeRaw", []);
    },

    // clears the data buffer
    clear: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "clear", []);
    },

    // reads the RSSI of the *connected* peripherial
    readRSSI: function (success, failure) {
        cordova.exec(success, failure, "PrimeProcessBluetooth", "readRSSI", []);
    }

};

var stringToArrayBuffer = function(str) {
    var ret = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        ret[i] = str.charCodeAt(i);
    }
    return ret.buffer;
};

});
