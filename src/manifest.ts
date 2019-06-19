import * as pkg from "../package.json";

export default {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    manifest_version: 2,
    minimum_chrome_version: "41",
    app: {
        background: {
            scripts: ["background.js"]
        }
    },
    icons: {
        "16": "res/img/icon-16.png",
        "128": "res/img/icon-128.png"
    },
    permissions: ["background", "storage"],
    sockets: {
        udp: {
            send: ["*:*"],
            bind: ["*:*"]
        },
        tcp: {
            connect: ["*:*"]
        },
        tcpServer: {
            listen: ["*:*"]
        }
    }
};
