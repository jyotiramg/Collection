import {config as baseConfig} from "../wdio.conf"

export const config = Object.assign(baseConfig, {
    environment : "QA",
    QAUrl : "https://qa.woolworths.wfs.co.za/Collections/Login.aspx"
})