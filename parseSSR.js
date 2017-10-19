function parseCore (t) {
  t = Buffer.from(t.toString(), 'base64').toString().split('/')
  //console.log(t)
  let t1 = t[0].split(':')
  //console.log(t1)
  let tConfig = {
    server: t1[0],
    server_port: parseInt(t1[1]),
    password: Buffer.from(t1[5], 'base64').toString(),
    method: t1[3],
    obfs: t1[4],
    protocol: t1[2]
  }
  console.log(tConfig)
  return tConfig
}
let ssr = "ssr://NDUuNjIuMjU0LjI6MTU3MjphdXRoX3NoYTFfdjQ6Y2hhY2hhMjA6dGxzMS4yX3RpY2tldF9hdXRoOlpHOTFZaTVwYnk5emMzcG9abmd2S21SdmRXSXVZbWxrTDNOemVtaG1lQzhxTVRNNU1nLz9yZW1hcmtzPTVweXM2TFNtNVktMzVwMmw2SWVxT21SdmRXSXVhVzh2YzNONmFHWjRMLW1Wbk9XRGotV2ZuLVdRalRwa2IzVmlMbUpwWkM5emMzcG9abmd2"
let uri = ssr.split('://')
console.log(uri)
if (uri.length !== 2) throw new Error('Parse Error!Please Check Argument!')
  if (uri[0] === 'ssr') parseCore(uri[1])
    else throw new Error('Parse Error!Please Check Argument!')